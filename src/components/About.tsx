
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl dark:bg-accent/10"></div>
      </div>
      
      <div className="mb-12 text-center relative">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-muted rounded-full mb-4">About Me</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Background</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hello! I'm John, a software engineer with a passion for creating
            beautiful, functional, and user-centered digital experiences.
          </p>
          <p className="leading-relaxed">
            I enjoy building everything from small business sites to rich
            interactive web applications. My approach to development focuses on writing clean,
            efficient code and staying up to date with the latest technologies.
          </p>
          <p className="leading-relaxed">
            When I'm not coding, you can find me hiking, reading, or exploring new coffee shops.
            I believe in continuous learning and enjoy tackling new challenges.
          </p>
          
          {/* Key traits */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {["Problem Solver", "Fast Learner", "Team Player", "Detail-Oriented"].map((trait, i) => (
              <div key={i} className="bg-muted/50 dark:bg-muted/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
                <p className="font-medium">{trait}</p>
              </div>
            ))}
          </div>
        </div>
        
        <Card className="overflow-hidden border-primary/10 dark:border-primary/20">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-6">
              <p className="font-mono text-sm mb-2 text-primary">EDUCATION</p>
              <h3 className="text-xl font-semibold mb-1">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground mb-4">University of Technology, 2018-2022</p>
            </div>
            
            <div className="p-6">
              <p className="font-mono text-sm mb-2 text-primary">EXPERIENCE</p>
              <div className="relative border-l-2 border-primary/20 pl-6 pb-6">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold mb-1">Senior Frontend Developer</h3>
                <p className="text-muted-foreground mb-2">TechCorp Inc., 2022-Present</p>
                <p className="text-sm">Led development of multiple web applications using React and TypeScript</p>
              </div>
              
              <div className="relative border-l-2 border-primary/20 pl-6">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-xl font-semibold mb-1">Software Engineer</h3>
                <p className="text-muted-foreground mb-2">Innovative Solutions, 2020-2022</p>
                <p className="text-sm">Developed and maintained full-stack applications for various clients</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
