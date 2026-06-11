"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Left Side Logo */}
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <Image
            src="/spera_logo.webp"
            alt="Spera Humanoid Logo"
            width={140}
            height={34}
            className="h-9 w-auto object-contain"
            style={{ width: "auto" }}
          />

        </div>

        {/* Center/Right Secure system badge */}
        <div className="hidden md:flex items-center space-x-1.5 font-mono text-[9px] text-brand-cyan/35 select-none uppercase tracking-[0.2em]">
          <span>LINK SECURE // SYSTEM ONLINE</span>
        </div>

        {/* Right Side Copyright */}
        <div className="font-mono text-[9px] text-text-muted/50 uppercase tracking-wider text-center sm:text-right">
          © {new Date().getFullYear()} Spera Labs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
