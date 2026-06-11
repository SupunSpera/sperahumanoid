"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HUDFeed from "./HUDFeed";

export default function RobotPlatform() {
  const specs = [
    { label: "HEIGHT", value: "1.78 m" },
    { label: "MOBILITY", value: "Bipedal — forward, sideways, backward" },
    { label: "CONTROL", value: "Autonomous + remote operator" },
    { label: "AI INTERACTION", value: "Voice + visual recognition" },
    { label: "CAMERAS", value: "4K stereo + thermal optional" },
    { label: "SENSORS", value: "LiDAR — IMU — proximity array" },
    { label: "ARM CONFIG", value: "7-DoF — motion-capture compatible" },
    { label: "NAVIGATION", value: "Pre-mapped + dynamic routing" },
  ];

  const hudStats = [
    { value: "1.4m/s", label: "WALK VELOCITY" },
    { value: "98.4%", label: "GAIT STABILITY" },
    { value: "50ms", label: "STEP FREQ" },
  ];

  return (
    <section id="robot-platform" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background neon blur */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-brand-cyan/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            THE ROBOT
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Spera H-1 Humanoid Platform
          </h2>
          <p className="font-sans text-base md:text-lg text-text-muted/80 max-w-xl leading-relaxed">
            A single, purpose-built humanoid robot. Engineered end-to-end for security 
            and defense operations.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 min-h-[500px] lg:min-h-0 bg-black border border-white/[0.06] rounded relative overflow-hidden group"
          >
            <Image
              src="/spera-h1-portrait.png"
              alt="Spera H-1 Humanoid Platform Robot Standing Full Body"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover select-none transition-transform duration-500 group-hover:scale-103"
            />
            
            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-mono text-[10px] text-brand-cyan uppercase tracking-[0.25em] font-medium block">
                UNIT
              </span>
            </div>
          </motion.div>

          {/* Right Column: Descriptions, Specs Grid & Walking Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            {/* Description copy */}
            <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
              The H-1 is a bipedal humanoid robot built from the ground up for security presence, 
              patrol, and operator-supported response. It walks, observes, communicates and reacts 
              — and a human operator can take control at any moment.
            </p>

            {/* Specs & Video Feed Sub-grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch border-t border-b border-white/[0.06] py-6 my-2">
              {/* Specs Column */}
              <div className="grid grid-cols-1 gap-4 justify-between h-full pr-0 md:pr-6 md:border-r border-white/[0.06]">
                {specs.map((spec) => (
                  <div key={spec.label} className="border-b border-white/[0.03] pb-3 last:border-0">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-cyan/60 block">
                      {spec.label}
                    </span>
                    <span className="font-sans text-xs font-semibold text-white mt-1 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Video Feed Column */}
              <div className="flex flex-col justify-center h-full min-h-[300px]">
                <HUDFeed
                  label="ROBOT WALKING — MOVEMENT DEMO"
                  subLabel="H-H1 — SPERA-H1 — 0622"
                  bgImage="/spera-corporate-patrol.png"
                  videoUrl="/spera-walking.mp4"
                  stats={hudStats}
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
