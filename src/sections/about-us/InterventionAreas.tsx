import {
  Pipette,
  Droplets,
  Trash2,
  Home,
  Waves,
  Construction,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const AREAS = [
  {
    category: '1. Sistemas de Ductos Sanitarios',
    icon: <Construction size={24} />,
    items: [
      {
        title: 'Ductos Verticales',
        desc: 'Limpieza, mantención y sanitización para prevenir obstrucciones y emergencias sanitarias.',
        icon: <Pipette />,
      },
      {
        title: 'Ductos Horizontales',
        desc: 'Eliminación de acumulaciones que afectan el flujo y generan filtraciones en redes horizontales.',
        icon: <Droplets />,
      },
    ],
  },
  {
    category: '2. Higiene y Control de Plagas',
    icon: <Trash2 size={24} />,
    items: [
      {
        title: 'Ductos de Basura',
        desc: 'Lavado a presión y desinfección profunda para el control de olores y patógenos.',
        icon: <Trash2 />,
      },
      {
        title: 'Salas de Basura',
        desc: 'Sanitización total de los centros de acopio para garantizar la higiene comunitaria.',
        icon: <Home />,
      },
    ],
  },
  {
    category: '3. Redes Húmedas',
    icon: <Waves size={24} />,
    items: [
      {
        title: 'Alcantarillado',
        desc: 'Desobstrucción técnica y mantenimiento preventivo de redes de aguas servidas.',
        icon: <Waves />,
      },
      {
        title: 'Aguas Lluvias',
        desc: 'Preparación estacional para evitar inundaciones y colapsos en temporales invernales.',
        icon: <Droplets />,
      },
    ],
  },
];

export default function InterventionAreas() {
  return (
    <SectionWrapper
      id="intervention-areas"
      className="py-16 md:py-24 bg-primary text-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Intervención completa en sistemas de ductos sanitarios
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal">
            Intervenimos de forma completa los sistemas críticos del edificio:
            ductos verticales, horizontales, alcantarillado, aguas lluvias y
            ductos de basura, asegurando su correcto funcionamiento, higiene y
            continuidad operativa de acuerdo a las normas vigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AREAS.map((area, index) => (
            <div
              key={index}
              className="flex flex-col h-full"
            >
              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="text-secondary">{area.icon}</div>
                  <h3 className="text-xl font-bold text-secondary">
                    {area.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {area.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
                    >
                      <div className="flex flex-col space-y-3">
                        <h4 className="text-lg font-bold flex items-center gap-3 text-white">
                          {item.title}
                        </h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
