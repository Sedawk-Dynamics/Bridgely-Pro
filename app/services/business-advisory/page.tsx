'use client';

import Link from 'next/link';
import { CheckCircle, Zap, BarChart3, Clock } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function BusinessAdvisoryPage() {
  const features = [
    { title: 'Strategic Consulting', description: 'Expert guidance on business transformation and growth strategies', icon: Zap },
    { title: 'Industry Expertise', description: 'Deep knowledge of insurance and financial services sectors', icon: BarChart3 },
    { title: 'Proven Results', description: 'Track record of successful business transformations and improvements', icon: Clock },
  ];

  const useCases = [
    'Digital transformation strategy',
    'Operational efficiency improvement',
    'Cost optimization planning',
    'Market expansion strategy',
    'Technology implementation roadmap',
    'Organizational restructuring',
  ];

  return (
    <main className="bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Business <span className="text-primary">Advisory Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Strategic consulting to transform your business, optimize operations, and achieve sustainable growth.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-lg transition-all">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Common Use Cases</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What is your consulting approach?', a: 'We use data-driven analysis combined with industry best practices to deliver actionable strategies.' },
              { q: 'How long do projects typically take?', a: 'Engagements range from 3-12 months depending on scope and complexity.' },
              { q: 'Do you work with companies of all sizes?', a: 'Yes, we have experience with startups through enterprise organizations.' },
              { q: 'How do you measure success?', a: 'We establish clear KPIs at the start and provide regular progress reporting.' },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Work with expert advisors to unlock your business potential.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105">
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
