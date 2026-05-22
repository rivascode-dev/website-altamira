'use client';

import {
  ClipboardCheck,
  Camera,
  ShieldCheck,
  FileText,
  ArrowRight,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const DATA_TECHNICAL_REPORT = [
  {
    icon: <Camera />,
    text: 'Evidencia fotográfica Antes / Después',
  },
  {
    icon: <ShieldCheck />,
    text: 'Respaldo para administración y Seguros',
  },
  {
    icon: <FileText />,
    text: 'Informe técnico con registro detallado',
  },
];

export default function TechnicalReportSection() {
  return (
    <SectionWrapper
      id="informe-tecnico"
      className="bg-gray-50 dark:bg-card"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-background rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row border border-border">
          
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase mb-8">
              <ClipboardCheck size={20} />
              Garantía de Calidad
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              Informe Técnico y Resolución Sanitaria.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Al finalizar cada servicio, entregamos un dossier técnico completo
              que avala la limpieza y cumple con los requerimientos de los
              organismos fiscalizadores.
            </p>

            <div className="space-y-4">
              {DATA_TECHNICAL_REPORT.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-100 dark:bg-card border border-transparent dark:border-border"
                >
                  <div className="text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-primary">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-10 border-secondary text-secondary hover:bg-secondary hover:text-white group transition-colors duration-300"
            >
              <Link href="/informe">
                Leer Más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center p-12 lg:p-16 relative">
            <div className="relative w-full max-w-[400px] aspect-[400/560]">
              <Image
                src="/assets/images/altamira-dcutos-informe-tecnico.png"
                alt="Technical maintenance report"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rotate-2"
              />
            </div>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
