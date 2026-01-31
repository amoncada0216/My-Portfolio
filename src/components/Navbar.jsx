import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 bg-amber-500">
        <div className="flex justify-between px-5 py-3 md:px-20 md:py-4">
          {/* LOGO */}
          <a href="#home">
            <span className="font-bold">{`<AMoncada />`}</span>
          </a>

          {/* NAVIGATION LINKS */}
          <div className="hidden gap-5 md:flex">
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
            {/* DESKTOP */}
            <button className="hidden md:block">
              <a href="#contact">Contact Me</a>
            </button>

            {/* Mobile */}
            <button
              className="flex gap-5 md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={24} className="z-11" /> : <Menu size={24} />}
            </button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 z-10 bg-amber-500">
                <div className="flex flex-col gap-6 p-6">
                  <a
                    href="#home"
                    className="text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-lg cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
