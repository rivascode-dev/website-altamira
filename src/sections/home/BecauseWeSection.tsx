

import {
  HardHat,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const DATA_DIFFERENTIATORS = [
  {
    icon: <ShieldCheck />,
    title: 'Experiencia',
    desc: 'Técnicos especializados en puntos críticos, Contamos con técnicos altamente especializados, con experiencia en puntos críticos y de alta exigencia operativa.',
    active: false,
  },
  {
    icon: <Handshake />,
    title: 'Relación',
    desc: 'Conocemos cada comunidad y su historial, Construimos relaciones de largo plazo basadas en la confianza, la transparencia y la respuesta oportuna.',
    active: true,
  },
  {
    icon: <HardHat />,
    title: 'Prevención',
    desc: 'Anticipamos problemas antes de que ocurran, Promovemos activamente la mantención preventiva de la red sanitaria, asesorando a comités y administraciones sobre la frecuencia adecuada, conforme a la normativa vigente.',
    active: false,
  },
];

export default function BecauseWeSection() {
  return (
    <SectionWrapper id="diferenciadores" className="bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            POR QUÉ ELEGIRNOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            Por qué nuestros clientes trabajan con nosotros durante años?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {DATA_DIFFERENTIATORS.map((item, index) => (
            <div
              key={index}
              className={`bg-white/5 p-8 rounded-3xl h-full transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 ${
                item.active ? 'border border-secondary' : 'border border-transparent'
              }`}
            >
              <div className="w-[60px] h-[60px] bg-secondary rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 max-w-[100px]">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
