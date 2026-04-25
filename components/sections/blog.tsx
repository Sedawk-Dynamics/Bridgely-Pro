'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'How Virtual Solutions Empower Your Business - The Bridgely Pro Mindset',
    category: 'Business Growth',
    date: 'Apr 17, 2025',
    excerpt:
      "Today, virtual solutions provide unprecedented opportunities for business growth. At Bridgely Pro, we partner with you to maximize efficiency.",
    backText:
      'Discover how professional virtual support augments your team capabilities and drives innovation in your business operations.',
    icon: '🚀',
    gradient: 'from-brand-cyan to-accent-electric',
  },
  {
    id: 2,
    title: 'Maximizing Productivity with Admin & Back-Office Support',
    category: 'Services',
    date: 'Mar 23, 2025',
    excerpt:
      'Handling daily administrative tasks can take time away from essential business activities. Our support services ensure smooth operations.',
    backText:
      'Let our experts handle administrative burdens while you focus on strategic growth.',
    icon: '📋',
    gradient: 'from-accent-electric to-accent-purple',
  },
  {
    id: 3,
    title: 'Driving Business Growth with Targeted Email Marketing',
    category: 'Growth',
    date: 'Mar 20, 2025',
    excerpt:
      'Reaching the right audience can be challenging. Our email marketing and lead generation strategies help businesses engage effectively.',
    backText:
      'Unlock exponential growth through strategic marketing strategies tailored to your audience.',
    icon: '📧',
    gradient: 'from-accent-purple to-brand-cyan',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } },
};

export default function Blog() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-accent-electric/10 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent-electric/10 border border-accent-electric/20"
          >
            <Sparkles className="w-4 h-4 text-accent-electric" />
            <span className="text-sm font-semibold text-accent-electric uppercase tracking-wider">Insights</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4"
          >
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-electric">Articles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Stay updated with the latest insights, strategies, and industry trends to fuel your business growth.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="group cursor-pointer h-[420px]"
              onClick={() => toggleFlip(index)}
            >
              {/* Flip Container */}
              <div className="flip-card h-full w-full relative">
                <div className={`flip-card-inner absolute inset-0 w-full h-full transition-all duration-700 ${flipped[index] ? 'flipped' : ''}`}>

                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 w-full h-full bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                    {/* Icon Banner */}
                    <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden flex items-center justify-center text-6xl`}>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
                      <span className="relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">{article.icon}</span>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col bg-white">
                      <div className="flex items-center justify-between mb-4 text-xs font-semibold">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${article.gradient} text-white shadow-sm`}>
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-accent-electric transition-colors duration-300">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-accent-electric">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className={`flip-card-back absolute inset-0 w-full h-full bg-gradient-to-br ${article.gradient} text-white rounded-3xl flex flex-col items-center justify-center p-8 shadow-[0_20px_40px_rgba(9,223,240,0.2)]`}>
                    {/* Background mesh */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20"></div>
                    
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/30">
                        💡
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight drop-shadow-md">
                        Key Insight
                      </h3>
                      <p className="leading-relaxed font-medium text-white/90 text-lg">
                        {article.backText}
                      </p>
                      
                      <div className="mt-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold cursor-pointer hover:bg-white/20 transition-colors">
                        Flip Back
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-brand-navy rounded-full overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(11,31,58,0.3)] hover:-translate-y-1">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan to-accent-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <span className="relative flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
