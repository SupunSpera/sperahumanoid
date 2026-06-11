"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-black">
      {/* Full-bleed Absolute Background Image with Blending Masks */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none">
        <Image
          src="/hero-robot.jpg"
          alt="Spera Humanoid Security Chest Close Up"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] lg:object-[right_35%] opacity-85"
        />
        {/* Gradients to blend the robot into the dark text column and bottom section */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col justify-between pt-16 pb-12">
        
        {/* HUD Telemetry HUD Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full font-mono text-[9px] tracking-wider select-none mb-10 md:mb-0">
          {/* Left HUD */}
          <div className="flex flex-col space-y-0.5">
            <div className="flex items-center">
              <span className="text-brand-cyan/80">SYS • SPERA-H1</span>
              <span className="w-10 h-px bg-brand-red mx-3" />
              <span className="text-brand-red font-bold">SPERA LABS • DEFENSE SERIES</span>
            </div>
            <div className="text-text-muted/60">STATUS • ACTIVE</div>
            <div className="text-text-muted/60">MODE • PATROL</div>
          </div>
          
          {/* Right HUD */}
          <div className="text-left md:text-right flex flex-col space-y-0.5">
            <div className="flex items-center md:justify-end text-brand-red font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red mr-2 animate-pulse" />
              SECURE LINK
            </div>
            <div className="text-text-muted/60">ENC • AES-256</div>
            <div className="text-text-muted/60">LAT • 14ms</div>
          </div>
        </div>

        {/* Main Text Content */}
        <div className="max-w-3xl space-y-6 my-auto pt-8 md:pt-0">
          <h1 className="font-sans text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight text-glow-white">
            Humanoid Security,<br />
            Built for the Future.
          </h1>

          <p className="font-sans text-base md:text-lg text-text-muted/95 max-w-xl leading-relaxed">
            A next-generation humanoid robot designed to patrol, observe, assist,
            communicate, and operate in security and defense environments.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#gallery"
              className="inline-flex items-center space-x-3 font-mono text-xs uppercase tracking-wider text-black bg-white hover:bg-brand-cyan px-6 py-3.5 rounded-sm font-bold transition-all duration-300 cursor-pointer box-glow-cyan"
            >
              <Play size={10} className="fill-black text-black" />
              <span>Watch Demo</span>
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center space-x-1.5 font-mono text-xs uppercase tracking-wider text-white hover:text-black border border-white/20 hover:border-white hover:bg-white/5 px-6 py-3.5 rounded-sm font-bold transition-all duration-300 cursor-pointer"
            >
              <span>Explore Capabilities</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Stats Grid at the bottom */}
        <div className="w-full max-w-2xl pt-8 border-t border-white/[0.06] mt-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-0 divide-x divide-white/[0.08]">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-bold tracking-tight text-white">
                1.78m
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted/60 mt-1.5">
                HEIGHT
              </span>
            </div>

            {/* Stat 2 */}
            <div className="pl-6 flex flex-col">
              <span className="font-mono text-3xl font-bold tracking-tight text-white">
                360°
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted/60 mt-1.5">
                AWARENESS
              </span>
            </div>

            {/* Stat 3 */}
            <div className="pl-6 flex flex-col">
              <span className="font-mono text-3xl font-bold tracking-tight text-white">
                12h
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted/60 mt-1.5">
                ENDURANCE
              </span>
            </div>

            {/* Stat 4 */}
            <div className="pl-6 flex flex-col">
              <span className="font-mono text-3xl font-bold tracking-tight text-white">
                AES-256
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted/60 mt-1.5">
                ENCRYPTED
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
