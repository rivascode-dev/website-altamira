'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import { Trophy, HeartHandshake, ShieldAlert } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { cn } from '@/lib/utils';

const PILARES = [
  {
    icon: <Trophy size={40} />,
    title: '1. Experiencia',
    subtitle: 'Técnicos especializados en puntos críticos',
    description:
      'Contamos con técnicos altamente especializados, con amplia trayectoria en la intervención de puntos críticos y de alta exigencia operativa. Esta experiencia nos permite:',
    content: [
      'Resolver escenarios complejos con criterio técnico y rapidez.',
      'Garantizar la seguridad de las instalaciones durante cada intervención.',
      'Adaptar herramientas y procesos a las particularidades de cada edificio.',
    ],
  },
  {
    icon: <HeartHandshake size={40} />,
    title: '2. Relación',
    subtitle: 'Conocemos cada comunidad y su historial',
    description:
      'Construimos relaciones de largo plazo basadas en la confianza, la transparencia y la respuesta oportuna. Para nosotros, cada edificio es único:',
    content: [
      'Historial detallado de las intervenciones de cada comunidad.',
      'Soluciones inmediatas y acompañamiento permanente.',
      'Supervisión directa garantizando tranquilidad para administración y residentes.',
    ],
  },
  {
    icon: <ShieldAlert size={40} />,
    title: '3. Prevención',
    subtitle: 'Anticipamos problemas antes de que ocurran',
    description:
      'Promovemos activamente la mantención preventiva de la red sanitaria, asesorando a comités y administraciones sobre la frecuencia adecuada según la normativa vigente (Ley N° 21 .442).',
    content: [
      'Reducción de emergencias: Evitamos colapsos costosos.',
      'Protección de infraestructura: Extendemos la vida útil de los sistemas.',
      'Cumplimiento de seguros y Ley N° 21.442.',
    ],
  },
];

export default function WhyAltamira() {
  return (
    <SectionWrapper id="why-altamira" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="block text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-3">
            ¿POR QUÉ ALTAMIRA?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Los 3 Pilares de Nuestro Servicio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nuestra permanencia en el mercado y la fidelidad de nuestros
            clientes se sustentan en un modelo de trabajo basado en la
            excelencia técnica y la confianza mutua.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          <LazyMotion features={domAnimation}>
            {PILARES.map((pilar, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className={cn(
                    "flex flex-col items-center gap-8 md:gap-12 p-6 md:p-10 rounded-[3rem]",
                    index % 2 === 0
                      ? "md:flex-row bg-primary/5 border border-transparent"
                      : "md:flex-row-reverse bg-transparent border border-border"
                  )}
                >
                  <div className="bg-primary text-white p-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_rgba(0,62,84,0.3)]">
                    {pilar.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
                      {pilar.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-secondary mb-6">
                      {pilar.subtitle}
                    </h4>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {pilar.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {pilar.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-2.5 h-2.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-lg leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            ))}
          </LazyMotion>
        </div>
      </div>
    </SectionWrapper>
  );
}
