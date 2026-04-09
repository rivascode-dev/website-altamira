'use client';

import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { BadgeCheck, ShieldCheck, HardHat } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? '#0f172a' : 'white',
        py: 6,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={1}
              sx={{ alignItems: 'center' }}
            >
              <Image
                src='/assets/logos/logo-altamira-limpieza-ductos-vertical.png'
                alt='Altamira Ductos Logo'
                width={100}
                height={100}
                style={{ width: '55%', height: 'auto' }}
                priority
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant='caption'
              color='primary.main'
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontWeight: 700,
                display: 'block',
                mb: 2,
                mt: { xs: 2, md: 0 },
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Contacto
            </Typography>
            <Stack spacing={3}>
              <Typography
                component='a'
                href='tel:+56982811148'
                variant='body2'
                color='primary'
                sx={{
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textAlign: isMobile ? 'center' : 'left',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                +56 9 8281 1148
              </Typography>
              <Typography
                component='a'
                href='tel:+56997902704'
                variant='body2'
                color='primary'
                sx={{
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textAlign: isMobile ? 'center' : 'left',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                +56 9 9790 2704
              </Typography>
              <Typography
                component='a'
                href='mailto:marjorie.limpiezadeductos@gmail.com'
                variant='body2'
                color='primary'
                sx={{
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textAlign: isMobile ? 'center' : 'left',
                  '&:hover': { color: 'secondary.main' },
                  wordBreak: 'break-all',
                }}
              >
                marjorie.limpiezadeductos@gmail.com
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant='caption'
              color='primary.main'
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontWeight: 700,
                display: 'block',
                mb: 2,
                mt: { xs: 2, md: 0 },
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Certificaciones
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              sx={{ mb: 2, justifyContent: isMobile ? 'center' : 'left' }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <BadgeCheck color={theme.palette.primary.main} />
              </Box>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <ShieldCheck color={theme.palette.primary.main} />
              </Box>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <HardHat color={theme.palette.primary.main} />
              </Box>
            </Stack>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                fontStyle: 'italic',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Altamira Ductos. Tu comunidad en manos expertas. Resolución
              Sanitaria: Certificada.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 4 }} />
        <Typography
          variant='caption'
          color='text.secondary'
          sx={{ display: 'block', textAlign: 'center' }}
        >
          © {new Date().getFullYear()} Altamira Ductos. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}
