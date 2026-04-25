'use client';

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ReactNode } from 'react';

interface SubpageLayoutProps {
  children: ReactNode;
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Header with proper spacing */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <Header />
      </header>

      {/* Main content wrapper with proper padding to prevent hero cutoff */}
      <div className="flex-1 w-full">
        {/* Top padding to provide breathing room after header */}
        <div className="h-4 sm:h-6" />
        
        {/* Content area */}
        {children}
        
        {/* Bottom padding before footer */}
        <div className="h-8 sm:h-12" />
      </div>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white mt-auto">
        <Footer />
      </footer>
    </main>
  );
}
