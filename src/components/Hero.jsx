import React from 'react';
import { ArrowRight, Play, MessageSquare, ShieldCheck, Cpu, Clock, MapPin, CheckCircle2, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 bg-slate-50 dark:bg-[#060B18] text-slate-900 dark:text-white overflow-hidden transition-colors duration-200">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Precision Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-400/10 dark:from-sky-500/15 via-blue-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-amber-400/10 dark:bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pre-Badge with glowing indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-amber-400/50 dark:border-amber-500/30 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wide text-amber-900 dark:text-amber-300 uppercase">
              {siteData.hero.preBadge}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/35 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Govt. GST Registered B2B</span>
          </span>
        </div>

        {/* High-Impact Headline with Crisp Contrast in Both Themes */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-navy-950 dark:text-white leading-[1.12] sm:leading-[1.08]">
            Precision Spout Fixing, <br className="hidden sm:inline" />
            <span className="text-gradient-amber">
              Custom Spout Supply
            </span>{' '}
            <span className="text-navy-950 dark:text-white">&amp; Pan-India On-Site Job Work</span>
          </h1>

          {/* High-Contrast, Effortlessly Scannable Subheadline */}
          <p className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 max-w-4xl mx-auto leading-relaxed font-normal">
            We heat-seal imported food-grade spouts onto your pre-made flexible pouches using our fleet of <strong className="text-navy-950 dark:text-white font-bold">12 semi-automatic machines</strong> in Greater Noida (West) — or dispatch certified on-site fixing crews directly to your plants across <strong className="text-amber-700 dark:text-amber-300 font-bold">Delhi NCR, Gujarat, and Pan-India</strong>.
          </p>

          {/* High-Impact CTAs with Clear Contrast */}
          <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => scrollTo('#quote')}
              className="btn-amber-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wide"
            >
              <span>{siteData.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.8]" />
            </button>

            <button
              onClick={() => scrollTo('#factory-tour')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-bold bg-white dark:bg-navy-850 hover:bg-slate-100 dark:hover:bg-navy-800 text-navy-950 dark:text-white border border-slate-300 dark:border-white/[0.12] shadow-md transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{siteData.hero.ctaSecondary}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold bg-emerald-50 dark:bg-emerald-500/15 hover:bg-emerald-100 dark:hover:bg-emerald-500/25 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 transition-all shadow-sm hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{siteData.hero.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Technical Trust Markers Checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-bold text-navy-950 dark:text-slate-200">100% Zero Leakage Sealing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-bold text-navy-950 dark:text-slate-200">Zero Machine Capex for Brands</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-bold text-navy-950 dark:text-slate-200">Free Physical Sample Kits</span>
            </div>
          </div>
        </div>

        {/* Industrial Trust Metric Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Metric 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-xl relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 tracking-wider uppercase">
                  Govt. Verified
                </span>
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white">
                GST Registered
              </div>
              <p className="mt-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                GSTIN: {siteData.company.gstin}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-xl relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-400 tracking-wider uppercase">
                  Installed Fleet
                </span>
                <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white">
                12 Semi-Auto Lines
              </div>
              <p className="mt-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                500,000+ monthly pouch capacity
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-xl relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">
                  Thermal Precision
                </span>
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white">
                0.8s Hot Sealing
              </div>
              <p className="mt-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                Instant cold press polymer lock
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-xl relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-600" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-purple-700 dark:text-purple-400 tracking-wider uppercase">
                  Deployable
                </span>
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-black text-navy-950 dark:text-white">
                Delhi NCR • Gujarat
              </div>
              <p className="mt-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                In-house hub + Pan-India on-site crews
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
