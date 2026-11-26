import React from 'react';
import { Factory, Phone, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Col 1 & 2: Company Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-navy-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Factory className="w-5 h-5 stroke-[2.4]" />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white">
                BSA <span className="text-gradient-amber">PACKAGING</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              India's specialized B2B provider of precision spout fixing, custom spout trading, and pan-India on-site job work. Operating 12 semi-automatic sealing lines with proprietary 0.8s dual-action thermal and cold press technology.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-900 border border-white/[0.1] text-xs font-mono text-amber-300 shadow-inner">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GSTIN: {siteData.company.gstin}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-white/[0.08] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Spouts & Services */}
          <div>
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-white/[0.08] pb-2">
              Technical Products
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <a href="#spout-catalog" className="hover:text-amber-400 transition-colors block py-0.5">
                  Standard Screw-Cap Spouts
                </a>
              </li>
              <li>
                <a href="#spout-catalog" className="hover:text-amber-400 transition-colors block py-0.5">
                  Flip-Top Spouts (Anti-Loss)
                </a>
              </li>
              <li>
                <a href="#spout-catalog" className="hover:text-amber-400 transition-colors block py-0.5">
                  Assembled Spouts (Bottom-Fill)
                </a>
              </li>
              <li>
                <a href="#spout-catalog" className="hover:text-amber-400 transition-colors block py-0.5">
                  Unassembled Spouts (Top-Fill)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors block py-0.5">
                  In-House Spout Fixing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors block py-0.5">
                  On-Site Job Work Gujarat &amp; NCR
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Facility & Contact Details */}
          <div>
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-white/[0.08] pb-2">
              Facility Address
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteData.company.address.facility}, {siteData.company.address.area}, {siteData.company.address.state}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${siteData.company.contact.phoneRaw}`} className="hover:text-white font-mono font-bold">
                  {siteData.company.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-white">
                  {siteData.company.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
         

          <div className="flex items-center gap-4">
           
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-850 text-slate-300 hover:text-white border border-white/[0.15] mx-10 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
