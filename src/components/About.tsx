import { motion } from "framer-motion";
import { Cloud, MapPin, Radio, ShieldCheck, Sparkles } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";
import profileImage from "@/assets/sahanchamara.jpg";

type AboutProps = {
  data: PortfolioData;
};

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        eyebrow="About"
        title="Backend discipline, cloud deployment instincts, and product delivery focus."
        description="The portfolio is tuned around practical engineering value: reliable APIs, real-time workflows, containerized releases, and cloud systems that are understandable under pressure."
      />

      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-[440px] lg:mx-0"
        >
          <div className="absolute -left-4 top-8 h-[86%] w-full border border-primary/25 bg-primary/5" />
          <div className="absolute -right-4 bottom-8 h-[82%] w-full border border-accent/20 bg-accent/5" />

          <div className="cinematic-card glow-border relative overflow-hidden rounded-lg">
            <div className="relative aspect-[4/5] bg-gradient-to-b from-white to-secondary">
              <img src={profileImage} alt={data.name} className="h-full w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="border border-white/10 bg-background/78 p-4 backdrop-blur-xl">
                  <p className="mono-label mb-2">Based in Sri Lanka</p>
                  <p className="text-lg font-semibold">{data.alsoKnownAs}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Cloud | DevOps | Full-stack delivery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-6 hidden border border-green-400/25 bg-green-400/10 px-4 py-3 text-sm text-green-200 shadow-2xl shadow-black/30 sm:block">
            <span className="mr-2 inline-block h-2 w-2 bg-green-300" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08 }}
          className="space-y-6"
        >
          <div className="cinematic-card rounded-lg p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 border border-accent/20 bg-accent/10 px-3 py-2 text-xs text-accent">
                <Cloud className="h-3.5 w-3.5" />
                AWS | Docker | CI/CD
              </span>
              <span className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3 py-2 text-xs text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Clean architecture
              </span>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{data.summary}</p>

            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <p className="flex items-start gap-3 border border-white/10 bg-white/[0.03] p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{data.location}</span>
              </p>
              <p className="flex items-start gap-3 border border-white/10 bg-white/[0.03] p-4">
                <Radio className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <span>{data.availability}</span>
              </p>
              <p className="flex items-start gap-3 border border-white/10 bg-white/[0.03] p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Clean architecture and scalable systems</span>
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/35 hover:bg-accent/[0.04]"
              >
                <p className="text-3xl font-semibold transition-colors group-hover:text-accent">{stat.value}</p>
                <p className="mt-2 text-sm font-medium">{stat.label}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
