import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function LegalPage() {
  const roles = [
    'Legal Intake Coordinators',
    'Case File Organization',
    'Contract Review Specialists',
    'Discovery Coordinators',
    'Calendar & Deadline Managers',
    'Legal Research Support',
    'CRM & Practice Management',
    'Paralegal Support Professionals',
  ];

  const support = [
    'Document review and formatting',
    'Legal research and case summarization',
    'Drafting support for contracts, pleadings, and correspondence',
    'Litigation support, including discovery coordination',
    'Contract lifecycle management and redlining',
    'E-discovery coordination and privilege review',
  ];

  const cannotDo = [
    'Provide legal advice or counsel',
    'Represent clients in any jurisdiction',
    'Perform services outside the scope of attorney supervision',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Legal Support That Keeps Your <span className="text-primary">Casework Moving</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Bridgely Pro provides offshore legal support services tailored for U.S. law firms. Document review, legal research, drafting, and litigation support—all performed under the supervision of licensed U.S. attorneys. Every workflow is built for speed, confidentiality, and compliance.
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
              Roles That Keep Your <span className="text-primary">Legal Team Focused</span>
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

      {/* What We Support Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              What Our Legal Support <span className="text-primary">Professionals Can—and Can't—Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-white border border-slate-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                We Support
              </h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-red-50 border border-red-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">We Do Not</h3>
              <ul className="space-y-3">
                {cannotDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Confidentiality Is <span className="text-primary">Non-Negotiable</span>
            </h2>
            <p className="text-lg text-slate-600">Compliance is built in to every workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Secure File Transfer',
                description: 'Encrypted communication channels and secure file transfer protocols for all sensitive documents.',
              },
              {
                title: 'Role-Based Access',
                description: 'Custom onboarding for firm-specific workflows with strict role-based access controls.',
              },
              {
                title: 'Confidentiality Agreements',
                description: 'All team members trained in confidentiality agreements and best practices for sensitive information.',
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
            Build Your Legal Support Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Trained legal professionals working under attorney supervision. Confidentiality guaranteed. Let us handle the research, drafting, and discovery—while you focus on strategy and client relationships.
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
