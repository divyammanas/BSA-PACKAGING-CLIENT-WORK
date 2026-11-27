import React from 'react';
import {
  CupSoda, Utensils, Flame, Sparkles, Droplets, Shirt, Smile,
  ShieldAlert, Sprout, CheckCircle2, PackageCheck, ArrowRight
} from 'lucide-react';
import { siteData } from '../data/siteData';

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

export default function IndustriesPouchGrid() {
  const industries = siteData.industries;

  return (
    <section id="industries" className="py-16 md:py-24 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {industries.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {industries.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {industries.subtitle}
          </p>
        </div>

        {/* 1. Compatible Pouch Substrates */}
        <div className="mb-14">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#182850] dark:text-white mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
            Compatible Flexible Pouch Formats
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.pouchFormats.map((pouch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#EBF4FA] dark:bg-slate-800 text-[#1870B0] dark:text-sky-400 mb-2.5">
                    {pouch.badge}
                  </span>
                  <h4 className="font-display text-base font-bold text-[#182850] dark:text-white">
                    {pouch.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pouch.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Thermal Weld Compatible</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Supported Product Categories */}
        <div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#182850] dark:text-white mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
            Industries &amp; Liquids We Pack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.categories.map((cat, idx) => {
              const IconComponent = iconMap[cat.icon] || PackageCheck;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 hover:border-[#1870B0]/50 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EBF4FA] dark:bg-slate-800 text-[#1870B0] dark:text-sky-400 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-[#182850] dark:text-white">
                      {cat.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pilot Trial Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#182850] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-300 block">
              Complimentary Laminate Trial
            </span>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Testing a Custom Barrier Film or High-Viscosity Product?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Send 10–20 unsealed pouch samples to our Greater Noida (West) unit. We will run test welds and share burst-test validation before bulk production.
            </p>
          </div>
          <a
            href="#quote"
            className="btn-primary shrink-0 px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>Request Sample Weld</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
