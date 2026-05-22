'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { cn } from '@/lib/utils';

const DATA_HOW_WE_WORK = [
  {
    step: '01',
    title: 'Evaluación',
    desc: 'Inspección ocular y técnica inicial de la red.',
    active: false,
  },
  {
    step: '02',
    title: 'Limpieza',
    desc: 'Succión y raspado mecánico de alta eficiencia.',
    active: false,
  },
  {
    step: '03',
    title: 'Sanitización',
    desc: 'Aplicación de agentes químicos certificados.',
    active: false,
  },
  {
    step: '04',
    title: 'Video Inspección',
    desc: 'Confirmación visual de la limpieza total.',
    active: false,
  },
  {
    step: '05',
    title: 'Informe Técnico',
    desc: 'Entrega de certificado y recomendaciones.',
    active: false,
    last: true,
  },
];

export default function HowWeWorkSection() {
  return (
    <SectionWrapper
      id="how-we-work"
      className="bg-white dark:bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            COMO TRABAJAMOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary">
            Ingeniería en cada paso
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
          {DATA_HOW_WE_WORK.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group"
            >
              <div
                className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white dark:border-background shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] relative z-10 transition-colors duration-300",
                  item.active ? "bg-secondary text-white" : "bg-primary text-white group-hover:bg-primary/90"
                )}
              >
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                {item.desc}
              </p>

              {/* Conector Lineal Desktop */}
              {!item.last && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-border -z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
