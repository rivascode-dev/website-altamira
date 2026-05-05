import HeroPages from '@/components/HeroPages';
import PenaltyContent from '@/sections/penalty/PenaltyContent';

export default function PenaltyPage() {
  return (
    <main>
      <HeroPages
        title="Evita Multas"
        subtitle="Cumplimiento legal y responsabilidades de la administración según la Ley de Copropiedad Inmobiliaria."
        backgroundImage="/assets/images/altamira-ductos-hero-evita-multas.jpg"
        breadcrumbs="Evita Multas"
      />
      <PenaltyContent />
    </main>
  );
}
