import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'From claims processing to customer service, scaled remote teams that handle back office operations with precision and compliance.',
    href: '/industries/insurance',
  },
  {
    id: 'promotional-products',
    name: 'Promotional Products',
    description: 'Order entry, artwork coordination, and vendor management for promo distributors and suppliers.',
    href: '/industries/promotional-products',
  },
  {
    id: 'finance',
    name: 'Finance & Accounting',
    description: 'Accounting support, reconciliation, and financial operations with certified professionals.',
    href: '/industries/finance-accounting',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant billing, scheduling, and patient support for healthcare practices.',
    href: '/industries/healthcare',
  },
  {
    id: 'legal',
    name: 'Legal',
    description: 'Document review, legal research, and litigation support under attorney supervision.',
    href: '/industries/legal',
  },
  {
    id: 'property-management',
    name: 'Property Management',
    description: 'Tenant support, lease management, and property operations coordination.',
    href: '/industries/property-management',
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Project coordination, vendor management, and administrative support for construction companies.',
    href: '/industries/construction',
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Industry-Specific <span className="text-primary">Remote Staffing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Bridgely Pro serves every major industry with trained, specialized teams that understand your workflows, compliance requirements, and operational demands. Scale confidently with remote support built for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link key={industry.id} href={industry.href}>
                <div className="h-full p-8 bg-white border-2 border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 flex-1 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bridgely */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Industries Choose <span className="text-primary">Bridgely Pro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Industry-specific expertise and compliance knowledge',
              'Teams trained on your platforms and workflows',
              'Dedicated account managers for continuity',
              'HIPAA, SOC 2, and security-compliant operations',
              '24/7 support and multilingual capabilities',
              'Proven track record across diverse sectors',
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Ready to Scale Your Industry Operations?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get a customized proposal and start building your remote team within 48 hours.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
