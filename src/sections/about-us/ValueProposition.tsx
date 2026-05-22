'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import { ShieldCheck, Zap, Users, FileBarChart } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const VALUE_PROPS = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Resolución Sanitaria',
    desc: 'Cumplimos con la vigencia de todas las normativas del MINSAL.',
    colorClass: 'text-[#D32F2F]',
    bgClass: 'bg-[#D32F2F]/10',
    borderClass: 'hover:border-[#D32F2F]',
  },
  {
    icon: <Zap size={32} />,
    title: 'Tecnología de Punta',
    desc: 'Equipos alta presión y herramientas de inspección avanzada.',
    colorClass: 'text-[#1976D2]',
    bgClass: 'bg-[#1976D2]/10',
    borderClass: 'hover:border-[#1976D2]',
  },
  {
    icon: <Users size={32} />,
    title: 'Equipo Certificado',
    desc: 'Nuestro Personal altamente capacitado y con cobertura nacional.',
    colorClass: 'text-[#388E3C]',
    bgClass: 'bg-[#388E3C]/10',
    borderClass: 'hover:border-[#388E3C]',
  },
  {
    icon: <FileBarChart size={32} />,
    title: 'Informes Técnicos',
    desc: 'Entrega de toda la documentación detallada tras cada servicio',
    colorClass: 'text-[#FBC02D]',
    bgClass: 'bg-[#FBC02D]/10',
    borderClass: 'hover:border-[#FBC02D]',
  },
];

export default function ValueProposition() {
  return (
    <SectionWrapper
      id="value-proposition"
      className="bg-gray-50 dark:bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
            Operamos bajo el concepto de "Prevención hoy, tranquilidad mañana".
            Entendemos que el mantenimiento no es un gasto, sino una inversión
            obligatoria para evitar colapsos sanitarios y multas legales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <LazyMotion features={domAnimation}>
            {VALUE_PROPS.map((prop, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div
                  className={`bg-white dark:bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex-grow min-h-[300px] ${prop.borderClass}`}
                >
                  <div className={`p-4 rounded-2xl mb-6 ${prop.colorClass} ${prop.bgClass}`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 w-[80%] mx-auto leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {prop.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </LazyMotion>
        </div>
      </div>
    </SectionWrapper>
  );
}
