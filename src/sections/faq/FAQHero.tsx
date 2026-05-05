'use client';
import { Box, Container, Typography, Stack, Breadcrumbs } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, HelpCircle } from 'lucide-react';

export default function FAQHero() {
  return (
    <SectionWrapper
      id='faq-hero'
      sx={{
        p: 0,
        position: 'relative',
        height: { xs: '60vh', md: 500 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
        <Image
          src='/assets/images/altamira-ductos-hero-porque-limpiar.jpg'
          alt='Fondo Nosotros Altamira'
          fill
          priority
          sizes='100vw'
          style={{
            objectFit: 'cover',
            objectPosition: 'center 25%',
          }}
        />
      </Box>

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<ChevronRight size={16} color='white' />}
            sx={{ color: 'white', opacity: 0.8, mb: 2 }}
          >
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              Inicio
            </Link>
            <Typography color='secondary.light' sx={{ fontWeight: 600 }}>
              Preguntas Frecuentes
            </Typography>
          </Breadcrumbs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction='row'
              spacing={2}
              sx={{ alignItems: 'center', mb: 1 }}
            >
              {/* <HelpCircle size={40} color="#D32F2F" /> */}
              <Typography
                variant='h1'
                sx={{
                  color: 'white',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                Preguntas Frecuentes
              </Typography>
            </Stack>
            <Typography
              variant='h4'
              sx={{
                color: 'secondary.light',
                mt: 2,
                maxWidth: 800,
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Resolvemos tus dudas sobre mantenimiento, normativas y nuestros
              servicios especializados.
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
