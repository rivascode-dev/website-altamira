import HeroPages from '@/components/HeroPages';
import PaymentConditions from '@/sections/conditions/PaymentConditions';

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
