'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden bg-white flex items-center">
      {/* Background Mesh Gradient / Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-cyan/20 blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-purple/20 blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-navy">Next-Gen Virtual Business Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy"
            >
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-electric">
                Operations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-lg"
            >
              Get expert support in accounting, customer service, IT solutions, and back-office operations. Efficiency meets true expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-cyan to-accent-electric rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Get Started
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-navy bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-300">
                Contact Sales
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 mt-6 border-t border-border flex flex-wrap gap-6 items-center"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <Image src={`/avatars/avatar-${i}.jpg`} alt="User" width={40} height={40} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=User&background=09DFF0&color=fff' }} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-brand-navy">Trusted by 500+ businesses</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visuals */}
          <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Main Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-primary/20 via-blue-400/10 to-transparent p-1 shadow-2xl backdrop-blur-3xl animate-float"
            >
              <div className="w-full h-full rounded-[23px] bg-card border border-white/20 dark:border-white/10 overflow-hidden flex flex-col">
                {/* Header mock */}
                <div className="h-12 border-b border-border flex items-center px-4 gap-2 bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                {/* Body mock */}
                <div className="flex-1 p-6 flex flex-col gap-4 bg-background">
                  <div className="w-3/4 h-8 rounded-lg bg-muted" />
                  <div className="w-1/2 h-4 rounded bg-muted/60" />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="h-24 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-auto w-full h-12 rounded-xl bg-gradient-to-r from-primary to-blue-500" />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 top-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 backdrop-blur-xl flex items-center gap-4 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-mint/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent-mint" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy">98% Retention</p>
                <p className="text-xs text-slate-500">Client satisfaction</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 bottom-32 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 backdrop-blur-xl flex items-center gap-4 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy">100% SLA</p>
                <p className="text-xs text-slate-500">Compliance guaranteed</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
