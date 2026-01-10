import React from 'react';
// Placeholder logos using text for demonstration
const partners = ['HealthPlus', 'MedSure', 'AfriCare', 'City Pharmacy', 'Global Insure', 'Wellness Center'];
export function Partners() {
  return <section id="partners" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-gray-500 font-medium mb-8 uppercase tracking-wider text-sm">
          Trusted by Leading Healthcare Providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              {partner}
            </div>)}
        </div>
      </div>
    </section>;
}