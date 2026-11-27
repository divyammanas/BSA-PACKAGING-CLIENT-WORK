import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
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

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedSpout) {
      setFormData((prev) => ({ ...prev, spoutPreference: preselectedSpout }));
    }
  }, [preselectedSpout]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
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
    if (!formData.location.trim()) newErrors.location = 'City & State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const inputBaseClass =
    'w-full px-3.5 py-2.5 rounded-lg text-base sm:text-sm bg-white dark:bg-slate-800 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1870B0]/30 focus:border-[#1870B0] transition-colors';

  return (
    <section id="quote" className="py-16 md:py-24 bg-white dark:bg-[#0F172A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 block mb-2">
            {formConfig.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#182850] dark:text-white tracking-tight">
            {formConfig.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {formConfig.subtitle}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Factory Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1870B0] dark:text-sky-400 mb-2">
                Direct Factory Desk
              </div>

              <h3 className="font-display text-xl font-bold text-[#182850] dark:text-white">
                BSA Packaging
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                GST Registered Flexible Packaging &amp; Spout Fixing Unit
              </p>

              <div className="mt-6 space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#1870B0] dark:text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${siteData.company.contact.phoneRaw}`}
                      className="font-semibold text-base text-[#182850] dark:text-white hover:text-[#1870B0] dark:hover:text-sky-400 transition-colors"
                    >
                      {siteData.company.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#1870B0] dark:text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Commercial &amp; RFQ Email</span>
                    <a
                      href={`mailto:${siteData.company.contact.salesEmail}`}
                      className="font-medium text-sm text-[#1870B0] dark:text-sky-400 hover:underline break-all"
                    >
                      {siteData.company.contact.salesEmail}
                    </a>
                  </div>
                </div>

                {/* Factory Address & Google Maps Link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#1870B0] dark:text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Factory Address</span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-0.5">
                      {siteData.company.address.full}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <a
                        href="#facility-map"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1870B0] dark:text-sky-400 hover:underline"
                      >
                        <span>View Street Map</span>
                      </a>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <a
                        href={siteData.company.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1870B0] dark:text-sky-400 hover:underline"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#1870B0] dark:text-sky-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Operating Hours</span>
                    <p className="font-medium text-slate-700 dark:text-slate-300 text-xs sm:text-sm mt-0.5">
                      {siteData.company.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`https://wa.me/${siteData.company.contact.whatsappNumber}?text=${encodeURIComponent(siteData.company.contact.whatsappDefaultText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Service Commitments */}
            <div className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#182850] dark:text-white">
                <ShieldCheck className="w-4 h-4 text-[#1870B0] dark:text-sky-400 shrink-0" />
                <span>B2B Service Commitments</span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 pl-6 list-disc">
                <li>Formal quotations shared within 2–4 business hours.</li>
                <li>Physical sample kits dispatched across India within 24 hours.</li>
                <li>Complimentary trial welding on customer-supplied laminate pouches.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Structured B2B Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#182850] dark:text-white">
                      Request Bulk Quotation or Sample Kit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Provide your pouch specifications below. Fields marked with * are required.
                    </p>
                  </div>

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Sharma"
                        className={`${inputBaseClass} ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Company / Brand Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g., Himalaya Foods Pvt Ltd"
                        className={`${inputBaseClass} ${
                          errors.companyName ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +91 98682 26908"
                        className={`${inputBaseClass} ${
                          errors.phone ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Business Email (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Plant City &amp; State *
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Ahmedabad (Gujarat) or Greater Noida (UP)"
                      className={`${inputBaseClass} ${
                        errors.location ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.location}</p>
                    )}
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                    >
                      {formConfig.services.map((svc, i) => (
                        <option key={i} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="spoutPreference" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Spout Preference
                      </label>
                      <select
                        id="spoutPreference"
                        name="spoutPreference"
                        value={formData.spoutPreference}
                        onChange={handleChange}
                        className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                      >
                        {formConfig.spoutPreferences.map((sp, i) => (
                          <option key={i} value={sp}>
                            {sp}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="supplyFormat" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Supply Configuration
                      </label>
                      <select
                        id="supplyFormat"
                        name="supplyFormat"
                        value={formData.supplyFormat}
                        onChange={handleChange}
                        className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                      >
                        {formConfig.supplyFormats.map((sf, i) => (
                          <option key={i} value={sf}>
                            {sf}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 6 */}
                  <div>
                    <label htmlFor="approximateQuantity" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Estimated Batch / Monthly Volume
                    </label>
                    <select
                      id="approximateQuantity"
                      name="approximateQuantity"
                      value={formData.approximateQuantity}
                      onChange={handleChange}
                      className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                    >
                      {formConfig.quantityRanges.map((q, i) => (
                        <option key={i} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Checkbox */}
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="requestSamples"
                      name="requestSamples"
                      checked={formData.requestSamples}
                      onChange={handleChange}
                      className="w-4 h-4 mt-0.5 rounded text-[#1870B0] focus:ring-[#1870B0] border-slate-300"
                    />
                    <label htmlFor="requestSamples" className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
                      <span className="font-semibold text-[#182850] dark:text-white">Request physical sample kit</span> (includes sealed pouch samples, screw-cap spouts, and flip-top spouts).
                    </label>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Product Details / Additional Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g., 200ml mango pulp stand-up pouches, 15mm spout fixing required in Gujarat."
                      className={`${inputBaseClass} border-slate-300 dark:border-slate-700`}
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex-1 py-3 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Quote Request'}</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 rounded-lg font-semibold text-sm bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    Direct B2B inquiry. Responses sent via official phone, WhatsApp, or email.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#182850] dark:text-white">
                      Inquiry Received
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-[#182850] dark:text-white">{formData.fullName}</strong>. Your inquiry for{' '}
                      <span className="font-semibold text-[#1870B0] dark:text-sky-400">{formData.companyName}</span> has been prepared.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-700 dark:text-slate-300">
                    <div><span className="text-slate-500">Service:</span> {formData.serviceRequired}</div>
                    <div><span className="text-slate-500">Spout:</span> {formData.spoutPreference}</div>
                    <div><span className="text-slate-500">Volume:</span> {formData.approximateQuantity}</div>
                    <div><span className="text-slate-500">Location:</span> {formData.location}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-semibold text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Summary on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto py-3 px-5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
