'use client';

import {
  ArrowUpDown,
  MoveHorizontal,
  Droplets,
  CloudRain,
  Trash2,
  TriangleAlert,
  Building,
  BrushCleaning,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const DATA_SERVICES = [
  {
    icon: <ArrowUpDown size={32} />,
    title: 'Ductos verticales',
    description:
      'Limpieza y mantención de ductos verticales en edificios, evitando obstrucciones y emergencias sanitarias.',
    accent: 'Incluye Sanitización',
  },
  {
    icon: <MoveHorizontal size={32} />,
    title: 'Ductos horizontales',
    description:
      'Limpieza y mantención de ductos horizontales con eliminación de residuos acumulados e incluye sanitización.',
    accent: 'Incluye Sanitización',
  },
  {
    icon: <Droplets size={32} />,
    title: 'Alcantarillado',
    description:
      'Desobstrucción y mantención de alcantarillado para prevenir rebalses y daños estructurales.',
  },
  {
    icon: <CloudRain size={32} />,
    title: 'Aguas lluvias',
    description:
      'Limpieza de sistemas de aguas lluvias para evitar saturaciones, filtraciones y colapsos en temporada.',
  },
  {
    icon: <Trash2 size={32} />,
    title: 'Ductos de basura',
    description:
      'Limpieza, sanitización y desinfección de ductos de basura para eliminar olores, bacterias y focos infecciosos.',
    featured: true,
  },
  {
    icon: <TriangleAlert size={32} />,
    title: 'Emergencias sanitarias',
    description:
      'Atención inmediata 24/7 ante colapsos, rebalses y situaciones críticas en la red sanitaria.',
  },
];

const DATA_SERVICES_EXTRAS = [
  {
    icon: <Building />,
    text: 'Desde los pisos superiores hasta la sala de basura',
  },
  {
    icon: <BrushCleaning />,
    text: 'Incluye limpieza, mantención y sanitización de las áreas intervenidas',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id='services' className='bg-[#f3f4f6] py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl'>
        <div className='text-center mb-16'>
          <span className='block text-secondary font-bold tracking-widest text-sm uppercase mb-4'>
            Nuestros Servicios
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6'>
            Intervención completa del sistema de ductos
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Disponemos de servicios específicos y eficientes, garantizando un
            impacto de tiempo y dinero adaptado a su necesidad en estos tiempos
            difíciles y empatizamos con su gestión financiera.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {DATA_SERVICES.map((service, index) => (
            <Link href='servicios/' key={index} className='block group'>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                accent={service.accent}
                featured={service.featured}
              />
            </Link>
          ))}
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4 mt-10 max-w-4xl mx-auto'>
          {DATA_SERVICES_EXTRAS.map((item, index) => (
            <div
              key={index}
              className='px-6 py-4 rounded-xl bg-gray-200/60 flex items-center justify-center space-x-3 w-full md:w-auto'
            >
              <div className='text-primary flex-shrink-0 w-5 h-5 flex items-center justify-center'>
                {item.icon}
              </div>
              <p className='text-primary font-medium text-sm'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  accent,
  featured,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        'bg-card p-8 rounded-3xl h-full flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]',
        featured
          ? 'border-2 border-secondary shadow-sm'
          : 'border border-gray-200 shadow-sm',
      )}
    >
      <div
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300',
          featured ? 'bg-secondary text-white' : 'bg-[#f5f5f5] text-primary',
        )}
      >
        {icon}
      </div>
      <h3 className='text-xl font-bold text-primary mb-3'>{title}</h3>
      <p className='text-muted-foreground text-sm leading-relaxed mb-6 flex-grow'>
        {description}
      </p>
      {accent && (
        <span className='text-secondary font-bold text-xs uppercase tracking-wider'>
          {accent}
        </span>
      )}
    </div>
  );
}
