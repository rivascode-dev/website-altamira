'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

export default function PhraseCTASection() {
  return (
    <SectionWrapper
      id='cta-final'
      sx={{
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
        <Box
          component='img'
          src='/assets/images/altamira-ductos-solicitar-evaluacion-tecnica.jpg'
          alt='Technical background'
          sx={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Container
        maxWidth='md'
        sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        <Typography
          variant='h3'
          component='h2'
          color='primary'
          sx={{ fontWeight: 700 }}
        >
          Un ducto limpio no se ve…
        </Typography>
        <Typography variant='h3' color='secondary' sx={{ fontWeight: 700 }}>
          pero se nota cuando falla
        </Typography>
        <Typography
          variant='overline'
          sx={{ mt: 2, display: 'block', color: 'primary.main' }}
        >
          En Altamira ductos - su confianza es nuestra prioridad
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          {/* <Button
            href='#contact'
            variant='contained'
            color='secondary'
            size='large'
            endIcon={<ArrowRight />}
            sx={{ mt: 4 }}
          >
            Solicitar Evaluación
          </Button> */}

          <Button
            href='#contact'
            variant='outlined'
            size='large'
            color='secondary'
            endIcon={<ArrowRight />}
            sx={{
              mt: 4,
              borderColor: 'secondary.main',
              bgcolor: 'secondary.main',
              color: 'white',
              border: '1px solid',

              '&:active': { transform: 'scale(0.95)' },
              '&:hover': {
                bgcolor: 'white',
                color: 'secondary.main',
                border: '1px solid',
              },
            }}
          >
            Solicitar Evaluación
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
