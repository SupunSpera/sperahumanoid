"use client";

import React from "react";
import { motion } from "framer-motion";
import HUDFeed from "./HUDFeed";

export default function VideoGallery() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="gallery" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background glow dots */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-brand-cyan/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-red/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            VIDEO GALLERY
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            The H-1 in Motion.
          </h2>
          <p className="font-sans text-base md:text-lg text-text-muted/80 max-w-xl leading-relaxed">
            Cinematic field captures and lab demonstrations.
          </p>
        </div>

        {/* Video Feeds Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Row 1: Large Walking Demo & Two Stacked Side/Backward Feeds */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Walking Demo (Large) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col h-full">
              <HUDFeed
                label="WALKING DEMO"
                subLabel="H-H1 — SPERA-H1 — 9267"
                bgImage="/spera-corporate-patrol.png"
              />
            </motion.div>

            {/* Right Stacked Feeds */}
            <div className="flex flex-col gap-6 justify-between h-full">
              <motion.div variants={itemVariants} className="flex-grow">
                <HUDFeed
                  label="SIDE MOVEMENT DEMO"
                  subLabel="H-H1 — SPERA-H1 — 8607"
                  bgImage="/spera-side-movement.png"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="flex-grow">
                <HUDFeed
                  label="BACKWARD MOVEMENT DEMO"
                  subLabel="H-H1 — SPERA-H1 — 7553"
                  bgImage="/spera-backward-movement.png"
                />
              </motion.div>
            </div>
          </div>

          {/* Row 2: Arm & Hand Motion, Human Interaction, Security Patrol */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <HUDFeed
                label="ARM & HAND MOTION"
                subLabel="H-H1 — SPERA-H1 — 2982"
                bgImage="/spera-arm-motion.png"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <HUDFeed
                label="HUMAN INTERACTION"
                subLabel="H-H1 — SPERA-H1 — 5876"
                bgImage="/spera-human-interaction.png"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <HUDFeed
                label="SECURITY PATROL"
                subLabel="H-H1 — SPERA-H1 — 9128"
                bgImage="/spera-security-patrol.png"
              />
            </motion.div>
          </div>

          {/* Row 3: Operator Control (Left aligned) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="hidden md:block md:col-span-2 pointer-events-none border border-dashed border-white/[0.02] rounded flex items-center justify-center p-6 bg-transparent">
              <span className="font-mono text-[9px] text-text-muted/10 tracking-[0.3em] uppercase">
                SPERA SYSTEMS SECURED // LINK CHANNELS [08-09] UNASSIGNED
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
