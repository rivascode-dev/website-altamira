'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  delay = 0,
  className,
  style,
  ...props
}: SectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    freezeOnceVisible: true,
    rootMargin: '-100px',
  });

  const transitionStyle = delay ? { transitionDelay: `${delay}s` } : {};

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'py-16 md:py-24 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ ...transitionStyle, ...style }}
      {...props}
    >
      {children}
    </section>
  );
}
