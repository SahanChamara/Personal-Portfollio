import About from "@/components/About";
import AnimatedScene from "@/components/AnimatedScene";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GitHubStats";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";

const Index = () => {
  const { data } = usePortfolioStore();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AnimatedScene />
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Experience data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Certifications data={data} />
        <Education data={data} />
        <CurrentlyLearning data={data} />
        <GitHubStats data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
};

export default Index;
