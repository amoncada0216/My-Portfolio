import Navbar from "@/components/Navbar";
import Hero from "@/layout/Hero";
import About from "@/layout/About";
import Skills from "@/layout/Skills";
import Projects from "@/layout/Projects";
import FAQ from "@/layout/FAQ";
import Contact from "@/layout/Contact";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth overscroll-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
