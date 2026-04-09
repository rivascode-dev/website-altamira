'use client';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { TriangleAlert } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

export default function EmergencyBannerSection() {
  return (
    <SectionWrapper id='emergencias' sx={{ py: 8, bgcolor: 'secondary.main' }}>
      <Container maxWidth='lg'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={5}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Stack direction='row' spacing={3} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '4px solid rgba(255,255,255,0.2)',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.5 },
                },
              }}
            >
              <TriangleAlert size={40} color='white' />
            </Box>
            <Box>
              <Typography
                variant='h3'
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 1,
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                }}
              >
                Servicio Emergencia Sanitaria 24/7
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: 'white', fontWeight: 500 }}
              >
                Atendemos situaciones críticas de forma inmediata.
                <br />
                Este servicio requiere pago inmediato para su ejecución. Ver
                condiciones del servicio.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ width: { xs: '100%', md: 'auto' } }}
          >
            <Button
              component='a'
              href='https://wa.me/56982811148'
              variant='contained'
              sx={{
                flex: { xs: 1, md: 'none' },
                bgcolor: 'white',
                color: 'secondary.main',
                fontWeight: 800,
                py: 2,
                px: 4,
                '&:hover': { bgcolor: 'secondary.dark', color: 'white' },
              }}
            >
              WhatsApp Urgencias
            </Button>
            {/* <Button
              component='a'
              href='tel:+56997902704'
              variant='outlined'
              sx={{
                flex: { xs: 1, md: 'none' },
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                fontWeight: 800,
                py: 2,
                px: 4,
                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                  borderWidth: 2,
                },
              }}
            >
              Llamar Central
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
