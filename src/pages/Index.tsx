import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cloud,
  Download,
  Github,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedScene from "@/components/AnimatedScene";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import profileImage from "@/assets/sahanchamara.jpg";

const sectionClass = "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const { data } = usePortfolioStore();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AnimatedScene />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wide">{data.name}</p>
            <p className="text-xs text-muted-foreground">Cloud • DevOps • Software Engineering</p>
          </div>

          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#github" className="transition-colors hover:text-foreground">Activity</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-full px-4">
              <a href={data.cvUrl} target="_blank" rel="noreferrer" download>
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Full-Stack Engineer focused on cloud systems
            </Badge>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Engineering software with
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                modern architecture,
              </span>
              speed, and reliability.
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{data.summary}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-card/50 p-4 backdrop-blur-lg">
                <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Primary Focus</p>
                <p className="text-sm font-medium">AWS, Docker, CI/CD, Scalable APIs</p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-card/50 p-4 backdrop-blur-lg">
                <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Current Role</p>
                <p className="text-sm font-medium">Associate Software Engineer</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={data.cvUrl} target="_blank" rel="noreferrer" download>
                  Download CV
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href="#projects">See Projects</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
                <a href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-3xl border border-primary/30 bg-primary/10 backdrop-blur-xl lg:block" />
            <Card className="relative overflow-hidden rounded-[2rem] border-primary/25 bg-card/70 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 to-transparent" />
              <div className="p-6">
                <img
                  src={profileImage}
                  alt={data.name}
                  className="h-[340px] w-full rounded-2xl object-cover object-top"
                />
              </div>
              <CardContent className="space-y-3 px-6 pb-6 pt-0">
                <h2 className="text-2xl font-semibold">{data.name}</h2>
                <p className="text-sm text-muted-foreground">{data.title}</p>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{data.location}</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4" />{data.email}</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{data.phone}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className={sectionClass}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="rounded-3xl border-border/70 bg-card/65 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl">About</CardTitle>
                <CardDescription>How I deliver engineering value</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I design and build production-grade applications with clean backend architecture,
                  scalable cloud infrastructure, and practical DevOps automation.
                </p>
                <p>
                  My focus is creating dependable systems that are fast to ship, easy to maintain,
                  and robust under real-world traffic.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-primary/25 bg-card/70 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Core Strengths</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Cloud className="h-4 w-4 text-primary" /> AWS Infrastructure and deployment</p>
                <p className="flex items-center gap-2"><Layers3 className="h-4 w-4 text-primary" /> Microservices and API architecture</p>
                {data.highlights.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className={sectionClass}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-semibold">Experience Timeline</h2>
          <div className="space-y-6">
            {data.experiences.map((experience, index) => (
              <motion.div
                key={`${experience.role}-${experience.company}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="rounded-3xl border-border/70 bg-card/65 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">{experience.role}</CardTitle>
                    <CardDescription>
                      {experience.company} • {experience.location} • {experience.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    {experience.highlights.map((point) => (
                      <p key={point}>• {point}</p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className={sectionClass}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-semibold">Selected Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data.projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="group h-full rounded-3xl border-border/70 bg-card/60 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/45">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription>{project.techStack}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>{project.summary}</p>
                    <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        View Source
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="github"
          className={sectionClass}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">GitHub Activity Dashboard</h2>
              <p className="text-sm text-muted-foreground">
                Contribution consistency, language depth, and coding momentum.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <a href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer">
                Open Profile
              </a>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="overflow-hidden rounded-3xl border-primary/30 bg-card/65 backdrop-blur-xl">
              <div className="bg-gradient-to-r from-primary/20 via-primary/5 to-transparent px-6 py-4">
                <p className="text-sm font-medium">Contribution Streak</p>
              </div>
              <CardContent className="p-6">
                <img
                  src={data.github.streakImageUrl}
                  alt="GitHub Streak"
                  className="h-auto w-full rounded-xl border border-border/70"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="overflow-hidden rounded-3xl border-border/70 bg-card/65 backdrop-blur-xl">
                <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-transparent px-6 py-4">
                  <p className="text-sm font-medium">Overall Stats</p>
                </div>
                <CardContent className="p-6">
                  <img
                    src={data.github.statsImageUrl}
                    alt="GitHub Stats"
                    className="h-auto w-full rounded-xl border border-border/70"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-3xl border-border/70 bg-card/65 backdrop-blur-xl">
                <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-6 py-4">
                  <p className="text-sm font-medium">Top Languages</p>
                </div>
                <CardContent className="p-6">
                  <img
                    src={data.github.topLangsImageUrl}
                    alt="Top Languages"
                    className="h-auto w-full rounded-xl border border-border/70"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className={sectionClass}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-3xl border-primary/30 bg-card/70 backdrop-blur-xl">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Let’s build something meaningful</h3>
                <p className="mt-2 text-muted-foreground">
                  Open for software engineering, cloud, and DevOps opportunities.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full px-6">
                  <a href={`mailto:${data.email}`}>Email Me</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-full px-6">
                  <a href={data.cvUrl} target="_blank" rel="noreferrer" download>
                    CV PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="border-t border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {data.name}. Crafted for cloud-native engineering journey.</p>
          <div className="flex items-center gap-4">
            {data.socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
