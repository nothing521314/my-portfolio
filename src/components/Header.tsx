"use client";

import { Locale, Translation } from "@/locales/types";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

interface HeaderProps {
  locale: Locale;
  dict: Translation;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = useMemo(
    () => [
      { label: dict.nav.home, target: "hero" },
      { label: dict.nav.about, target: "about" },
      { label: dict.nav.experience, target: "experience" },
      { label: dict.nav.skills, target: "skills" },
      { label: dict.nav.freelance, target: "freelance" },
      { label: dict.nav.contact, target: "contact" },
    ],
    [
      dict.nav.about,
      dict.nav.contact,
      dict.nav.experience,
      dict.nav.freelance,
      dict.nav.home,
      dict.nav.skills,
    ],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Active section detector using closest distance to header viewport offset (90px)
      setActiveSection((prev) => {
        let closestSection = prev;
        let minDistance = Infinity;
        for (const item of navItems) {
          const el = document.getElementById(item.target);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Measure distance from the scroll target line (90px below viewport top)
            const distance = Math.abs(rect.top - 90);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = item.target;
            }
          }
        }
        return closestSection;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(target);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 flex items-center transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-bg-main/75 backdrop-blur-md border-b border-white/5 h-[70px]"
          : "h-[80px]"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-linear-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="presentation"
      />

      <div className="container mx-auto px-6 flex justify-between items-center w-full relative">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center relative font-headings font-extrabold text-2xl tracking-tighter text-white"
        >
          <span className="absolute w-[28px] h-[28px] bg-primary blur-[10px] opacity-60 rounded-full -left-1" />
          <span className="relative z-10 bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
            NVT
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleNavClick(e, item.target)}
              className={`text-sm font-medium relative py-2 transition-colors duration-200 ${
                activeSection === item.target
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-linear-to-r from-primary to-secondary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Contact CTA & Language Switcher (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-white/3 border border-white/5 p-1 rounded-xl mr-2">
            <Link
              href="/vi"
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                locale === "vi"
                  ? "bg-indigo-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              VI
            </Link>
            <Link
              href="/en"
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                locale === "en"
                  ? "bg-indigo-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>

          <a
            href={`mailto:${dict.cvData.email}`}
            className="text-gray-400 bg-white/3 border border-white/5 w-[38px] h-[38px] rounded-xl flex items-center justify-center transition-all duration-200 hover:text-white hover:bg-white/8 hover:border-white/15 hover:-translate-y-0.5"
            title="Email Me"
          >
            <Mail size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="btn btn-primary py-2 px-[18px] text-[0.85rem]"
          >
            {dict.nav.hireMe}
          </a>
        </div>

        {/* Mobile Hamburger button & Lang switch */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Language Switcher (Mobile) */}
          <div className="flex items-center gap-1.5 bg-white/3 border border-white/5 p-0.5 rounded-lg">
            <Link
              href="/vi"
              className={`text-[9px] font-bold px-2 py-0.5 rounded transition-all ${
                locale === "vi"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              VI
            </Link>
            <Link
              href="/en"
              className={`text-[9px] font-bold px-2 py-0.5 rounded transition-all ${
                locale === "en"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>

          <button
            className="bg-none border-none text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-bg-main/98 backdrop-blur-md z-99 flex justify-center items-start py-10 px-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-white/5 ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-7 w-full max-w-[320px]">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleNavClick(e, item.target)}
              className={`font-headings text-xl font-semibold py-2.5 border-b border-white/5 block ${
                activeSection === item.target
                  ? "text-primary border-primary"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-5">
            <a
              href={`mailto:${dict.cvData.email}`}
              className="btn btn-secondary flex items-center justify-center gap-2"
            >
              <Mail size={18} /> {locale === "vi" ? "Gửi Email" : "Send Email"}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="btn btn-primary flex items-center justify-center gap-2"
            >
              {locale === "vi" ? "Kết nối" : "Let's Connect"}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
