import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";

const Admin = () => {
  const {
    data,
    setCvUrl,
    addProject,
    removeProject,
    addCertification,
    removeCertification,
    resetAll,
  } = usePortfolioStore();

  const [cvInput, setCvInput] = useState(data.cvUrl);
  const [projectForm, setProjectForm] = useState({
    name: "",
    techStack: "",
    summary: "",
    githubUrl: "",
  });
  const [certForm, setCertForm] = useState({
    name: "",
    issuer: "",
    issued: "",
  });

  const handleCvSave = (event: FormEvent) => {
    event.preventDefault();
    if (!cvInput.trim()) {
      return;
    }
    setCvUrl(cvInput);
  };

  const handleProjectAdd = (event: FormEvent) => {
    event.preventDefault();
    if (!projectForm.name.trim() || !projectForm.techStack.trim() || !projectForm.summary.trim()) {
      return;
    }

    addProject({
      name: projectForm.name.trim(),
      techStack: projectForm.techStack.trim(),
      summary: projectForm.summary.trim(),
      githubUrl: projectForm.githubUrl.trim() || `https://github.com/${data.github.username}`,
    });

    setProjectForm({
      name: "",
      techStack: "",
      summary: "",
      githubUrl: "",
    });
  };

  const handleCertificationAdd = (event: FormEvent) => {
    event.preventDefault();
    if (!certForm.name.trim() || !certForm.issuer.trim() || !certForm.issued.trim()) {
      return;
    }

    addCertification({
      name: certForm.name.trim(),
      issuer: certForm.issuer.trim(),
      issued: certForm.issued.trim(),
    });

    setCertForm({ name: "", issuer: "", issued: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Portfolio CMS</p>
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/">Back to Portfolio</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>CV Link</CardTitle>
            <CardDescription>
              Set a public PDF/Drive/Dropbox URL. This link is used by all resume download buttons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCvSave} className="flex flex-col gap-3 sm:flex-row">
              <Input
                value={cvInput}
                onChange={(event) => setCvInput(event.target.value)}
                placeholder="https://.../resume.pdf or /resume.pdf"
              />
              <Button type="submit">Save CV URL</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Project</CardTitle>
            <CardDescription>Push new portfolio projects without editing code.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProjectAdd} className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  value={projectForm.name}
                  onChange={(event) =>
                    setProjectForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-tech">Tech Stack</Label>
                <Input
                  id="project-tech"
                  value={projectForm.techStack}
                  onChange={(event) =>
                    setProjectForm((prev) => ({ ...prev, techStack: event.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-summary">Summary</Label>
                <Textarea
                  id="project-summary"
                  value={projectForm.summary}
                  onChange={(event) =>
                    setProjectForm((prev) => ({ ...prev, summary: event.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="project-github">GitHub URL</Label>
                <Input
                  id="project-github"
                  value={projectForm.githubUrl}
                  onChange={(event) =>
                    setProjectForm((prev) => ({ ...prev, githubUrl: event.target.value }))
                  }
                />
              </div>
              <Button type="submit" className="w-full">Add Project</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Certification</CardTitle>
            <CardDescription>Keep your latest certifications always visible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCertificationAdd} className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="cert-name">Certificate Name</Label>
                <Input
                  id="cert-name"
                  value={certForm.name}
                  onChange={(event) =>
                    setCertForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cert-issuer">Issuer</Label>
                <Input
                  id="cert-issuer"
                  value={certForm.issuer}
                  onChange={(event) =>
                    setCertForm((prev) => ({ ...prev, issuer: event.target.value }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cert-issued">Issued Date</Label>
                <Input
                  id="cert-issued"
                  value={certForm.issued}
                  onChange={(event) =>
                    setCertForm((prev) => ({ ...prev, issued: event.target.value }))
                  }
                  placeholder="Mar 2026"
                />
              </div>
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
                  <p className="text-xs text-muted-foreground">{project.techStack}</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeProject(project.id)}
                >
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
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCertification(certification.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-destructive/40">
          <CardHeader>
            <CardTitle>Reset</CardTitle>
            <CardDescription>
              Restore default content from your latest CV snapshot.
            </CardDescription>
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
