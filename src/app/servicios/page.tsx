import { Metadata } from 'next';
import HeroPages from '@/components/HeroPages';
import ServicesContent from '@/sections/services/ServicesContent';

export const metadata: Metadata = {
  title: 'Servicios de Limpieza de Ductos | Altamira',
  description:
    'Detalle técnico de nuestras soluciones en limpieza, mantención y sanitización de ductos verticales, horizontales, salas de basura y redes de alcantarillado.',
  alternates: {
    canonical: '/servicios',
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <HeroPages
        title='Servicios'
        subtitle='Detalle técnico de nuestras soluciones en limpieza, mantención y sanitización de infraestructuras sanitarias.'
        backgroundImage='/assets/images/altamira-ductos-hero-servicios.jpg'
        breadcrumbs='Servicios'
      />
      <ServicesContent />
    </main>
  );
}
