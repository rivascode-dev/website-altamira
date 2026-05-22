'use client';

import {
  BrushCleaning,
  Video,
  BugOff,
  ArrowRight,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const DATA_COMPLEMENTARY_SERVICES = [
  {
    icon: <BrushCleaning />,
    title: 'Sanitización',
    description:
      'Desinfección profunda de ductos para control de malos olores.',
  },
  {
    icon: <Video />,
    title: 'Video inspección',
    description:
      'Revisión e inspección de ductos para detectar obstrucciones y fugas.',
  },
  {
    icon: <BugOff />,
    title: 'Control de plagas',
    description: 'Servicios profesionales de control de plagas',
    cta: true,
    cta_text: 'Ir a Boca Ratón',
    cta_link: 'https://bocaratonpestcontrol.com',
  },
];

export default function ComplementaryServicesSection() {
  return (
    <SectionWrapper
      id="complementary-services"
      className="bg-white dark:bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            SOLUCIONES INTEGRALES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6">
            Servicios Complementarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atendemos todas las necesidades de mantención que garanticen la
            operatividad y seguridad de su edificio, ofreciendo soluciones
            integrales en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA_COMPLEMENTARY_SERVICES.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] p-8 rounded-3xl h-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary flex flex-col"
            >
              <div className="w-[70px] h-[70px] bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {item.description}
              </p>

              {item.cta && (
                <div className="text-center mt-8">
                  <Button
                    asChild
                    variant="secondary"
                    className="group w-full sm:w-auto font-bold px-6 py-2 h-auto"
                  >
                    <Link href={item.cta_link!}>
                      {item.cta_text}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
