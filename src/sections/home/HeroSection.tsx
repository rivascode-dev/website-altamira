'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-[80vh] md:h-[921px] overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/images/altamira-ductos-hero.jpg"
          alt="Technical engineer inspecting ventilation systems"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-[850px]">
          <div className="inline-flex items-center px-4 py-1.5 bg-secondary text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            <motion.div
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-white rounded-full mr-2.5 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
            <span className="tracking-[0.1em] md:tracking-[0.2em] uppercase">
              Empresa dedicada exclusivamente a edificios y condominios
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-[6rem] font-light leading-tight tracking-tight mb-2">
            Limpieza de ductos
          </h1>

          <h2 className="text-white text-3xl md:text-4xl lg:text-[3.75rem] font-light leading-tight mb-8">
            <span className="text-[#E98282]">Prevención hoy,</span> tranquilidad mañana.
          </h2>

          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-light italic max-w-[650px]">
            Un ducto limpio no se ve… pero se nota cuando falla
          </h3>

          <p className="text-[#E98282] text-lg md:text-xl font-medium mt-8 max-w-[650px] leading-relaxed">
            ✔ Empresa con resolución sanitaria
            <br />
            ✔ Entrega de informe técnico por servicio
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white border-2 bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a href="/servicios" aria-label="Ir a la sección de servicios">
                Ver Servicios
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group"
            >
              <a href="#contact" aria-label="Ir al formulario de evaluación técnica">
                Solicitar evaluación técnica
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
