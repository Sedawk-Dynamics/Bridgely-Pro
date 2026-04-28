"use client";

import React from "react";
import Image from "next/image";

const countries = [
  { name: "UNITED STATES", code: "us" },
  { name: "CANADA", code: "ca" },
  { name: "INDIA", code: "in" },
  { name: "UNITED KINGDOM", code: "gb" },
  { name: "UAE", code: "ae" },
  { name: "AUSTRALIA", code: "au" },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <p className="text-sm font-semibold tracking-[3px] text-[#0D726A] uppercase mb-3">
            Our Global Presence
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#002C50] mb-4">
            Delivering Solutions Across Borders
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our Business Process Management and IT solutions help businesses
            scale globally with trusted expertise and seamless operations.
          </p>
        </div>

        {/* Globe Video */}
        <div className="flex justify-center relative z-10">
          <div className="w-full max-w-[700px] h-[320px] md:h-[420px] relative flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <source
                src="/Awesome_Rotating_Globe_Video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Flags overlapping video */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 -mt-16 relative z-20">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-14 md:w-28 md:h-16 relative rounded-full overflow-hidden shadow-lg border border-gray-100 bg-white group-hover:-translate-y-2 transition duration-300">
                <Image
                  src={`https://flagcdn.com/${country.code}.svg`}
                  alt={country.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <span className="mt-3 text-xs font-semibold tracking-wider text-[#002C50]">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}