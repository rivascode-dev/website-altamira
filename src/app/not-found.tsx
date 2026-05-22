'use client';

import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <SectionWrapper
      id="not-found"
      className="min-h-[80vh] flex items-center relative overflow-hidden bg-primary py-24"
    >
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/images/altamira-ductos-galeria-1.jpg"
          alt="Altamira 404"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#003E54]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Círculo con Icono */}
          <div className="w-[120px] h-[120px] rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 mb-4">
            <Search size={60} className="text-white" strokeWidth={1.5} />
          </div>

          <div className="text-center">
            <h1 className="text-white font-extrabold text-[5rem] md:text-[8rem] leading-none mb-4 opacity-90">
              404
            </h1>
            <h3 className="text-white font-semibold mb-4 text-2xl md:text-4xl">
              Parece que te has perdido
            </h3>
            <p className="text-white/80 max-w-[500px] mx-auto text-lg leading-relaxed">
              La página que buscas no existe o ha sido movida. Te invitamos a volver al inicio para conocer más sobre nuestras soluciones en limpieza y mantención de ductos.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="default"
            className="bg-white text-primary hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.2)] font-bold text-lg px-8 py-6"
          >
            <Link href="/">
              <Home size={20} className="mr-2" />
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
