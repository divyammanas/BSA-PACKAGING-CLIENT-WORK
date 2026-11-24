import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck, Factory, Sun, Moon } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export default function Header({ onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#060B18]/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-white/[0.08] shadow-md dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] py-3' 
        : 'bg-white/85 dark:bg-[#060B18]/85 backdrop-blur-md border-b border-slate-200/60 dark:border-white/[0.05] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-all">
              <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-navy-950 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-navy-950 dark:text-white leading-tight">
                  BSA <span className="text-gradient-amber">PACKAGING</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 dark:bg-navy-850 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                  GST REG
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-300 tracking-wider uppercase">
                Greater Noida (W) • Pan-India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1.5 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-navy-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button (Light/Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-slate-100 dark:bg-navy-850 text-slate-800 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-navy-800 transition-all shadow-sm"
              aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 stroke-[2.3]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 stroke-[2.3]" />
              )}
            </button>

            {/* WhatsApp Direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with BSA Packaging on WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 hover:bg-emerald-100 dark:hover:bg-emerald-500/25 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Request a Quote CTA */}
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, '#quote')}
              className="btn-amber-glow inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs md:text-sm font-extrabold uppercase tracking-wide"
            >
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-slate-100 dark:bg-navy-850 text-slate-800 dark:text-amber-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#060B18]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.08] px-4 pt-4 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {siteData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-3 rounded-xl text-base font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex flex-col gap-3">
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, '#quote')}
              className="btn-amber-glow w-full text-center py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wide"
            >
              Get Bulk Quote &amp; Samples
            </a>
            <a
              href={`tel:${siteData.company.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-navy-900 border border-slate-300 dark:border-white/[0.08]"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {siteData.company.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
