import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioData } from "@/types/portfolio";
import profileImage from "@/assets/sahanchamara.jpg";

type HeroProps = {
  data: PortfolioData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-4xl space-y-7"
      >
        <p className="mono-label">Sahan Chamara | Cloud-native engineering</p>

        <div className="space-y-5">
          <h1 className="text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
            {data.name}
            <span className="block gradient-text">{data.tagline}</span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {data.title}. I build scalable backend systems, real-time products, and cloud deployment workflows.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#projects">
              View Work
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-border/80 bg-background/40 px-6">
            <a href={data.cvUrl} target="_blank" rel="noreferrer" download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[440px] lg:mx-0"
      >
        <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 bg-primary/5 blur-sm" />
        <div className="absolute -right-4 bottom-10 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
        <div className="cinematic-card glow-border relative overflow-hidden rounded-[1.5rem]">
          <div className="relative aspect-[4/5] bg-secondary">
            <img src={profileImage} alt={data.name} className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent dark:via-background/70" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="mono-label mb-2">Currently</p>
              <p className="text-lg font-semibold">{data.title}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
