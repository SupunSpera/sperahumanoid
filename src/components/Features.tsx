"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Camera, 
  Volume2, 
  Brain, 
  Radio, 
  Calendar, 
  Cpu, 
  Terminal, 
  Palette, 
  Award,
  ArrowUpRight
} from "lucide-react";

export default function Features() {
  const options = [
    {
      icon: Camera,
      title: "Camera Module",
      desc: "Multi-spectrum optics, optional thermal sensors.",
    },
    {
      icon: Volume2,
      title: "Audio Communication",
      desc: "Two-way directional speaker and mic array.",
    },
    {
      icon: Brain,
      title: "AI Voice Assistant",
      desc: "On-device LLM running customized security command sets.",
    },
    {
      icon: Radio,
      title: "Remote Control",
      desc: "Encrypted low-latency operator console takeover.",
    },
    {
      icon: Calendar,
      title: "Autonomous Patrol",
      desc: "Schedule operational routes, zones, and safety behaviors.",
    },
    {
      icon: Cpu,
      title: "Sensor Upgrades",
      desc: "LiDAR, thermal, chemical, and RF scanning add-ons.",
    },
    {
      icon: Terminal,
      title: "Custom Software",
      desc: "Full integration with existing security and SOC stacks.",
    },
    {
      icon: Palette,
      title: "Custom Branding",
      desc: "Body finish, identifiers, and customized livery program.",
    },
    {
      icon: Award,
      title: "Deployment Training",
      desc: "On-site operator and security operations enablement.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/2 w-[300px] h-[300px] bg-brand-cyan/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            FEATURES & OPTIONS
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Configure Your H-1.
          </h2>
          <p className="font-sans text-base md:text-lg text-text-muted/80 max-w-xl leading-relaxed">
            Modular hardware, configurable software, custom deployment.
          </p>
        </div>

        {/* 3x3 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                variants={cardVariants}
                className="bg-panel-bg/40 border border-white/[0.06] hover:border-brand-cyan/20 p-8 rounded flex flex-col justify-between min-h-[200px] transition-all duration-350 hover:bg-panel-bg group cursor-pointer hover:box-glow-cyan"
              >
                {/* Card Top */}
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded border border-white/[0.08] flex items-center justify-center text-text-muted group-hover:text-brand-cyan group-hover:border-brand-cyan/20 bg-black/40 transition-colors duration-300">
                    <Icon size={16} />
                  </div>
                  <div className="text-text-muted/40 group-hover:text-brand-cyan transition-colors duration-300">
                    <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="mt-8 space-y-2">
                  <h3 className="font-sans text-sm uppercase tracking-wider font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                    {option.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed group-hover:text-white/95 transition-colors">
                    {option.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
