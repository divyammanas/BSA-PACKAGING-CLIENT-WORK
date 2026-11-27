import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with BSA Packaging"
        className="inline-flex items-center gap-2 px-4 py-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all text-sm font-semibold"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
