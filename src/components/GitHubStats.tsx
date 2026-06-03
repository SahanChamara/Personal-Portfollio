import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type GitHubStatsProps = {
  data: PortfolioData;
};

export default function GitHubStats({ data }: GitHubStatsProps) {
  return (
    <section id="github" className="section-shell">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="GitHub"
          title="Contribution consistency and language depth."
          description="External GitHub stat cards are loaded lazily and paired with the document's rank/contribution callouts."
        />
        <Button asChild variant="outline" className="w-fit rounded-full border-white/15">
          <a href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            Open GitHub
          </a>
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="cinematic-card rounded-lg p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">Contribution Streak</p>
            <p className="mono-label">{data.github.contributions}</p>
          </div>
          <img src={data.github.streakImageUrl} alt="GitHub streak" className="w-full border border-white/10 bg-background" loading="lazy" referrerPolicy="no-referrer" />
        </article>

        <div className="grid gap-5">
          <article className="cinematic-card rounded-lg p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Overall Stats</p>
              <p className="mono-label">Rank {data.github.rank}</p>
            </div>
            <img src={data.github.statsImageUrl} alt="GitHub stats" className="w-full border border-white/10 bg-background" loading="lazy" referrerPolicy="no-referrer" />
          </article>
          <article className="cinematic-card rounded-lg p-5">
            <p className="mb-4 text-sm font-medium">Top Languages</p>
            <img src={data.github.topLangsImageUrl} alt="GitHub top languages" className="w-full border border-white/10 bg-background" loading="lazy" referrerPolicy="no-referrer" />
          </article>
        </div>
      </div>
    </section>
  );
}
