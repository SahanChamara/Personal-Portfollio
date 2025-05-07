
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <a href="#" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Portfolio</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <ThemeToggle />
          
          <Button asChild variant="outline" className="hidden md:flex items-center gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </Button>
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMobileMenu} className="text-foreground p-2">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <a 
              href="#about" 
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild variant="outline" className="w-full flex items-center justify-center gap-2">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
