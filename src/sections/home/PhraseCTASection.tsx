'use client';

import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function PhraseCTASection() {
  return (
    <SectionWrapper
      id="cta-final"
      className="relative overflow-hidden bg-white dark:bg-background"
    >
      <div className="absolute inset-0 opacity-45 dark:opacity-20">
        <Image
          src="/assets/images/altamira-ductos-solicitar-evaluacion-tecnica.jpg"
          alt="Technical background"
          fill
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
          Un ducto limpio no se ve…
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2">
          pero se nota cuando falla
        </h3>
        
        <span className="block mt-6 text-primary font-bold uppercase tracking-widest text-sm md:text-base">
          En Altamira ductos - su confianza es nuestra prioridad
        </span>

        <div className="mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary bg-secondary hover:bg-white hover:text-secondary group transition-all duration-300"
          >
            <a href="#contact">
              <span className="text-white group-hover:text-secondary font-bold">Solicitar Evaluación</span>
              <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:text-secondary group-hover:translate-x-1 transition-all" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
