import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ConstructionPage() {
  const roles = [
    'Project Coordinators',
    'Administrative Support',
    'Vendor Management',
    'Scheduling Specialists',
    'Document Management',
    'Budget & Cost Tracking',
    'Subcontractor Communication',
    'Quality Assurance Support',
  ];

  const services = [
    'Project scheduling and timeline management',
    'Vendor communication and coordination',
    'Subcontractor management and communication',
    'Budget tracking and cost analysis',
    'Document management and filing',
    'Administrative support and scheduling',
    'Site coordination and logistics support',
    'Progress reporting and documentation',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Construction Support That Keeps <span className="text-primary">Projects Moving</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Construction management requires precision and coordination. Bridgely Pro provides remote professionals who handle project scheduling, vendor management, document coordination, and administrative tasks—keeping your teams focused on the work.
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
              Construction <span className="text-primary">Support Roles</span>
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
              Services We <span className="text-primary">Deliver</span>
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
              Why Construction Teams Choose <span className="text-primary">Bridgely Pro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Timeline Expertise',
                description: 'Our teams understand construction schedules, critical paths, and the importance of keeping projects on schedule.',
              },
              {
                title: 'Vendor & Subcontractor Management',
                description: 'Experienced coordinators manage communication, scheduling, and documentation across multiple parties.',
              },
              {
                title: 'Budget & Cost Control',
                description: 'Support teams track budgets, expenses, and cost variations to keep projects financially on target.',
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
            Build Your Construction Support Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experienced coordinators trained on construction workflows and project management. Let us handle scheduling, vendor management, and documentation while your teams focus on delivery.
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
