

import { BadgeCheck, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const DATA_REGULATIONS = [
  'Multas y sanciones legales',
  'Responsabilidad civil ante daños a terceros',
  'Riesgos sanitarios para la comunidad',
];

export default function RegulationsSection() {
  return (
    <SectionWrapper
      id="regulations"
      className="bg-gray-50 dark:bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="bg-white dark:bg-card p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] relative mt-8 sm:mt-0 border border-border/50">
            
            <div className="absolute -top-4 left-4 sm:-top-6 sm:left-12 bg-secondary text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-center shadow-[0_10px_15px_-3px_rgba(211,47,47,0.3)]">
              CUMPLIMIENTO DE NORMATIVAS Y RESPONSABILIDAD
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-6">
              Ley N° 21.442 de Copropiedad
            </h2>
            
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              La Ley N° 21.442 sobre Copropiedad Inmobiliaria (Chile, 2022)
              establece que las comunidades y administraciones tienen la
              obligación de mantener en correcto estado las instalaciones y
              bienes comunes del edificio, resguardando la seguridad,
              salubridad y funcionamiento de la infraestructura.
            </p>

            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              En este contexto, los sistemas de ductos sanitarios y ductos de
              basura forman parte de estas instalaciones críticas, cuya
              mantención periódica es fundamental para prevenir riesgos
              sanitarios, estructurales y legales.
            </p>

            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              No realizar mantenciones obligatorias puede generar:
            </p>

            <div className="space-y-4 mt-6 ml-2 sm:ml-4">
              {DATA_REGULATIONS.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <BadgeCheck className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-bold text-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mt-8 font-bold">
              Ignorar la normativa no es una opción. Es un riesgo operativo y
              legal.
            </p>

            <p className="text-lg text-muted-foreground mt-4 font-bold">
              Un ducto no mantenido puede transformarse en un foco sanitario
              crítico, generando colapsos, filtraciones y daños que afectan
              directamente a residentes y a la administración.
            </p>

            <p className="text-lg text-muted-foreground mt-4 italic">
              Prevenir no es opcional. Es una obligación legal. “En caso de
              accidente, la responsabilidad recae en la administración.”
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-10 group border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <Link href="/evita-multas">
                Leer más sobre obligaciones y consecuencias legales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
