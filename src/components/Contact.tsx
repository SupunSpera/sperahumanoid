"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Terminal, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "Investor",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [progressLog, setProgressLog] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateTransmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email and Message fields.");
      return;
    }

    setStatus("sending");
    setProgressLog([]);

    const logs = [
      "INITIALIZING SECURE PROTOCOL...",
      "ESTABLISHING TRIPLE-DES HANDSHAKE...",
      "ENCRYPTING TRANSMISSION BODY...",
      "UPLOADING INQUIRY ROUTE SPEC...",
      "TRANSMISSION COMPLETED SUCCESSFULLY.",
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setProgressLog((prev) => [...prev, logs[i]]);
    }

    setStatus("success");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      inquiryType: "Investor",
      message: "",
    });
    setStatus("idle");
    setProgressLog([]);
  };

  return (
    <section id="contact" className="relative py-24 bg-black border-b border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-cyan/[0.015] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-cyan flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-brand-cyan inline-block" />
                CONTACT
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Open a Channel.
              </h2>
              <p className="font-sans text-base md:text-lg text-text-muted/80 leading-relaxed">
                For partnership, pilot deployment, and investor inquiries.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-brand-cyan mt-1 bg-black/40">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted/60 block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:info@speralabs.com"
                    className="font-sans text-sm font-semibold text-white hover:text-brand-cyan transition-colors mt-0.5 block"
                  >
                    info@speralabs.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-brand-cyan mt-1 bg-black/40">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted/60 block">
                    OPERATIONS
                  </span>
                  <a
                    href="tel:(+94) 112 144 533"
                    className="font-sans text-sm font-semibold text-white hover:text-brand-cyan transition-colors mt-0.5 block"
                  >
                    (+94) 112 144 533
                  </a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-brand-cyan mt-1 bg-black/40">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted/60 block">
                    HEADQUARTERS
                  </span>
                  <span className="font-sans text-sm font-semibold text-white mt-0.5 block">
                    Spera Labs — Research & Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-panel-bg/40 border border-white/[0.06] rounded p-8 md:p-10 relative overflow-hidden">
            {status === "idle" && (
              <form onSubmit={simulateTransmission} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-cyan transition-colors py-2">
                    <label className="font-mono text-[8px] uppercase tracking-wider text-text-muted/60 block mb-1">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter full name"
                      className="w-full bg-transparent border-0 outline-hidden focus:ring-0 text-sm text-white placeholder-text-muted/30 p-0"
                    />
                  </div>

                  {/* Organization Input */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-cyan transition-colors py-2">
                    <label className="font-mono text-[8px] uppercase tracking-wider text-text-muted/60 block mb-1">
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      className="w-full bg-transparent border-0 outline-hidden focus:ring-0 text-sm text-white placeholder-text-muted/30 p-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-cyan transition-colors py-2">
                    <label className="font-mono text-[8px] uppercase tracking-wider text-text-muted/60 block mb-1">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter email address"
                      className="w-full bg-transparent border-0 outline-hidden focus:ring-0 text-sm text-white placeholder-text-muted/30 p-0"
                    />
                  </div>

                  {/* Inquiry Type Select */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-cyan transition-colors py-2">
                    <label className="font-mono text-[8px] uppercase tracking-wider text-text-muted/60 block mb-1">
                      INQUIRY TYPE
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 outline-hidden focus:ring-0 text-sm text-white p-0 cursor-pointer select-none"
                    >
                      <option value="Investor" className="bg-panel-bg text-white">Investor</option>
                      <option value="Defense" className="bg-panel-bg text-white">Defense</option>
                      <option value="Security" className="bg-panel-bg text-white">Security</option>
                      <option value="Research" className="bg-panel-bg text-white">Research</option>
                    </select>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="relative border-b border-white/10 focus-within:border-brand-cyan transition-colors py-2">
                  <label className="font-mono text-[8px] uppercase tracking-wider text-text-muted/60 block mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Provide details about your transmission"
                    className="w-full bg-transparent border-0 outline-hidden focus:ring-0 text-sm text-white placeholder-text-muted/30 p-0 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-wider text-white bg-brand-cyan/20 border border-brand-cyan/40 hover:bg-brand-cyan hover:text-black hover:border-brand-cyan px-8 py-4 rounded-sm font-bold transition-all duration-300 cursor-pointer box-glow-cyan"
                  >
                    <span>Send Transmission</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}

            {/* Simulated Transmission Console (Sending / Success state) */}
            {status !== "idle" && (
              <div className="flex flex-col h-[360px] bg-black/80 rounded border border-brand-cyan/20 p-6 font-mono text-xs text-brand-cyan justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 pb-2 border-b border-brand-cyan/15">
                    <Terminal size={14} className="animate-pulse" />
                    <span className="font-bold tracking-wider">SPERA SECURE CONSOLE</span>
                  </div>

                  <div className="space-y-1.5 max-h-[240px] overflow-y-auto pt-2">
                    {progressLog.map((log, i) => (
                      <div key={i} className="flex items-start">
                        <span className="mr-2 text-brand-cyan/45">{">"}</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    {status === "sending" && (
                      <div className="flex items-center space-x-2 pt-1 animate-blink-slow">
                        <span className="mr-2 text-brand-cyan/45">{">"}</span>
                        <span className="w-2 h-4 bg-brand-cyan inline-block" />
                      </div>
                    )}
                  </div>
                </div>

                {status === "success" && (
                  <div className="border-t border-brand-cyan/15 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center space-x-2 text-white font-bold">
                      <AlertCircle size={14} className="text-brand-cyan" />
                      <span>SECURE CHANNEL SUBMITTED.</span>
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/25 hover:bg-brand-cyan hover:text-black font-bold uppercase tracking-wider text-[10px] rounded transition-all cursor-pointer"
                    >
                      New Transmission
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
