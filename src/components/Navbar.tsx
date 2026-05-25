"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t.nav.home, path: "/" },
    { id: "about", label: t.nav.about, path: "/about" },
    { id: "mission", label: t.nav.mission, path: "/mission" },
    { id: "stories", label: t.nav.stories, path: "/story" },
    { id: "constitution", label: language === "hi" ? "नियमावली" : "Constitution", path: "/constitution" },
    { id: "gallery", label: t.nav.gallery, path: "/gallery" },
    { id: "contact", label: t.nav.contact, path: "/contact" },
  ];

  // Helper to match active section based on current path
  const getActiveSection = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/mission")) return "mission";
    if (pathname.startsWith("/story")) return "stories";
    if (pathname.startsWith("/constitution")) return "constitution";
    if (pathname.startsWith("/gallery")) return "gallery";
    if (pathname.startsWith("/contact")) return "contact";
    return "home";
  };

  const activeSection = getActiveSection();

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <Link 
            href="/"
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff5100] to-[#ff7700] flex items-center justify-center shadow-[0_4px_15px_rgba(255,81,0,0.25)] group-hover:scale-105 transition-all duration-300">
              <Heart size={16} className="text-white fill-white/20" />
            </div>
            <div>
              <span className="font-hindi text-base md:text-lg font-black tracking-wide text-slate-900 group-hover:text-[#ff7700] transition-colors duration-300">
                युवा सेना
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-[#ff7700] uppercase font-bold font-english">
                MPYSS MOVEMENT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={`relative py-1 text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  activeSection === link.id
                    ? "text-[#ff7700]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff5100] to-[#ff7700] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switch & CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Switch */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80">
              <button
                onClick={() => setLanguage("hi")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  language === "hi"
                    ? "bg-[#ff5100] text-white shadow-[0_2px_8px_rgba(255,81,0,0.2)]"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  language === "en"
                    ? "bg-[#ff5100] text-white shadow-[0_2px_8px_rgba(255,81,0,0.2)]"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                }`}
              >
                English
              </button>
            </div>

            {/* Glowing CTA Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5x3zW7u8K8_7YV2J4J7D8E7H6-G3_example/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff5100] to-[#ff7700] overflow-hidden hover:from-[#ff7700] hover:to-[#ff5100] shadow-[0_4px_15px_rgba(255,81,0,0.2)] hover:shadow-[0_4px_20px_rgba(255,81,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {t.nav.joinNow}
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Lang Button */}
            <button
              onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 flex items-center justify-center cursor-pointer border border-slate-200/50"
            >
              <Globe size={16} />
              <span className="ml-1 text-[10px] font-bold uppercase">
                {language === "hi" ? "EN" : "हि"}
              </span>
            </button>

            {/* Mobile Burger Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 top-[70px] bg-white z-40 lg:hidden flex flex-col justify-between p-8 border-t border-slate-200/80 font-sans"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-lg font-semibold tracking-wide py-2 cursor-pointer ${
                    activeSection === link.id
                      ? "text-[#ff7700] pl-2 border-l-2 border-[#ff7700]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              {/* Language Selector */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <span className="text-sm font-semibold text-slate-500">
                  {language === "hi" ? "भाषा बदलें" : "Change Language"}
                </span>
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/50">
                  <button
                    onClick={() => {
                      setLanguage("hi");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      language === "hi" ? "bg-[#ff5100] text-white" : "text-slate-500"
                    }`}
                  >
                    हिन्दी
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      language === "en" ? "bg-[#ff5100] text-white" : "text-slate-500"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 text-center text-sm font-bold uppercase bg-gradient-to-r from-[#ff5100] to-[#ff7700] rounded-xl text-white shadow-md cursor-pointer"
              >
                {t.nav.joinNow}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
