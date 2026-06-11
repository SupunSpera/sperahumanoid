"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  const pillars = [
    { title: "Reduce", suffix: ".", desc: "human exposure to risk" },
    { title: "Extend", suffix: ".", desc: "operational visibility" },
    { title: "React", suffix: ".", desc: "with consistent presence" },
    { title: "Evolve", suffix: ".", desc: "through modular upgrades" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative py-24 bg-black border-b border-white/[0.04] overflow-hidden">
      {/* Background glow dots */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-cyan/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Side Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
                MISSION
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Designed for Security, Built to<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-brand-cyan/60">
                  Evolve.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-text-muted font-sans text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Spera Humanoids exists to stand where humans should not have to — in restricted perimeters, 
                high-risk corridors, and environments where presence, perception and response time define the outcome.
              </p>
              <p>
                Our humanoid platform reduces operator risk, extends visibility, and brings an always-on 
                layer of intelligent presence to security and defense operations.
              </p>
              <p>
                Every system is engineered to evolve — modular hardware, upgradable AI, and a deployment 
                program that grows with the mission requirements.
              </p>
            </div>
          </div>

          {/* Right Side Matrix Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded overflow-hidden">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="bg-dark-bg p-8 flex flex-col justify-between min-h-[160px] transition-all duration-350 hover:bg-panel-bg group cursor-default"
              >
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                    <span className="text-brand-cyan group-hover:glow-cyan transition-all duration-300">
                      {pillar.suffix}
                    </span>
                  </h3>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-text-muted mt-4 group-hover:text-white transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
