"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "O que fazemos?", href: "#oquefazemos" },
    { name: "Cursos", href: "#cursos" },
    { name: "Métricas", href: "#metricas" },
    { name: "Apoiadores", href: "#apoiadores" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const sectionId = href.slice(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled ? "border-b border-white/5 bg-black/90 py-4 backdrop-blur-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" onClick={(event) => handleNavClick(event, "#home")} className="flex items-center">
          <Image
            src="/logo/logoAfroIt-v2.png"
            alt="Afro.it"
            width={150}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button className="text-slate-400 transition-colors hover:text-white" type="button">
            <Search size={18} />
          </button>
        </div>

        <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)} type="button">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-8 bg-black"
          >
            <button
              className="absolute right-8 top-8 text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X size={32} />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-black text-white hover:text-[#f97316]"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
