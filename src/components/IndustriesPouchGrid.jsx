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
  'bg-amber-500/15 text-amber-600 border-amber-200',
  'bg-orange-500/15 text-orange-600 border-orange-200',
  'bg-rose-500/15 text-rose-600 border-rose-200',
  'bg-sky-500/15 text-sky-600 border-sky-200',
  'bg-blue-500/15 text-blue-600 border-blue-200',
  'bg-indigo-500/15 text-indigo-600 border-indigo-200',
  'bg-purple-500/15 text-purple-600 border-purple-200',
  'bg-red-500/15 text-red-600 border-red-200',
  'bg-emerald-500/15 text-emerald-600 border-emerald-200',
];

export default function IndustriesPouchGrid() {
  const industries = siteData.industries;

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative bg-grid-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <PackageCheck className="w-4 h-4 text-amber-500" />
            <span>{industries.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
            {industries.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {industries.subtitle}
          </p>
        </div>

        {/* 1. Compatible Pouch Substrates Strip */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 tracking-tight">
              Compatible Flexible Pouch Formats
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.pouchFormats.map((pouch, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
                    {pouch.badge}
                  </span>
                  <h4 className="font-display text-base font-black text-navy-950 group-hover:text-blue-600 transition-colors">
                    {pouch.name}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {pouch.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
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
            <h3 className="font-display text-xl sm:text-2xl font-black text-navy-950 tracking-tight">
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
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group"
                >
                  <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center shrink-0 p-3 group-hover:scale-105 transition-transform ${colorStyle}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-black text-navy-950 group-hover:text-amber-600 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
            className="btn-amber-glow shrink-0 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-navy-950 uppercase tracking-wide flex items-center gap-2"
          >
            <span>Send Test Laminates</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
