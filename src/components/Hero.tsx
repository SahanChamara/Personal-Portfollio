import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import TechBackground from './TechBackground';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center pt-16 pb-8 px-4 sm:px-6 overflow-hidden">
      {/* Tech animation background */}
      <TechBackground />
      
      {/* Animated background shapes - keeping for subtle depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl dark:bg-primary/5" 
             style={{ transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.02}px)` }} />
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl dark:bg-accent/5"
             style={{ transform: `translate(${-scrollY * 0.03}px, ${-scrollY * 0.01}px)` }} />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl dark:bg-secondary/5"
             style={{ transform: `translate(${scrollY * 0.01}px, ${-scrollY * 0.03}px)` }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6 backdrop-blur-sm p-6 rounded-xl bg-background/30">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 dark:bg-primary/30 backdrop-blur-sm text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for hire
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight">
                <span className="block">Hi, I'm Sahan Chamara</span>
                <span className="block mt-2">
                  I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">exceptional</span> web applications
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 mt-6">
                I'm a software engineer specializing in creating outstanding digital experiences.
                With a focus on user-centered design and clean code, I transform ideas into reality.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group relative overflow-hidden">
                <a href="#projects">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="border-primary/20 hover:border-primary/50 transition-colors backdrop-blur-sm bg-background/40">
                <a href="#" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="border-primary/20 hover:border-primary/50 transition-colors backdrop-blur-sm bg-background/40">
                <a href="#" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Hero image with decorative elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-md animate-pulse" 
                   style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-b from-primary/5 to-accent/5 backdrop-blur">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative code circle */}
              <div className="absolute -right-6 top-10 w-20 h-20 rounded-full bg-background/70 shadow-lg border border-border/50 flex items-center justify-center backdrop-blur-md">
                <code className="text-xs text-primary font-mono">&lt;/&gt;</code>
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute -left-8 bottom-10 w-16 h-16 rounded-lg rotate-12 bg-background/70 shadow-lg border border-border/50 backdrop-blur-md"></div>
              <div className="absolute right-10 -bottom-6 w-12 h-12 rounded-full bg-background/70 shadow-lg border border-border/50 flex items-center justify-center backdrop-blur-md">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-foreground/50 mb-2 backdrop-blur-sm bg-background/30 px-3 py-1 rounded-full">Scroll to explore</span>
          <div className="w-6 h-9 border-2 border-foreground/20 rounded-full flex justify-center pt-1 backdrop-blur-sm bg-background/30">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
