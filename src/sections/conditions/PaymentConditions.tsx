import SectionWrapper from '@/components/SectionWrapper';
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Clock,
} from 'lucide-react';

export default function PaymentConditions() {
  const fundamentalPoints = [
    'Asegurar la disponibilidad inmediata del equipo técnico.',
    'Garantizar una respuesta oportuna ante la contingencia.',
    'Cubrir los insumos y logística de despliegue rápido.',
  ];

  return (
    <SectionWrapper id="payment-conditions" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-16">
          
          {/* Introducción y Disponibilidad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                  Condiciones del Servicio de Emergencia
                </h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nuestro servicio de emergencia sanitaria está diseñado para
                responder de forma rápida y efectiva ante situaciones
                críticas que afectan la habitabilidad y salubridad de un
                inmueble.
              </p>
            </div>

            <div>
              <div className="bg-gray-50 dark:bg-card p-8 rounded-3xl border border-border">
                <div className="space-y-4">
                  <div className="flex gap-3 items-center mb-6">
                    <Clock className="text-secondary w-6 h-6" />
                    <h3 className="text-2xl font-bold text-primary">
                      Disponibilidad y Respuesta
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Para garantizar una atención inmediata, contamos con
                    personal disponible que se activa en el momento, incluso
                    en horarios nocturnos, fines de semana y festivos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                    Entendemos que un colapso sanitario no puede esperar, por
                    lo que nuestra estructura operativa está optimizada para
                    la contingencia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Condiciones de Pago */}
          <div>
            <div className="bg-primary text-white p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                
                <div className="md:col-span-7 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold">
                    Condiciones de Pago
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed font-light">
                    Debido a la naturaleza urgente del servicio y a los
                    costos operativos asociados a su ejecución inmediata,
                    todo servicio de emergencia debe ser cancelado antes de
                    su realización.
                  </p>

                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-secondary mb-6">
                      Esta condición es fundamental para:
                    </h4>
                    <div className="space-y-4">
                      {fundamentalPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                          <span className="text-lg font-medium">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 text-center flex flex-col items-center">
                    <AlertCircle className="text-secondary w-16 h-16 mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Importante
                    </h4>
                    <p className="text-lg text-white/90 leading-relaxed">
                      La solicitud del servicio de emergencia implica la
                      aceptación de estas condiciones comerciales y
                      operativas.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Nota Final */}
          <div>
            <div className="bg-primary/5 border border-dashed border-primary p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left">
              <Info className="text-primary w-8 h-8 flex-shrink-0" />
              <p className="text-muted-foreground font-medium text-lg">
                Para servicios de mantención programada, por favor consulte
                nuestras condiciones comerciales estándar con su ejecutivo de
                cuentas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
