import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData, ProjectCategory } from "@/types/portfolio";

const filters: Array<"All" | ProjectCategory> = ["All", "Professional", "Personal", "AI/ML", "Academic"];

type ProjectsProps = {
  data: PortfolioData;
};

export default function Projects({ data }: ProjectsProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const projects = useMemo(
    () => (filter === "All" ? data.projects : data.projects.filter((project) => project.category === filter)),
    [data.projects, filter],
  );

  return (
    <section id="projects" className="section-shell">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="Projects"
          title="Systems with real delivery constraints, live collaboration, and measurable outcomes."
          description="Filter by work type to scan professional deployments, personal builds, AI/ML experiments, and academic leadership."
        />
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(value) => value && setFilter(value as typeof filter)}
          className="flex flex-wrap justify-start gap-2 lg:justify-end"
        >
          {filters.map((item) => (
            <ToggleGroupItem key={item} value={item} className="border border-white/10 px-4">
              {item}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="cinematic-card group flex min-h-[360px] flex-col rounded-lg p-6 transition-all hover:-translate-y-1 hover:border-primary/35">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4 border-accent/25 bg-accent/10 text-accent">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.type}</p>
              </div>
              {project.metric ? (
                <div className="border border-primary/25 bg-primary/10 px-4 py-3 text-right">
                  <p className="text-sm font-semibold text-primary">{project.metric}</p>
                </div>
              ) : null}
            </div>

            <p className="mt-5 leading-7 text-muted-foreground">{project.description}</p>

            <div className="mt-5 grid gap-3">
              {project.highlights.map((highlight) => (
                <p key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                  <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {highlight}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="border-white/10 bg-white/[0.03]">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              <Button asChild variant="outline" className="rounded-full border-white/15">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              {project.liveUrl ? (
                <Button asChild className="rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
