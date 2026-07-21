"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { navLinks } from "@/lib/presentation-content";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.section);

export function Header() {
  const { scrolled, isAtTop } = useNavbarScroll();
  const activeSection = useActiveSection([...sectionIds]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isVisible = isAtTop || hovered || menuOpen;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {!isAtTop && !menuOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-[49] h-16"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-hidden
        />
      )}

      <header
        className={`fixed top-0 right-0 left-0 z-50 px-4 pt-3 transition-transform duration-300 ease-out sm:px-6 sm:pt-4 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-gold/35 bg-white/85 shadow-[0_8px_32px_-8px_rgba(123,30,46,0.18)] backdrop-blur-xl"
              : "border-gold/25 bg-white/65 shadow-[0_4px_24px_-6px_rgba(123,30,46,0.1)] backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
            <a
              href="#"
              className="group flex min-w-0 items-center gap-2.5 no-underline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-burgundy/10 transition-colors group-hover:bg-burgundy/15">
                <BookOpen className="h-4 w-4 text-burgundy" strokeWidth={2} />
              </span>
              <span className="truncate font-heading text-sm font-bold leading-tight text-burgundy sm:text-base">
                Lịch sử Đảng Cộng sản Việt Nam
              </span>
            </a>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-gold/30 bg-burgundy/5 transition-colors hover:bg-burgundy/10 lg:hidden"
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-burgundy transition-all ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-burgundy transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-burgundy transition-all ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section;
                return (
                  <a
                    key={link.section}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium no-underline transition-all ${
                      isActive
                        ? "bg-burgundy text-cream shadow-sm"
                        : "text-brown/75 hover:bg-gold/15 hover:text-burgundy"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <nav
            className={`flex flex-col border-t border-gold/20 lg:hidden ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.section}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`border-b border-gold/10 px-5 py-3.5 text-sm font-medium no-underline transition-colors last:border-b-0 ${
                    isActive
                      ? "bg-burgundy/8 text-burgundy"
                      : "text-brown/80 hover:bg-gold/10 hover:text-burgundy"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                    )}
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
