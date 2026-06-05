import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import type { ProjectCategory } from "@/types/portfolio";

const categories: ProjectCategory[] = ["Professional", "Personal", "AI/ML", "Academic"];

const Admin = () => {
  const {
    data,
    setCvUrl,
    addProject,
    removeProject,
    addCertification,
    removeCertification,
    updateLearning,
    updateStats,
    resetAll,
  } = usePortfolioStore();

  const [cvInput, setCvInput] = useState(data.cvUrl);
  const [projectForm, setProjectForm] = useState({
    name: "",
    type: "",
    category: "Personal" as ProjectCategory,
    description: "",
    techStack: "",
    highlights: "",
    metric: "",
    githubUrl: "",
    liveUrl: "",
  });
  const [certForm, setCertForm] = useState({
    name: "",
    issuer: "",
    issued: "",
    group: "",
    credentialUrl: "",
  });

  useEffect(() => {
    setCvInput(data.cvUrl);
  }, [data.cvUrl]);

  const handleCvSave = (event: FormEvent) => {
    event.preventDefault();
    if (cvInput.trim()) setCvUrl(cvInput);
  };

  const handleProjectAdd = (event: FormEvent) => {
    event.preventDefault();
    if (!projectForm.name.trim() || !projectForm.description.trim()) return;

    addProject({
      name: projectForm.name.trim(),
      type: projectForm.type.trim() || "Portfolio Project",
      category: projectForm.category,
      description: projectForm.description.trim(),
      techStack: projectForm.techStack.split(/[,\n]/).map((item) => item.trim()).filter(Boolean),
      highlights: projectForm.highlights.split(/\n/).map((item) => item.trim()).filter(Boolean),
      metric: projectForm.metric.trim() || undefined,
      githubUrl: projectForm.githubUrl.trim() || `https://github.com/${data.github.username}`,
      liveUrl: projectForm.liveUrl.trim() || undefined,
    });

    setProjectForm({
      name: "",
      type: "",
      category: "Personal",
      description: "",
      techStack: "",
      highlights: "",
      metric: "",
      githubUrl: "",
      liveUrl: "",
    });
  };

  const handleCertificationAdd = (event: FormEvent) => {
    event.preventDefault();
    if (!certForm.name.trim() || !certForm.issuer.trim()) return;

    addCertification({
      name: certForm.name.trim(),
      issuer: certForm.issuer.trim(),
      issued: certForm.issued.trim() || "Completed",
      group: certForm.group.trim() || certForm.issuer.trim(),
      credentialUrl: certForm.credentialUrl.trim() || undefined,
    });

    setCertForm({ name: "", issuer: "", issued: "", group: "", credentialUrl: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="mono-label">Portfolio CMS</p>
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <Button asChild variant="outline" size="sm" className="border-white/15">
            <Link to="/">Back to Portfolio</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Resume Link</CardTitle>
            <CardDescription>Used by all resume download buttons.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCvSave} className="flex flex-col gap-3 sm:flex-row">
              <Input value={cvInput} onChange={(event) => setCvInput(event.target.value)} placeholder="https://.../resume.pdf" />
              <Button type="submit">Save Resume URL</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Project</CardTitle>
            <CardDescription>Add rich project cards with filters, metrics, tech, and highlights.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProjectAdd} className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label htmlFor="project-name">Name</Label>
                  <Input id="project-name" value={projectForm.name} onChange={(event) => setProjectForm((prev) => ({ ...prev, name: event.target.value }))} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="project-type">Type</Label>
                  <Input id="project-type" value={projectForm.type} onChange={(event) => setProjectForm((prev) => ({ ...prev, type: event.target.value }))} />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-category">Category</Label>
                <select
                  id="project-category"
                  value={projectForm.category}
                  onChange={(event) => setProjectForm((prev) => ({ ...prev, category: event.target.value as ProjectCategory }))}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-description">Description</Label>
                <Textarea id="project-description" value={projectForm.description} onChange={(event) => setProjectForm((prev) => ({ ...prev, description: event.target.value }))} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-tech">Tech Stack</Label>
                <Textarea id="project-tech" value={projectForm.techStack} onChange={(event) => setProjectForm((prev) => ({ ...prev, techStack: event.target.value }))} placeholder="React, NestJS, AWS ECS" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-highlights">Highlights</Label>
                <Textarea id="project-highlights" value={projectForm.highlights} onChange={(event) => setProjectForm((prev) => ({ ...prev, highlights: event.target.value }))} placeholder="One highlight per line" />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <Input value={projectForm.metric} onChange={(event) => setProjectForm((prev) => ({ ...prev, metric: event.target.value }))} placeholder="Metric" />
                <Input value={projectForm.githubUrl} onChange={(event) => setProjectForm((prev) => ({ ...prev, githubUrl: event.target.value }))} placeholder="GitHub URL" />
                <Input value={projectForm.liveUrl} onChange={(event) => setProjectForm((prev) => ({ ...prev, liveUrl: event.target.value }))} placeholder="Live URL" />
              </div>
              <Button type="submit" className="w-full">Add Project</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Certification</CardTitle>
            <CardDescription>Group certifications by issuer family for the public grid.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCertificationAdd} className="space-y-3">
              <Input value={certForm.name} onChange={(event) => setCertForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Certification name" />
              <Input value={certForm.issuer} onChange={(event) => setCertForm((prev) => ({ ...prev, issuer: event.target.value }))} placeholder="Issuer" />
              <Input value={certForm.issued} onChange={(event) => setCertForm((prev) => ({ ...prev, issued: event.target.value }))} placeholder="Issued date" />
              <Input value={certForm.group} onChange={(event) => setCertForm((prev) => ({ ...prev, group: event.target.value }))} placeholder="Group, e.g. AWS / Amazon" />
              <Input value={certForm.credentialUrl} onChange={(event) => setCertForm((prev) => ({ ...prev, credentialUrl: event.target.value }))} placeholder="Verification URL" />
              <Button type="submit" className="w-full">Add Certification</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects ({data.projects.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.projects.map((project) => (
              <div key={project.id} className="flex items-start justify-between gap-3 rounded-lg border p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{project.name}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span>{project.techStack.slice(0, 4).join(", ")}</span>
                  </div>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={() => removeProject(project.id)} aria-label={`Remove ${project.name}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications ({data.certifications.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.certifications.map((certification) => (
              <div key={certification.id} className="flex items-start justify-between gap-3 rounded-lg border p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{certification.name}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{certification.issuer}</span>
                    <Badge variant="secondary">{certification.issued}</Badge>
                    {certification.credentialUrl ? <Badge variant="outline">Verify link</Badge> : null}
                  </div>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={() => removeCertification(certification.id)} aria-label={`Remove ${certification.name}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Metrics</CardTitle>
            <CardDescription>Edit the stat cards shown in the hero and about sections.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.stats.map((stat, index) => (
              <div key={`${stat.label}-${index}`} className="grid gap-2 rounded-lg border p-3 sm:grid-cols-3">
                <Input value={stat.value} onChange={(event) => updateStats(data.stats.map((item, itemIndex) => (itemIndex === index ? { ...item, value: event.target.value } : item)))} />
                <Input value={stat.label} onChange={(event) => updateStats(data.stats.map((item, itemIndex) => (itemIndex === index ? { ...item, label: event.target.value } : item)))} />
                <Input value={stat.detail} onChange={(event) => updateStats(data.stats.map((item, itemIndex) => (itemIndex === index ? { ...item, detail: event.target.value } : item)))} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Adjust progress indicators shown in Currently Learning.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.learning.map((item, index) => (
              <div key={item.title} className="rounded-lg border p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <Badge variant="secondary">{item.progress}%</Badge>
                </div>
                <Progress value={item.progress} className="mb-3 h-2" />
                <Input
                  type="number"
                  min={0}
                  max={100}
                  value={item.progress}
                  onChange={(event) =>
                    updateLearning(
                      data.learning.map((learningItem, itemIndex) =>
                        itemIndex === index ? { ...learningItem, progress: Number(event.target.value) } : learningItem,
                      ),
                    )
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-destructive/40 lg:col-span-2">
          <CardHeader>
            <CardTitle>Reset</CardTitle>
            <CardDescription>Restore document-based defaults.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={resetAll}>Reset All Data</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
