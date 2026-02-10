const projects = [
  {
    title: "SaaS Dashboard Redesign",
    description:
      "Redesigned the core analytics dashboard for a B2B SaaS platform, improving user engagement by 40% through simplified data visualization and streamlined workflows.",
    tags: ["Product Design", "UX Research", "Figma"],
    color: "bg-[#f0e6d3]",
  },
  {
    title: "Growth Marketing Campaign",
    description:
      "Developed and executed a multi-channel growth strategy that increased qualified leads by 65% and reduced CAC by 30% over 6 months.",
    tags: ["Growth Marketing", "Content Strategy", "Analytics"],
    color: "bg-[#e8d5d8]",
  },
  {
    title: "Product Launch & Brand Identity",
    description:
      "Led product launch for a fintech startup including brand identity, landing page design, and go-to-market strategy that drove 10K signups in the first month.",
    tags: ["Brand Design", "Go-to-Market", "Product Design"],
    color: "bg-[#d8e0e8]",
  },
  {
    title: "Content & Social Strategy",
    description:
      "Built a content engine that grew social following to 40K+ and generated consistent organic traffic, establishing thought leadership in the product design space.",
    tags: ["Content Creation", "Social Media", "Strategy"],
    color: "bg-[#e0e8d8]",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Selected Work
        </p>
        <h2 className="mt-2 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Case Studies
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
          >
            {/* Placeholder image area */}
            <div
              className={`${project.color} flex h-56 items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}
            >
              <span className="text-sm text-muted">
                Project Image
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
