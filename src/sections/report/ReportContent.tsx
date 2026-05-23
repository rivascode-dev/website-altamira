import SectionWrapper from '@/components/SectionWrapper';
import { FileText, Camera, ClipboardCheck, ShieldCheck, Search, Database } from 'lucide-react';

const reportSections = [
  {
    title: '¿Qué incluye nuestro informe?',
    icon: <FileText size={32} />,
    items: [
      'Descripción técnica de los trabajos realizados.',
      'Identificación de los sistemas intervenidos.',
      'Metodología empleada (productos, equipos, tiempos).',
      'Observaciones técnicas y recomendaciones preventivas.'
    ]
  },
  {
    title: 'Registro Fotográfico (Evidencia)',
    icon: <Camera size={32} />,
    items: [
      'Fotos detalladas del estado "Antes" de la intervención.',
      'Fotos detalladas del estado "Después" de la limpieza/mantenimiento.',
      'Evidencia de hallazgos específicos o puntos críticos detectados.'
    ]
  }
];

export default function ReportContent() {
  return (
    <SectionWrapper id="report-content" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                Compromiso de Transparencia
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Altamira, entendemos que nuestro trabajo no termina cuando se apaga el último motor o se guarda la última manguera. La garantía de un servicio bien ejecutado reside en la documentación técnica que respalda cada acción.
              </p>
              
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Después de cada servicio, nuestro equipo genera un <strong className="text-primary font-bold">Informe Técnico Detallado</strong>, un documento fundamental que sirve como bitácora de mantenimiento y respaldo ante auditorías sanitarias o requerimientos de compañías de seguros.
              </p>

              <div className="space-y-10 mt-10">
                {reportSections.map((section, index) => (
                  <div key={index} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                        {section.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-primary">
                        {section.title}
                      </h4>
                    </div>
                    
                    <ul className="space-y-4 pl-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-lg text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-8">
            <div>
              <div className="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 opacity-10 rotate-12 pointer-events-none">
                  <ClipboardCheck size={250} />
                </div>
                
                <h5 className="text-2xl font-bold mb-8 relative z-10">
                  Valor del Informe
                </h5>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-white font-bold">Cumplimiento Normativo:</strong> Herramienta indispensable para auditorías de salud y certificaciones de calidad.
                    </p>
                  </div>
                  
                  <hr className="border-white/20" />
                  
                  <div className="flex items-start gap-4">
                    <Search className="w-8 h-8 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-white font-bold">Trazabilidad:</strong> Historial claro de intervenciones para planificar mantenimientos futuros y detectar patrones.
                    </p>
                  </div>
                  
                  <hr className="border-white/20" />
                  
                  <div className="flex items-start gap-4">
                    <Database className="w-8 h-8 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-white font-bold">Activo Documental:</strong> Respaldo digital y físico de la inversión realizada en el mantenimiento de su infraestructura.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-dashed border-border rounded-2xl bg-gray-50 text-center">
              <p className="text-muted-foreground font-medium">
                El informe se entrega en formato digital (PDF) dentro de las 48-72 horas hábiles posteriores a la ejecución del servicio.
              </p>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
