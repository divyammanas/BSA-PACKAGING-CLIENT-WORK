import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const faq = siteData.faq;

  const toggleAccordion = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent('Hi BSA Packaging team, I have a question regarding spout fixing and job work services.')}`;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#060B18] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-navy-850 border border-slate-300 dark:border-white/[0.1] text-slate-800 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>{faq.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {faq.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {faq.subtitle}
          </p>
        </div>

        {/* Accordion Items List */}
        <div className="space-y-4">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-navy-900 border-amber-400 dark:border-amber-500/80 shadow-lg'
                    : 'bg-white/80 dark:bg-navy-900/60 border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15] shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-navy-950 dark:text-white leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'bg-amber-500 text-navy-950 rotate-180' 
                      : 'bg-slate-100 dark:bg-navy-850 text-slate-600 dark:text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed border-t border-slate-100 dark:border-white/[0.06] font-normal animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom WhatsApp Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/[0.1] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
              Have a custom pouch geometry, barrier film, or volume question?
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Ask Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
