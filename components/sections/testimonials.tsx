'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Christopher Bennett',
    role: 'CEO',
    company: 'North Carolina',
    rating: 5,
    text: 'Bridgely Pro ensures that all administrative tasks are completed without any bottlenecks. Their team is reliable and efficient, allowing us to focus on growth.',
    initials: 'CB',
  },
  {
    name: 'Rachel Scott',
    role: 'Marketing Director',
    company: 'Arizona',
    rating: 5,
    text: 'We were struggling to convert leads into customers. With Bridgely Pro\'s strategies, our email engagement rates have skyrocketed.',
    initials: 'RS',
  },
  {
    name: 'Kevin Mitchell',
    role: 'IT Manager',
    company: 'Washington',
    rating: 5,
    text: 'System downtime was a major issue until we partnered with Bridgely Pro. Their IT experts monitor and resolve issues before they impact operations.',
    initials: 'KM',
  },
  {
    name: 'Sophia Adams',
    role: 'E-commerce Business Owner',
    company: 'Georgia',
    rating: 5,
    text: 'Their CSR team is well-trained, courteous, and proactive. Our customers now receive immediate assistance, improving our brand reputation.',
    initials: 'SA',
  },
  {
    name: 'James Reynolds',
    role: 'Operations Head',
    company: 'Illinois',
    rating: 5,
    text: 'Our response time and customer retention have improved drastically. Bridgely Pro\'s team handles inquiries professionally, making our clients feel valued.',
    initials: 'JR',
  },
  {
    name: 'David Thompson',
    role: 'Insurance Agency Owner',
    company: 'Texas',
    rating: 5,
    text: 'Bridgely Pro has taken a huge load off our shoulders. Their expertise in AMS ensures policy processing and renewals are handled accurately and on time.',
    initials: 'DT',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-[0%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-[0%] left-[10%] w-[600px] h-[600px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4"
          >
            Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-electric">Visionaries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Hear from leaders who transformed their operations with our dedicated expert teams.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-full max-w-3xl"
              >
                <div className="relative p-10 md:p-14 rounded-3xl bg-white border border-slate-100 shadow-[0_12px_40px_rgba(9,223,240,0.1)] hover:shadow-[0_16px_50px_rgba(9,223,240,0.15)] transition-shadow duration-300">
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-cyan/20" />
                  
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-medium text-brand-navy leading-relaxed mb-8">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-cyan to-accent-electric p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-brand-navy">
                        {testimonials[current].initials}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-lg">{testimonials[current].name}</h4>
                      <p className="text-sm text-slate-500">
                        {testimonials[current].role} at {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-cyan/50 text-brand-navy hover:text-brand-cyan transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-brand-cyan' : 'w-2.5 bg-slate-200 hover:bg-brand-cyan/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-cyan/50 text-brand-navy hover:text-brand-cyan transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
