'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const services = [
  { name: 'Insurance Processing', href: '/services/insurance-process-improvement' },
  { name: 'Policy Checking', href: '/services/policy-checking' },
  { name: 'Data Extraction', href: '/services/data-extraction' },
  { name: 'Advisory Services', href: '/services/business-advisory' },
  { name: 'Small Account Management', href: '/services/small-account-management' },
  { name: 'Call Center Services', href: '/services/call-center-services' },
  { name: 'Print and Virtual Mail', href: '/services/print-mail-services' },
  { name: 'Virtual Assistant', href: '/services/virtual-assistant' },
];

const industries = [
  { name: 'Insurance', href: '/industries/insurance' },
  { name: 'Promotional Products', href: '/industries/promotional-products' },
  { name: 'Finance & Accounting', href: '/industries/finance-accounting' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Property Management', href: '/industries/property-management' },
  { name: 'Construction', href: '/industries/construction' },
  { name: 'View All Industries', href: '/industries' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { label: 'Gallery', href: '#gallery', type: 'link' },
    { label: 'How It Works', href: '/how-it-works', type: 'link' },
    { label: 'Blog', href: '#blog', type: 'link' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerHeight = 80; // updated for smaller header
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md overflow-visible">
      <div className="w-full px-4">

        {/* Slim Header */}
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">

          {/* Logo (positioned left with minimal padding) */}
          <a href="/" className="relative flex-shrink-0">
            <div className="h-24 w-44 flex items-center">
              <Image
                src="/logo.png"
                alt="Bridgely Pro"
                width={260}
                height={120}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation (centered with proper spacing) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center ml-4 xl:ml-8">
            {/* Home Button */}
            <a
              href="/"
              className="text-brand-navy font-medium hover:text-brand-cyan transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-accent-electric group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-brand-navy font-medium hover:text-brand-cyan transition-colors duration-300 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-4 py-2.5 text-slate-700 hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* All Industries Dropdown */}
            <div className="relative group">
              <button className="text-brand-navy font-medium hover:text-brand-cyan transition-colors duration-300 flex items-center gap-1">
                All Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href={industry.href}
                    className="block px-4 py-2.5 text-slate-700 hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {industry.name}
                  </a>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => item.type === 'link' && item.href.startsWith('#') ? handleScroll(e, item.href) : null}
                className="text-brand-navy font-medium hover:text-brand-cyan transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-accent-electric group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Careers Button */}
            <a
              href="/careers"
              className="text-brand-navy font-medium hover:text-brand-cyan transition-colors duration-300"
            >
              Careers
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="/contact"
              className="relative px-6 py-2.5 font-bold rounded-full text-white overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-accent-electric"></span>
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background shadow-xl absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-2 p-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                  className="w-full text-left text-brand-navy font-medium py-2 flex items-center justify-between hover:text-brand-cyan"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'services' && (
                  <div className="bg-slate-50 rounded-lg mt-2 py-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-brand-cyan/10 hover:text-brand-cyan text-sm"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile All Industries Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
                  className="w-full text-left text-brand-navy font-medium py-2 flex items-center justify-between hover:text-brand-cyan"
                >
                  All Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'industries' && (
                  <div className="bg-slate-50 rounded-lg mt-2 py-2">
                    {industries.map((industry, index) => (
                      <a
                        key={index}
                        href={industry.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-brand-cyan/10 hover:text-brand-cyan text-sm"
                      >
                        {industry.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Home Link */}
              <a
                href="/"
                className="text-brand-navy font-medium py-2 hover:text-brand-cyan"
              >
                Home
              </a>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => item.type === 'link' && item.href.startsWith('#') ? handleScroll(e, item.href) : null}
                  className="text-brand-navy font-medium py-2 hover:text-brand-cyan"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/careers"
                className="text-brand-navy font-medium py-2 hover:text-brand-cyan"
              >
                Careers
              </a>

              <a
                href="/contact"
                className="relative px-6 py-3 rounded-xl text-white font-bold block text-center mt-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-accent-electric rounded-xl"></span>
                <span className="relative z-10">Contact Us</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
