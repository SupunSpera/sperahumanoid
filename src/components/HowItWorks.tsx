"use client";

import React, { useState, useEffect } from "react";
import HUDFeed from "./HUDFeed";

interface Step {
  num: string;
  title: string;
  desc: string;
  consoleMsg: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Mission Issued",
      desc: "Robot receives mission parameters or patrol instruction from the operator console.",
      consoleMsg: "LINK BIND: UPLOADING FLIGHT & PATROL VECTORS...",
    },
    {
      num: "02",
      title: "Environment Traversal",
      desc: "H-1 moves through the environment using pre-mapped routes and dynamic local navigation.",
      consoleMsg: "PATHFINDING: KINEMATIC RESOLVER ACTIVE. GAIT STABILIZED.",
    },
    {
      num: "03",
      title: "Perception",
      desc: "Sensors and cameras observe surroundings, scanning for anomalous events and objects.",
      consoleMsg: "PERCEPTION SYSTEM: SCANNING LIDAR & THERMAL MATRIX...",
    },
    {
      num: "04",
      title: "AI Layer",
      desc: "On-device AI localizes detection, supports communication and decision-support logic.",
      consoleMsg: "COGNITIVE LAYER: LOCAL INFERENCE RUNNING (LLM ALIGN).",
    },
    {
      num: "05",
      title: "Operator Override",
      desc: "A human operator can take remote control at any moment for high-stakes response.",
      consoleMsg: "OVERRIDE LINK: WEARABLE CONTROLLER READY FOR CAPTURE.",
    },
    {
      num: "06",
      title: "Record & Review",
      desc: "Every event is captured, encrypted locally, and synced for after-action review.",
      consoleMsg: "TELEMETRY SYNC: ARCHIVING LOGS OVER AES-256 LINK.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle steps if user is not hovering or interacting
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, steps.length]);

  const consoleStats = [
    { value: "14ms", label: "CONTROL LATENCY" },
    { value: "4K", label: "STREAM QUALITY" },
    { value: "AES-256", label: "LINK ENCRYPTION" },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background glow dot */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-brand-red/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
            HOW IT WORKS
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            From Mission to Memory.
          </h2>
          <p className="font-sans text-base md:text-lg text-text-muted/80 max-w-xl leading-relaxed">
            Six stages — from operator command to recorded intelligence.
          </p>
        </div>

        {/* Layout: Interactive List on Left, Console Feed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline / Stepper on Left */}
          <div 
            className="lg:col-span-6 space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {steps.map((step, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 rounded border transition-all duration-300 flex items-start space-x-6 cursor-pointer ${
                    isActive
                      ? "bg-panel-bg border-brand-cyan/35 box-glow-cyan"
                      : "bg-transparent border-transparent hover:bg-panel-bg/40 hover:border-white/5"
                  }`}
                >
                  {/* Number */}
                  <span className={`font-mono text-lg font-bold tracking-wider ${
                    isActive ? "text-brand-cyan" : "text-text-muted/40"
                  }`}>
                    {step.num}
                  </span>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <h3 className={`font-sans text-sm uppercase tracking-wider font-extrabold ${
                      isActive ? "text-white" : "text-text-muted/80"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`font-sans text-xs leading-relaxed ${
                      isActive ? "text-text-muted" : "text-text-muted/50"
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Console Live Feed Widget on Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="border border-white/[0.06] rounded p-1 bg-black/60 relative">
              <div className="absolute top-8 left-10 z-30 pointer-events-none select-none font-mono text-[10px] text-brand-cyan px-2 py-0.5 bg-black/80 rounded border border-brand-cyan/20 animate-pulse">
                STATUS: {steps[activeIdx].consoleMsg}
              </div>

              <HUDFeed
                label="OPERATOR CONTROL — CONSOLE VIEW"
                subLabel={`SYS_STEP — SPERA_STEP_${steps[activeIdx].num}`}
                stats={consoleStats}
              />
            </div>
            
            <p className="font-mono text-[9px] text-text-muted/40 text-center mt-3 uppercase tracking-widest select-none">
              HUD telemetry updates in sync with active operation stage
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
