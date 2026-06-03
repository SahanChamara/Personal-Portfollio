import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type CertificationsProps = {
  data: PortfolioData;
};

export default function Certifications({ data }: CertificationsProps) {
  const groups = Array.from(new Set(data.certifications.map((certification) => certification.group)));
  const marqueeItems = [...data.certifications, ...data.certifications];

  return (
    <section id="certifications" className="section-shell overflow-hidden">
      <SectionIntro
        eyebrow="Certifications"
        title="Cloud, DevOps, Docker, and API learning backed by continuous certification work."
        description="Issuer groups keep the long certification list scannable without hiding the breadth of ongoing learning."
      />

      <div className="mb-8 overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max gap-3" style={{ animation: "marquee 36s linear infinite" }}>
          {marqueeItems.map((certification, index) => (
            <span key={`${certification.id}-${index}`} className="whitespace-nowrap border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground">
              {certification.name} | {certification.issuer}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <article key={group} className="cinematic-card rounded-lg p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-primary/25 bg-primary/10 text-primary">
                <Award className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold">{group}</h3>
            </div>
            <div className="grid gap-3">
              {data.certifications
                .filter((certification) => certification.group === group)
                .map((certification) => (
                  <div key={certification.id} className="flex flex-col gap-2 border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium">{certification.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{certification.issuer}</p>
                    </div>
                    <Badge variant="outline" className="w-fit border-accent/25 text-accent">
                      {certification.issued}
                    </Badge>
                  </div>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
