"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechnicalDirection() {
  const disciplines = [
    "ROBOTICS",
    "AI",
    "EMBEDDED SYSTEMS",
    "PERCEPTION",
    "MECHANICAL MOTION",
    "FIELD TRAINING",
  ];

  return (
    <section className="relative py-24 bg-black border-b border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Centered Tag with borders */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <div className="flex-grow h-px bg-linear-to-r from-transparent to-brand-cyan/20" />
          <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-brand-cyan uppercase whitespace-nowrap">
            TECHNICAL DIRECTION
          </span>
          <div className="flex-grow h-px bg-linear-to-l from-transparent to-brand-cyan/20" />
        </div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="space-y-10"
        >
          <blockquote className="font-sans text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed max-w-4xl mx-auto tracking-wide">
            &quot;This humanoid platform combines robotics engineering, AI interaction, 
            embedded systems, mechanical motion, camera-based perception, and 
            real-world training to become a practical security and defense robot.&quot;
          </blockquote>

          {/* Bottom Disciplines List */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-center pt-2">
            {disciplines.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="font-mono text-[9px] font-bold tracking-wider text-text-muted hover:text-brand-cyan transition-colors cursor-default">
                  {item}
                </span>
                {idx < disciplines.length - 1 && (
                  <span className="text-brand-cyan/40 font-mono text-[9px]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Bottom spacer line */}
        <div className="h-px bg-linear-to-r from-transparent via-white/[0.06] to-transparent mt-16" />

      </div>
    </section>
  );
}
