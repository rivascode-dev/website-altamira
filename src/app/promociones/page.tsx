import HeroPages from '@/components/HeroPages';
import PromotionsContent from '@/sections/promotions/PromotionsContent';

export const metadata = {
  title: 'Promociones | Altamira',
  description:
    'Aprovecha nuestras promociones especiales en servicios de mantenimiento de ductos.',
};

export default function PromotionsPage() {
  return (
    <main>
      <HeroPages
        title="Promociones"
        subtitle="Aprovecha nuestros descuentos por temporada."
        backgroundImage="/assets/images/altamira-ductos-hero-promociones.jpg"
        breadcrumbs="Promociones"
        objectPosition="center 1%"
      />
      <PromotionsContent />
    </main>
  );
}
