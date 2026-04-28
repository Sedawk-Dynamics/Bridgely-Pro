import Hero from '@/components/sections/hero';
import Header from '@/components/sections/header';
import LogoCarousel from '@/components/sections/logo-carousel';
import GlobalPresence from '@/components/sections/global-presence';
import Services from '@/components/sections/services';
import HowItWorks from '@/components/sections/how-it-works';
import Features from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
import CTA from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <LogoCarousel />
      <Services />
      <HowItWorks />
      <GlobalPresence />
      <Features />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
