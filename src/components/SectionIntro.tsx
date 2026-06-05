type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionIntro({ eyebrow, title, description, align = "left" }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <p className="mono-label mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{description}</p> : null}
    </div>
  );
}
