'use client';
import { Box, Container, Typography, Stack, Breadcrumbs } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { ChevronRight, Camera } from 'lucide-react';
import Image from 'next/image';

export default function GalleryHero() {
  return (
    <SectionWrapper
      id='gallery-hero'
      sx={{
        p: 0,
        position: 'relative',
        height: { xs: '50vh', md: 450 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <Image
          src='/assets/images/altamira-ductos-hero-pages.jpg'
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
              Galería
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
              {/* <Camera size={40} color="#D32F2F" /> */}
              <Typography
                variant='h1'
                sx={{
                  color: 'white',
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                Nuestra Galería
              </Typography>
            </Stack>
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
              Evidencia visual de nuestra excelencia técnica en terreno.
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
