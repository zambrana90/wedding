"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nuestra Historia", href: "#our-story" },
  { label: "La Celebración", href: "#program" },
  { label: "Transporte y Alojamiento", href: "#travel" },
  { label: "Formulario", href: "#form" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-secondary/30 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="hidden md:flex items-center justify-start space-x-8 flex-1">
            {navLinks.slice(0, 2).map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="font-sans tracking-widest uppercase text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          <span className="font-noto-serif text-2xl text-primary tracking-tight">
            A<span className="italic">&</span>I
          </span>

          <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
            {navLinks.slice(2).map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="font-sans tracking-widest uppercase text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-primary p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col">
          <div className="flex justify-end px-6 py-4">
            <button
              className="text-primary p-2 -mr-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 pb-20">
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="font-sans tracking-widest uppercase text-lg text-on-surface-variant hover:text-primary transition-colors px-8 py-4 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
