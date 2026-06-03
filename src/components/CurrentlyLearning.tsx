import { Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type CurrentlyLearningProps = {
  data: PortfolioData;
};

export default function CurrentlyLearning({ data }: CurrentlyLearningProps) {
  return (
    <section id="learning" className="section-shell">
      <SectionIntro
        eyebrow="Currently Learning"
        title="Active roadmap toward stronger cloud-native and DevOps execution."
        description="The learning track is intentionally close to current production work: architecture, Linux, orchestration, CI/CD, and repeatable infrastructure."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {data.learning.map((item) => (
          <article key={item.title} className="cinematic-card rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <Activity className="h-5 w-5 text-amber-300" />
              <Badge className="bg-amber-400/10 text-amber-200 hover:bg-amber-400/15">{item.status}</Badge>
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">{item.detail}</p>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-2 bg-secondary" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
