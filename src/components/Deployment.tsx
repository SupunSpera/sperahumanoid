"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Deployment() {
  const cases = [
    {
      num: "01",
      title: "Military Facility Support",
      desc: "Restricted-zone presence and perimeter monitoring.",
    },
    {
      num: "02",
      title: "Border & Restricted Areas",
      desc: "Surveillance of remote and high-risk territory.",
    },
    {
      num: "03",
      title: "Police Support",
      desc: "On-scene observation and tactical response assistance.",
    },
    {
      num: "04",
      title: "Shopping Malls",
      desc: "Visible deterrent presence in large commercial centers.",
    },
    {
      num: "05",
      title: "Airports & Transport",
      desc: "Patrol of terminals, gates, and high-traffic transit hubs.",
    },
    {
      num: "06",
      title: "Event Security",
      desc: "Crowd presence and monitoring at large-scale public events.",
    },
    {
      num: "07",
      title: "Corporate Buildings",
      desc: "After-hours patrol of headquarters and secure data centers.",
    },
    {
      num: "08",
      title: "Emergency Response",
      desc: "Forward reconnaissance in hazardous or unstable zones.",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="use-cases" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/[0.01] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            SECURITY & DEFENSE
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Deployed Where It Matters.
          </h2>
        </div>

        {/* Use-Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded overflow-hidden"
        >
          {cases.map((useCase) => (
            <motion.div
              key={useCase.num}
              variants={cardVariants}
              className="bg-dark-bg p-8 hover:bg-panel-bg/75 transition-all duration-300 group flex flex-col justify-between min-h-[190px] cursor-default border-b border-r border-white/[0.01]"
            >
              {/* Card Header Tag */}
              <div className="font-mono text-[9px] text-brand-cyan/60 tracking-wider">
                USE-CASE / {useCase.num}
              </div>

              {/* Text */}
              <div className="space-y-2 mt-8">
                <h3 className="font-sans text-sm uppercase tracking-wider font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                  {useCase.title}
                </h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed group-hover:text-white/95 transition-colors">
                  {useCase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
