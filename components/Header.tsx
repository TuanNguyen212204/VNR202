"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          className={`group relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-amber/30 bg-dark-card shadow-[0_8px_40px_-8px_rgba(245,197,24,0.18)] backdrop-blur-2xl"
              : "border-amber/20 bg-[rgba(15,23,41,0.7)] shadow-[0_4px_30px_-6px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          }`}
        >
          {/* Animated gradient border shine */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(245,197,24,0.15) 50%, transparent 70%)",
              }}
            />
          </div>

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
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber/40 bg-gradient-to-br from-crimson/40 to-burgundy/30 transition-all duration-500 group-hover/logo:rotate-12 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_24px_rgba(245,197,24,0.4)]">
                <BookOpen className="h-5 w-5 text-amber" strokeWidth={2} />
                <span className="absolute -inset-1 rounded-xl border border-amber/20 opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100" />
              </span>
              <span className="truncate font-heading text-sm font-bold leading-tight text-amber sm:text-base" style={{ wordSpacing: "0.08em", textShadow: "0 1px 6px rgba(245,197,24,0.4)" }}>
                Lịch sử Đảng Cộng sản Việt Nam
              </span>
            </a>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-amber/30 bg-amber/5 transition-all hover:bg-amber/10 hover:shadow-[0_0_16px_rgba(245,197,24,0.2)] lg:hidden"
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

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section;
                return (
                  <a
                    key={link.section}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-all duration-300 ${
                      isActive
                        ? "text-amber"
                        : "text-ivory hover:text-amber"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-crimson/30 via-burgundy/30 to-amber/30 shadow-[inset_0_0_12px_rgba(245,197,24,0.2)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col overflow-hidden border-t border-amber/20 lg:hidden"
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
                      className={`border-b border-amber/10 px-5 py-3.5 text-sm font-semibold no-underline transition-colors last:border-b-0 ${
                        isActive
                          ? "bg-amber/10 text-amber"
                          : "text-ivory hover:bg-amber/5 hover:text-amber"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_8px_rgba(245,197,24,0.6)]" />
                        )}
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}