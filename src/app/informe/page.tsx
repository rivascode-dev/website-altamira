import ReportHero from '@/sections/report/ReportHero';
import ReportContent from '@/sections/report/ReportContent';

export const metadata = {
  title: 'Informe Técnico | Altamira',
  description: 'Conozca la estructura y el valor de nuestros informes técnicos detallados tras cada intervención sanitaria.',
};

export default function ReportPage() {
  return (
    <main>
      <ReportHero />
      <ReportContent />
    </main>
  );
}
