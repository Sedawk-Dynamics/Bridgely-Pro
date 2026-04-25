import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function HealthcarePage() {
  const roles = [
    'Medical Billing Specialists',
    'Insurance Verification Agents',
    'Patient Intake Coordinators',
    'Revenue Cycle Assistants',
    'Claims Adjudication Specialists',
    'Medical Transcriptionists',
    'Patient Support Representatives',
    'EHR Data Entry Specialists',
  ];

  const benefits = [
    'HIPAA-compliant workflows and secure data handling',
    'SLA-backed turnaround times',
    'Daily reporting and performance dashboards',
    'Multilingual patient communication',
    'Integration with Epic, Cerner, and Athenahealth',
    'Denial tracking and resolution support',
  ];

  const capabilities = [
    'Real-time scheduling and appointment confirmation',
    'EHR data entry and documentation support',
    'Insurance verification and prior authorization',
    'Medical billing and coding support',
    'Patient intake and intake coordination',
    'Denial tracking and appeals management',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Healthcare Support That Frees Up Your <span className="text-primary">Frontline</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Clinical teams deserve support that's fast, accurate, and invisible. Bridgely Pro provides trained remote staff who manage billing, intake, scheduling, and insurance workflows with HIPAA-compliant precision. Every assistant is fluent in your systems and focused on keeping your practice moving.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Build Your Team
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Roles That Keep Your <span className="text-primary">Practice Running</span>
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

      {/* Why Healthcare Chooses Us */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Built for Compliance. <span className="text-primary">Trusted by Providers.</span>
            </h2>
            <p className="text-lg text-slate-600">Precision, Empathy, and Speed—Every Time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Claim Errors Get Caught',
                description: 'Remote teams follow your workflows and flag issues early, before they cost you money.',
              },
              {
                title: 'Platforms Feel Familiar',
                description: 'Assistants work inside your EHR, billing, and scheduling systems with zero ramp-up.',
              },
              {
                title: 'Patients Feel Heard',
                description: 'Bilingual support and clear communication help every interaction feel human.',
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all hover:border-primary/50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Built for <span className="text-primary">Compliance</span>
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

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-2xl border border-primary/20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">HIPAA-Compliant Operations</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Secure data handling and encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Compliance-trained teams
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Regular security audits and updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Business Associate Agreements in place
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Build a Healthcare Team That Supports Your Frontline
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Remote assistants handle the admin, so your staff can focus on care. Patient volumes fluctuate. Compliance never sleeps. Tell us what's slowing you down—we'll build a team that keeps things moving.
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
