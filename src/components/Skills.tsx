import { Cloud, Code2, Database, MonitorSmartphone, RadioTower, ServerCog, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

const icons = {
  Code2,
  ServerCog,
  MonitorSmartphone,
  Database,
  Cloud,
  RadioTower,
  Wrench,
};

type SkillsProps = {
  data: PortfolioData;
};

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="section-shell">
      <SectionIntro
        eyebrow="Skills"
        title="A practical stack for APIs, real-time systems, and cloud deployments."
        description="Skills are grouped by where they matter in production: implementation, persistence, infrastructure, messaging, and delivery practice."
        align="center"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.skillCategories.map((category) => {
          const Icon = icons[category.icon as keyof typeof icons] || Code2;
          return (
            <article key={category.title} className="cinematic-card rounded-lg p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={
                      skill.status === "learning"
                        ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                        : "border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground"
                    }
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
