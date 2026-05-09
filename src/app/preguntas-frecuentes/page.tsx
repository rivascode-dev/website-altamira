import { Metadata } from 'next';
import HeroPages from '@/components/HeroPages';
import FAQContent from '@/sections/faq/FAQContent';

export const metadata: Metadata = {
  title: 'Preguntas y Respuestas | Altamira',
  description:
    'Resolvemos sus dudas comunes sobre el mantenimiento de ductos, normativas sanitarias y el funcionamiento de nuestros servicios profesionales.',
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
};

export default function FAQPage() {
  return (
    <main>
      <HeroPages
        title="Preguntas Frecuentes"
        subtitle="Resolvemos tus dudas sobre mantenimiento, normativas y nuestros servicios especializados."
        backgroundImage="/assets/images/altamira-ductos-hero-porque-limpiar.jpg"
        breadcrumbs="Preguntas Frecuentes"
      />
      <FAQContent />
    </main>
  );
}
