
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.05),transparent)]">
      <Navbar />
      
      {/* Hero section doesn't need animation since it's at the top */}
      <Hero />
      
      <AnimatedSection animationVariant="fade-up">
        <About />
      </AnimatedSection>
      
      <AnimatedSection animationVariant="fade-in">
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection animationVariant="fade-up">
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection animationVariant="fade-in">
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
