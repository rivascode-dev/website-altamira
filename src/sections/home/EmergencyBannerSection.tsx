'use client';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {
  ArrowRight,
  MessageCircle,
  MessageCircleCheck,
  TriangleAlert,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

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
                sx={{ color: 'white', fontWeight: 500, maxWidth: 650 }}
              >
                Atendemos situaciones críticas de forma inmediata. Este servicio
                requiere pago inmediato para su ejecución.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction='column'
            spacing={2}
            sx={{ width: { xs: '100%', md: 'auto' } }}
          >
            <Button
              component='a'
              href='https://wa.me/56982811148'
              variant='outlined'
              endIcon={<MessageCircle />}
              sx={{
                bgcolor: '#25D366',
                color: 'white',
                border: '1px solid #25D366',

                '&:hover': {
                  bgcolor: '#128C7E',
                },
                '&:active': { transform: 'scale(0.95)' },
              }}
            >
              WhatsApp Urgencias
            </Button>
            <Button
              component={Link}
              href='/docs/condiciones'
              variant='outlined'
              endIcon={<ArrowRight />}
              sx={{
                color: 'white',
                borderColor: 'white',

                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                },
                '&:active': { transform: 'scale(0.95)' },
              }}
            >
              Leer Condiciones Servicio
            </Button>
          </Stack>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
