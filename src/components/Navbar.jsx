import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <nav className="container flex m-auto max-w-5xl justify-between py-5">
          <a href="#home">
            <span className="text-foreground text-sm hover:text-main">{`<Abraham_Moncada />`}</span>
          </a>
        {/* NAVIGATION LINKS */}
        <div className="gap-10 flex">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="cursor-pointer text-foreground text-sm hover:text-main"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
