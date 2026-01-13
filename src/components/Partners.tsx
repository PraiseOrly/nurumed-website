// Placeholder logos using text for demonstration
const partners = ['HealthPlus', 'MedSure', 'AfriCare', 'City Pharmacy', 'Global Insure', 'Wellness Center'];

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-gray-500 font-medium mb-12 uppercase tracking-wider text-sm">
          Trusted by Leading Healthcare Providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-bold text-gray-600 flex items-center gap-3 px-6 py-4 rounded-lg border border-gray-200 hover:border-[#007B83] hover:text-[#007B83] hover:shadow-md transition-all duration-300 bg-gray-50 hover:bg-white"
            >
              <div className="w-10 h-10 bg-[#007B83] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{partner.charAt(0)}</span>
              </div>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

