'use client';

import Link from 'next/link';
import { CheckCircle, Zap, BarChart3, Clock } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function CallCenterPage() {
  const features = [
    { title: '24/7 Availability', description: 'Round-the-clock customer support for your clients', icon: Zap },
    { title: 'Professional Team', description: 'Trained specialists in insurance customer service', icon: BarChart3 },
    { title: 'Multi-Channel', description: 'Support via phone, chat, email, and messaging platforms', icon: Clock },
  ];

  const useCases = [
    'Claims inquiries and tracking',
    'Policy information support',
    'Premium payment processing',
    'Customer onboarding assistance',
    'Issue resolution and escalation',
    'Customer satisfaction surveys',
  ];

  return (
    <main className="bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Insurance <span className="text-primary">Call Center Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Professional 24/7 customer support to enhance customer satisfaction and reduce operational burden.
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
              { q: 'What languages do your agents speak?', a: 'We provide multilingual support in English, Spanish, and additional languages upon request.' },
              { q: 'How is quality monitored?', a: 'We use call recording, QA reviews, and customer satisfaction surveys for continuous monitoring.' },
              { q: 'Can you handle call spikes?', a: 'Yes, our scalable infrastructure can handle seasonal fluctuations and traffic spikes.' },
              { q: 'What are your service hours?', a: 'We offer 24/7/365 support with customizable service levels.' },
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
            Elevate Your Customer Service Today
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Provide exceptional support to your customers with our professional call center services.
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
