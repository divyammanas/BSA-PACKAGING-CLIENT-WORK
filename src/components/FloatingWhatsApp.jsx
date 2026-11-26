import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2.5 pointer-events-auto">
      
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-navy-950/95 text-slate-800 dark:text-white border border-slate-300 dark:border-white/[0.12] shadow-2xl animate-bounce duration-1000 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-300">Need Instant Spout Pricing?</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-200">Chat directly with factory desk</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all"
      >
        {/* Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />
        
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-emerald-500 relative z-10" />
      </a>
    </div>
  );
}
