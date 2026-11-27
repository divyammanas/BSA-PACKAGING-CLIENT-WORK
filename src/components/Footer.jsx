import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#182850] text-slate-200 border-t border-slate-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">

          {/* Col 1 & 2: Company Overview with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white px-3 py-2 rounded-lg">
              <img
                src="/assets/bsa-logo.png"
                alt="BSA Packaging"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              B2B flexible packaging specialist offering precision spout fixing, custom imported spout supply, and pan-India on-site contract job work from Greater Noida (West), UP.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15 text-xs font-mono text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GSTIN: {siteData.company.gstin}</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-wider mb-3.5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#quote" className="hover:text-white transition-colors block py-0.5">
                  Request Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Products & Services */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-wider mb-3.5 pb-2 border-b border-white/10">
              Products &amp; Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#spout-catalog" className="hover:text-white transition-colors block py-0.5">
                  Standard Screw-Cap Spouts
                </a>
              </li>
              <li>
                <a href="#spout-catalog" className="hover:text-white transition-colors block py-0.5">
                  Flip-Top Spouts (Anti-Loss)
                </a>
              </li>
              <li>
                <a href="#spout-catalog" className="hover:text-white transition-colors block py-0.5">
                  Assembled &amp; Unassembled Formats
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-0.5">
                  In-House Spout Fixing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-0.5">
                  On-Site Job Work (Gujarat &amp; NCR)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Factory Address & Contact */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-wider mb-3.5 pb-2 border-b border-white/10">
              Factory Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="leading-relaxed block">
                    {siteData.company.address.full}
                  </span>
                  <a
                    href={siteData.company.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-300 hover:text-white mt-1.5 font-medium"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${siteData.company.contact.phoneRaw}`} className="hover:text-white font-mono font-medium">
                  {siteData.company.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-white">
                  {siteData.company.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} BSA Packaging. All Rights Reserved. Greater Noida (West), UP.
          </div>

          <div className="flex items-center gap-4">
            <span>Delhi NCR • Gujarat • Pan-India</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
