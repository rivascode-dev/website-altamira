'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const images = [
  '/assets/images/gallery/altamira-ductos-horizontales-1.jpg',
  '/assets/images/gallery/altamira-ductos-sala-basura-1.jpeg',
  '/assets/images/gallery/altamira-ductos-verticales-1.jpg',
  '/assets/images/gallery/altamita-ductos-alcantarillado-1.jpeg',
];

export default function GallerySection() {
  return (
    <SectionWrapper
      id="gallery"
      className="bg-white dark:bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            GALERÍA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary">
            Trabajos reales en terreno
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden relative group"
            >
              <Image
                src={src}
                alt={`Trabajo técnico ${index + 1}`}
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white group transition-colors duration-300"
          >
            <Link href="/galeria">
              Ver Galería Completa
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
