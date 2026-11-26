import React from 'react';
import { Star, ShieldCheck, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialsSection() {
  const testimonials = siteData.testimonials;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white dark:bg-[#0A122A] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center  max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-navy-850 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{testimonials.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Client Brand Logos Strip */}
        <div className="mb-16 p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
              Trusted by Packaging Converters, FMCG Brands &amp; Contract Packers Across India
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center">
            {testimonials.clientLogos.map((client, idx) => (
              <div 
                key={idx} 
                className="w-full flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <img
                  src={`/assets/clients/client-${idx + 1}.svg`}
                  alt={`${client.name} Logo`}
                  className="h-8 max-w-[140px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="text-center mt-2">
                  <div className="text-xs font-bold text-navy-950 dark:text-white">{client.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">{client.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 B2B Client Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {testimonials.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 sm:p-9 rounded-3xl bg-slate-50 dark:bg-navy-900/80 border-2 border-slate-200 dark:border-white/[0.1] hover:border-amber-400 dark:hover:border-amber-400 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Review Header: Service Badge + Rating */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-navy-950 dark:bg-navy-850 text-amber-400 border border-navy-800 dark:border-white/[0.1] shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{rev.serviceUsed}</span>
                  </span>

                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Key Metric Badge */}
                <div className="mb-5 inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  {rev.metric}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-9 h-9 text-slate-300 dark:text-slate-700 absolute -top-3 -left-2 -z-0 opacity-40" />
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed relative z-10 italic font-normal">
                    "{rev.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Company Meta */}
              <div className="pt-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm sm:text-base font-black text-navy-950 dark:text-white">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {rev.role} • <span className="font-bold text-navy-900 dark:text-amber-300">{rev.company}</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-850 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{rev.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note for Client Ease */}
        <div className="mt-14 text-center text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
          ★ {testimonials.note} • Ready to be connected with prospective B2B reference checks
        </div>

      </div>
    </section>
  );
}
