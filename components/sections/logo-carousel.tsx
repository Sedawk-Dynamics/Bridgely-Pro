'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { name: 'HubSpot', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-1-ymU4JHkxxpP21sWNtOaNdUpLtsTVo2.jpg' },
  { name: 'Nexsure', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexsure-1000x1000-1-laBlaFpOuvsIqyvhkGGVJV0Iid69d4.jpg' },
  { name: 'Asana', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-2-DAUDoyFBEouDO2pToCDdpBaGLUyipi.jpg' },
  { name: 'NowCerts', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ViDlefVGpidQr4Wk1w7pzYXy55gNvx.png' },
  { name: 'QQCatalyst', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertafore_qqcatalyst_image-fsB8BaGmfFmKK7hvSeoCNn1CX4dulR.png' },
  { name: 'Xero', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xero-logo-png_seeklogo-261177-M7YcMK7ofneY791ZKwqV3oAAlRr4q3.png' },
  { name: 'QuickBooks', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intuit-quickbooks1505-OnbE9C4TVKkhgf8Nu9SnULjdBluwvU.jpg' },
  { name: 'EZLynx', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-1%20%281%29-KbQwympDjEZqWRVBONXJ07XhsP3zzo.png' },
  { name: 'Salesforce', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/135_salesforce_logo-OpZOtHdA25m2bMPDuQpiO8OwVuTaon.jpg' },
]

export default function LogoCarousel() {
  const displayLogos = [...logos, ...logos]

  return (
    <div className="w-full py-16 sm:py-20 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h3 className="text-center text-brand-navy text-4xl font-black tracking-tight mb-16">
          Platforms We Support
        </h3>

        {/* Carousel */}
        <div className="relative overflow-hidden flex items-center">
          <motion.div
            className="flex gap-10 md:gap-16 lg:gap-20 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {displayLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center"
              >
                {/* Responsive Logo Size */}
                <div className="relative h-10 w-28 sm:h-12 sm:w-32 md:h-16 md:w-40 lg:h-20 lg:w-48">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Edge Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}