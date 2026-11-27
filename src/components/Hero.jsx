import React from 'react';
import { ArrowRight, Play, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 md:pb-24 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">
          {/* Sober Pre-Title */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EBF4FA] dark:bg-slate-800 text-[#182850] dark:text-sky-300 text-xs font-semibold tracking-wide border border-[#1870B0]/20 dark:border-slate-700">
              {siteData.hero.preBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>GST Registered</span>
            </span>
          </div>

          {/* Authoritative Corporate Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#182850] dark:text-white leading-[1.15]">
            Precision Spout Fixing, Custom Spout Supply &amp; Pan-India Job Work
          </h1>

          {/* Clear Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We heat-seal imported food-grade spouts onto your pre-made laminated pouches using{' '}
            <span className="font-semibold text-[#182850] dark:text-white">12 semi-automatic machines</span> in Greater Noida (West) — or deploy trained technicians directly to your plants across{' '}
            <span className="font-semibold text-[#1870B0] dark:text-sky-400">Delhi NCR, Gujarat, and Pan-India</span>.
          </p>

          {/* Clean CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => scrollTo('#quote')}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold"
            >
              <span>{siteData.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#factory-tour')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-[#182850] dark:text-white border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Play className="w-4 h-4 text-[#1870B0] dark:text-sky-400" />
              <span>{siteData.hero.ctaSecondary}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/60 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{siteData.hero.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Subtle Operational Highlights */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1870B0] dark:text-sky-400" />
              <span>0.8s Hot Press + Cold Lock</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1870B0] dark:text-sky-400" />
              <span>Zero Machine Capex</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1870B0] dark:text-sky-400" />
              <span>Physical Sample Kits Available</span>
            </div>
          </div>
        </div>

        {/* Clean 4-Column Corporate Specification Bar */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800 overflow-hidden">
          {siteData.hero.trustStrip.map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {item.highlight}
              </div>
              <div className="font-display text-lg font-bold text-[#182850] dark:text-white">
                {item.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
