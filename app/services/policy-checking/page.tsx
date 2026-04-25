'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, BarChart3, Clock } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PolicyCheckingPage() {
  const features = [
    { title: 'Advanced Verification', description: 'Professional technology for instant and accurate policy verification', icon: Zap },
    { title: '99.9% Accuracy', description: 'Industry-leading accuracy rate with minimal errors and rejections', icon: BarChart3 },
    { title: 'Real-time Results', description: 'Get verification results instantly, no delays or waiting periods', icon: Clock },
  ];

  const useCases = [
    'Policy compliance verification',
    'Coverage validation',
    'Claims eligibility assessment',
    'Duplicate policy detection',
    'Automated policy audits',
    'Real-time coverage confirmation',
  ];

  return (
    <main className="bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Policy Checking <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Leverage advanced verification technology for instant, accurate policy verification that reduces errors and accelerates processing.
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
              { q: 'How accurate is the verification?', a: 'Our system maintains 99.9% accuracy with continuous process improvement.' },
              { q: 'Can it handle multiple policy types?', a: 'Yes, our system handles all major insurance policy types and formats.' },
              { q: 'What is the processing speed?', a: 'Average verification time is less than 1 second per policy.' },
              { q: 'How is data security handled?', a: 'We use enterprise-grade encryption and comply with all insurance data regulations.' },
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
            Enhance Your Policy Verification Today
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover how our advanced policy checking solutions can streamline your operations.
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
