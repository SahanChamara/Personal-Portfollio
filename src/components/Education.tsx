import { GraduationCap } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type EducationProps = {
  data: PortfolioData;
};

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="section-shell">
      <SectionIntro
        eyebrow="Education"
        title="Formal learning across software engineering, analytics, and foundational education."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {data.education.map((item) => (
          <article key={`${item.institution}-${item.credential}`} className="cinematic-card rounded-lg p-6">
            <span className="mb-5 grid h-11 w-11 place-items-center border border-accent/25 bg-accent/10 text-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold">{item.credential}</h3>
            <p className="mt-2 text-sm font-medium text-accent">{item.institution}</p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
