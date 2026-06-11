"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Mic, 
  Radio, 
  Scan, 
  UserCheck, 
  Move, 
  Tv, 
  ShieldAlert,
  Sliders
} from "lucide-react";

export default function Capabilities() {
  const list = [
    {
      icon: Shield,
      title: "Patrol & Monitoring",
      desc: "Autonomous patrol routes across mapped facilities and perimeters.",
    },
    {
      icon: Eye,
      title: "Security Presence",
      desc: "Visible, deterrent humanoid presence in sensitive zones.",
    },
    {
      icon: Mic,
      title: "AI Voice Interaction",
      desc: "Real-time conversation, alerts, and on-site instructions.",
    },
    {
      icon: Radio,
      title: "Remote Operation",
      desc: "Full operator takeover with low-latency encrypted control.",
    },
    {
      icon: Scan,
      title: "Object Recognition",
      desc: "Vision-based identification of objects, vehicles, threats.",
    },
    {
      icon: UserCheck,
      title: "Human Detection",
      desc: "Detects, tracks and classifies people in restricted zones.",
    },
    {
      icon: Sliders,
      title: "Motion-Capture Control",
      desc: "Hands and arms drivable via operator mocap glove.",
    },
    {
      icon: Move,
      title: "Omni Movement",
      desc: "Forward, sideways and backward gait for tight spaces.",
    },
    {
      icon: Tv,
      title: "Surveillance Integration",
      desc: "Streams into existing CCTV and SOC environments.",
    },
    {
      icon: ShieldAlert,
      title: "High-Risk Support",
      desc: "Reduces human exposure in defense and critical operations.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="capabilities" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-cyan/[0.01] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            CORE CAPABILITIES
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Every Function. Engineered for the<br />Field.
          </h2>
        </div>

        {/* Grid Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded overflow-hidden"
        >
          {list.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-dark-bg p-8 hover:bg-panel-bg/80 transition-all duration-300 group flex flex-col justify-between min-h-[200px] border-b border-r border-white/[0.02] last:border-0 cursor-default hover:box-glow-cyan"
              >
                <div>
                  <div className="w-10 h-10 rounded border border-brand-cyan/20 bg-brand-cyan/[0.03] flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan group-hover:bg-brand-cyan/10 transition-all duration-300">
                    <Icon size={18} className="transition-transform group-hover:scale-110" />
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="font-sans text-sm uppercase tracking-wider font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed group-hover:text-white/95 transition-colors">
                    {item.desc}
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
