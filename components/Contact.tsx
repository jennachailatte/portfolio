export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-border bg-foreground/[0.02] p-12 text-center md:p-20">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Get In Touch
        </p>
        <h2 className="mt-4 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          I&apos;m currently open to new opportunities in product design and
          marketing at B2B SaaS companies.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@peanutbuttermochi.com"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Say hello
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
