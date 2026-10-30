import { useState } from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

export interface LocationInfo {
  id: 'lagos' | 'ife';
  label: string;
  badge: string;
  address: string;
  googleMapsUrl: string;
  embedUrl: string;
  note: string;
}

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'lagos',
    label: 'Lagos Branch',
    badge: 'Lagos',
    address: '4, Prince Adeleke Close, Ikosi Ketu, Lagos',
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('4, Prince Adeleke Close, Ikosi Ketu, Lagos')}`,
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('4, Prince Adeleke Close, Ikosi Ketu, Lagos')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    note: 'Our Lagos kitchen & distribution hub serving Ikosi Ketu and surrounding areas.',
  },
  {
    id: 'ife',
    label: 'Ile-Ife Branch',
    badge: 'Ile-Ife, Osun State',
    address: 'Solar close, Mayfair Roundabout, Mayfair, Ile Ife, Osun State',
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Solar close, Mayfair Roundabout, Mayfair, Ile Ife, Osun State')}`,
    embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Solar close, Mayfair Roundabout, Mayfair, Ile Ife, Osun State')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    note: 'Conveniently located near Mayfair Roundabout for orders, dine-in inquiries, and deliveries.',
  },
];

export default function LocationMap() {
  const [activeLocationId, setActiveLocationId] = useState<'lagos' | 'ife'>('lagos');

  const activeLocation = LOCATIONS.find((loc) => loc.id === activeLocationId) ?? LOCATIONS[0];

  return (
    <div className="mt-16 bg-[#171715] border border-[#5f4910] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#3e341c]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#382b0b] text-[#f4c430] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin size={14} />
            <span>Interactive Map</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#fff8e8]">
            Find Us on <span className="text-[#f4c430]">Google Maps</span>
          </h3>
          <p className="text-[#c5bdad] text-sm sm:text-base mt-2 max-w-xl">
            Select a location below to view where our kitchens are located and get direct GPS directions.
          </p>
        </div>

        {/* Location switcher tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 bg-[#0b0b0a] rounded-2xl border border-[#443818] self-start md:self-auto">
          {LOCATIONS.map((loc) => {
            const isActive = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#f4c430] to-[#c94b1c] text-[#0b0b0a] shadow-md font-bold'
                    : 'text-[#d8d0c0] hover:text-white hover:bg-[#241d11]'
                }`}
              >
                <MapPin size={16} className={isActive ? 'text-[#0b0b0a]' : 'text-[#f4c430]'} />
                <span>{loc.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Location Info Strip */}
      <div className="bg-[#241d11] border border-[#5f4910]/70 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#f4c430] text-[#0b0b0a]">
              {activeLocation.badge}
            </span>
            <span className="text-sm text-[#c5bdad]">{activeLocation.note}</span>
          </div>
          <p className="text-[#fff8e8] font-semibold text-base sm:text-lg">
            {activeLocation.address}
          </p>
        </div>

        <a
          href={activeLocation.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-[#f4c430] text-[#0b0b0a] hover:bg-[#ffd95a] font-bold text-sm shadow-md transition-all hover:scale-105"
        >
          <Navigation size={16} />
          <span>Open in Google Maps</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border border-[#5f4910] shadow-inner bg-[#0b0b0a]">
        <iframe
          key={activeLocation.embedUrl}
          title={`Google Map - ${activeLocation.label}`}
          src={activeLocation.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-[105%] saturate-[110%]"
        />
      </div>
    </div>
  );
}
