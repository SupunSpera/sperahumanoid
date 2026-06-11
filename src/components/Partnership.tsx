"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Partnership() {
  const partners = [
    {
      title: "Investors",
      desc: "Strategic capital for the next phase.",
      dotColor: "bg-amber-500",
    },
    {
      title: "Defense Partners",
      desc: "Joint programs and field trials.",
      dotColor: "bg-brand-cyan",
    },
    {
      title: "Security Operators",
      desc: "Pilot deployments at scale.",
      dotColor: "bg-brand-red",
    },
    {
      title: "Research Institutions",
      desc: "Co-development & validation.",
      dotColor: "bg-emerald-500",
    },
  ];

  return (
    <section className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-brand-cyan/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
                PARTNERSHIP / INVESTOR
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Building the Future of Security Robotics.
              </h2>
            </div>
            
            <p className="font-sans text-base md:text-lg text-text-muted/80 leading-relaxed">
              Spera is opening selected conversations with investors, defense partners, 
              security companies, research institutions, and deployment partners.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider text-black bg-white px-6 py-3.5 rounded-xs font-bold hover:bg-brand-cyan hover:scale-102 transition-all duration-300 cursor-pointer box-glow-cyan"
              >
                Contact Spera <span className="ml-1.5">→</span>
              </a>
            </div>
          </div>

          {/* Right Side Partner Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded overflow-hidden">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-dark-bg p-8 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:bg-panel-bg group cursor-default"
              >
                <div className="flex items-center space-x-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${partner.dotColor} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-sans text-sm uppercase tracking-wider font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                    {partner.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <p className="font-sans text-xs text-text-muted leading-relaxed group-hover:text-white/90 transition-colors">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
