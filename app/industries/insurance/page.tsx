import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function InsurancePage() {
  const roles = [
    'Claims Processing Specialists',
    'Policy Administration Support',
    'Insurance Virtual Assistants',
    'Customer Service Representatives',
    'Underwriting Assistants',
    'Data Entry & Document Management',
    'Accounting & Reconciliation Staff',
    'IT Support for Insurance Platforms',
  ];

  const benefits = [
    'Business Continuity & Disaster Recovery Built In',
    'Multilingual Teams',
    '24/7 Client Support',
    'Dedicated Account Managers',
    '30+ Insurance Management Systems Supported',
  ];

  const capabilities = [
    'Claims intake, documentation review, claims tracking, status updates, escalation support',
    'Policy setup, endorsements, cancellations, data entry, system updates, document generation',
    'Premium reconciliation, omission tracking, invoice generation, payment posting, ledger updates',
    'Acord Forms, Certificate of Insurance, Quotes Summary & Proposal',
    'Calendar management, appointment scheduling, inbox triage, CRM updates, follow-ups',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Insurance Operations That <span className="text-primary">Scale Without the Overhead</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              From claims to customer service, Bridgely Pro's remote teams plug into your workflows and deliver results—fast, accurate, and fully compliant. You stay focused on growth. We handle the back office.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Hire Remote Insurance Staff
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Typical <span className="text-primary">Roles Fulfilled</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Specialized insurance professionals trained on industry workflows and platforms.
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

      {/* Capabilities Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              What We <span className="text-primary">Deliver</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Industry-leading capabilities that handle every aspect of insurance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{capability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Why <span className="text-primary">Insurers</span> Trust Us
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {[
                { value: '1.5M', label: 'Quotes Processed' },
                { value: '2.4M', label: 'COIs Issued' },
                { value: '1.8M', label: 'Renewals Handled' },
                { value: '2.5M', label: 'Policy Checks' },
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-slate-100 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Build Your Insurance Team—Fast
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Tell us the tasks you want to automate, and we'll design a pilot workflow tailored to your business. Most proposals are ready within 48 hours.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
            Request Your Workflow Pilot
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
