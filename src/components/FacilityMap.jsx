import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FacilityMap() {
  const [mapMode, setMapMode] = useState('google-street'); // 'google-street' | 'osm' | 'satellite'
  const { address, contact } = siteData.company;
  const { lat, lng } = address.coordinates;

  const encodedAddress = encodeURIComponent(address.full);
  const googleStreetUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&ie=UTF8&iwloc=&output=embed`;
  const googleSatelliteUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=k&z=17&ie=UTF8&iwloc=&output=embed`;

  // OpenStreetMap bounding box around Knowledge Park V / Khera Choganpur
  const deltaLng = 0.012;
  const deltaLat = 0.007;
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - deltaLng}%2C${lat - deltaLat}%2C${lng + deltaLng}%2C${lat + deltaLat}&layer=mapnik&marker=${lat}%2C${lng}`;

  const activeIframeSrc =
    mapMode === 'osm'
      ? osmUrl
      : mapMode === 'satellite'
      ? googleSatelliteUrl
      : googleStreetUrl;

  return (
    <div
      id="facility-map"
      className="mt-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
    >
      {/* Map Header Bar */}
      <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EBF4FA] dark:bg-slate-800 text-[#1870B0] dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#182850] dark:text-white">
              Greater Noida (West) Manufacturing Hub — Interactive Street Map
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
              {address.full}
            </p>
          </div>
        </div>

        {/* Map View Switcher + Direct Google Maps Directions */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-full overflow-x-auto">
            {[
              { key: 'google-street', label: 'Street Map' },
              { key: 'osm', label: 'OpenStreetMap' },
              { key: 'satellite', label: 'Satellite' }
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setMapMode(tab.key)}
                className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  mapMode === tab.key
                    ? 'bg-white dark:bg-slate-900 text-[#182850] dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#182850] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <a
            href={address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Embedded Interactive Street Map */}
      <div className="relative w-full h-[340px] sm:h-[420px] bg-slate-100 dark:bg-slate-800">
        <iframe
          key={mapMode}
          title="BSA Packaging Manufacturing Hub Street Map - Greater Noida West"
          src={activeIframeSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Map Footer Strip */}
      <div className="px-5 py-3.5 bg-slate-50/80 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
        <div>
          <span className="font-semibold text-[#182850] dark:text-slate-200">Corridor Access:</span>{' '}
          Greater Noida West Rd • Knowledge Park V • Bisrakh Jalalpur • Direct Freight &amp; Pickup Access
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Clock className="w-3.5 h-3.5 text-[#1870B0] dark:text-sky-400" />
          <span>{contact.workingHours}</span>
        </div>
      </div>
    </div>
  );
}
