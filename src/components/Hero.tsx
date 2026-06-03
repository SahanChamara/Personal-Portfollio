import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PortfolioData } from "@/types/portfolio";
import profileImage from "@/assets/sahanchamara.jpg";

type HeroProps = {
  data: PortfolioData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section id="top" className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-7"
      >
        <Badge className="border-primary/30 bg-primary/10 px-3 py-1 text-primary hover:bg-primary/15">
          <Medal className="mr-2 h-3.5 w-3.5" />
          GitHub Rank {data.github.rank} | {data.github.contributions} Contributions
        </Badge>

        <div className="space-y-5">
          <p className="mono-label">Sahan Chamara | Cloud-native engineering</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            {data.name}
            <span className="block gradient-text">{data.tagline}</span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{data.summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#projects">
              View My Work
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 px-6">
            <a href={data.cvUrl} target="_blank" rel="noreferrer" download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            Galle, Sri Lanka
          </span>
          <a className="flex items-center gap-2 hover:text-foreground" href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4 text-accent" />
            GitHub
          </a>
          <a className="flex items-center gap-2 hover:text-foreground" href="https://www.linkedin.com/in/sahanchamara" target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4 text-accent" />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative"
      >
        <div className="cinematic-card glow-border overflow-hidden rounded-lg">
          <div className="grid gap-0 sm:grid-cols-[0.92fr_1.08fr] lg:grid-cols-1 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="min-h-[340px] bg-secondary">
              <img src={profileImage} alt={data.name} className="h-full min-h-[340px] w-full object-cover object-top" />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <p className="mono-label mb-4">Currently</p>
                <h2 className="text-2xl font-semibold">{data.title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{data.availability}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {data.stats.slice(0, 4).map((stat) => (
                  <div key={stat.label} className="border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
