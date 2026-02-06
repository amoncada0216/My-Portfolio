import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import Particles from "@/components/Particles";
import WhatsappIcon from "@/components/WhatsappIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen snap-start bg-background flex items-center overflow-hidden select-none"
    >
      {/* HEADER*/}
      <div className="responsive-container">
        <h2 className="text-5xl md:text-7xl font-bold">
          <span className="glow-text text-primary modern-font italic">
            Ready
          </span>{" "}
          when you are...
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* LEFT */}
          <form className="space-y-6 glass p-6 rounded-md">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-background/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-background/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full rounded-lg bg-background/40 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-main transition-colors
             hover:bg-primary-foreground cursor-pointer
             shadow-md hover:shadow-xl"
            >          
              <span className="relative z-10">Send</span>
              <Send className="relative z-10 w-5 h-5" />
            </button>
          </form>

          {/* RIGHT*/}
          <div className="flex flex-col">
            <div className="mb-6 glass p-6 rounded-md">
              <a
                href="https://github.com/amoncada0216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 mb-6"
              >
                <Github className="w-6 h-6 text-primary transition-transform group-hover:scale-130" />
                <span>github.com/amoncada0216/</span>
              </a>

              <a
                href="https://linkedin.com/in/ams0216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 mb-6"
              >
                <Linkedin className="w-6 h-6 text-primary transition-transform group-hover:scale-130" />
                <span>linkedin.com/in/ams0216/</span>
              </a>

              <a
                href="mailto:a.moncada0216@gmail.com"
                target="_blank"
                className="group flex items-center gap-4 mb-6"
              >
                <Mail className="w-6 h-6 text-primary transition-transform group-hover:scale-130" />
                <span>a.moncada0216@gmail.com</span>
              </a>

              <a
                href="https://wa.me/573202722143"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 mb-6"
              >
                <WhatsappIcon className="w-6 h-6 fill-current text-primary transition-transform group-hover:scale-130" />
                <span>+57 320 272 2143</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Bogot%C3%A1,+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <MapPin className="w-6 h-6 text-primary transition-transform group-hover:scale-130" />
                <span>Bogotá, Colombia</span>
              </a>
            </div>
            <div className="glass p-6 rounded-md grow">
              Available for freelance work, collaborations, and long-term
              opportunities.
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 right-0 z-50">
        <div className="responsive-container py-5!">
          <p className="text-sm text-muted-foreground text-center">
            💻 Designed & built by Me. 2026.
          </p>
        </div>
      </footer>
      <Particles amount={100} />
    </section>
  );
}
