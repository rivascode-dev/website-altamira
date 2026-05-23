import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function PromotionsContent() {
  return (
    <SectionWrapper
      id="promotions-content"
      className="py-16 md:py-24 bg-gray-50 dark:bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Banner de Promoción */}
        <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-border mb-16 bg-gray-100 dark:bg-card">
          <div className="relative w-full aspect-[9/14] max-h-[80vh] md:max-h-[1400px]">
            <Image
              src="/assets/images/altamira-ductos-promocion-invierno-2026.jpeg"
              alt="Promoción Invierno 2026 Altamira Ductos"
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              priority
              className="object-contain block"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-secondary">
              <Sparkles size={20} />
              <span className="font-bold tracking-[0.2em] uppercase text-sm">
                OFERTA EXCLUSIVA
              </span>
              <Sparkles size={20} />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
              ¿Deseas agendar esta promoción?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No dejes pasar esta oportunidad de temporada. El mantenimiento
              preventivo asegura un ambiente saludable y eficiente. Contáctanos
              hoy mismo y menciona el cupón de esta imagen para obtener tu
              beneficio.
            </p>
          </div>

          <div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-4 border-secondary text-secondary bg-secondary hover:bg-white hover:text-secondary group transition-all duration-300"
            >
              <Link href="/nosotros" aria-label="Leer más sobre nuestra empresa">
                <span className="text-white group-hover:text-secondary font-bold mr-2">
                  Solicitar evaluación técnica gratuita
                </span>
                <ArrowRight className="text-white group-hover:text-secondary w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
