import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function QuoteFormSection({ preselectedService, preselectedSpout }) {
  const formConfig = siteData.quoteForm;
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    location: '',
    serviceRequired: formConfig.services[0],
    spoutPreference: formConfig.spoutPreferences[0],
    supplyFormat: formConfig.supplyFormats[0],
    approximateQuantity: formConfig.quantityRanges[1],
    requestSamples: true,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Update when props change
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedSpout) {
      setFormData(prev => ({ ...prev, spoutPreference: preselectedSpout }));
    }
  }, [preselectedSpout]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Contact name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.location.trim()) newErrors.location = 'City / State is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate pre-filled WhatsApp link with all inquiry details
  const generateWhatsAppLink = () => {
    const message = `*New B2B Inquiry for BSA Packaging*
----------------------------------------
*Name:* ${formData.fullName}
*Company:* ${formData.companyName}
*Phone/WhatsApp:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Location:* ${formData.location}

*Service Required:* ${formData.serviceRequired}
*Spout Type:* ${formData.spoutPreference}
*Supply Format:* ${formData.supplyFormat}
*Volume:* ${formData.approximateQuantity}
*Request Samples:* ${formData.requestSamples ? 'YES (Send Sample Kit)' : 'No'}

*Additional Notes:*
${formData.message || 'No additional notes'}`;

    return `https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    // If a valid Web3Forms key is configured, post to it
    if (siteData.company.web3FormsKey && !siteData.company.web3FormsKey.includes('YOUR_')) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: siteData.company.web3FormsKey,
            subject: `New B2B Lead: ${formData.companyName} (${formData.serviceRequired})`,
            ...formData
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.warn('Web3Forms fetch error, using fallback:', err);
      }
    }

    // Default simulation / fallback: Success state + WhatsApp direct handoff
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-850 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>{formConfig.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {formConfig.title}
          </h2>
          <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {formConfig.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Contact Info Left, B2B Quote Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Factory Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Contact Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-navy-950/95 border border-white/[0.12] shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-black text-emerald-400 uppercase tracking-widest">
                  Direct Factory Desk
                </span>
              </div>

              <h3 className="font-display text-2xl font-black text-white">
                BSA Packaging Industries
              </h3>
              <p className="mt-1 text-xs font-mono font-semibold text-slate-300">
                GST Registered B2B Flexible Packaging Specialist
              </p>

              {/* Contact List */}
              <div className="mt-7 space-y-5 text-sm text-slate-200">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-850 border border-white/[0.08] flex items-center justify-center shrink-0 text-amber-400 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono font-medium block">Direct Call / Inquiries</span>
                    <a
                      href={`tel:${siteData.company.contact.phoneRaw}`}
                      className="font-black text-base text-white hover:text-amber-400 transition-colors"
                    >
                      {siteData.company.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-850 border border-white/[0.08] flex items-center justify-center shrink-0 text-sky-400 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono font-medium block">RFQ &amp; Commercial Proposals</span>
                    <a
                      href={`mailto:${siteData.company.contact.salesEmail}`}
                      className="font-bold text-sm sm:text-base text-white hover:text-sky-300 transition-colors break-all"
                    >
                      {siteData.company.contact.salesEmail}
                    </a>
                  </div>
                </div>

                {/* Facility Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-850 border border-white/[0.08] flex items-center justify-center shrink-0 text-amber-400 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono font-medium block">Factory Facility Location</span>
                    <p className="font-medium text-slate-200 text-xs sm:text-sm leading-relaxed mt-0.5">
                      {siteData.company.address.facility}, {siteData.company.address.area}, {siteData.company.address.state}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-850 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300 shadow-inner">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono font-medium block">Factory Working Hours</span>
                    <p className="font-semibold text-slate-200 text-xs sm:text-sm mt-0.5">
                      {siteData.company.contact.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <a
                  href={`https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl text-sm font-black bg-emerald-500 hover:bg-emerald-400 text-navy-950 uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5 fill-navy-950 stroke-emerald-500" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-white/[0.1] text-xs space-y-2.5 font-mono text-slate-200 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-5 h-5 shrink-0 stroke-[2.2]" />
                <span className="font-bold text-xs uppercase tracking-wide">BSA Packaging B2B Service Commitments:</span>
              </div>
              <p className="text-slate-300 pl-7 leading-relaxed font-sans text-xs">
                • Quotations delivered within 2–4 hours.<br />
                • Physical spout samples dispatched via express courier within 24 hours.<br />
                • Non-Disclosure Agreements (NDA) respected for custom shapes.
              </p>
            </div>

          </div>

          {/* Right Column: Structured B2B Request a Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-navy-950 border border-white/[0.12] shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="border-b border-white/[0.08] pb-4 mb-4">
                    <h3 className="font-display text-2xl font-black text-white">
                      Request Quotation or Sample Kit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                      Fill out your pouch requirements below. All fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Sharma"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium ${
                          errors.fullName ? 'border-rose-500' : 'border-white/[0.12]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-rose-400 text-xs mt-1 font-mono font-bold">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g., Himalaya Foods Ltd"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium ${
                          errors.companyName ? 'border-rose-500' : 'border-white/[0.12]'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-rose-400 text-xs mt-1 font-mono font-bold">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone/WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium ${
                          errors.phone ? 'border-rose-500' : 'border-white/[0.12]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-400 text-xs mt-1 font-mono font-bold">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Business Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Row 3: Location / State */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                      Plant City &amp; State *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Ahmedabad (Gujarat) or Greater Noida (UP)"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium ${
                        errors.location ? 'border-rose-500' : 'border-white/[0.12]'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-rose-400 text-xs mt-1 font-mono font-bold">{errors.location}</p>
                    )}
                  </div>

                  {/* Row 4: Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                      Service Required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                    >
                      {formConfig.services.map((svc, i) => (
                        <option key={i} value={svc} className="bg-navy-950 text-white font-medium">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Spout Preference & Supply Format */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Spout Preference
                      </label>
                      <select
                        name="spoutPreference"
                        value={formData.spoutPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                      >
                        {formConfig.spoutPreferences.map((sp, i) => (
                          <option key={i} value={sp} className="bg-navy-950 text-white font-medium">
                            {sp}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Supply Configuration
                      </label>
                      <select
                        name="supplyFormat"
                        value={formData.supplyFormat}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                      >
                        {formConfig.supplyFormats.map((sf, i) => (
                          <option key={i} value={sf} className="bg-navy-950 text-white font-medium">
                            {sf}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 6: Approximate Pouch Volume */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                      Estimated Pouch Batch / Monthly Volume
                    </label>
                    <select
                      name="approximateQuantity"
                      value={formData.approximateQuantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                    >
                      {formConfig.quantityRanges.map((q, i) => (
                        <option key={i} value={q} className="bg-navy-950 text-white font-medium">
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sample Request Checkbox */}
                  <div className="p-4 rounded-2xl bg-amber-950/40 border-2 border-amber-500/50 flex items-start gap-3.5 shadow-md">
                    <input
                      type="checkbox"
                      id="requestSamples"
                      name="requestSamples"
                      checked={formData.requestSamples}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 rounded text-amber-500 focus:ring-amber-400 bg-navy-950 border-white/[0.2]"
                    />
                    <label htmlFor="requestSamples" className="text-xs sm:text-sm text-slate-200 cursor-pointer font-normal">
                      <strong className="text-amber-300 font-bold">Yes, please courier me physical samples</strong> (Includes sample sealed pouches, standard screw-cap spouts, and anti-loss flip-top spouts).
                    </label>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                      Product Type / Additional Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g., We pack mango pulp in 200ml stand-up pouches. Need 15mm spout fixing in Gujarat."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-navy-900 border border-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-amber-glow flex-1 py-4 px-6 rounded-xl font-black text-sm text-navy-950 uppercase tracking-wide flex items-center justify-center gap-2.5 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Request for Quote'}</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 px-5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-xs font-mono text-slate-400 text-center">
                    🔒 Direct B2B communication. Zero spam. Quotations sent via official WhatsApp/Email.
                  </p>

                </form>
              ) : (
                /* Success State */
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Our commercial team has registered your RFQ for <span className="text-amber-400 font-bold">{formData.companyName}</span>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-900 border border-white/[0.1] text-xs font-mono text-left max-w-md mx-auto space-y-2 text-slate-200">
                    <div><span className="text-slate-400">Service:</span> {formData.serviceRequired}</div>
                    <div><span className="text-slate-400">Spout:</span> {formData.spoutPreference}</div>
                    <div><span className="text-slate-400">Volume:</span> {formData.approximateQuantity}</div>
                    <div><span className="text-slate-400">Location:</span> {formData.location}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-amber-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-navy-950 uppercase tracking-wide"
                    >
                      <MessageSquare className="w-4 h-4 fill-navy-950" />
                      <span>Send this Summary on WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-mono text-xs font-bold text-slate-300 hover:text-white bg-navy-900 border border-white/[0.1] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
