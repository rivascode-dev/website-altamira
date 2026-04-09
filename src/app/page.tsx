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

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <EmergencyBannerSection />
      <ProblemSection />
      <HowWeWorkSection />
      <TechnicalReportSection />
      <RegulationsSection />
      <BecauseWeSection />
      <PhraseCTASection />
      <GallerySection />
      <ComplementaryServicesSection />
      <ContactSection />
    </Box>
  );
}
