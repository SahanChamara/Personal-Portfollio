import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionIntro from "@/components/SectionIntro";
import type { PortfolioData } from "@/types/portfolio";

type ContactProps = {
  data: PortfolioData;
};

export default function Contact({ data }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <SectionIntro
        eyebrow="Contact"
        title="Let’s build scalable software with a clean delivery path."
        description="Reach out for software engineering, cloud infrastructure, DevOps automation, or full-stack product work."
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="cinematic-card rounded-lg p-6">
          <h3 className="text-2xl font-semibold">{data.name}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{data.availability}</p>
          <div className="mt-8 grid gap-4 text-sm">
            <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4 text-accent" />
              {data.email}
            </a>
            <a href="tel:+94778557750" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4 text-accent" />
              {data.phone}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {data.location}
            </p>
            <a href={`https://github.com/${data.github.username}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4 text-accent" />
              github.com/{data.github.username}
            </a>
            <a href="https://www.linkedin.com/in/sahanchamara" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4 text-accent" />
              linkedin.com/in/sahanchamara
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="cinematic-card grid gap-4 rounded-lg p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Name" />
            <Input required type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} placeholder="Email" />
          </div>
          <Input value={form.subject} onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))} placeholder="Subject" />
          <Textarea required value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} placeholder="Message" className="min-h-[180px]" />
          <Button type="submit" size="lg" className="w-fit rounded-full px-6">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
