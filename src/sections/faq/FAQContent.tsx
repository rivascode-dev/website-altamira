'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    title: '1. Mantenimiento y Periodicidad',
    questions: [
      {
        q: '¿Cada cuánto tiempo se deben limpiar los ductos en un edificio?',
        a: 'La frecuencia depende del uso y las condiciones del edificio, pero en la mayoría de los casos se recomienda realizar una limpieza y mantención **al menos una vez al año**.\n\nEn comunidades con alta ocupación o uso intensivo, puede ser necesario realizar mantenciones cada 6 meses para evitar acumulación de residuos, malos olores y obstrucciones críticas. Lo más recomendable es realizar una evaluación técnica inicial.',
      },
      {
        q: '¿Qué ocurre si no se realizan mantenciones de los ductos?',
        a: 'La falta de mantención genera una acumulación progresiva de residuos que no es visible al inicio, pero con el tiempo provoca:\n\n- Obstrucciones y rebalses sanitarios.\n- Malos olores permanentes en áreas comunes y departamentos.\n- Filtraciones estructurales.\n- El sistema pasa de requerir una mantención a convertirse en una **emergencia sanitaria**, con costos mucho más elevados.',
      },
    ],
  },
  {
    title: '2. Normativa y Salud',
    questions: [
      {
        q: '¿Es obligatorio limpiar los ductos de basura?',
        a: 'Sí, los ductos de basura son focos críticos de acumulación de residuos orgánicos, lo que atrae plagas y genera riesgos biológicos. La limpieza y sanitización periódica permite cumplir con las normativas sanitarias vigentes y evitar riesgos para la salud de los residentes.',
      },
      {
        q: '¿Cómo saber si una empresa cumple con la normativa sanitaria?',
        a: 'Es fundamental que la empresa cuente con:\n\n- **Resolución Sanitaria Vigente.**\n- Procedimientos certificados de limpieza y sanitización.\n- Entrega de un **Informe Técnico** con respaldo fotográfico.\n- Uso exclusivo de productos autorizados por el ISP/Minsal.',
      },
    ],
  },
  {
    title: '3. Identificación de Problemas',
    questions: [
      {
        q: '¿Cómo sé si mi edificio necesita una limpieza de ductos inmediata?',
        a: 'Algunas señales de alerta clara son:\n\n- Presencia de malos olores persistentes.\n- Lentitud en la evacuación de aguas servidas.\n- Presencia inusual de plagas (cucarachas o roedores).\n- Rebalses o filtraciones en los niveles inferiores.',
      },
      {
        q: '¿La limpieza elimina los malos olores?',
        a: 'Sí, el proceso de limpieza remueve los residuos adheridos a las paredes del ducto, y la sanitización posterior elimina las bacterias que generan la descomposición y el mal olor, mejorando significativamente el ambiente del edificio.',
      },
    ],
  },
  {
    title: '4. Sobre nuestro Servicio',
    questions: [
      {
        q: '¿El servicio incluye informe técnico?',
        a: 'Absolutamente. Cada intervención finaliza con la entrega de un informe técnico detallado que incluye registro fotográfico del "antes y después". Este documento sirve como respaldo ante la administración, comités de copropietarios y compañías de seguros.',
      },
      {
        q: '¿Se interrumpe la vida normal de los residentes durante el servicio?',
        a: 'No. Los trabajos se planifican meticulosamente para minimizar molestias. Coordinamos horarios y accesos con la administración para que el impacto en la rutina de los residentes sea prácticamente nulo.',
      },
      {
        q: '¿Qué incluye una evaluación técnica?',
        a: 'La evaluación permite revisar el estado real del sistema, detectar puntos críticos de obstrucción mediante cámaras si es necesario, y definir el tipo de intervención más eficiente para el edificio.',
      },
      {
        q: '¿Atienden emergencias sanitarias?',
        a: 'Sí, disponemos de una unidad de respuesta rápida para emergencias, diseñada para atender rebalses u obstrucciones críticas que comprometan la habitabilidad del edificio en el menor tiempo posible.',
      },
    ],
  },
];

export default function FAQContent() {
  const [openIndexes, setOpenIndexes] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (catIndex: number, qIndex: number) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SectionWrapper id="faq-content" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isOpen = !!openIndexes[key];

                    return (
                      <div
                        key={qIndex}
                        className="border-b border-border bg-transparent"
                      >
                        <button
                          onClick={() => toggleAccordion(catIndex, qIndex)}
                          className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                        >
                          <span className="text-xl font-semibold text-primary pr-8">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={cn(
                              "text-secondary w-6 h-6 flex-shrink-0 transition-transform duration-300",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            isOpen ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"
                          )}
                        >
                          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 p-8 rounded-3xl bg-gray-50 dark:bg-card border border-border text-center">
            <p className="text-muted-foreground text-lg italic">
              Para consultas técnicas o solicitudes de presupuesto, por favor
              contáctenos a través de nuestro portal de soporte o directamente a
              nuestro canal de ventas.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
