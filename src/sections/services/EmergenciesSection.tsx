'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight, ShieldCheck, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function EmergenciesSection() {
  return (
    <SectionWrapper id="emergencies" className="py-16 md:py-24 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Banner principal */}
        <div className="relative rounded-[2rem] overflow-hidden bg-primary text-white mb-16 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/assets/images/altamira-ductos-alerta-tecnica-fondo.jpg"
              alt="Emergencias"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row">
            <div className="p-8 md:p-12 lg:p-16 md:w-7/12 space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                  Emergencias
                </h3>
              </div>
              
              <h4 className="text-xl md:text-2xl text-secondary font-bold leading-tight">
                Gestión de crisis y la importancia de la prevención para evitar
                colapsos operativos en la comunidad.
              </h4>
              
              <h5 className="text-lg md:text-xl text-white/90 font-medium">
                Evita daños, costos y conflictos en tu comunidad
              </h5>
              
              <p className="text-white/80 leading-relaxed text-lg">
                Nuestro objetivo principal es ser una empresa de reacción rápida y
                acción preventiva, evitando que las obstrucciones en la red
                sanitaria deriven en emergencias críticas, situaciones de estrés
                para los residentes y, en los casos más graves, el colapso
                operativo del edificio.
              </p>
            </div>
            
            <div className="hidden md:flex md:w-5/12 p-8 items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <Image
                  src="/assets/images/gallery/altamira-ductos-sala-basura-2.jpeg"
                  alt="Inspección de emergencia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dos columnas de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Impacto */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-3xl font-extrabold text-primary">
                El Impacto de una Emergencia Sanitaria
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una emergencia en una comunidad puede compararse con un evento de
                alto impacto: ocurre de forma inesperada, afecta a múltiples
                residentes de manera simultánea y genera costos económicos,
                operativos y reputacionales significativos para la administración.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La experiencia nos demuestra que este tipo de situaciones no se
                originan de un día para otro, sino que son consecuencia directa
                del descuido prolongado de la red sanitaria y la falta de
                mantención preventiva oportuna.
              </p>
            </div>

            <div className="bg-secondary/5 p-6 md:p-8 border-l-4 border-secondary rounded-r-2xl">
              <h5 className="text-xl font-bold text-secondary mb-6">
                Consecuencias Críticas:
              </h5>
              <div className="space-y-4">
                {[
                  'Cortes prolongados de agua potable.',
                  'Interrupción del suministro eléctrico por filtraciones.',
                  'Daños en la plusvalía de la propiedad.',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <TrendingDown className="text-secondary w-6 h-6 flex-shrink-0" />
                    <span className="font-medium text-lg text-foreground">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gestión */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-3xl font-extrabold text-primary">
                Gestión Responsable y Planificada
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una gestión profesional de la infraestructura no solo protege al
                edificio y a sus residentes, sino que también respalda la labor de
                la administración ante el Comité de Copropietarios.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Minimización de riesgos',
                  desc: 'Reduce la probabilidad de colapsos inesperados.',
                },
                {
                  title: 'Reducción de responsabilidades',
                  desc: 'Asegura que la administración cumpla con su deber de cuidado.',
                },
                {
                  title: 'Evita conflictos futuros',
                  desc: 'Mantiene la armonía en la comunidad al evitar servicios higiénicos inoperantes.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-card p-6 border border-border rounded-2xl flex items-center gap-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg text-primary mb-1">
                      {item.title}
                    </h5>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-dashed border-primary">
              <p className="font-semibold text-primary leading-relaxed text-lg">
                Mantener la red al día es la mejor herramienta para proteger la
                infraestructura y cumplir con los requisitos exigidos por las
                compañías de seguros ante eventuales daños colaterales.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20">
          <div className="bg-secondary text-white p-8 md:p-12 rounded-[2rem] text-center shadow-lg">
            <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
              Contamos con una unidad de respuesta rápida
            </h4>
            <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
              Nuestro mejor servicio es evitar que llegue a necesitarnos de
              urgencia. Consulte por nuestros planes de mantención anual.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white group transition-all duration-300"
            >
              <Link href="/condiciones">
                <span className="font-bold mr-2">Leer Condiciones Servicio</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
