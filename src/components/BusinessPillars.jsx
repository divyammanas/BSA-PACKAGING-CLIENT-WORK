import React from 'react';
import { Factory, Truck, Check, ArrowRight, ShieldCheck, MapPin, Zap } from 'lucide-react';
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
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#060B18] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-slate-300 dark:border-white/[0.1] text-slate-800 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{siteData.businessPillars.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {siteData.businessPillars.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {siteData.businessPillars.subtitle}
          </p>
        </div>

        {/* Two Bold Side-by-Side Business Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: In-House Spout Fixing & Spout Supply */}
          <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-navy-900/90 border-2 border-slate-200 dark:border-white/[0.12] hover:border-blue-500 shadow-xl p-6 sm:p-9 transition-all hover:shadow-2xl group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-sky-400" />
            
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800">
                  {pillars[0].tag}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  {pillars[0].badge}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform p-3">
                  <Factory className="w-7 h-7 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white leading-tight">
                    {pillars[0].title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {pillars[0].subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {pillars[0].desc}
              </p>

              {/* 4-Step Linear Workflow */}
              <div className="mt-7 pt-6 border-t border-slate-100 dark:border-white/[0.08]">
                <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  How In-House Job Work Operates:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pillars[0].workflow.map((w) => (
                    <div key={w.step} className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-white/[0.06] hover:bg-blue-50/50 dark:hover:bg-navy-950 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                          {w.step}
                        </span>
                        <span className="text-xs font-bold text-navy-950 dark:text-white">{w.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal pl-7 font-normal">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist Advantages */}
              <div className="mt-7 space-y-3">
                {pillars[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 1 CTA */}
            <div className="mt-9 pt-6 border-t border-slate-100 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => handleInquire('In-House Spout Fixing (Greater Noida Facility)')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-navy-950 hover:bg-blue-600 text-white dark:bg-navy-850 dark:hover:bg-blue-600 transition-all shadow-md group-hover:shadow-blue-500/25 border border-transparent dark:border-white/[0.1]"
              >
                <span>{pillars[0].ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Card 2: Pan-India On-Site Contract Job Work */}
          <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-navy-900/90 border-2 border-slate-200 dark:border-white/[0.12] hover:border-amber-500 shadow-xl p-6 sm:p-9 transition-all hover:shadow-2xl group relative overflow-hidden">
            {/* Top Amber Accent Banner */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-700">
                  {pillars[1].tag}
                </span>
                <span className="text-xs font-mono font-bold text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-800">
                  {pillars[1].badge}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform p-3">
                  <Truck className="w-7 h-7 stroke-[2.4]" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white leading-tight">
                    {pillars[1].title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {pillars[1].subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {pillars[1].desc}
              </p>

              {/* 4-Step Linear Workflow */}
              <div className="mt-7 pt-6 border-t border-slate-100 dark:border-white/[0.08]">
                <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  How On-Site Deployment Operates:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pillars[1].workflow.map((w) => (
                    <div key={w.step} className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-navy-950/70 border border-amber-200/80 dark:border-white/[0.06] hover:bg-amber-50 dark:hover:bg-navy-950 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-navy-950 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                          {w.step}
                        </span>
                        <span className="text-xs font-bold text-navy-950 dark:text-white">{w.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal pl-7 font-normal">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist Advantages */}
              <div className="mt-7 space-y-3">
                {pillars[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2 CTA */}
            <div className="mt-9 pt-6 border-t border-slate-100 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => handleInquire('Pan-India On-Site Factory Job Work')}
                className="btn-amber-glow w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-navy-950 uppercase tracking-wide transition-all shadow-md"
              >
                <span>{pillars[1].ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.4]" />
              </button>
            </div>
          </div>

        </div>

        {/* Pan-India Trust Footer Pill */}
        <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-white/[0.1] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
            <span>
              <strong className="text-navy-950 dark:text-white font-bold">Active Job Work Depots:</strong> Greater Noida (West) HQ • Delhi NCR • Gujarat (Sanand, Ahmedabad, Rajkot, Surat) • Pan-India
            </span>
          </div>
          <a
            href={`tel:${siteData.company.contact.phoneRaw}`}
            className="font-mono font-bold text-navy-950 dark:text-amber-400 hover:text-amber-600 transition-colors shrink-0"
          >
            Schedule Crew Dispatch: {siteData.company.contact.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
