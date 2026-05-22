'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import {
  Gavel,
  Scale,
  AlertTriangle,
  ShieldCheck,
  FileText,
} from 'lucide-react';

export default function PenaltyContent() {
  return (
    <SectionWrapper id="normativa-legal" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-24">
          {/* Marco Normativo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
                    Marco Normativo y Responsabilidad Legal
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    El mantenimiento de las instalaciones sanitarias no es solo
                    una cuestión de operatividad y limpieza; es una{' '}
                    <strong className="text-primary font-bold">obligación legal</strong> que recae sobre las
                    administraciones y comunidades de copropietarios.
                  </p>
                  
                  <hr className="border-border my-6" />
                  
                  <div className="flex gap-6 items-start">
                    <Gavel
                      className="text-secondary w-8 h-8 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Ley N° 21.442 sobre Copropiedad Inmobiliaria
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Según la <strong className="text-primary font-bold">Ley N° 21.442</strong>, las comunidades
                        y administradores están obligados a mantener en correcto
                        estado las instalaciones del edificio mediante
                        mantenciones periódicas que garanticen la seguridad y
                        salud de los residentes.
                      </p>
                    </div>
                  </div>
                </m.div>
              </LazyMotion>
            </div>

            <div className="md:col-span-5">
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-primary/5 p-8 rounded-3xl border border-border h-full">
                    <h4 className="text-xl font-bold text-primary mb-6">
                      El cumplimiento de esta normativa asegura:
                    </h4>
                    <div className="space-y-4">
                      {[
                        'La integridad física de los habitantes.',
                        'El correcto funcionamiento de las áreas comunes.',
                        'El respaldo legal ante eventuales fiscalizaciones o siniestros.',
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 items-center"
                        >
                          <ShieldCheck
                            className="w-6 h-6 text-primary flex-shrink-0"
                          />
                          <p className="font-medium text-lg text-primary">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>
              </LazyMotion>
            </div>
          </div>

          {/* Consecuencias del Incumplimiento */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
              Consecuencias del Incumplimiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Multas y Sanciones',
                  desc: 'Penalizaciones económicas por parte de juzgados de policía local o autoridades sanitarias.',
                  icon: <AlertTriangle className="w-10 h-10" />,
                },
                {
                  title: 'Responsabilidad Civil',
                  desc: 'Obligación de indemnizar daños causados a departamentos particulares o bienes comunes por negligencia en el mantenimiento (ej. filtraciones o rebalses).',
                  icon: <Scale className="w-10 h-10" />,
                },
                {
                  title: 'Responsabilidad Penal',
                  desc: 'En los casos más graves, consecuencias legales ante accidentes personales derivados de instalaciones en mal estado.',
                  icon: <Gavel className="w-10 h-10" />,
                },
              ].map((item, i) => (
                <LazyMotion features={domAnimation} key={i}>
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-white dark:bg-card p-8 rounded-3xl border border-border transition-all duration-300 hover:border-secondary hover:shadow-[0_10px_30px_rgba(211,47,47,0.1)] hover:-translate-y-2 flex flex-col h-full min-h-[320px]">
                      <div className="text-secondary mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-extrabold text-primary mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                        {item.desc}
                      </p>
                    </div>
                  </m.div>
                </LazyMotion>
              ))}
            </div>
          </div>

          {/* Riesgo de Omisión y Cierre */}
          <div className="bg-primary text-white p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  El Riesgo de la Omisión
                </h2>
                <p className="text-xl text-secondary font-medium leading-relaxed">
                  No realizar mantenciones preventivas no solo deteriora
                  aceleradamente las instalaciones y la plusvalía del
                  edificio: también{' '}
                  <strong className="text-white font-bold">expone directamente a la administración</strong>{' '}
                  frente a posibles demandas y consecuencias legales.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-normal">
                  La mantención planificada con <strong className="text-white font-bold">Altamira</strong> es
                  la herramienta más efectiva para mitigar estos riesgos,
                  asegurando que el edificio opere siempre bajo el marco legal
                  vigente y con los estándares de seguridad exigidos por el
                  mercado y las compañías de seguros.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="bg-white/10 p-8 rounded-3xl border border-white/20 text-center flex flex-col items-center">
                  <FileText
                    className="text-secondary w-12 h-12 mb-4"
                  />
                  <p className="text-secondary text-sm italic leading-relaxed">
                    Para certificaciones específicas o asesoría sobre el
                    cumplimiento del DS.594, no dude en contactar a nuestro
                    equipo legal-técnico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
