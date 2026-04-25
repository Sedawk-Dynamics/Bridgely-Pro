'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, TrendingUp, Users } from 'lucide-react';

const phases = [
  {
    number: 1,
    title: 'Sign Up & Connect',
    description: 'Our experts will reach out to discuss your business needs. Fill out a quick inquiry form or contact us directly.',
  },
  {
    number: 2,
    title: 'Needs Assessment',
    description: 'Our team analyzes your current processes and identifies areas for optimization. We schedule a consultation.',
  },
  {
    number: 3,
    title: 'Customized Proposal',
    description: 'Based on your needs, we provide a tailored service proposal. Once finalized, we proceed with onboarding.',
  },
  {
    number: 4,
    title: 'Setup & Implementation',
    description: 'We configure tools, assign dedicated experts, and integrate workflows with minimal disruption to operations.',
  },
  {
    number: 5,
    title: 'Service Execution',
    description: 'Our professionals start handling assigned tasks efficiently. Regular updates and performance tracking ensure quality.',
  },
  {
    number: 6,
    title: 'Ongoing Support',
    description: 'Our team continuously optimizes processes and helps scale operations as your business grows.',
  },
];

export default function HowItWorks() {
  const circleColors = ['bg-orange-500', 'bg-blue-500', 'bg-yellow-400', 'bg-pink-400', 'bg-green-400', 'bg-purple-500'];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image with Floating Stats */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] w-[80%] mx-auto rounded-t-full overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-pink-400" />
              <Image 
                src="/gallery-1.jpg" 
                alt="Workspace" 
                fill 
                className="object-cover mix-blend-overlay opacity-90 hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop' }}
              />
            </motion.div>

            {/* Floating Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-1/4 -left-8 bg-card rounded-2xl p-5 shadow-xl border border-border backdrop-blur-md flex items-center gap-4 z-20 animate-float"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
            </motion.div>

            {/* Floating Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-1/4 -right-8 bg-card rounded-2xl p-5 shadow-xl border border-border backdrop-blur-md flex items-center gap-4 z-20 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10x</p>
                <p className="text-sm text-muted-foreground">Faster Growth</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Text & Timeline */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
                <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">Process</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-navy mb-4 tracking-tight">
                How Bridgely Pro's Personalized Approach Works
              </h2>
              <p className="text-lg text-slate-500">
                A streamlined, proven process designed for your absolute success and scalable growth.
              </p>
            </motion.div>

            <div className="space-y-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full ${circleColors[index % circleColors.length]} text-white flex items-center justify-center font-bold text-xl shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      {String(phase.number).padStart(2, '0')}
                    </div>
                    {index < phases.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-100 mt-2" />
                    )}
                  </div>
                  <div className="pb-8 pt-2">
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
