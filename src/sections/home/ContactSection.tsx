'use client';

import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, EmailFormValues } from '@/schemas/emailSchema';
import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const DATA_CONTACT = [
  {
    icon: <Phone />,
    title: 'Teléfono',
    detail: '+56 9 9573 9887',
    link: 'tel:+56995739887',
  },
  {
    icon: <MessageCircle />,
    title: 'WhatsApp Urgencias',
    detail: '+56 9 8281 1148',
    link: 'https://wa.me/56982811148',
  },
  {
    icon: <Mail />,
    title: 'Correo Electrónico',
    detail: 'altamiraductos@gmail.com',
    link: 'mailto:altamiraductos@gmail.com',
  },
  {
    icon: <Mail />,
    title: 'Correo Electrónico',
    detail: 'antonio.limpiezadeductos@gmail.com',
    link: 'mailto:antonio.limpiezadeductos@gmail.com',
  },
  {
    icon: <MapPin />,
    title: 'Ubicación',
    detail: 'Región Metropolitana, Chile',
    link: '#',
  },
];

export default function ContactSection() {
  const [alertInfo, setAlertInfo] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comuna: '',
      message: '',
      fax: '',
    },
  });

  const onSubmit = async (data: EmailFormValues) => {
    setAlertInfo(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await sendEmail(null, formData);

      if (result.success) {
        setAlertInfo({ type: 'success', message: result.message });
        reset();
      } else {
        setAlertInfo({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error(error);
      setAlertInfo({
        type: 'error',
        message: 'Ocurrió un error inesperado al enviar el mensaje.',
      });
    }
  };

  const inputClasses = "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <SectionWrapper
      id="contact"
      className="bg-gray-50 dark:bg-card"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-5">
            <span className="block text-secondary font-bold tracking-widest text-sm uppercase mb-4">
              CONTACTO
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Solicita tu evaluación técnica
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Diagnóstico claro + solución concreta
            </p>

            <div className="space-y-6">
              {DATA_CONTACT.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.link !== '#' ? (
                      <a
                        href={item.link}
                        className="text-base sm:text-lg font-medium text-primary hover:text-secondary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg font-medium text-primary">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white dark:bg-background p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-black/5 dark:border-white/5">
              
              {alertInfo && (
                <div className={cn("p-4 mb-6 rounded-md text-sm font-medium", alertInfo.type === 'success' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
                  {alertInfo.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nombre</label>
                    <input
                      {...register('name')}
                      disabled={isSubmitting}
                      className={inputClasses}
                    />
                    {errors.name && <p className="text-[0.8rem] font-medium text-destructive text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Teléfono</label>
                    <input
                      {...register('phone')}
                      disabled={isSubmitting}
                      className={inputClasses}
                    />
                    {errors.phone && <p className="text-[0.8rem] font-medium text-destructive text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Correo Electrónico</label>
                  <input
                    type="email"
                    {...register('email')}
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                  {errors.email && <p className="text-[0.8rem] font-medium text-destructive text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Comuna</label>
                  <input
                    {...register('comuna')}
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                  {errors.comuna && <p className="text-[0.8rem] font-medium text-destructive text-red-500">{errors.comuna.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mensaje o requerimiento técnico</label>
                  <textarea
                    {...register('message')}
                    disabled={isSubmitting}
                    className={cn(inputClasses, "min-h-[120px] resize-y py-3")}
                  />
                  {errors.message && <p className="text-[0.8rem] font-medium text-destructive text-red-500">{errors.message.message}</p>}
                </div>

                <input
                  {...register('fax')}
                  autoComplete="off"
                  className="hidden absolute -left-[5000px]"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outline"
                  size="lg"
                  className="w-full border-secondary text-secondary bg-secondary hover:bg-white hover:text-secondary group transition-all duration-300"
                >
                  <span className="text-white group-hover:text-secondary font-bold mr-2">
                    {isSubmitting ? 'Enviando...' : 'Solicitar evaluación técnica'}
                  </span>
                  {isSubmitting ? <Loader2 className="animate-spin text-white group-hover:text-secondary w-5 h-5" /> : <Send className="text-white group-hover:text-secondary w-5 h-5" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
