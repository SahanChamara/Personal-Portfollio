
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Code2, Settings } from 'lucide-react';

const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'PostgreSQL', level: 75 },
  ];
  
  const otherSkills = [
    'Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Testing Library', 
    'Agile Methodologies', 'UI/UX Design', 'Webpack', 'Vite'
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_15%_50%,rgba(var(--primary-rgb),0.06),transparent_35%)]"></div>
      </div>

      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-background rounded-full mb-4">Skills</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Expertise</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          I constantly improve my skills and stay up-to-date with latest technologies.
          Here's a glimpse of my technical toolbox.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="backdrop-blur-sm border-primary/10 dark:border-primary/20 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 to-transparent pt-6 px-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                <Code className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Frontend Development</h3>
          </div>
          
          <CardContent className="pt-6">
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  color="bg-gradient-to-r from-primary to-accent"
                />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-sm border-primary/10 dark:border-primary/20 overflow-hidden">
          <div className="bg-gradient-to-br from-accent/10 to-transparent pt-6 px-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full">
                <Code2 className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Backend Development</h3>
          </div>
          
          <CardContent className="pt-6">
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  color="bg-gradient-to-r from-accent to-primary"
                />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-sm border-primary/10 dark:border-primary/20 md:col-span-2 lg:col-span-1 overflow-hidden">
          <div className="bg-gradient-to-br from-secondary/10 to-transparent pt-6 px-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-secondary/10 dark:bg-secondary/20 rounded-full">
                <Settings className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Tools & Other Skills</h3>
          </div>
          
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
