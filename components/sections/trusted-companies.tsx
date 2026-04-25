'use client';

export default function TrustedCompanies() {
  const companies = [
    { name: 'Fortune 500 Corp', logo: '🏢' },
    { name: 'TechStart Innovation', logo: '💻' },
    { name: 'Global Finance Inc', logo: '💰' },
    { name: 'Healthcare Plus', logo: '🏥' },
    { name: 'Retail Leaders Group', logo: '🛍️' },
    { name: 'Manufacturing Pro', logo: '🏭' },
    { name: 'Legal Solutions', logo: '⚖️' },
    { name: 'Insurance Experts', logo: '📋' },
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-semibold mb-12">
          Trusted by leading companies worldwide
        </p>

        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{company.logo}</div>
                <p className="text-gray-700 font-semibold">{company.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Scrollable */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{company.logo}</div>
                  <p className="text-gray-700 font-semibold text-sm">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
