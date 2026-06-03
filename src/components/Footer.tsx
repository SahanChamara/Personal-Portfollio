import type { PortfolioData } from "@/types/portfolio";

type FooterProps = {
  data: PortfolioData;
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-background/85">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="mt-1">{data.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>
        <p>© 2026 {data.name}. Built with passion.</p>
      </div>
    </footer>
  );
}
