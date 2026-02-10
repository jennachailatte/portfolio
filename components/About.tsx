const skills = [
  "Figma",
  "Adobe Creative Suite",
  "UX Research",
  "Prototyping",
  "Growth Marketing",
  "Content Strategy",
  "Analytics",
  "A/B Testing",
  "SEO",
  "Social Media",
];

const press = [
  "Honolulu Star-Advertiser",
  "SF Standard",
  "USF News",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-5">
        {/* Photo placeholder */}
        <div className="md:col-span-2">
          <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-[#e8d5d8]">
            <div className="flex h-full items-center justify-center">
              <span className="text-sm text-muted">Your Photo</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-3">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">About</p>
          <h2 className="mt-2 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Designer, marketer,
            <br />
            storyteller.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m Jenna Chai, a product designer and marketing strategist
              based in San Francisco. I specialize in helping B2B SaaS companies
              create intuitive products and build growth engines that scale.
            </p>
            <p>
              With a background spanning UX/UI design, growth marketing, and
              content creation, I bring a unique cross-functional perspective to
              every project. I believe the best products are built at the
              intersection of great design and smart strategy.
            </p>
            <p>
              Originally from Hawai&apos;i, I bring aloha spirit to everything I
              do — warm collaboration, genuine curiosity, and a deep care for
              craft.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-xs font-medium tracking-wide text-foreground/60 uppercase">
              Skills & Tools
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Press */}
          <div className="mt-10">
            <h3 className="text-xs font-medium tracking-wide text-foreground/60 uppercase">
              Featured In
            </h3>
            <div className="mt-3 flex flex-wrap gap-6">
              {press.map((pub) => (
                <span
                  key={pub}
                  className="text-sm font-medium text-foreground/40"
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
