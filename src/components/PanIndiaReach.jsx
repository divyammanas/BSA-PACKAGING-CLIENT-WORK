import React from 'react';
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';
import FacilityMap from './FacilityMap';

export default function PanIndiaReach() {
  const reach = siteData.reachAndTrust;

  return (
    <section id="reach" className="py-16 md:py-24 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {reach.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {reach.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {reach.subtitle}
          </p>
        </div>

        {/* 4 Regional Operational Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reach.hubs.map((hub, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border flex flex-col justify-between ${
                idx === 0
                  ? 'bg-[#EBF4FA]/50 dark:bg-slate-900 border-[#1870B0]/40 dark:border-sky-500/40'
                  : 'bg-slate-50/70 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                    HUB 0{idx + 1}
                  </span>
                  {idx === 0 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#182850] text-white">
                      Central HQ
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-[#182850] dark:text-white">
                  {hub.region}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {hub.state}
                </p>

                <div className="my-3.5 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-[#1870B0] dark:text-sky-400">
                    {hub.role}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {hub.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1870B0] dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx === 0 && (
                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
                  <a
                    href="#facility-map"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1870B0] dark:text-sky-400 hover:underline"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>See on Map Below</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <a
                    href={siteData.company.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#1870B0] dark:hover:text-sky-400 hover:underline"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Street Map of the Greater Noida Manufacturing Hub */}
        <FacilityMap />

        {/* GST Compliance Bar */}
        <div className="mt-10 p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-[#182850] dark:text-white">
                GST Compliant B2B Supply &amp; Job Work
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                GSTIN: <span className="font-mono font-semibold text-[#182850] dark:text-white">{siteData.company.gstin}</span> — Formal tax invoices, E-Way bills, and job-work challans issued on all orders.
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[#182850] dark:text-white border border-slate-300 dark:border-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Request Vendor Onboarding</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
