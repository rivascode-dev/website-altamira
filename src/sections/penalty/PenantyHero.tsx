'use client';
import { Box, Container, Typography, Stack, Breadcrumbs } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PenaltyHero() {
  return (
    <SectionWrapper
      id='evita-multas-hero'
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
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <Image
          src='/assets/images/altamira-ductos-hero-evita-multas.jpg'
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
              Evita Multas
            </Typography>
          </Breadcrumbs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant='h1'
              sx={{
                color: 'white',
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Evita Multas
            </Typography>
            <Typography
              variant='h4'
              sx={{
                color: 'secondary.light',
                mt: 2,
                maxWidth: 700,
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Cumplimiento legal y responsabilidades de la administración según
              la Ley de Copropiedad Inmobiliaria.
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
