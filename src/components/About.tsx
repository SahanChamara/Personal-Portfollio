
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
          Hello!. I'm Sahan Chamara. a results-driven Full Stack Developer passionate about building innovative digital solutions that solve real-world challenges. With expertise spanning Java, Spring Boot, React, Angular, JavaScript, Python, and both SQL and NoSQL databases, I create responsive, scalable applications focused on exceptional user experiences.
          </p>
          <p className="leading-relaxed">
          My development approach combines clean code principles with agile methodologies to deliver high-performance software throughout the entire development lifecycle. Currently expanding my skills as a Trainee Developer, I'm committed to implementing industry best practices in software architecture, web accessibility, and responsive design
          </p>
          <p className="leading-relaxed">
          I leverage modern frameworks and development tools to build optimized, SEO-friendly applications while continuously exploring emerging technologies to enhance my technical repertoire. Let's connect to discuss how my full-stack expertise can transform your next digital project into a seamless, efficient, and market-ready solution.
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
              <h3 className="text-xl font-semibold mb-1">Diploma in Software Engineering</h3>
              <p className="text-muted-foreground mb-4">Institue Of Computer Engineering Technolofy (iCET), 2024-2025</p>
            </div>
            
            <div className="p-6">
              <p className="font-mono text-sm mb-2 text-primary">EXPERIENCE</p>
{/*               <div className="relative border-l-2 border-primary/20 pl-6 pb-6">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold mb-1">Senior Frontend Developer</h3>
                <p className="text-muted-foreground mb-2">TechCorp Inc., 2022-Present</p>
                <p className="text-sm">Led development of multiple web applications using React and TypeScript</p>
              </div> */}
              
              <div className="relative border-l-2 border-primary/20 pl-6">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-xl font-semibold mb-1">Software Developer</h3>
                <p className="text-muted-foreground mb-2">Innovative Solutions, 2024-2025</p>
                <p className="text-sm">Developed and maintained full-stack applications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
