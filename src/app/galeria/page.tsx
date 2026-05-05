import HeroPages from '@/components/HeroPages';
import GalleryContent from '@/sections/gallery/GalleryContent';

export const metadata = {
  title: 'Galería de Trabajos | Altamira',
  description: 'Explore nuestra galería de videos y fotografías de trabajos reales en terreno, incluyendo limpieza de ductos, alcantarillados y salas de basura.',
};

export default function GalleryPage() {
  return (
    <main>
      <HeroPages
        title="Nuestra Galería"
        subtitle="Evidencia visual de nuestra excelencia técnica en terreno."
        backgroundImage="/assets/images/altamira-ductos-hero-galeria.jpg"
        breadcrumbs="Galería"
        objectPosition="center 1%"
      />
      <GalleryContent />
    </main>
  );
}
