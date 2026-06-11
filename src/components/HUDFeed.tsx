"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Cpu } from "lucide-react";

interface HUDStat {
  value: string;
  label: string;
}

interface HUDFeedProps {
  label: string;
  subLabel?: string;
  bgImage?: string;
  videoUrl?: string;
  hidePlayButton?: boolean;
  stats?: HUDStat[];
}

export default function HUDFeed({ label, subLabel = "SPERA-H1 - 0622", bgImage, videoUrl, hidePlayButton = false, stats }: HUDFeedProps) {
  const [isPlaying, setIsPlaying] = useState(hidePlayButton || false);
  const [telemetry, setTelemetry] = useState({
    lat: 34.0522,
    lng: -118.2437,
    fps: 0,
    bitrate: 0,
    lockCount: 0,
    cpuTemp: 42.5,
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Control video element playback state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(err => {
        console.warn("Video play failed or interrupted:", err);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlaying]);

  // Handle auto-play behavior when hidePlayButton is active
  useEffect(() => {
    if (hidePlayButton) {
      setIsPlaying(true);
      setTelemetry(prev => ({
        ...prev,
        fps: 60,
        bitrate: 8.4,
        lockCount: Math.floor(Math.random() * 4) + 1,
      }));
    }
  }, [hidePlayButton]);

  // Toggle play state and set initial playing state
  const handlePlayToggle = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);

    if (nextPlaying) {
      setTelemetry(prev => ({
        ...prev,
        fps: 60,
        bitrate: 8.4,
        lockCount: Math.floor(Math.random() * 4) + 1,
      }));
    } else {
      setTelemetry(prev => ({
        ...prev,
        fps: 0,
        bitrate: 0,
        lockCount: 0,
      }));
    }
  };

  // Telemetry updates inside interval loop (safely run while playing)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTelemetry(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001,
        fps: 58 + Math.floor(Math.random() * 5),
        bitrate: parseFloat((8.2 + Math.random() * 0.6).toFixed(1)),
        lockCount: Math.floor(Math.random() * 4) + 1,
        cpuTemp: parseFloat((41.0 + Math.random() * 4).toFixed(1)),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Draw HUD overlays on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resizeObserver = new ResizeObserver(() => {
      if (canvas && canvas.offsetWidth) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    });
    resizeObserver.observe(canvas);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      if (isPlaying) {
        // Draw cyber grid
        ctx.strokeStyle = "rgba(0, 240, 255, 0.03)";
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Draw crosshair in the center
        const cx = width / 2;
        const cy = height / 2;
        ctx.strokeStyle = "rgba(0, 240, 255, 0.25)";
        ctx.lineWidth = 1.5;

        // Center reticle
        ctx.beginPath();
        ctx.arc(cx, cy, 30, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
        ctx.fill();

        // Crosshair lines
        ctx.beginPath();
        ctx.moveTo(cx - 50, cy); ctx.lineTo(cx - 38, cy);
        ctx.moveTo(cx + 38, cy); ctx.lineTo(cx + 50, cy);
        ctx.moveTo(cx, cy - 50); ctx.lineTo(cx, cy - 38);
        ctx.moveTo(cx, cy + 38); ctx.lineTo(cx, cy + 50);
        ctx.stroke();

        // Draw HUD brackets
        const padding = 20;
        const size = 15;
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;

        // Top Left Bracket
        ctx.beginPath();
        ctx.moveTo(padding + size, padding); ctx.lineTo(padding, padding); ctx.lineTo(padding, padding + size);
        ctx.stroke();

        // Top Right Bracket
        ctx.beginPath();
        ctx.moveTo(width - padding - size, padding); ctx.lineTo(width - padding, padding); ctx.lineTo(width - padding, padding + size);
        ctx.stroke();

        // Bottom Left Bracket
        ctx.beginPath();
        ctx.moveTo(padding + size, height - padding); ctx.lineTo(padding, height - padding); ctx.lineTo(padding, height - padding + size);
        ctx.stroke();

        // Bottom Right Bracket
        ctx.beginPath();
        ctx.moveTo(width - padding - size, height - padding); ctx.lineTo(width - padding, height - padding); ctx.lineTo(width - padding, height - padding + size);
        ctx.stroke();



        // Camera Static / Noise lines (random horizontal glitches)
        if (Math.random() < 0.08) {
          ctx.fillStyle = "rgba(0, 240, 255, 0.04)";
          ctx.fillRect(0, Math.random() * height, width, 2 + Math.random() * 4);
        }

        // Blinking recording banner
        if (Math.floor(frame / 30) % 2 === 0) {
          ctx.fillStyle = "rgba(255, 62, 62, 0.85)";
          ctx.beginPath();
          ctx.arc(45, 30, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Off State: Overlay scanning visualizer pattern
        ctx.fillStyle = "rgba(3, 4, 6, 0.35)";
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="relative group border border-brand-cyan/10 bg-dark-bg/60 rounded overflow-hidden flex flex-col w-full h-full">
      {/* Background image / canvas wrapper */}
      <div className="relative flex-grow min-h-[260px] md:min-h-[300px] overflow-hidden flex items-center justify-center bg-black">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={`${videoUrl}#t=0.1`}
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-contain select-none transition-all duration-700 ${
              isPlaying ? "opacity-60" : "opacity-20 filter grayscale"
            }`}
          />
        ) : bgImage ? (
          <Image
            src={bgImage}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-700 ${
              isPlaying ? "scale-105 opacity-60" : "scale-100 opacity-20 filter grayscale"
            }`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-panel-bg via-black to-dark-bg opacity-75" />
        )}

        {/* The canvas overlay */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

        {/* Tech scanline overlay */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-transparent via-brand-cyan/[0.03] to-transparent animate-scanline" />
        )}

        {/* Intercom signal text / standby screen */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center select-none">
            <p className="font-mono text-xs text-brand-cyan/40 tracking-[0.2em] mb-2 uppercase animate-blink-slow">
              SIGNAL LINK STANDBY
            </p>
            <p className="font-mono text-[9px] text-text-muted/40 uppercase">
              Click play to initialize feed transmission
            </p>
          </div>
        )}

        {/* Live status indicators */}
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-4 select-none">
          <div className="flex items-center space-x-2 bg-black/60 border border-brand-cyan/20 px-2.5 py-1 rounded-sm backdrop-blur-xs">
            <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-brand-red animate-ping" : "bg-brand-cyan/50"}`} />
            <span className="font-mono text-[9px] text-white font-bold tracking-wider uppercase">
              {isPlaying ? "REC • LIVE" : "STDBY"}
            </span>
          </div>
          <span className="font-mono text-[9px] text-text-muted/60 tracking-wider">
            {subLabel}
          </span>
        </div>

        {/* Live telemetry coordinates overlay */}
        {isPlaying && (
          <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-brand-cyan/70 space-y-1 bg-black/50 p-2 rounded border border-brand-cyan/10 backdrop-blur-xs select-none">
            <div>LAT: {telemetry.lat.toFixed(6)}</div>
            <div>LNG: {telemetry.lng.toFixed(6)}</div>
            <div className="flex items-center space-x-2">
              <Cpu size={10} className="text-brand-cyan" />
              <span>TEMP: {telemetry.cpuTemp}°C</span>
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] text-brand-cyan/70 text-right space-y-1 bg-black/50 p-2 rounded border border-brand-cyan/10 backdrop-blur-xs select-none">
            <div>FPS: {telemetry.fps}</div>
            <div>RATE: {telemetry.bitrate} Mbps</div>
            <div className="text-brand-red font-bold">LOCK: {telemetry.lockCount} DETECTED</div>
          </div>
        )}

        {/* Play/Pause Button overlay */}
        {!hidePlayButton && (
          <button
            onClick={handlePlayToggle}
            aria-label={isPlaying ? "Pause feed" : "Play feed"}
            className={`z-30 w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 backdrop-blur-xs ${
              isPlaying
                ? "bg-black/30 border-brand-cyan/40 hover:bg-black/60 text-brand-cyan scale-95"
                : "bg-brand-cyan/10 border-brand-cyan/30 hover:border-brand-cyan hover:scale-110 text-white cursor-pointer box-glow-cyan"
            }`}
          >
            {isPlaying ? <Pause size={24} className="fill-brand-cyan" /> : <Play size={24} className="ml-1 fill-white" />}
          </button>
        )}
      </div>

      {/* Description / Metadata footer bar of HUD */}
      <div className="bg-panel-bg border-t border-brand-cyan/10 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-white mb-0.5">
            {label}
          </h4>
          <p className="text-[10px] text-text-muted font-mono tracking-wide">
            TRANSMISSION STATE: {isPlaying ? "ACTIVE" : "DISCONNECTED"}
          </p>
        </div>

        {/* Optional Stats section */}
        {stats && stats.length > 0 && (
          <div className="flex items-center space-x-6 border-l border-brand-cyan/10 pl-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-xs font-mono font-bold text-brand-cyan">{stat.value}</div>
                <div className="text-[8px] font-mono uppercase text-text-muted tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
