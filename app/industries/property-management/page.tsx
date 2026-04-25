import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function PropertyManagementPage() {
  const roles = [
    'Tenant Support Coordinators',
    'Maintenance Coordination',
    'Lease Management Specialists',
    'Rent Collection Coordinators',
    'Property Operations Support',
    'Vendor Management Specialists',
    'Accounting & Billing Support',
    'Administrative Support',
  ];

  const services = [
    'Tenant inquiry response and support',
    'Maintenance request tracking and coordination',
    'Lease document management and tracking',
    'Rent collection follow-up and reporting',
    'Property operations scheduling and coordination',
    'Vendor communication and coordination',
    'Property accounting and billing support',
    'Administrative tasks and document management',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Property Management Support That <span className="text-primary">Keeps Operations On Track</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Property management in 2025 is more complex than ever. Bridgely Pro provides trained remote staff who handle tenant coordination, maintenance tracking, lease management, and property operations—freeing your team to focus on growth and tenant relationships.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Build Your Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Property Management <span className="text-primary">Roles</span>
            </h2>
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

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Services We <span className="text-primary">Provide</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Property Managers Choose <span className="text-primary">Bridgely Pro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '24/7 Tenant Support',
                description: 'Your tenants get prompt responses to inquiries, requests, and concerns—even outside business hours.',
              },
              {
                title: 'Platform Integration',
                description: 'Our teams work seamlessly with property management software like AppFolio, Buildium, and Rent Manager.',
              },
              {
                title: 'Scalable Operations',
                description: 'Handle growth without adding overhead—scale up for peak seasons and adjust as needed.',
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-lg transition-all hover:border-primary/50">
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
            Build Your Property Management Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Remote coordinators trained on your systems and processes. From tenant support to maintenance coordination, let us handle the operational details while you focus on strategic growth.
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
