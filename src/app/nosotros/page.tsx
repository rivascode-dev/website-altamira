import { Metadata } from 'next';
import HeroPages from '@/components/HeroPages';
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
      <HeroPages
        title="Nosotros"
        subtitle="Limpieza y Mantención de Ductos Sanitarios para Edificios y Condominios"
        backgroundImage="/assets/images/altamira-ductos-hero-nosotros.jpg"
        breadcrumbs="Nosotros"
      />
      <AboutUsIntro />
      <ValueProposition />
      <WhyAltamira />
      <InterventionAreas />
      <ContactSection />
    </main>
  );
}
