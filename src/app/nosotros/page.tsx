import { Metadata } from 'next';
import AboutUsHero from '@/sections/about-us/AboutUsHero';
import AboutUsIntro from '@/sections/about-us/AboutUsIntro';
import ValueProposition from '@/sections/about-us/ValueProposition';
import WhyAltamira from '@/sections/about-us/WhyAltamira';
import InterventionAreas from '@/sections/about-us/InterventionAreas';
import ContactSection from '@/sections/home/ContactSection';

export const metadata: Metadata = {
  title: 'Nosotros | Altamira Ductos',
  description: 'Conoce a Altamira Ductos, expertos en limpieza, mantención y sanitización de sistemas de ductos en edificios y condominios. Socio estratégico para comunidades saludables.',
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHero />
      <AboutUsIntro />
      <ValueProposition />
      <WhyAltamira />
      <InterventionAreas />
      <ContactSection />
    </main>
  );
}
