'use client';

import { Box, Button, Container, Typography, Stack, alpha } from '@mui/material';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

export default function NotFound() {
  return (
    <SectionWrapper
      id="not-found"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      {/* Fondo con imagen y overlay */}
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <Image
          src="/assets/images/altamira-ductos-galeria-1.jpg"
          alt="Altamira 404"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, #003E54)',
          }}
        />
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: 10 }}>
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          {/* Círculo con Icono */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              bgcolor: alpha('#fff', 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: alpha('#fff', 0.2),
              mb: 2,
            }}
          >
            <Search size={60} color="#fff" strokeWidth={1.5} />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 800,
                fontSize: { xs: '5rem', md: '8rem' },
                lineHeight: 1,
                mb: 2,
                opacity: 0.9,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.5rem' },
              }}
            >
              Parece que te has perdido
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: alpha('#fff', 0.8),
                maxWidth: 500,
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              La página que buscas no existe o ha sido movida. Te invitamos a volver al inicio para conocer más sobre nuestras soluciones en limpieza y mantención de ductos.
            </Typography>
          </Box>

          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<Home size={20} />}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              '&:hover': {
                bgcolor: alpha('#fff', 0.9),
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Volver al Inicio
          </Button>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
