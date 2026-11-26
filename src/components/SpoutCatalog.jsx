import React, { useState } from 'react';
import { Layers, CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SpoutCatalog({ onSelectSpout }) {
  const [activeConfigTab, setActiveConfigTab] = useState('both'); // 'both', 'assembled', 'unassembled'
  const catalog = siteData.spoutCatalog;

  const handleRequestSample = (spoutType) => {
    if (onSelectSpout) {
      onSelectSpout(spoutType);
    }
    const quoteEl = document.querySelector('#quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="spout-catalog" className="py-20 md:py-28 bg-white dark:bg-[#0A122A] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-navy-850 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{catalog.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {catalog.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {catalog.subtitle}
          </p>
        </div>

        {/* PART A: SPOUT TYPES (Screw Cap vs Flip-Top Innovation) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-6 w-1.5 bg-amber-500 rounded-full" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white tracking-tight">
              Part A: Spout Product Range
            </h3>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300 hidden sm:inline">
              • Multiple mm Neck Diameters &amp; Custom Colors
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* 1. Standard Screw-Cap Spouts */}
            <div className="rounded-3xl bg-slate-50 dark:bg-navy-900/90 border-2 border-slate-200 dark:border-white/[0.12] hover:border-blue-500 dark:hover:border-slate-400 shadow-xl overflow-hidden flex flex-col justify-between transition-all group">
              <div>
                {/* Visual Technical Diagram */}
                <div className="relative p-6 bg-white dark:bg-navy-950 flex items-center justify-center border-b border-slate-200 dark:border-white/[0.08]">
                  <img
                    src="/assets/spout-screw-cap.svg"
                    alt="Standard Screw-Cap Spout Diagram"
                    className="w-full max-w-[280px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-300 dark:border-white/[0.1] text-xs font-mono font-bold text-slate-700 dark:text-slate-200">
                    8.5mm to 28mm Neck Sizes
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-300 dark:border-sky-700">
                      {catalog.types[0].tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      100% Virgin Food Grade PP/PE
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-black text-navy-950 dark:text-white mt-3">
                    {catalog.types[0].name}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {catalog.types[0].description}
                  </p>

                  {/* Technical Specs List */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] space-y-2 text-xs font-mono">
                    {catalog.types[0].specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-lg bg-white dark:bg-navy-950/70 border border-slate-200 dark:border-white/[0.06] shadow-sm">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">{s.label}:</span>
                        <span className="text-navy-950 dark:text-white font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compatible Applications Chips */}
                  <div className="mt-6">
                    <div className="text-[11px] font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 font-bold">
                      Common Applications:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {catalog.types[0].applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg text-xs bg-white dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] font-medium shadow-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => handleRequestSample('Standard Screw-Cap Spouts (Multiple mm sizes)')}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-navy-950 dark:bg-navy-850 hover:bg-blue-600 dark:hover:bg-navy-800 text-white border border-transparent dark:border-white/[0.15] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Screw-Cap Samples</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* 2. Flip-Top Spouts (FEATURED INNOVATION) */}
            <div className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-navy-900 dark:via-navy-950 dark:to-navy-900 border-2 border-amber-400 dark:border-amber-500/80 shadow-2xl shadow-amber-500/10 overflow-hidden flex flex-col justify-between transition-all group relative">
              
              {/* Top Innovation Banner */}
              <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 flex items-center justify-between text-navy-950 font-black text-xs uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 fill-navy-950" />
                  <span>FEATURED INNOVATION: {catalog.types[1].featuredBadge}</span>
                </div>
                <span className="font-mono text-[11px] bg-navy-950 text-amber-300 px-2.5 py-0.5 rounded font-bold">
                  CHAAYOS-STYLE
                </span>
              </div>

              <div>
                {/* Visual Technical Diagram */}
                <div className="relative p-6 bg-slate-50 dark:bg-navy-950 flex items-center justify-center border-b border-slate-200 dark:border-white/[0.08]">
                  <img
                    src="/assets/spout-flip-top.svg"
                    alt="Flip-Top Spout Innovation Diagram"
                    className="w-full max-w-[280px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/60 text-xs font-mono font-bold text-amber-900 dark:text-amber-300">
                    Living-Hinge Tethered Cap
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-3 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      {catalog.types[1].tag}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-amber-600 dark:text-amber-300">
                      ★ Zero Lost Caps
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-black text-navy-950 dark:text-white mt-3">
                    {catalog.types[1].name}
                  </h4>
                  
                  {/* Highlight Callout Box on Why It Solves Complaints */}
                  <div className="mt-3.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-500/40 text-xs text-amber-950 dark:text-amber-100 leading-relaxed font-normal">
                    <strong className="text-amber-800 dark:text-amber-300 font-bold block mb-1">Consumer Frustration Solved:</strong>
                    Traditional screw-caps easily drop, get lost in cars, or create loose plastic litter when drinking on the go. BSA Packaging's tethered flip-top stays permanently attached, snaps shut tight with an audible click, and gives your consumer beverage or sauce pouch high-convenience market differentiation.
                  </div>

                  {/* Technical Specs List */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-2 text-xs font-mono">
                    {catalog.types[1].specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-white/[0.06] shadow-sm">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">{s.label}:</span>
                        <span className="text-navy-950 dark:text-white font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compatible Applications Chips */}
                  <div className="mt-6">
                    <div className="text-[11px] font-mono text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 font-bold">
                      Ideal For Modern Convenience Brands:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {catalog.types[1].applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg text-xs bg-amber-50 dark:bg-amber-500/15 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-500/30 font-medium shadow-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => handleRequestSample('Flip-Top Spouts (Anti-Loss / Chaayos-Style)')}
                  className="btn-amber-glow w-full py-4 px-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Request Flip-Top Sample Kit</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* PART B: ASSEMBLED VS UNASSEMBLED INTERACTIVE COMPARISON */}
        <div className="pt-14 border-t border-slate-200 dark:border-white/[0.08]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-6 w-1.5 bg-sky-500 rounded-full" />
                <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white tracking-tight">
                  Part B: Supply Configurations — Assembled vs. Unassembled
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 max-w-2xl font-normal">
                Choose the exact supply format aligned with your filling line machinery. We supply both formats seamlessly.
              </p>
            </div>

            {/* Interactive Toggle Switch */}
            <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-300 dark:border-white/[0.12] self-stretch sm:self-start md:self-auto shadow-sm max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveConfigTab('both')}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeConfigTab === 'both' ? 'btn-amber-glow' : 'text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white'
                }`}
              >
                Compare Both
              </button>
              <button
                type="button"
                onClick={() => setActiveConfigTab('assembled')}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeConfigTab === 'assembled' ? 'btn-amber-glow' : 'text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white'
                }`}
              >
                Assembled Only
              </button>
              <button
                type="button"
                onClick={() => setActiveConfigTab('unassembled')}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeConfigTab === 'unassembled' ? 'btn-amber-glow' : 'text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white'
                }`}
              >
                Unassembled Only
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Assembled */}
            {(activeConfigTab === 'both' || activeConfigTab === 'assembled') && (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-navy-900/90 border-2 border-slate-200 dark:border-white/[0.12] hover:border-sky-500 dark:hover:border-sky-400 shadow-xl flex flex-col justify-between transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-sky-800 dark:text-sky-300 bg-sky-100 dark:bg-sky-950 px-3 py-1 rounded-lg border border-sky-300 dark:border-sky-800">
                      Configuration 01
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-800">
                      {catalog.configurations[0].badge}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-black text-navy-950 dark:text-white">
                    {catalog.configurations[0].name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 mt-1">
                    {catalog.configurations[0].subtext}
                  </p>

                  <div className="my-6 p-4 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/[0.08] flex justify-center shadow-inner">
                    <img
                      src="/assets/spout-assembled.svg"
                      alt="Assembled Spouts Diagram"
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-navy-950/70 border border-slate-200 dark:border-white/[0.08] shadow-sm">
                      <span className="font-mono font-bold text-amber-700 dark:text-amber-400 text-xs block mb-1">RECOMMENDED FOR:</span>
                      <p className="text-navy-950 dark:text-white font-bold">{catalog.configurations[0].recommendedFor}</p>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {catalog.configurations[0].desc}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-300 block mb-2 text-xs">Key Operational Advantages:</span>
                      <ul className="space-y-2">
                        {catalog.configurations[0].advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5 stroke-[2.2]" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/[0.08]">
                  <button
                    onClick={() => handleRequestSample('Assembled Spouts (Cap Pre-Attached)')}
                    className="w-full py-3 rounded-xl font-mono text-xs font-bold bg-navy-950 dark:bg-navy-850 hover:bg-sky-600 text-white transition-colors border border-transparent dark:border-white/[0.1] shadow-sm"
                  >
                    Select Assembled Spouts for Quote
                  </button>
                </div>
              </div>
            )}

            {/* Card 2: Unassembled */}
            {(activeConfigTab === 'both' || activeConfigTab === 'unassembled') && (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-navy-900/90 border-2 border-slate-200 dark:border-white/[0.12] hover:border-amber-500 dark:hover:border-amber-400 shadow-xl flex flex-col justify-between transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-3 py-1 rounded-lg border border-amber-300 dark:border-amber-800">
                      Configuration 02
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-800">
                      {catalog.configurations[1].badge}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-black text-navy-950 dark:text-white">
                    {catalog.configurations[1].name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 mt-1">
                    {catalog.configurations[1].subtext}
                  </p>

                  <div className="my-6 p-4 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/[0.08] flex justify-center shadow-inner">
                    <img
                      src="/assets/spout-unassembled.svg"
                      alt="Unassembled Spouts Diagram"
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-navy-950/70 border border-slate-200 dark:border-white/[0.08] shadow-sm">
                      <span className="font-mono font-bold text-amber-700 dark:text-amber-400 text-xs block mb-1">RECOMMENDED FOR:</span>
                      <p className="text-navy-950 dark:text-white font-bold">{catalog.configurations[1].recommendedFor}</p>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {catalog.configurations[1].desc}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-300 block mb-2 text-xs">Key Operational Advantages:</span>
                      <ul className="space-y-2">
                        {catalog.configurations[1].advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 stroke-[2.2]" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/[0.08]">
                  <button
                    onClick={() => handleRequestSample('Unassembled Spouts (Loose Caps for Top Filling)')}
                    className="btn-amber-glow w-full py-3 rounded-xl font-mono text-xs font-extrabold uppercase tracking-wide"
                  >
                    Select Unassembled Spouts for Quote
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Quick Technical Help Banner */}
          <div className="mt-9 p-5 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-normal">
                <strong className="text-navy-950 dark:text-white font-bold">Not sure which configuration fits your pouch line?</strong> Our packaging engineers review your pouch film drawings and filling setup for free.
              </p>
            </div>
            <a
              href={`https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent('Hi BSA Packaging, I need advice on choosing between assembled vs unassembled spouts for my pouches.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 transition-colors shadow-sm"
            >
              Ask Our Engineers on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
