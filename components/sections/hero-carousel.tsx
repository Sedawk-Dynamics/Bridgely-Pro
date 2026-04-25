'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/carousel-1.jpg',
      title: 'Transform Your Business',
      subtitle: 'With Professional Virtual Solutions',
    },
    {
      image: '/carousel-2.jpg',
      title: 'Innovation at Scale',
      subtitle: 'Revolutionize Your Operations',
    },
    {
      image: '/carousel-3.jpg',
      title: 'Expert Virtual Support',
      subtitle: '24/7 Professional Services',
    },
    {
      image: '/carousel-4.jpg',
      title: 'Data-Driven Insights',
      subtitle: 'Advanced Analytics Platform',
    },
    {
      image: '/carousel-5.jpg',
      title: 'Global Excellence',
      subtitle: 'Worldwide Partnership Network',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background cyber-grid">

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >

            {/* Background */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index < 2}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div
                className={`space-y-6 animate-fade-in-up ${index === currentSlide ? 'block' : 'hidden'
                  }`}
              >

                <h1 className="text-xl md:text-2xl text-white/90 drop-shadow-md animate-slide-in-right">
                  Managed Virtual Assistant Services from India
                </h1>

                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg gradient-text-neon">
                  <span className="animate-neon-glow">{slide.title}</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 drop-shadow-md animate-slide-in-right">
                  {slide.subtitle}
                </p>

                {/* 🔥 Buttons Side-by-Side */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">

                  <button className="btn-vibrant px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm animate-glow-pulse">
                    Book a Trial
                  </button>

                  <button className="px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white">
                    Learn More
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-primary w-8 shadow-lg'
              : 'bg-white/40 w-3 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Bottom Text Only */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-12">
        <div className="text-center text-white">
          <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
            Managed Virtual Assistant Services from India
          </p>
        </div>
      </div> */}
    </div>
  );
}
