import HeroPages from '@/components/HeroPages';
import ReportContent from '@/sections/report/ReportContent';

export const metadata = {
  title: 'Informe Técnico | Altamira',
  description: 'Conozca la estructura y el valor de nuestros informes técnicos detallados tras cada intervención sanitaria.',
};

export default function ReportPage() {
  return (
    <main>
      <HeroPages
        title="Informe Técnico"
        subtitle="Respaldo documental y trazabilidad profesional tras cada intervención sanitaria."
        backgroundImage="/assets/images/altamira-ductos-hero-pages.jpg"
        breadcrumbs="Informe"
      />
      <ReportContent />
    </main>
  );
}
