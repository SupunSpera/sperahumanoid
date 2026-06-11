"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state for navigation bar styling
      setScrolled(window.scrollY > 40);

      // 2. Bottom of the page highlight Contact override
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // 3. Scroll Spy mapping
      const sectionIds = ["overview", "capabilities", "how-it-works", "use-cases", "gallery", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Offset by 30% viewport height

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial execution on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative w-full z-50">
      {/* Sticky Main Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled
          ? "bg-dark-bg/85 border-b border-brand-cyan/10 backdrop-blur-md py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer">
            <Image
              src="/spera_logo.webp"
              alt="Spera Humanoid Logo"
              width={180}
              height={44}
              priority
              className="h-11 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-xs tracking-wider uppercase transition-colors duration-300 cursor-pointer ${isActive
                    ? "text-brand-cyan glow-cyan font-bold"
                    : "text-text-muted hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider text-white border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-2 rounded-sm hover:bg-brand-cyan hover:text-black hover:border-brand-cyan transition-all duration-300 cursor-pointer"
            >
              Contact Spera <span className="ml-1.5">→</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-text-muted hover:text-white transition-colors cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-dark-bg/95 border-b border-brand-cyan/10 backdrop-blur-lg flex flex-col items-stretch p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-xs tracking-wider uppercase py-2 border-b border-white/[0.03] transition-colors duration-300 ${isActive
                    ? "text-brand-cyan glow-cyan font-bold"
                    : "text-text-muted hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-mono text-xs uppercase tracking-wider text-black bg-brand-cyan py-3 rounded-sm font-bold hover:bg-white hover:text-black transition-all"
            >
              Contact Spera →
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
