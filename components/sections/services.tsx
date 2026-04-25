'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Robust Security',
    subtitle: 'Your Data, Our Priority',
    description:
      'We prioritize data security with encryption, restricted access protocols, and industry compliance to safeguard your business data.',
    shapeBg: 'bg-red-500',
  },
  {
    title: 'Cost Effective',
    subtitle: 'Premium Services at Affordable Prices',
    description:
      'Top-quality solutions at cost-effective rates, allowing you to optimize operations without overspending.',
    shapeBg: 'bg-blue-500',
  },
  {
    title: 'Speed & Reliability',
    subtitle: '100% SLA Compliance & 98% Retention',
    description:
      'On-time, accurate service delivery with precision handling and a 98% client retention rate.',
    shapeBg: 'bg-pink-400',
  },
  {
    title: 'Seamless Support',
    subtitle: '24/7 Multi-Channel Communication',
    description:
      'Round-the-clock availability through email, phone, chat, and dedicated support portals.',
    shapeBg: 'bg-orange-400',
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-gradient-to-b from-brand-cyan/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20"
          >
            <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">Key Benefits</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6"
          >
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-purple">Business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Discover what makes Bridgely Pro the preferred choice for forward-thinking enterprises.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-50/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Left Corner Shape */}
                <div className={`absolute top-0 left-0 w-20 h-20 rounded-br-[60px] ${service.shapeBg} group-hover:scale-110 transition-transform duration-300 origin-top-left`} />
                
                <div className="relative z-10 mt-12 text-center">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium mb-4 text-slate-500">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed hidden sm:block">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}