'use client';
import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'videos', label: 'Videos' },
  { id: 'verticales', label: 'Verticales' },
  { id: 'horizontales', label: 'Horizontales' },
  { id: 'alcantarillados', label: 'Alcantarillados' },
  { id: 'ductos', label: 'Ductos y Salas' },
];

const galleryItems = [
  // Videos (Simulados con imágenes y tag de video)
  {
    id: 1,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video1.mp4',
    title: 'Limpieza de Ducto Vertical',
    isVideo: true,
  },
  {
    id: 2,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video2.mp4',
    title: 'Inspección con Cámara',
    isVideo: true,
  },
  {
    id: 3,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video3.mp4',
    title: 'Mantenimiento de Extractores',
    isVideo: true,
  },
  {
    id: 4,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video4.mp4',
    title: 'Desobstrucción de Alcantarillado',
    isVideo: true,
  },

  // Verticales
  {
    id: 5,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-1.jpg',
    title: 'Ducto Vertical',
  },
  {
    id: 6,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-2.jpg',
    title: 'Limpieza de Ductos Verticales',
  },
  {
    id: 7,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-3.jpg',
    title: 'Sellado de Juntas',
  },
  {
    id: 8,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-4.jpg',
    title: 'Limpieza de Ductos Verticales',
  },

  // Horizontales
  {
    id: 9,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-1.jpg',
    title: 'Ducto Horizontal de Basura',
  },
  {
    id: 10,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-2.jpg',
    title: 'Limpieza Colectores',
  },
  {
    id: 11,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-3.jpg',
    title: 'Mantenimiento Red Húmeda',
  },
  {
    id: 12,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-4.jpg',
    title: 'Desengrase de Ductos',
  },

  // Alcantarillado
  {
    id: 13,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-1.jpeg',
    title: 'Limpieza de Cámaras',
  },
  {
    id: 14,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-2.jpeg',
    title: 'Desobstrucción de Cañerías',
  },
  {
    id: 15,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-3.jpeg',
    title: 'Mantenimiento de Sumideros',
  },
  {
    id: 16,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-4.jpg',
    title: 'Lavado de Alcantarillas',
  },

  // Ductos y Salas de Basura
  {
    id: 17,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-1.jpeg',
    title: 'Limpieza de Ductos y Sala de Basura',
  },
  {
    id: 18,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-2.jpeg',
    title: 'Limpieza de Ductos y Contenedores',
  },
  {
    id: 19,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-3.jpeg',
    title: 'Limpieza de Ductos',
  },
  {
    id: 20,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-4.jpg',
    title: 'Protocolo de Limpieza',
  },
];

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <SectionWrapper id="gallery-content" className="py-12 md:py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-border mb-6">
            <div className="flex space-x-2 pb-[-1px]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "px-4 py-3 text-base font-semibold whitespace-nowrap transition-colors duration-300 relative",
                    activeTab === cat.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {cat.label}
                  {activeTab === cat.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-t-md" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md group"
              >
                {item.isVideo ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {item.isVideo && (
                  <div className="absolute top-4 right-4 bg-secondary/90 text-white p-2 rounded-xl z-10 flex">
                    <Play size={16} className="fill-white text-white" />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <h4 className="text-white font-semibold text-lg">
                    {item.title}
                  </h4>
                </div>
              </m.div>
            ))}
          </div>
        </LazyMotion>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Todas las imágenes corresponden a trabajos reales realizados por
            Altamira Ltda.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
