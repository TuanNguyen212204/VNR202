"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.section);

export function Navbar() {
  const scrolled = useNavbarScroll();
  const activeSection = useActiveSection([...sectionIds]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-[100] backdrop-blur-[10px] transition-all duration-300 ${
        scrolled ? "bg-dark/95" : "bg-dark/85"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1140px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#"
          className="text-[0.95rem] font-semibold tracking-wide text-white no-underline"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Tư tưởng Hồ Chí Minh
        </a>

        <button
          type="button"
          className="flex flex-col justify-center gap-[5px] p-2 md:hidden"
          aria-label="Mở menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-250 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-250 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-250 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <nav
          className={`absolute left-0 right-0 top-full flex flex-col overflow-hidden bg-dark/97 backdrop-blur-[10px] transition-all duration-300 md:static md:flex-row md:gap-7 md:overflow-visible md:bg-transparent ${
            menuOpen ? "max-h-80" : "max-h-0 md:max-h-none"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.section}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`border-b border-white/8 px-6 py-4 text-[0.92rem] text-white/78 no-underline transition-colors hover:text-white md:border-b-2 md:border-transparent md:px-0 md:py-0 md:pb-1.5 ${
                  isActive
                    ? "border-l-[3px] border-l-purple text-white md:border-l-0 md:border-b-purple"
                    : "border-l-[3px] border-l-transparent md:border-l-0"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
