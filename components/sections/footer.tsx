'use client';

import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="relative h-24 w-48 mb-6">
              <Image
                src="/logo.png"
                alt="Bridgely Pro"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Transforming businesses with professional virtual solutions. Where efficiency meets expertise in the digital age.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center bg-slate-200 rounded-full text-slate-600 hover:bg-brand-cyan hover:text-brand-navy transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-base font-bold text-brand-navy mb-6">Services</h4>
            <ul className="space-y-4">
              {['Virtual Assistance', 'IT Solutions', 'Back-Office Support', 'Customer Service', 'Accounting Support'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-base font-bold text-brand-navy mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Testimonials'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="text-base font-bold text-brand-navy mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance', 'Security'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center sm:text-left">
            © {currentYear} Bridgely Pro IT Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-cyan text-brand-navy shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
