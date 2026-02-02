import Particles from "@/components/Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden h-screen snap-start snap-always bg-background"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Abraham Moncada"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <Particles amount={100} />

      {/* CONTENT */}
      <div className="container max-w-8xl mx-auto py-32 relative z-1">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 mb-20">
          {/* LEFT COLUMN */}
          <div>
            {/* TITLE */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary">
                <span className="animate-pulse">•</span>
                Frontend Engineer | React + Tailwind
                <span className="animate-pulse">•</span>
              </span>
            </div>

            {/* HEADLINE */}
            <div className="flex flex-col">
              <h1 className="text-8xl text-main leading-tight mb-8">
                Designing <span className="italic font-extralight font-sans">clean </span>
                systems for a <span className="text-primary glow-text modern">modern </span>web experience.
              </h1>

              {/* SMALL INTRO */}
              <p className="text-xl text-foreground max-w-lg leading-relaxed">
                Hi, I’m Abraham Moncada. I specialize in building clean,
                scalable frontend systems using React and Tailwind CSS, with a
                focus on performance, clarity, and maintainable architecture.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center px-10">
            <div className="max-w-md">
              <img
                src="/avatar.jpg"
                alt="Abraham Moncada"
                className="rounded-3xl glow"
              />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex justify-evenly">
          <div className="stat">
            <div className="stat-value">1+</div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="w-1 bg-main" />
          
          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Languages Frameworks</div>
          </div>

          <div className="w-1 bg-main" />

          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projects Completed</div>
          </div>

          <div className="w-1 bg-main" />

          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Love<br/> Passion</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-background from-8% via-background/60  to-transparent to-80%" />
    </section>
  );
}
