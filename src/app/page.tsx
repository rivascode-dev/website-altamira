import { Metadata } from 'next';
import { Box } from '@mui/material';
import HeroSection from '@/sections/home/HeroSection';
import AboutUsSection from '@/sections/home/AboutUsSection';
import ServicesSection from '@/sections/home/ServicesSection';
import EmergencyBannerSection from '@/sections/home/EmergencyBannerSection';
import ProblemSection from '@/sections/home/ProblemSection';
import HowWeWorkSection from '@/sections/home/HowWeWorkSection';
import TechnicalReportSection from '@/sections/home/TechnicalReportSection';
import RegulationsSection from '@/sections/home/RegulationsSection';
import BecauseWeSection from '@/sections/home/BecauseWeSection';
import GallerySection from '@/sections/home/GallerySection';
import ComplementaryServicesSection from '@/sections/home/ComplementaryServicesSection';
import ContactSection from '@/sections/home/ContactSection';
import PhraseCTASection from '@/sections/home/PhraseCTASection';

export const metadata: Metadata = {
  title: 'Altamira Ductos | Limpieza y Mantención de Ductos en Chile',
  description:
    'Especialistas en limpieza de ductos de basura, ductos verticales, horizontales y alcantarillado. Resolución sanitaria y atención a edificios en Santiago y regiones.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutUsSection />
      <BecauseWeSection />
      <ServicesSection />
      <ComplementaryServicesSection />
      <EmergencyBannerSection />
      <HowWeWorkSection />
      <ProblemSection />
      <RegulationsSection />
      <TechnicalReportSection />

      <PhraseCTASection />
      <GallerySection />

      <ContactSection />
    </Box>
  );
}
