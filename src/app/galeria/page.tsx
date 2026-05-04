import GalleryHero from '@/sections/gallery/GalleryHero';
import GalleryContent from '@/sections/gallery/GalleryContent';

export const metadata = {
  title: 'Galería de Trabajos | Altamira',
  description: 'Explore nuestra galería de videos y fotografías de trabajos reales en terreno, incluyendo limpieza de ductos, alcantarillados y salas de basura.',
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryContent />
    </main>
  );
}
