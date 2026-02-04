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
      <div className="responsive-layout px-10 md:py-25 container grid md:grid-cols-2 gap-5 mx-auto py-32">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl text-main mb-8">
            Just a Developer
            <br /> Who Enjoys Building Things
          </h1>
          <p className="text-xs md:text-sm text-foreground md:max-w-sm leading-relaxed font-light mb-8">
            Junior frontend developer focused on building responsive user
            interfaces and clean, maintainable architecture using React,
            TypeScript, and modern CSS.
            <br />
            <br />
            My background in call-center operations has shaped how I work as a
            developer, giving me a strong sense of ownership, accountability,
            and attention to detail. <br />
            <br />
            When I’m not coding, you’ll usually find me playing squash, cooking
            food from different parts of the world, or spending time with my
            cats while curating new music for my library.
          </p>

          <div className="flex justify-evenly md:justify-between px-10 md:px-0">
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
                className="rounded-xl border border-border p-6 bg-background glass"
              >
                <Icon className="h-8 w-8 text-primary mb-4 animate-bounce" />

                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>

                <p className="text-sm text-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
        
        <Particles amount={100}/>
      </div>
    </section>
  );
};

export default About;
