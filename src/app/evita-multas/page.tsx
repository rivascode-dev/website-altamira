import { Metadata } from 'next';
import HeroPages from '@/components/HeroPages';
import PenaltyContent from '@/sections/penalty/PenaltyContent';

export const metadata: Metadata = {
  title: 'Evita Multas | Altamira',
  description: 'Infórmese sobre el cumplimiento legal y las responsabilidades de la administración según la Ley de Copropiedad Inmobiliaria en relación al mantenimiento de ductos.',
  alternates: {
    canonical: '/evita-multas',
  },
};

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
