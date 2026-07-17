'use client';

import { BadgeCheck, ShieldCheck, HardHat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent, TRACKING_EVENTS } from '@/utils/gtm';

export default function Footer() {
  const handlePhoneClick = (number: string) => {
    trackEvent(TRACKING_EVENTS.PHONE_CLICK, {
      event_category: 'engagement',
      event_label: number,
    });
  };
  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          
          <div className="md:col-span-3 flex justify-center md:justify-start mb-4 md:mb-0">
            <Image
              src="/assets/logos/logo-altamira-limpieza-ductos-vertical.png"
              alt="Altamira Ductos Logo"
              width={100}
              height={100}
              className="w-[120px] md:w-[55%] h-auto"
            />
          </div>

          <div className="md:col-span-5 text-center md:text-left">
            <span className="block text-primary uppercase tracking-widest font-bold text-xs mb-4">
              Contacto
            </span>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+56995739887"
                onClick={() => handlePhoneClick('+56995739887')}
                className="text-primary hover:text-secondary transition-colors text-sm font-medium"
              >
                +56 9 9573 9887
              </a>
              <a
                href="tel:+56982811148"
                onClick={() => handlePhoneClick('+56982811148')}
                className="text-primary hover:text-secondary transition-colors text-sm font-medium"
              >
                +56 9 8281 1148
              </a>
              <a
                href="mailto:altamiraductos@gmail.com"
                className="text-primary hover:text-secondary transition-colors break-all text-sm font-medium"
              >
                altamiraductos@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-4 text-center md:text-left">
            <span className="block text-primary uppercase tracking-widest font-bold text-xs mb-4">
              Certificaciones
            </span>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <div className="w-12 h-12 rounded bg-card flex items-center justify-center border border-border shadow-sm">
                <BadgeCheck className="text-primary" />
              </div>
              <div className="w-12 h-12 rounded bg-card flex items-center justify-center border border-border shadow-sm">
                <ShieldCheck className="text-primary" />
              </div>
              <div className="w-12 h-12 rounded bg-card flex items-center justify-center border border-border shadow-sm">
                <HardHat className="text-primary" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              Altamira Ductos. Tu comunidad en manos expertas. Resolución
              Sanitaria: Certificada.
            </p>
          </div>
        </div>

        <div className="h-px bg-border my-8" />
        
        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Altamira Ductos | Todos los derechos reservados | Desarrollado por{' '}
          <Link
            href="https://rivascode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            rivascode.dev
          </Link>
        </p>
      </div>
    </footer>
  );
}
