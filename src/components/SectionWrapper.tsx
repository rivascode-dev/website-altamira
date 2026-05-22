'use client';

import { ReactNode } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

import { HTMLMotionProps } from 'framer-motion';

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  children: ReactNode;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  delay = 0,
  className,
  ...props
}: SectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={cn('py-16 md:py-24', className)}
        {...props}
      >
        {children}
      </m.section>
    </LazyMotion>
  );
}
