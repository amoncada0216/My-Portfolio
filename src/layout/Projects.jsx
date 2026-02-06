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
  {
    title: "Project 4",
    picture: "project4.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center overflow-hidden h-screen snap-start snap-always bg-background select-none"
    >
      <div className="responsive-container h-full w-full mx-auto md:px-15! flex items-center">
        <Carousel>
          {projects.map(({ picture }, i) => (
            <div key={i}>
              <div>
                <img
                  src={picture}
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Carousel>


        <Particles amount={100} />
      </div>
        <p>All of my project available here:</p>
    </section>
  );
}
