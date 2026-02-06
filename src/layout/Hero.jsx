import Particles from "@/components/Particles";
import AnimatedBorder from "../components/AnimatedBorder";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden h-screen snap-start snap-always bg-background select-none"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="hero-bg.png"
          alt="Abraham Moncada"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      <Particles amount={100} />

      {/* CONTENT */}
      <div className="responsive-container relative">
        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 mb-20">
          {/* LEFT COLUMN */}
          <div>
            {/* TITLE */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full glass opacity-80 text-xs text-foreground">
                Frontend Engineer | Component-Driven UI
              </span>
            </div>

            {/* HEADLINE */}
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-7xl text-main mb-8">
                Designing{" "}
                <span className="italic font-extralight font-sans">clean </span>
                systems for a{" "}
                <span className="text-primary glow-text opacity-90 modern-font">
                  modern{" "}
                </span>
                web experience
              </h1>

              {/* SMALL INTRO */}
              <p className="text-xs md:text-sm text-foreground max-w-sm leading-relaxed font-light">
                Hi, I’m <span className="font-normal">Abraham Moncada</span>. I
                specialize in building clean, scalable frontend systems using
                React and Tailwind CSS, with a focus on performance, clarity,
                and maintainable architecture.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center px-10">
            <div className="relative opacity-80 glow-foreground rounded-2xl">
              <AnimatedBorder>
                <img
                  src="ams.jpg"
                  alt="Abraham Moncada"
                  className="w-60 md:w-80"
                />
              </AnimatedBorder>

              {/* AVAILABLE */}
              <div className="absolute px-5 py-1.5 text-main rounded-full items-center flex -bottom-6 -right-8 text-sm md:text-xl glass animate-float">
                <span className="w-2.5 h-2.5 mr-3 rounded-full bg-green-500 inline-block animate-pulse" />
                Online
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-evenly md:px-15">
          <div className="stat">
            <div className="stat-value">1+</div>
            <div className="stat-label">Years<br/> Experience</div>
          </div>

          <div className="w-0.5 bg-main rounded-md" />

          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Languages<br/> Frameworks</div>
          </div>

          <div className="w-0.5 bg-main rounded-md" />

          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projects<br/> Completed</div>
          </div>

          <div className="w-0.5 bg-main rounded-md" />

          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">
              Love +
              <br /> Passion
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-background from-8% via-background/60  to-transparent to-80%" />
    </section>
  );
}
