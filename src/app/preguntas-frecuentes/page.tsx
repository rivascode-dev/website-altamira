import FAQHero from '@/sections/faq/FAQHero';
import FAQContent from '@/sections/faq/FAQContent';

export const metadata = {
  title: 'Preguntas y Respuestas | Altamira',
  description: 'Resolvemos sus dudas comunes sobre el mantenimiento de ductos, normativas sanitarias y el funcionamiento de nuestros servicios profesionales.',
};

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQContent />
    </main>
  );
}
