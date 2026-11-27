import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section id="spout-catalog" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#11192E] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {catalog.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {catalog.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {catalog.subtitle}
          </p>
        </div>

        {/* Part A: Spout Types */}
        <div className="mb-16">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#182850] dark:text-white">
              Spout Product Range
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Multiple mm Neck Diameters &amp; Custom Colors
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* 1. Standard Screw-Cap Spouts */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative p-6 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                  <img
                    src="/assets/spout-screw-cap.svg"
                    alt="Standard Screw-Cap Spout Diagram"
                    className="w-full max-w-[240px] h-auto object-contain"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300">
                    8.5mm to 28mm Sizes
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                      {catalog.types[0].tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Food-Grade Virgin PP / PE
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#182850] dark:text-white">
                    {catalog.types[0].name}
                  </h4>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {catalog.types[0].description}
                  </p>

                  {/* Specifications Table */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    {catalog.types[0].specs.map((s, idx) => (
                      <div key={idx} className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{s.label}</span>
                        <span className="text-[#182850] dark:text-slate-100 font-mono font-medium sm:text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Common Applications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {catalog.types[0].applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  type="button"
                  onClick={() => handleRequestSample('Standard Screw-Cap Spouts (Multiple mm sizes)')}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm bg-[#182850] hover:bg-[#101C3A] dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Screw-Cap Samples</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Flip-Top Spouts */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-[#1870B0]/40 dark:border-sky-500/40 overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative p-6 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                  <img
                    src="/assets/spout-flip-top.svg"
                    alt="Flip-Top Spout Diagram"
                    className="w-full max-w-[240px] h-auto object-contain"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#EBF4FA] dark:bg-slate-800 border border-[#1870B0]/25 dark:border-slate-700 text-[11px] font-mono font-semibold text-[#182850] dark:text-sky-300">
                    Tethered Living-Hinge Cap
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                      {catalog.types[1].tag}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#EBF4FA] dark:bg-slate-800 text-[#1870B0] dark:text-sky-300">
                      {catalog.types[1].featuredBadge}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#182850] dark:text-white">
                    {catalog.types[1].name}
                  </h4>

                  <div className="mt-3 p-3.5 rounded-lg bg-[#EBF4FA]/60 dark:bg-slate-800/70 border border-[#1870B0]/20 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-[#182850] dark:text-white block mb-1">
                      Solves Loose Cap Loss (Chaayos-Style Convenience):
                    </span>
                    {catalog.types[1].description}
                  </div>

                  {/* Specifications Table */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    {catalog.types[1].specs.map((s, idx) => (
                      <div key={idx} className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{s.label}</span>
                        <span className="text-[#182850] dark:text-slate-100 font-mono font-medium sm:text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Ideal Applications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {catalog.types[1].applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  type="button"
                  onClick={() => handleRequestSample('Flip-Top Spouts (Anti-Loss / Chaayos-Style)')}
                  className="btn-primary w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <span>Request Flip-Top Samples</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Part B: Assembled vs Unassembled Configurations */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#182850] dark:text-white">
                Supply Configurations — Assembled vs. Unassembled
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                Select the supply configuration aligned with your liquid filling equipment.
              </p>
            </div>

            {/* Clean Segmented Toggle */}
            <div className="inline-flex items-center p-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-stretch sm:self-start max-w-full overflow-x-auto">
              {[
                { key: 'both', label: 'Compare Both' },
                { key: 'assembled', label: 'Assembled' },
                { key: 'unassembled', label: 'Unassembled' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveConfigTab(tab.key)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeConfigTab === tab.key
                      ? 'bg-white dark:bg-slate-900 text-[#182850] dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#182850] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-1 ${activeConfigTab === 'both' ? 'md:grid-cols-2' : 'max-w-2xl'} gap-8 items-stretch`}>

            {/* Assembled */}
            {(activeConfigTab === 'both' || activeConfigTab === 'assembled') && (
              <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                      Option 01
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                      {catalog.configurations[0].badge}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#182850] dark:text-white">
                    {catalog.configurations[0].name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {catalog.configurations[0].subtext}
                  </p>

                  <div className="my-5 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex justify-center">
                    <img
                      src="/assets/spout-assembled.svg"
                      alt="Assembled Spouts Diagram"
                      className="w-full max-w-[230px] h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                        Recommended For
                      </span>
                      <p className="text-[#182850] dark:text-white font-semibold text-xs sm:text-sm">
                        {catalog.configurations[0].recommendedFor}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {catalog.configurations[0].desc}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {catalog.configurations[0].advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleRequestSample('Assembled Spouts (Cap Pre-Attached)')}
                    className="w-full py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#182850] hover:bg-[#101C3A] dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
                  >
                    Select Assembled Spouts for Quote
                  </button>
                </div>
              </div>
            )}

            {/* Unassembled */}
            {(activeConfigTab === 'both' || activeConfigTab === 'unassembled') && (
              <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                      Option 02
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                      {catalog.configurations[1].badge}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#182850] dark:text-white">
                    {catalog.configurations[1].name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {catalog.configurations[1].subtext}
                  </p>

                  <div className="my-5 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex justify-center">
                    <img
                      src="/assets/spout-unassembled.svg"
                      alt="Unassembled Spouts Diagram"
                      className="w-full max-w-[230px] h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                        Recommended For
                      </span>
                      <p className="text-[#182850] dark:text-white font-semibold text-xs sm:text-sm">
                        {catalog.configurations[1].recommendedFor}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {catalog.configurations[1].desc}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {catalog.configurations[1].advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleRequestSample('Unassembled Spouts (Loose Caps for Top Filling)')}
                    className="w-full py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#182850] hover:bg-[#101C3A] dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
                  >
                    Select Unassembled Spouts for Quote
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
