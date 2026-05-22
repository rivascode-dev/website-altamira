'use client';

import {
  Ban,
  Biohazard,
  Waves,
  Video,
  ArrowRight,
  NotepadText,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const DATA_PROBLEMS = [
  {
    icon: <Ban />,
    text: 'Obstrucciones severas y colapsos de red.',
  },
  {
    icon: <Biohazard />,
    text: 'Malos olores y propagación de bacterias.',
  },
  {
    icon: <Waves />,
    text: 'Filtraciones en departamentos y daños estructurales.',
  },
  {
    icon: <NotepadText />,
    text: 'Multas, problemas con comités y seguros contratados.',
  },
];

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// ... inside component ...
export default function ProblemSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: true, margin: "200px" });

  return (
    <SectionWrapper
      id="el-problema"
      className="relative overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/images/altamira-ductos-alerta-tecnica-fondo.jpg"
          alt="Qué pasa si no se limpian los ductos"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-2">
              Alerta Técnica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              ¿Qué pasa si no se limpian los ductos?
            </h2>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              Cuando el sistema colapsa, el problema deja de ser técnico… y se
              vuelve un caos para toda la comunidad
            </p>

            <div className="space-y-6 mt-8">
              {DATA_PROBLEMS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary flex-shrink-0">
                    <div className="text-secondary transition-colors duration-300 group-hover:text-white flex">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-lg text-white font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 shadow-xl">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative bg-black/20">
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  autoPlay={isInView}
                  preload="none"
                  poster="/assets/images/altamira-ductos-alerta-tecnica-fondo.jpg"
                  className="w-full h-full object-cover"
                >
                  {isInView && <source src="/assets/videos/altamira-ductos-derrame-dpto.mp4" type="video/mp4" />}
                </video>
              </div>
              
              <div className="flex items-center space-x-4">
                <Video className="text-white w-10 h-10 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">
                    Inspección en Tiempo Real
                  </span>
                  <span className="block text-white/80 uppercase tracking-widest text-xs mt-1">
                    Tecnología de Diagnóstico
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 group"
          >
            <Link href="/preguntas-frecuentes">
              Preguntas Frecuentes
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
