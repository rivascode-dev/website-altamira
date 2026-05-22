'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

export default function AboutUsIntro() {
  return (
    <SectionWrapper id="about-intro" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-2">
                SOMOS ALTAMIRA DUCTOS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                Expertos en Mantenimiento Sanitario
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Altamira Ductos es una empresa especializada en la limpieza,
                  mantención y sanitización de los sistemas de ductos en
                  edificios y condominios. Nos hemos consolidado como el socio
                  estratégico de comunidades que buscan garantizar la salud de
                  sus habitantes y la integridad de su infraestructura.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nos especializamos en ofrecer soluciones integrales para la
                  limpieza y mantención de ductos y salas de basura, ductos
                  verticales, horizontales, sistemas de aguas lluvias y redes de
                  alcantarillado para edificios y condominios, asegurando
                  resultados eficientes, seguros y duraderos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gracias al uso de maquinaria especializada, equipos de alto
                  rendimiento y sistemas avanzados de videoinspección de ductos,
                  aseguramos un servicio de alta precisión, calidad y
                  trazabilidad. Nuestra experiencia técnica nos permite abordar
                  desafíos complejos, garantizando resultados óptimos, duraderos
                  y alineados con la normativa vigente. Nuestra filosofía de
                  trabajo se resume en una premisa clara:
                </p>
                
                <p className="text-lg font-semibold text-primary border-l-4 border-secondary pl-6 py-3 bg-secondary/5 rounded-r-lg">
                  "Un ducto limpio no se ve… pero se nota cuando falla."
                </p>
              </div>
            </m.div>
          </LazyMotion>

          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/altamira-ductos-nosotros.jpg"
                  alt="Equipo técnico de Altamira"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    Tecnología y Compromiso
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Garantizamos la integridad de su infraestructura.
                  </p>
                </div>
              </div>
            </m.div>
          </LazyMotion>

        </div>
      </div>
    </SectionWrapper>
  );
}
