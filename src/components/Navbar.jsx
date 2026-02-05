import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-2001">
      <nav className="responsive-container py-5! flex justify-between items-center select-none">
        {/* LOGO */}
        <a
          href="#home"
          className={`text-xs md:text-sm transition
            ${active === "#home" ? "glow-nav" : "text-foreground"}`}
        >
          {`<Abraham_Moncada />`}
        </a>

        {/* LINKS */}
        <div className="flex gap-5 md:gap-10">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs md:text-sm transition
                ${
                  active === link.href
                    ? "glow-nav"
                    : "text-foreground hover:text-main"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
