import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function FinanceAccountingPage() {
  const roles = [
    'Accounting Support Staff',
    'Financial Operations Specialists',
    'Bookkeeping Professionals',
    'Reconciliation Specialists',
    'Payroll Processing Staff',
    'General Ledger Managers',
    'AP/AR Specialists',
    'Financial Data Entry',
  ];

  const capabilities = [
    'General ledger data entry and maintenance',
    'Account reconciliation and variance analysis',
    'Accounts payable and receivable processing',
    'Payroll support and benefits administration',
    'Financial report preparation and analysis',
    'Tax document organization and filing support',
    'Expense tracking and categorization',
    'Financial data cleanup and system entry',
  ];

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Finance & Accounting Support That <span className="text-primary">Scales with Precision</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Bridgely Pro provides accounting and finance professionals trained on leading platforms and processes. From bookkeeping to financial operations, our teams handle the back-office work so your accountants and finance teams can focus on strategy and analysis.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Build Your Finance Team
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Financial <span className="text-primary">Professionals</span>
            </h2>
            <p className="text-lg text-slate-600">Certified staff trained on accounting systems and processes.</p>
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
              Accounting Services We <span className="text-primary">Deliver</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Finance Teams Choose <span className="text-primary">Bridgely Pro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accuracy & Compliance',
                description: 'Trained professionals follow best practices and maintain audit trails for all financial transactions.',
              },
              {
                title: 'Platform Fluency',
                description: 'Our teams work with QuickBooks, Xero, NetSuite, Sage, and other leading accounting platforms.',
              },
              {
                title: 'Scalability',
                description: 'Handle seasonal spikes, year-end closings, or monthly reconciliations without hiring permanent staff.',
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
            Build Your Finance Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Accounting professionals trained on your systems and processes. Let your accountants focus on analysis and strategy while our team handles data entry, reconciliation, and daily operations.
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
