import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'How It Works - 30-Day Onboarding Process | Bridgely Pro',
  description: 'From Discovery to Go-Live in under 30 days. Learn our proven 4-phase process.',
};

const phases = [
  {
    number: 1,
    days: 'DAY 1-2',
    title: 'Discovery & Sourcing',
    description: 'We review your job descriptions, tools, and workflow - then start sourcing talent.',
    icon: '🔍',
  },
  {
    number: 2,
    days: 'DAY 3-7',
    title: 'Confirmation & Contract',
    description: 'We confirm availability, finalize the contract, and prep your onboarding plan.',
    icon: '📋',
  },
  {
    number: 3,
    days: 'DAY 8-11',
    title: 'Kickoff & Meet Your Team',
    description: 'We verify roles, assign your Team Leader, and introduce your staff.',
    icon: '👥',
  },
  {
    number: 4,
    days: 'DAY 12-30',
    title: 'Training & Go-Live',
    description: 'Your team trains, enters pre-live, and launches with trackers, SOPs, and feedback baked in.',
    icon: '🚀',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              From Discovery to Go-Live
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                in Under 30 Days.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Our proven 4-phase process ensures smooth onboarding and rapid time-to-value
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <div key={phase.number} className="relative">
                  {/* Phase Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                    {/* Day Badge */}
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                        {phase.days}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="text-5xl mb-4">{phase.icon}</div>

                    {/* Phase Number Circle */}
                    <div className="absolute -top-6 -right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {phase.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Our Proven Process
            </h2>

            {phases.map((phase) => (
              <div key={phase.number} className="mb-12 last:mb-0">
                <div className="flex gap-8">
                  {/* Phase Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{phase.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-blue-600 font-semibold">{phase.days}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of companies that have transformed their operations in 30 days
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Schedule Your Discovery Call
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
