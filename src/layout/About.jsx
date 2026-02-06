import { Bug, Code2, Users, ShieldCheck } from "lucide-react";
import Particles from "@/components/Particles";

const cards = [
  {
    title: "Clean Code & Maintainability",
    description:
      "Writes readable, predictable, and reusable code with clear structure.",
    icon: Code2,
  },
  {
    title: "Problem Solving & Debugging",
    description:
      "Breaks complex UI and logic issues into smaller parts and identifies root causes.",
    icon: Bug,
  },
  {
    title: "Teamwork & Communication",
    description:
      "Communicates clearly in remote teams and collaborates across roles.",
    icon: Users,
  },
  {
    title: "Ownership & Reliability",
    description:
      "Takes responsibility for features end to end with consistent delivery.",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center overflow-hidden h-screen snap-start snap-always bg-background"
    >
      <div className="responsive-container select-none z-2000">
        {/* LEFT SIDE */}
        <div>
          <div className="flex">
            <h1 className="text-5xl md:text-7xl text-main mb-8 md:mr-10">
              Just a Developer
              <br /> Who Enjoys Building Things
            </h1>
            <div className="flex flex-col justify-evenly md:max-w-lg ">
              <p className="text-xs md:text-sm text-foreground leading-relaxed font-light">
                Junior frontend developer focused on building responsive user
                interfaces and clean, maintainable architecture using React,
                TypeScript, and modern CSS, while actively working toward
                becoming a full-stack developer.
              </p>
              <p className="text-xs md:text-sm text-foreground leading-relaxed font-light">
                My background in operations, where I progressed into supervisory
                roles, has shaped how I work as a developer, giving me a strong
                sense of ownership, accountability, and attention to detail.
                After succeeding in that environment, I chose to transition into
                programming, where I can apply the same discipline to work that
                aligns with my long-term passion.
              </p>
              <p className="text-xs md:text-sm text-foreground leading-relaxed font-light">
                Outside of coding, I spend my time playing squash, cooking and
                exploring food from different parts of the world, and staying
                active through running and fitness. I have a strong interest in
                nutrition and enjoy traveling, usually with good music and my
                cats close by when I’m home.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly md:justify-between px-10 mb-8 md:px-40">
            <div className="stat">
              <div className="stat-value-mini">4+</div>
              <div className="stat-label">
                Happy
                <br /> Clients
              </div>
            </div>

            <div className="w-0.5 bg-main rounded-md" />

            <div className="stat">
              <div className="stat-value-mini">1K+</div>
              <div className="stat-label">
                GitHub
                <br /> Commits
              </div>
            </div>

            <div className="w-0.5 bg-main rounded-md" />

            <div className="stat">
              <div className="stat-value-mini">500+</div>
              <div className="stat-label">
                Hours of
                <br /> Learning
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-6 auto-rows-min">
          {cards.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="rounded-xl p-6 bg-background glass"
              >
                <Icon className="h-8 w-8 text-primary mb-4 animate-bounce" />

                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>

                <p className="text-sm text-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Particles amount={100} />
    </section>
  );
};

export default About;
