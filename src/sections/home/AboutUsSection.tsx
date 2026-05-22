'use client';

import { ArrowRight, CircleCheck } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function AboutUsSection() {
  return (
    <SectionWrapper id="about-us" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <Image
              src="/assets/images/altamira-ductos-nosotros.jpg"
              alt="Equipo técnico Altamira Ductos"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg relative z-10"
            />
            
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] z-20">
              <span className="block text-4xl font-light text-secondary mb-1">
                Confianza
              </span>
              <span className="block font-medium uppercase tracking-tight text-white text-sm">
                y experiencia
              </span>
            </div>
          </div>

          <div className="flex flex-col order-1 md:order-2">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2">
              QUIENES SOMOS
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary leading-tight mt-2">
              EMPRESA DE CONTROL DE PLAGAS SEGÚN REQUERIMIENTO SEREMI PARA LA
              EJECUCIÓN DE LIMPIEZA DE DUCTOS VERTICALES Y HORIZONTALES.
            </h2>

            <p className="text-primary text-lg mt-4 leading-relaxed">
              En Altamira nos especializamos en la limpieza, mantención y
              sanitización de sistemas de ductos en edificios y condominios.
            </p>

            <p className="text-muted-foreground mt-4 leading-[1.8]">
              Trabajamos con equipos especializados para intervenir ductos
              verticales, horizontales, cámaras de alcantarillado y ductos de
              basura con sus salas, asegurando resultados eficientes, seguros
              y duraderos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                'Equipo Certificado',
                'Tecnología de Punta',
                'Resolución Sanitaria',
                'Cobertura Nacional',
              ].map((text) => (
                <div key={text} className="flex items-start space-x-3">
                  <CircleCheck className="text-secondary fill-white w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-primary">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-10 self-start group border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <Link href="/nosotros" aria-label="Leer más sobre nuestra empresa">
                Leer Más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
