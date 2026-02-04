import Carousel from "@/components/Carousel";
import Particles from "@/components/Particles";

const CARDS = 3;

const projects = [
  {
    title: "Project 1",
    picture: "project1.png",
  },
  {
    title: "Project 2",
    picture: "project2.png",
  },
  {
    title: "Project 3",
    picture: "project3.png",
  },
];

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex items-center overflow-hidden h-screen snap-start snap-always bg-background"
    >
      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl h-full w-full mx-auto px-10 py-10 md:py-40">
        <Carousel>
          {projects.map((n, i) => (
            <div key={i}>
              <div>
                <img
                  src={n.picture}
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Carousel>

        <Particles amount={100} />
      </div>
    </section>
  );
}
