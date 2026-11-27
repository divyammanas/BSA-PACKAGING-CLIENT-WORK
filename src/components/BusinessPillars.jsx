import React from 'react';
import { Factory, Truck, Check, ArrowRight, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BusinessPillars({ onSelectService }) {
  const pillars = siteData.businessPillars.pillars;

  const handleInquire = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const quoteEl = document.querySelector('#quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {siteData.businessPillars.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {siteData.businessPillars.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {siteData.businessPillars.subtitle}
          </p>
        </div>

        {/* Side-by-Side Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Pillar 1 */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                  {pillars[0].tag}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
                  {pillars[0].badge}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#182850] text-white flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#182850] dark:text-white leading-snug">
                    {pillars[0].title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {pillars[0].subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillars[0].desc}
              </p>

              {/* 4-Step Process */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3.5">
                  Process Flow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillars[0].workflow.map((w) => (
                    <div key={w.step} className="p-3.5 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#1870B0] text-white text-[11px] font-mono font-semibold flex items-center justify-center shrink-0">
                          {w.step}
                        </span>
                        <span className="text-xs font-semibold text-[#182850] dark:text-white">{w.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal pl-7">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="mt-6 space-y-2.5">
                {pillars[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => handleInquire('In-House Spout Fixing (Greater Noida Facility)')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-semibold text-sm bg-[#182850] hover:bg-[#101C3A] dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
              >
                <span>{pillars[0].ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                  {pillars[1].tag}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
                  {pillars[1].badge}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#1870B0] text-white flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#182850] dark:text-white leading-snug">
                    {pillars[1].title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {pillars[1].subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillars[1].desc}
              </p>

              {/* 4-Step Process */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3.5">
                  Deployment Flow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillars[1].workflow.map((w) => (
                    <div key={w.step} className="p-3.5 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#182850] text-white text-[11px] font-mono font-semibold flex items-center justify-center shrink-0">
                          {w.step}
                        </span>
                        <span className="text-xs font-semibold text-[#182850] dark:text-white">{w.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal pl-7">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="mt-6 space-y-2.5">
                {pillars[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => handleInquire('Pan-India On-Site Factory Job Work')}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-semibold text-sm"
              >
                <span>{pillars[1].ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Regional Dispatch Summary Strip */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0" />
            <span>
              <strong className="text-[#182850] dark:text-white font-semibold">Operational Regions:</strong> Greater Noida (West) HQ • Delhi NCR • Gujarat (Sanand, Ahmedabad, Rajkot, Surat) • Pan-India
            </span>
          </div>
          <a
            href={`tel:${siteData.company.contact.phoneRaw}`}
            className="font-mono font-semibold text-[#1870B0] dark:text-sky-400 hover:underline shrink-0"
          >
            Call Dispatch: {siteData.company.contact.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
