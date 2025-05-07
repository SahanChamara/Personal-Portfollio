
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-muted/50 dark:bg-muted/30 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-border"></div>
              <span className="font-mono text-sm">Sahan Chamara</span>
              <div className="h-px w-12 bg-border"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Let's Build Something Amazing Together</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Open to freelance opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-8">
            <a
              href="https://github.com/SahanChamara"
              className="text-foreground/70 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary/50"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahan-chamara/"
              className="text-foreground/70 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sahanchamara456@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary/50"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center border-t border-border w-full pt-8">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Sahan Chamara. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed and built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
