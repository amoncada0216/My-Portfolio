import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <nav className="container flex m-auto max-w-8xl justify-between py-8">
        {/* LOGO */}
        <a href="#home">
          <span className="font-medium text-text">{`<AM />`}</span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="gap-20 flex">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <button>
            <a href="#contact">Contact</a>
          </button>
        </div>
      </nav>
    </header>
  );
}
