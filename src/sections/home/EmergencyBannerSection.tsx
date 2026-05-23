

import {
  ArrowRight,
  MessageCircle,
  TriangleAlert,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function EmergencyBannerSection() {
  return (
    <SectionWrapper id="emergencias" className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex w-20 h-20 items-center justify-center rounded-full border-4 border-white/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
              <TriangleAlert size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Servicio Emergencia Sanitaria 24/7
              </h2>
              <p className="text-white font-medium max-w-2xl text-lg">
                Atendemos situaciones críticas de forma inmediata. Este servicio
                requiere pago inmediato para su ejecución.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-auto space-y-4">
            <a
              href="https://wa.me/56982811148"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 px-6 rounded-xl transition-all duration-300 active:scale-95 shadow-sm"
            >
              WhatsApp Urgencias
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-secondary font-bold"
            >
              <Link href="/condiciones">
                Leer Condiciones Servicio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
