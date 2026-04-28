'use client';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

export default function HeroSection() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <SectionWrapper
      id='hero'
      sx={{
        p: 0,
        position: 'relative',
        height: { xs: '80vh', md: 921 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <Image
          src='/assets/images/altamira-ductos-hero.jpg'
          alt='Technical engineer inspecting ventilation systems'
          fill
          priority={true}
          sizes='100vw'
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ maxWidth: 850 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 2,
              py: 0.5,
              bgcolor: 'secondary.main',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
              borderRadius: 4,
              mb: 3,
            }}
          >
            <Box
              component={motion.div}
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'white',
                borderRadius: '50%',
                mr: 1.2,
                boxShadow: '0 0 8px rgba(255,255,255,0.8)',
              }}
            />
            <Typography
              variant='caption'
              sx={{
                letterSpacing: isMobile ? 1 : 3,
                textTransform: 'uppercase',
              }}
            >
              Empresa dedicada exclusivamente a edificios y condominios
            </Typography>
          </Box>
          <Typography
            variant='h1'
            sx={{
              color: 'white',
              //mb: 1,
            }}
          >
            Limpieza de ductos
          </Typography>
          <Typography
            variant='h3'
            component='h2'
            sx={{
              color: 'white',
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            <Box component='span' sx={{ color: 'secondary.light' }}>
              Prevención hoy,
            </Box>{' '}
            tranquilidad mañana.
          </Typography>
          <Typography
            variant='h5'
            component='h3'
            sx={{
              color: 'white',
              maxWidth: 650,
              fontStyle: 'italic',
            }}
          >
            Un ducto limpio no se ve… pero se nota cuando falla
          </Typography>
          <Typography
            variant='h6'
            component='p'
            sx={{
              color: 'secondary.light',
              mt: 4,
              maxWidth: 650,
            }}
          >
            ✔ Empresa con resolución sanitaria
            <br />✔ Especializada exclusivamente en edificios y condominios
            <br />✔ Entrega de informe técnico por servicio
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              href='#services'
              variant='outlined'
              size='large'
              aria-label='Ir a la sección de servicios'
              sx={{
                mt: 4,
                borderColor: 'white',
                color: 'white',
                '&:hover': { backgroundColor: 'white', color: 'primary.main' },
                '&:active': { transform: 'scale(0.95)' },
              }}
            >
              Ver Servicios
            </Button>

            <Button
              href='#contact'
              variant='contained'
              color='secondary'
              size='large'
              endIcon={<ArrowRight />}
              aria-label='Ir al formulario de evaluación técnica'
              sx={{
                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                },
                '&:active': { transform: 'scale(0.95)' },
              }}
            >
              Solicitar evaluación técnica
            </Button>
          </Stack>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
