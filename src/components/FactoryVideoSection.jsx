import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Flame, Snowflake, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FactoryVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
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

  return (
    <section id="factory-tour" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#11192E] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {siteData.factoryShowcase.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {siteData.factoryShowcase.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {siteData.factoryShowcase.description}
          </p>
        </div>

        {/* Main Content Split: Video Left (7 cols), 2-Step Process Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Clean Video Container */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
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
                  <div className="relative w-full h-full bg-[#182850] p-6 flex flex-col items-center justify-center text-center">
                    <img
                      src="/assets/bsa-factory-poster.svg"
                      alt="BSA Packaging Greater Noida Spout Fixing Machinery"
                      className="absolute inset-0 w-full h-full object-cover opacity-25"
                    />
                    <div className="relative z-10 max-w-md p-6 rounded-lg bg-[#0F172A]/90 border border-slate-700">
                      <h3 className="font-display text-lg font-bold text-white">
                        Factory Floor &amp; 12 Semi-Auto Lines
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {siteData.factoryShowcase.video.caption}
                      </p>
                      <a
                        href="#quote"
                        className="btn-primary mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
                      >
                        <span>Schedule Factory Visit or Sample Trial</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Center Play Overlay */}
                {!isPlaying && !videoError && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play Factory Tour Video"
                    className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/35 hover:bg-slate-950/25 transition-colors cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-[#182850] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <Play className="w-7 h-7 fill-[#182850] ml-0.5" />
                    </div>
                  </button>
                )}
              </div>

              {/* Video Controls Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded hover:bg-slate-800 text-white"
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="hidden sm:inline text-slate-400">
                    Greater Noida (West) Unit • 12 Semi-Automatic Machines
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white"
                  aria-label="Fullscreen Video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Clean 4-Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {siteData.factoryShowcase.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="font-display text-2xl font-bold text-[#1870B0] dark:text-sky-400">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[#182850] dark:text-white mt-1">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2-Step Precision Sealing Process */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 mb-1.5">
                Sealing Methodology
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#182850] dark:text-white">
                2-Step Hot &amp; Cold Press Welding
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Single-step sealing leaves pouches vulnerable to seam stress during transit. All 12 machines at BSA Packaging follow a calibrated two-stage pneumatic cycle:
              </p>

              <div className="mt-5 space-y-3.5">
                {/* Step 1 */}
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-md bg-[#182850] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        01
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#182850] dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[0].title}
                        </h4>
                        <span className="text-xs font-mono text-[#1870B0] dark:text-sky-400 font-medium">
                          {siteData.factoryShowcase.sealingSteps[0].time}
                        </span>
                      </div>
                    </div>
                    <Flame className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {siteData.factoryShowcase.sealingSteps[0].desc}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-md bg-[#1870B0] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        02
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#182850] dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[1].title}
                        </h4>
                        <span className="text-xs font-mono text-[#1870B0] dark:text-sky-400 font-medium">
                          {siteData.factoryShowcase.sealingSteps[1].time}
                        </span>
                      </div>
                    </div>
                    <Snowflake className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {siteData.factoryShowcase.sealingSteps[1].desc}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-4 rounded-lg bg-[#EBF4FA]/70 dark:bg-slate-800 border border-[#1870B0]/25 dark:border-slate-700">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-[#182850] dark:text-white">
                          {siteData.factoryShowcase.sealingSteps[2].title}
                        </h4>
                        <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                          {siteData.factoryShowcase.sealingSteps[2].time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {siteData.factoryShowcase.sealingSteps[2].desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Test sealing on your own pouch laminate:
                </span>
                <a
                  href="#quote"
                  className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold shrink-0"
                >
                  Request Sample Weld
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
