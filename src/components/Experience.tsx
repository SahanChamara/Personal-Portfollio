import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type ExperienceProps = {
  data: PortfolioData;
};

const roleDisplayOrder = [
  "Associate Software Engineer",
  "Cloud and DevOps Engineer",
  "Software Engineer Intern",
  "Software Engineer Trainee",
];

export default function Experience({ data }: ExperienceProps) {
  const experiences = [...data.experiences].sort((first, second) => {
    const firstIndex = roleDisplayOrder.indexOf(first.role);
    const secondIndex = roleDisplayOrder.indexOf(second.role);

    return (firstIndex === -1 ? roleDisplayOrder.length : firstIndex) - (secondIndex === -1 ? roleDisplayOrder.length : secondIndex);
  });

  return (
    <section id="experience" className="section-shell">
      <SectionIntro
        eyebrow="Experience"
        title="A timeline from production software engineering to cloud systems."
        description="Primary engineering experience is shown first, followed by cloud and DevOps work, internships, and training foundations."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative md:pl-12"
            >
              <span className="absolute left-0 top-6 hidden h-8 w-8 place-items-center border border-primary/40 bg-background text-primary glow-border md:grid">
                <BriefcaseBusiness className="h-4 w-4" />
              </span>
              <div className="cinematic-card rounded-lg p-6 transition-colors hover:border-primary/35">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-semibold">{experience.role}</h3>
                      {experience.status === "current" ? (
                        <Badge className="bg-green-500/12 text-green-300 hover:bg-green-500/15">Current</Badge>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {experience.company} | {experience.location} | {experience.period}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                    {experience.techTags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/10 bg-white/[0.03]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[0.72fr_1fr]">
                  <div>
                    <p className="mono-label mb-3">Focus</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {experience.focusAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="border-l border-accent/40 pl-4">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
