'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/gallery-1.jpg', alt: 'Modern Workspace', title: 'Innovative Workspace Design' },
  { id: 2, src: '/gallery-2.jpg', alt: 'Team Collaboration', title: 'Collaborative Environment' },
  { id: 3, src: '/gallery-3.jpg', alt: 'Analytics Dashboard', title: 'Data Analytics Dashboard' },
  { id: 4, src: '/gallery-4.jpg', alt: 'Tech Infrastructure', title: 'State-of-the-Art Infrastructure' },
  { id: 5, src: '/gallery-5.jpg', alt: 'Virtual Team', title: 'Global Virtual Collaboration' },
  { id: 6, src: '/gallery-6.jpg', alt: 'Cloud Computing', title: 'Cloud Computing Solutions' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const goToNext = () => setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-accent-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20"
          >
            <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">Workspace</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-accent-electric">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Explore our state-of-the-art facilities and innovative workspace solutions.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={image.id}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(9,223,240,0.2)] transition-all duration-500 border border-slate-100 z-10"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-cyan/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-navy font-bold text-xl mb-2">{image.title}</p>
                  <div className="flex items-center text-white font-semibold text-sm">
                    <Maximize2 className="w-4 h-4 mr-2" /> Expand
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-brand-cyan text-brand-navy transition-colors shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-slate-100">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                    priority
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop' }}
                  />
                  
                  {/* Arrows */}
                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <button
                      onClick={goToPrevious}
                      className="w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white backdrop-blur-md text-brand-navy rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <button
                      onClick={goToNext}
                      className="w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white backdrop-blur-md text-brand-navy rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-6 text-center">
                  <p className="text-white text-2xl font-bold drop-shadow-md">
                    {galleryImages[selectedIndex].title}
                  </p>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    {selectedIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}