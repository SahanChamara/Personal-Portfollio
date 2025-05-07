
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality, team collaboration, and real-time updates.',
      image: '/placeholder.svg',
      technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      category: 'frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts for multiple locations with interactive maps and charts.',
      image: '/placeholder.svg',
      technologies: ['JavaScript', 'React', 'Chart.js', 'Weather API'],
      github: '#',
      live: '#',
      category: 'frontend'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with authentication, post creation, comments, and user profiles.',
      image: '/placeholder.svg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
      github: '#',
      live: '#',
      category: 'backend'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with a modern design and smooth animations.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#',
      category: 'frontend'
    },
    {
      title: 'Inventory Management System',
      description: 'A system for tracking inventory levels, orders, sales, and deliveries for small to medium businesses.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Docker'],
      github: '#',
      live: '#',
      category: 'fullstack'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_85%_30%,rgba(var(--accent-rgb),0.08),transparent_25%)]"></div>
      </div>

      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-muted rounded-full mb-4">Projects</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Recent Work</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Here are some projects I've worked on recently. Each one presented unique challenges and opportunities to grow.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value)}>
          <ToggleGroupItem value="all" className="px-4">All</ToggleGroupItem>
          <ToggleGroupItem value="frontend" className="px-4">Frontend</ToggleGroupItem>
          <ToggleGroupItem value="backend" className="px-4">Backend</ToggleGroupItem>
          <ToggleGroupItem value="fullstack" className="px-4">Full Stack</ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="group overflow-hidden border-primary/10 dark:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="bg-background/80 backdrop-blur-sm">
                    <a href={project.github} className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary/80 backdrop-blur-sm">
                    <a href={project.live} className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-primary/20 dark:border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button variant="outline" asChild className="border-primary/20 dark:border-primary/30 hover:border-primary/50 transition-colors">
          <a href="#" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            See More on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
