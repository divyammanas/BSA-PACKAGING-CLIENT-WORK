import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialsSection() {
  const testimonials = siteData.testimonials;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#11192E] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {testimonials.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {testimonials.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Client Brand Strip */}
        <div className="mb-12 p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-center mb-5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Trusted by Packaging Converters &amp; FMCG Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 items-center justify-items-center">
            {testimonials.clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col items-center justify-center p-3.5 rounded-lg bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800"
              >
                <img
                  src={`/assets/clients/client-${idx + 1}.svg`}
                  alt={`${client.name} Logo`}
                  className="h-7 max-w-[130px] object-contain opacity-85"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="text-center mt-2">
                  <div className="text-xs font-semibold text-[#182850] dark:text-white">{client.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{client.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 B2B Client Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded text-xs font-medium bg-[#EBF4FA] dark:bg-slate-800 text-[#182850] dark:text-sky-300">
                    {rev.serviceUsed}
                  </span>

                  <div className="flex items-center gap-0.5" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#182850] dark:text-white">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.role}, <span className="font-medium text-slate-700 dark:text-slate-300">{rev.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#1870B0] dark:text-sky-400" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          {testimonials.note}
        </div>

      </div>
    </section>
  );
}
