export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-20">
      <div className="max-w-3xl">
        <p className="animate-fade-up font-mono text-sm tracking-wide text-accent">
          Product Designer & Marketing Strategist
        </p>
        <h1 className="animate-fade-up animate-delay-100 mt-4 text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
          Aloha, I&apos;m Jenna.
        </h1>
        <p className="animate-fade-up animate-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          I design products and build marketing strategies that help B2B SaaS
          companies grow. Based in San Francisco, with roots in Hawai&apos;i.
        </p>
        <div className="animate-fade-up animate-delay-300 mt-10 flex gap-4">
          <a
            href="#work"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up animate-delay-400 mt-auto mb-8 flex items-center gap-2 text-muted">
        <div className="h-8 w-px bg-border" />
        <span className="font-mono text-xs tracking-wide">Scroll</span>
      </div>
    </section>
  );
}
