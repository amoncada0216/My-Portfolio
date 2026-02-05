import { Mail, Phone, MapPin, Send } from "lucide-react";
import Particles from "@/components/Particles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen snap-start bg-background flex items-center overflow-hidden"
    >
      {/* HEADER*/}
      <div className="responsive-container">
        <p className="text-sm tracking-widest text-muted-foreground">
          LET’S CONNECT
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-8">
          <span className="glow-text text-primary">Ready</span> when you are
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground">
          Available for freelance work, collaborations, and long-term projects.
        </p>

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
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-main hover:opacity-90 transition select-none cursor-pointer"
            >
              Send
              <Send className="w-5 h-5" />
            </button>
          </form>

          {/* RIGHT*/}
          <div className="space-y-6 glass p-6 rounded-md">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <span>youremail@example.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <span>+57 300 000 0000</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Bogotá, Colombia</span>
            </div>

            <div className="pt-6 text-sm text-muted-foreground">
              Available for freelance work, collaborations, and long-term
              projects.
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <div className="responsive-container py-5!">
          <p className="text-sm text-muted-foreground">made by me</p>
        </div>
      </footer>
      <Particles amount={100} />
    </section>
  );
}
