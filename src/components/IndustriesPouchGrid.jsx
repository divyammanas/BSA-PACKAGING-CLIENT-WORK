import React from 'react';
import { 
  CupSoda, Utensils, Flame, Sparkles, Droplets, Shirt, Smile, 
  ShieldAlert, Sprout, Layers, CheckCircle, PackageCheck, ArrowRight
} from 'lucide-react';
import { siteData } from '../data/siteData';

// Map icon string to Lucide component
const iconMap = {
  CupSoda,
  Utensils,
  Flame,
  Sparkles,
  Droplets,
  Shirt,
  Smile,
  ShieldAlert,
  Sprout
};

// Colors for icon containers
const iconColorStyles = [
  'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30',
  'bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/30',
  'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/30',
  'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/30',
  'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30',
  'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30',
  'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/30',
  'bg-red-500/15 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30',
  'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30',
];

export default function IndustriesPouchGrid() {
  const industries = siteData.industries;

  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-50 dark:bg-[#060B18] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-slate-300 dark:border-white/[0.1] text-slate-800 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <PackageCheck className="w-4 h-4 text-amber-500" />
            <span>{industries.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {industries.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {industries.subtitle}
          </p>
        </div>

        {/* 1. Compatible Pouch Substrates Strip */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white tracking-tight">
              Compatible Flexible Pouch Formats
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.pouchFormats.map((pouch, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] hover:border-blue-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
                    {pouch.badge}
                  </span>
                  <h4 className="font-display text-base font-black text-navy-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pouch.name}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {pouch.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/[0.08] flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Thermal Weld Tested</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Supported Industries & Liquid Categories Grid */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <div className="h-6 w-1.5 bg-amber-500 rounded-full" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white tracking-tight">
              Major Product Applications ("What We Pack")
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.categories.map((cat, idx) => {
              const IconComponent = iconMap[cat.icon] || PackageCheck;
              const colorStyle = iconColorStyles[idx % iconColorStyles.length];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] hover:border-amber-400 shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group"
                >
                  <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center shrink-0 p-3 group-hover:scale-105 transition-transform ${colorStyle}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-black text-navy-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Laminate Pilot Trial Callout */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/[0.1]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider block">
              FREE TECHNICAL PILOT TESTING
            </span>
            <h4 className="font-display text-lg sm:text-2xl font-black text-white">
              Using a Specialized Multi-Layer Barrier or Biodegradable Film?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal">
              Send us 10–20 unsealed pouch mockups. We will run test welds on our 12 machines in Greater Noida and return certified hydrostatic burst test reports for free.
            </p>
          </div>
          <a
            href="#quote"
            className="btn-amber-glow shrink-0 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2"
          >
            <span>Send Test Laminates</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
