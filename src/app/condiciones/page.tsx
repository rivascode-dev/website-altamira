import { Metadata } from 'next';
import HeroPages from '@/components/HeroPages';
import PaymentConditions from '@/sections/conditions/PaymentConditions';

export const metadata: Metadata = {
  title: 'Condiciones del Servicio | Altamira',
  description: 'Conozca los términos y condiciones de nuestros servicios de mantenimiento y atención de emergencias sanitarias.',
  alternates: {
    canonical: '/condiciones',
  },
};

export default function CondicionesPage() {
  return (
    <main>
      <HeroPages
        title="Condiciones"
        subtitle="Términos y condiciones específicas para el servicio de atención inmediata de emergencias sanitarias."
        backgroundImage="/assets/images/altamira-ductos-hero-pages.jpg"
        breadcrumbs="Condiciones"
      />
      <PaymentConditions />
    </main>
  );
}
