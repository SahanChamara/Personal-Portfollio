import { motion } from "framer-motion";
import { Cloud, MapPin, Radio, ShieldCheck } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

type AboutProps = {
  data: PortfolioData;
};

export default function About({ data }: AboutProps) {
  const featuredStats = data.stats.slice(0, 4);

  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/80 p-6 shadow-2xl shadow-foreground/10 backdrop-blur-xl sm:p-8 lg:p-10 dark:border-white/10 dark:bg-card/55 dark:shadow-black/30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(var(--primary-rgb),0.22),transparent_28%),radial-gradient(circle_at_88%_74%,rgba(var(--accent-rgb),0.14),transparent_32%)]" />
        <div className="absolute inset-0 opacity-50 noise-overlay" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <div className="space-y-4">
              <p className="mono-label">About</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                Engineering clean backend systems for real products and cloud deployments.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">{data.summary}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="border border-border/70 bg-background/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-background/45">
                <MapPin className="mb-4 h-4 w-4 text-accent" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</p>
                <p className="mt-2 text-sm font-medium leading-6">{data.location}</p>
              </div>
              <div className="border border-border/70 bg-background/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-background/45">
                <Cloud className="mb-4 h-4 w-4 text-primary" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Focus</p>
                <p className="mt-2 text-sm font-medium leading-6">AWS, Docker, CI/CD, scalable APIs</p>
              </div>
              <div className="border border-border/70 bg-background/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-background/45">
                <Radio className="mb-4 h-4 w-4 text-green-400" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Status</p>
                <p className="mt-2 text-sm font-medium leading-6">{data.availability}</p>
              </div>
            </div>
          </div>

          <div className="cinematic-card rounded-[1.25rem] p-5">
            <div className="mb-6 flex items-center gap-3 border-b border-border/70 pb-5 dark:border-white/10">
              <span className="grid h-10 w-10 place-items-center border border-primary/25 bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">What I bring</p>
                <p className="text-xs text-muted-foreground">Practical delivery, clean architecture, and cloud reliability.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {featuredStats.map((stat) => (
                <div key={stat.label} className="border border-border/70 bg-background/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
