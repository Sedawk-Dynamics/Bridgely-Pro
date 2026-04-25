import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function PromotionalProductsPage() {
  const roles = [
    'Order Entry Specialists',
    'Artwork Coordination Specialists',
    'Vendor Communication Managers',
    'Inventory & Pricing Specialists',
    'CRM & ERP Data Specialists',
    'Quote Generation Specialists',
    'Customer Service Representatives',
    'Sales Support Professionals',
  ];

  const platforms = [
    'ASI Platform',
    'SAGE Platform',
    'PromoStandards',
    'CRM Systems',
    'ERP Systems',
  ];

  const capabilities = [
    'Order entry and processing across ASI, SAGE, and PromoStandards platforms',
    'Artwork coordination, proofing, and revision tracking',
    'Supplier and vendor communication for order updates and confirmations',
    'Inventory and pricing updates across storefronts and catalogs',
    'CRM and ERP data entry, cleanup, and maintenance',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Remote Support That Keeps Your <span className="text-primary">Promo Business Moving</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Bridgely Pro has supported promotional product distributors and suppliers for years. We understand the pace, complexity, and precision your industry demands—and we deliver trained remote teams that handle everything from order entry to artwork coordination.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Build Your Promo Team
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Specialized Talent for <span className="text-primary">Promo Workflows</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Platform-trained professionals ready to handle your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-lg transition-all hover:border-primary/50">
                <CheckCircle className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-slate-900">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Trained in Promo-Specific <span className="text-primary">Tools</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Our teams are fluent in the platforms you use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl text-center hover:shadow-lg transition-all hover:border-primary/50">
                <p className="font-bold text-slate-900">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              What We Know Your <span className="text-primary">Deadlines Don't Wait</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Turnarounds, Zero Bottlenecks',
                description: 'We work your hours, meet your timelines, and keep your orders flowing.',
              },
              {
                title: 'Built for High-Volume Work',
                description: 'We handle spikes, seasonal surges, and complex orders with precision.',
              },
              {
                title: 'Promo-Specific Expertise',
                description: 'Our teams understand artwork workflows, vendor coordination, and order complexity.',
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Build Your Promotional Products Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Remote specialists trained on your platforms, ready to handle your workflows. Let us know what's slowing you down—we'll scale your team without scaling your overhead.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
            Start Your Promo Team Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
