import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle, Flame, Snowflake, ShieldCheck, Cpu, RefreshCw, Gauge, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FactoryVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isSimulatingCycle, setIsSimulatingCycle] = useState(false);
  const [simStep, setSimStep] = useState(0); // 0: Idle, 1: Hot Press (0.8s), 2: Cold Lock, 3: Weld Complete
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Video play fallback", err);
        setVideoError(true);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Interactive 0.8s Sealing Cycle Simulator with Gauges
  const startSimulation = () => {
    if (isSimulatingCycle) return;
    setIsSimulatingCycle(true);
    setSimStep(1); // Step 1: Hot press

    // 0.8s Hot Press Duration
    setTimeout(() => {
      setSimStep(2); // Step 2: Cold Quench Lock
      setTimeout(() => {
        setSimStep(3); // Step 3: Weld 100% Complete
        setTimeout(() => {
          setIsSimulatingCycle(false);
          setSimStep(0);
        }, 3000);
      }, 1100);
    }, 850);
  };

  return (
    <section id="factory-tour" className="py-20 md:py-28 bg-slate-100 dark:bg-gradient-to-b dark:from-navy-950 dark:via-slate-900 dark:to-navy-950 text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-slate-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{siteData.factoryShowcase.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {siteData.factoryShowcase.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {siteData.factoryShowcase.description}
          </p>
        </div>

        {/* Video & 2-Step Precision Sealing Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cinema-Style Video Container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden bg-navy-950 border border-slate-300 dark:border-white/[0.12] shadow-2xl group">
              
              {/* Technical HUD Overlay on Top */}
              <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-b from-navy-950/95 via-navy-950/70 to-transparent flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-slate-100 tracking-wider">
                    FACILITY LIVE CAM • 12 LINES ACTIVE
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-navy-850/90 border border-amber-500/40 text-amber-300 shadow-inner">
                  0.8s HOT PRESS CYCLE
                </span>
              </div>

              {/* Video Player or Interactive Simulation Visual Screen */}
              <div className="relative aspect-video w-full bg-navy-950 flex items-center justify-center">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    src={siteData.factoryShowcase.video.videoUrl}
                    poster={siteData.factoryShowcase.video.posterUrl}
                    playsInline
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Interactive Visual Telemetry when real MP4 is pending */
                  <div className="relative w-full h-full bg-navy-950 p-6 flex flex-col items-center justify-center text-center">
                    <img 
                      src="/assets/bsa-factory-poster.svg" 
                      alt="BSA Packaging Factory Floor Blueprint" 
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="relative z-10 max-w-md p-6 rounded-2xl bg-navy-900/95 border border-white/[0.12] backdrop-blur-xl shadow-2xl">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
                        <Cpu className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <h4 className="font-display text-lg sm:text-xl font-black text-white">
                        Factory Floor &amp; 12 Machines Showcase
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {siteData.factoryShowcase.video.caption}
                      </p>
                      <button
                        onClick={startSimulation}
                        disabled={isSimulatingCycle}
                        className="btn-amber-glow mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase tracking-wide"
                      >
                        <RefreshCw className={`w-4 h-4 ${isSimulatingCycle ? 'animate-spin' : ''}`} />
                        <span>{isSimulatingCycle ? 'WELD CYCLE IN PROGRESS...' : 'TEST 0.8s WELD CYCLE'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Big Center Play Overlay Button */}
                {!isPlaying && !videoError && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-navy-950/40 hover:bg-navy-950/20 transition-all cursor-pointer"
                  >
                    <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-navy-950 ml-1 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Custom Video Controller Bar */}
              <div className="px-4 py-3 bg-navy-950 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-200">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/[0.08] text-amber-400 focus:outline-none"
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-400" />}
                  </button>
                  <button 
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-slate-400 hidden sm:inline font-mono">12 Semi-Auto Lines • Greater Noida (W)</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={startSimulation}
                    className="px-3 py-1 rounded-lg bg-navy-850 hover:bg-navy-800 border border-amber-500/40 text-[11px] font-mono font-bold text-amber-300 hover:text-amber-200 transition-colors shadow-sm"
                  >
                    {simStep > 0 ? 'Testing Cycle...' : 'Test Sealing Cycle'}
                  </button>
                  <button 
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Simulation Status Live Digital Gauge Banner */}
            {simStep > 0 && (
              <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 shadow-xl ${
                simStep === 1 
                  ? 'bg-amber-950/80 border-amber-500 text-amber-200 shadow-amber-500/20' 
                  : simStep === 2 
                  ? 'bg-sky-950/80 border-sky-400 text-sky-200 shadow-sky-500/20' 
                  : 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-emerald-500/20'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {simStep === 1 && <Flame className="w-6 h-6 text-amber-400 animate-bounce" />}
                      {simStep === 2 && <Snowflake className="w-6 h-6 text-sky-400 animate-spin" />}
                      {simStep === 3 && <CheckCircle className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <div>
                      <div className="font-mono font-extrabold text-xs sm:text-sm tracking-wide text-white">
                        {simStep === 1 && 'STEP 01: HIGH-TEMP HOT PRESS (0.8s) — THERMAL FUSION'}
                        {simStep === 2 && 'STEP 02: INSTANT COLD PRESS LOCK — RAPID QUENCH RECRYSTALLIZATION'}
                        {simStep === 3 && 'RESULT: 100% LEAK-PROOF BOND CERTIFIED (ZERO PINHOLES)'}
                      </div>
                      <div className="text-xs opacity-90 font-sans mt-1 text-slate-200">
                        {simStep === 1 && 'Brass jaws pressing pouch laminate & spout boat at 185°C...'}
                        {simStep === 2 && 'Chilled pneumatic clamp locking polymer molecular matrix...'}
                        {simStep === 3 && 'Hydrostatic burst pressure test passed. Ready for liquid filling.'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Digital Telemetry Readouts */}
                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <div className="px-3 py-1.5 rounded-lg bg-navy-950 border border-white/10 font-mono text-center">
                      <span className="text-[10px] text-slate-400 block">TEMP</span>
                      <span className="text-xs font-bold text-amber-400">
                        {simStep === 1 ? '185°C' : simStep === 2 ? '18°C' : '22°C'}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-navy-950 border border-white/10 font-mono text-center">
                      <span className="text-[10px] text-slate-400 block">PRESSURE</span>
                      <span className="text-xs font-bold text-sky-400">6.2 BAR</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Factory Metrics Quick Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {siteData.factoryShowcase.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] text-center shadow-sm group">
                  <div className="font-display text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-navy-950 dark:text-white mt-1">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-tight font-mono">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Signature 2-Step Sealing Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-950 dark:to-navy-900 border-2 border-slate-200 dark:border-white/[0.12] shadow-xl dark:shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-mono text-xs font-black text-amber-700 dark:text-amber-300 tracking-wider uppercase">
                    PROPRIETARY PROCESS
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-850 px-2.5 py-1 rounded border border-slate-200 dark:border-white/[0.08]">
                  2-STEP WELD
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white tracking-tight">
                2-Step Thermal &amp; Cold Press Sealing
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                Standard spouted pouches leak during transit due to uneven heat or rushed manual clamping. BSA Packaging employs an automated 2-step pneumatic cycle on all 12 machines:
              </p>

              {/* Step Sequence Cards */}
              <div className="mt-6 space-y-4">
                
                {/* Step 1 Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-navy-850/80 border border-amber-300 dark:border-amber-500/40 hover:border-amber-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-800 dark:text-amber-300 flex items-center justify-center font-mono font-black text-sm border border-amber-400 dark:border-amber-500/30">
                        01
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-navy-950 dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[0].title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
                          {siteData.factoryShowcase.sealingSteps[0].time}
                        </span>
                      </div>
                    </div>
                    <Flame className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <p className="mt-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {siteData.factoryShowcase.sealingSteps[0].desc}
                  </p>
                </div>

                {/* Step 2 Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 dark:bg-navy-850/80 border border-sky-300 dark:border-sky-500/40 hover:border-sky-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-800 dark:text-sky-300 flex items-center justify-center font-mono font-black text-sm border border-sky-400 dark:border-sky-500/30">
                        02
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-navy-950 dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[1].title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
                          {siteData.factoryShowcase.sealingSteps[1].time}
                        </span>
                      </div>
                    </div>
                    <Snowflake className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <p className="mt-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {siteData.factoryShowcase.sealingSteps[1].desc}
                  </p>
                </div>

                {/* Result Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-mono font-black text-sm border border-emerald-400 dark:border-emerald-500/40">
                        OK
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-navy-950 dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[2].title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          Zero Seam Failure
                        </span>
                      </div>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="mt-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {siteData.factoryShowcase.sealingSteps[2].desc}
                  </p>
                </div>

              </div>

              {/* Call to Action Inside Card */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Test weld on your pouch film:</span>
                <a
                  href="#quote"
                  className="btn-amber-glow px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wide"
                >
                  Request Sample Test
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
