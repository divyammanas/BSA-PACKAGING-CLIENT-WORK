import React from 'react';
import { MapPin, Navigation, ShieldCheck, CheckCircle2, Truck, Building2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PanIndiaReach() {
  const reach = siteData.reachAndTrust;

  return (
    <section id="reach" className="py-20 md:py-28 bg-slate-50 dark:bg-[#060B18] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-slate-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{reach.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {reach.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {reach.subtitle}
          </p>
        </div>

        {/* 4 Regional Operational Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reach.hubs.map((hub, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all group ${
                idx === 0 
                  ? 'bg-white dark:bg-gradient-to-b dark:from-navy-900 dark:via-navy-950 dark:to-navy-900 border-2 border-amber-400 dark:border-amber-500/90 shadow-xl dark:shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                  : 'bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] hover:border-sky-500 dark:hover:border-sky-400/50 shadow-md dark:shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-amber-600 dark:text-amber-400 tracking-wider">
                    HUB {String(idx + 1).padStart(2, '0')}
                  </span>
                  {idx === 0 && (
                    <span className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-500 text-navy-950 font-black tracking-wide">
                      CENTRAL HQ
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 stroke-[2.2]" />
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-navy-950 dark:text-white">
                      {hub.region}
                    </h3>
                    <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300">
                      {hub.state}
                    </p>
                  </div>
                </div>

                <div className="my-4 pb-3 border-b border-slate-100 dark:border-white/[0.08]">
                  <span className="text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-300">
                    {hub.role}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {hub.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 stroke-[2.2]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08]">
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Freight &amp; Crew Ready</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GST Registration & Compliance Banner */}
        <div className="mt-14 p-7 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-navy-900 dark:via-navy-950 dark:to-navy-900 border-2 border-emerald-300 dark:border-emerald-500/40 shadow-xl dark:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h4 className="font-display text-lg sm:text-xl font-black text-navy-950 dark:text-white">
                  100% Tax Compliant B2B Operations
                </h4>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-500/25 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40">
                  GSTIN VERIFIED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 font-mono">
                GSTIN: <strong className="text-amber-700 dark:text-amber-400 font-bold">{siteData.company.gstin}</strong> • E-way bills, formal tax invoices &amp; legal job-work challans provided on all shipments.
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="shrink-0 px-5 py-3 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 text-amber-800 dark:text-amber-300 border border-amber-400/50 transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Request Vendor Onboarding Form</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
