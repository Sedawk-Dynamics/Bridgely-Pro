'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Gauge, Users, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% SLA Compliance',
    description: 'Guaranteed on-time, accurate, and efficient service delivery with industry-leading compliance standards.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  {
    icon: Award,
    title: '98% Client Retention',
    description: 'Businesses trust us for long-term partnerships, knowing they will receive consistent and exceptional results.',
    color: 'text-accent-electric',
    bg: 'bg-accent-electric/10',
  },
  {
    icon: Gauge,
    title: 'Optimized Operations',
    description: 'Enhanced productivity and seamless workflows through process optimization and expert solutions.',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Expert professionals assigned exclusively to your business needs with personalized support.',
    color: 'text-accent-sky',
    bg: 'bg-accent-sky/10',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get your virtual team up and running in days, not weeks. Quick onboarding and seamless integration.',
    color: 'text-accent-mint',
    bg: 'bg-accent-mint/10',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure that every task meets our strict standards of excellence.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
};

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-accent-electric/10 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20"
          >
            <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4"
          >
            Industry-Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-electric">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Powerful tools and dedicated teams designed to scale your operations effortlessly.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(9,223,240,0.15)] hover:-translate-y-2 transition-all duration-300 relative z-10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-accent-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className="absolute inset-0 rounded-2xl bg-brand-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className={`w-7 h-7 ${feature.color} relative z-10`} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-accent-electric transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-white to-accent-electric/10 border border-border shadow-lg relative overflow-hidden"
        >
          {/* subtle mesh inside the stats banner */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '1000+', label: 'Clients Served' },
              { value: '500M+', label: 'Tasks Processed' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-accent-electric mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <p className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
