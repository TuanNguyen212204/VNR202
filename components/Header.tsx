"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/presentation-content";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { CommunistPartyEmblem } from "@/components/ui/decorations/CommunistPartyEmblem";

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

      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`group relative mx-auto flex max-w-6xl flex-col overflow-hidden transition-all duration-500 ${
            scrolled
              ? "rounded-none border-y border-amber/20 bg-[rgba(26,20,16,0.95)] shadow-[0_4px_32px_-4px_rgba(212,168,75,0.12)] backdrop-blur-xl"
              : "rounded-none border border-amber/15 bg-[rgba(26,20,16,0.85)] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] backdrop-blur-lg"
          }`}
          style={{
            borderImage: scrolled 
              ? "linear-gradient(90deg, #C8102E, #D4A84B, #C8102E) 1" 
              : "linear-gradient(90deg, transparent, rgba(212,168,75,0.3), transparent) 1",
            borderImageSlice: scrolled ? 1 : 0,
          }}
        >
          {/* Traditional top border decoration */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

          <div className="relative flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
            <a
              href="#"
              className="group/logo flex min-w-0 items-center gap-3 no-underline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              {/* Communist Party Logo with actual image */}
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-amber/50 bg-gradient-to-br from-crimson/40 to-burgundy/30 transition-all duration-500 group-hover/logo:scale-105 group-hover/logo:shadow-[0_0_20px_rgba(200,16,46,0.4)]">
                <CommunistPartyEmblem useImage size={44} />
              </span>
              <span 
                className="truncate font-heading text-sm font-bold leading-tight text-amber sm:text-base" 
                style={{ 
                  wordSpacing: "0.1em", 
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                  letterSpacing: "0.03em"
                }}
              >
                Lịch sử Đảng Cộng sản Việt Nam
              </span>
            </a>

            {/* Mobile menu button - traditional style */}
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-amber/25 bg-amber/5 transition-all hover:bg-amber/10 hover:shadow-[0_0_12px_rgba(212,168,75,0.2)] lg:hidden"
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-amber transition-all duration-300 ${menuOpen ? "translate-y-[5px] rotate-45 bg-crimson" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-amber transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-amber transition-all duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45 bg-crimson" : ""}`}
              />
            </button>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section;
                return (
                  <a
                    key={link.section}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-lg px-2.5 py-2 text-[13px] font-semibold no-underline transition-all duration-300 xl:px-3.5 xl:text-sm ${
                      isActive
                        ? "text-amber"
                        : "text-cream hover:text-amber"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg border border-amber/30 bg-gradient-to-r from-crimson/20 via-burgundy/15 to-amber/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile menu dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col overflow-hidden border-t border-amber/15 lg:hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(26,20,16,0.98), rgba(45,31,26,0.98))",
                }}
              >
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.section;
                  return (
                    <motion.a
                      key={link.section}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`border-b border-amber/10 px-5 py-4 text-sm font-semibold no-underline transition-colors last:border-b-0 ${
                        isActive
                          ? "bg-amber/10 text-amber"
                          : "text-cream hover:bg-amber/5 hover:text-amber"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_6px_rgba(212,168,75,0.6)]" />
                        )}
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Traditional bottom border */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        </div>
      </motion.header>
    </>
  );
}
