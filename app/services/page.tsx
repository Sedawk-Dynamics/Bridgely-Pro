'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const services = [
  {
    id: 'insurance-process-improvement',
    title: 'Insurance Process Improvement',
    description: 'Optimize your insurance operations with streamlined workflows and professional solutions for maximum efficiency.',
    icon: '⚙️',
  },
  {
    id: 'policy-checking',
    title: 'Policy Checking Solutions',
    description: 'Professional policy verification and compliance checks with advanced technology for accurate results.',
    icon: '✓',
  },
  {
    id: 'data-extraction',
    title: 'Data Extraction',
    description: 'Extract critical data from documents with precision using professional extraction methods and OCR technology.',
    icon: '📊',
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory Services',
    description: 'Strategic consulting and guidance to transform your business operations and drive growth.',
    icon: '💡',
  },
  {
    id: 'small-account-management',
    title: 'Small Account Management',
    description: 'Dedicated management of small accounts with personalized attention and expert support.',
    icon: '👥',
  },
  {
    id: 'call-center-services',
    title: 'Insurance Call Center Services',
    description: 'Professional customer service and support for your insurance business 24/7.',
    icon: '📞',
  },
  {
    id: 'print-mail-services',
    title: 'Print and Virtual Mail Services',
    description: 'Comprehensive mail and document handling with digital options for modern businesses.',
    icon: '📮',
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    description: 'Expert virtual assistants providing administrative support and task management.',
    icon: '💼',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive outsourcing solutions designed to streamline your operations and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="h-full p-8 bg-white border-2 border-slate-200 rounded-xl hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive services today and see the difference we can make.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
