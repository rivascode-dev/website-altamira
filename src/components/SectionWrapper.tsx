'use client';

import { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import { m, LazyMotion, domAnimation } from 'framer-motion';

interface SectionProps extends Omit<BoxProps, 'transition' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  children: ReactNode;
  id?: string;
  delay?: number;
}

const MotionBox = m.create(Box);

export default function SectionWrapper({
  children,
  id,
  delay = 0,
  sx,
  ...props
}: SectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionBox
        id={id}
        component='section'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        sx={{
          py: { xs: 8, md: 12 },
          ...sx,
        }}
        {...props}
      >
        {children}
      </MotionBox>
    </LazyMotion>
  );
}
