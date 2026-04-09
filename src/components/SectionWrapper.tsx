'use client';

import { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import { m, LazyMotion, domAnimation } from 'framer-motion';

interface SectionProps extends BoxProps {
  children: ReactNode;
  id?: string;
  delay?: number;
}

const MotionBox = m(Box);

export default function SectionWrapper({ children, id, delay = 0, ...props }: SectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionBox
        id={id}
        component="section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        {...(props as any)}
      >
        {children}
      </MotionBox>
    </LazyMotion>
  );
}
