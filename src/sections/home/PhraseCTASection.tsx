'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

export default function PhraseCTASection() {
  return (
    <SectionWrapper
      id='cta-final'
      sx={{
        py: 12,
        bgcolor: 'primary',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <Box
          component='img'
          src='https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop'
          alt='Building background'
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Container
        maxWidth='md'
        sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        <Typography variant='h3' color='primary'>
          Un ducto limpio no se ve…
        </Typography>
        <Typography variant='h3' color='secondary'>
          pero se nota cuando falla
        </Typography>
        <Typography
          variant='overline'
          color='rgba(255,255,255,0.9)'
          sx={{ mt: 2 }}
        >
          En Altamira ductos - su confianza es nuestra prioridad
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            endIcon={<ArrowRight />}
            sx={{ mt: 4 }}
          >
            Solicitar Evaluación
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
