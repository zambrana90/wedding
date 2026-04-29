"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nuestra Historia", href: "#our-story" },
  { label: "La Celebración", href: "#program" },
  { label: "Transporte y Alojamiento", href: "#travel" },
  { label: "Formulario", href: "#form" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sectionIds = ["home", "our-story", "program", "travel", "form"];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    // Close menu first on mobile
    const wasMenuOpen = menuOpen;
    setMenuOpen(false);

    // Scroll after menu closes to avoid layout shift affecting scroll position
    if (wasMenuOpen) {
      // Menu was open, wait for CSS transition (200ms) then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          isScrollingRef.current = true;
          setActiveSection(targetId);
          element.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }
      }, 250);
    } else {
      // Menu was closed, scroll immediately
      const element = document.getElementById(targetId);
      if (element) {
        isScrollingRef.current = true;
        setActiveSection(targetId);
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-secondary/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="hidden md:flex items-center justify-start space-x-8 flex-1">
          {navLinks.slice(0, 2).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`font-sans tracking-widest uppercase text-xs transition-colors duration-300 ${
                activeSection === href.replace("#", "")
                  ? "text-primary border-b border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="flex-shrink-0 block cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            const homeSection = document.getElementById("home");
            if (homeSection) {
              isScrollingRef.current = true;
              setActiveSection("home");
              homeSection.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                isScrollingRef.current = false;
              }, 800);
            }
          }}
        >
          <span className="font-noto-serif text-2xl text-primary tracking-tight">
            A<span className="italic">&</span>I
          </span>
        </a>

        <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
          {navLinks.slice(2).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`font-sans tracking-widest uppercase text-xs transition-colors duration-300 ${
                activeSection === href.replace("#", "")
                  ? "text-primary border-b border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-secondary/30 transition-all duration-200 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-64 opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`font-sans tracking-widest uppercase text-xs transition-colors w-fit cursor-pointer ${
                activeSection === href.replace("#", "")
                  ? "text-primary border-b border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
