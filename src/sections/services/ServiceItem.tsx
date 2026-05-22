'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceItemProps {
  id: string;
  title: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
  quote?: string;
}

export default function ServiceItem({
  id,
  title,
  content,
  image,
  imageAlt,
  reverse = false,
  className,
  quote,
}: ServiceItemProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn("py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center",
            reverse && "md:flex-row-reverse"
          )}
        >
          <div className={cn(reverse && "md:order-2")}>
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                  {title}
                </h2>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  {content}
                </div>

                {quote && (
                  <div className="mt-8 bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                    <p className="text-xl text-primary font-semibold italic">
                      {quote}
                    </p>
                  </div>
                )}
              </m.div>
            </LazyMotion>
          </div>

          <div className={cn(reverse && "md:order-1")}>
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
