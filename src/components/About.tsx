import { motion } from "framer-motion";
import { MapPin, Radio, ShieldCheck } from "lucide-react";
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

      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="cinematic-card overflow-hidden rounded-lg"
        >
          <img src={profileImage} alt={data.name} className="h-[420px] w-full object-cover object-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08 }}
          className="cinematic-card rounded-lg p-6 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <p className="text-lg leading-8 text-muted-foreground">{data.summary}</p>
              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {data.location}
                </p>
                <p className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-green-400" />
                  {data.availability}
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Clean architecture and scalable systems
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {data.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
