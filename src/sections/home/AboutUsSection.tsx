'use client';
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';
import { ArrowRight, CircleCheck } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
  return (
    <SectionWrapper
      id='about-us'
      sx={{ py: 12, bgcolor: 'background.default' }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  width: 96,
                  height: 96,
                  bgcolor: 'secondary.main',
                  opacity: 0.1,
                  borderRadius: '50%',
                  filter: 'blur(24px)',
                }}
              />
              <Image
                src='/assets/images/altamira-limpieza-ductos-nosotros.png'
                alt='Equipo técnico Altamira Ductos'
                width={854}
                height={285}
                style={{ width: '100%', height: 'auto' }}
                priority
              />

              <Box
                sx={{
                  display: { xs: 'none', lg: 'block' },
                  position: 'absolute',
                  bottom: -24,
                  right: -24,
                  bgcolor: 'primary.main',
                  p: 4,
                  borderRadius: 3,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  zIndex: 20,
                }}
              >
                <Typography variant='h3' color='secondary'>
                  +4
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: -0.5,
                    color: 'white',
                  }}
                >
                  años de especialización
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* <Image
              src='/assets/logos/logo-altamira-limpieza-ductos-vertical.png'
              alt='Equipo técnico Altamira Ductos'
              width={854}
              height={285}
              style={{ width: '30%', height: 'auto' }}
              priority
            /> */}

            <Stack>
              <Typography variant='overline' color='secondary'>
                QUIENES SOMOS
              </Typography>

              <Typography
                variant='h4'
                color='primary.main'
                sx={{ mt: 2, fontWeight: 600 }}
              >
                En Altamira nos especializamos en la limpieza, mantención y
                sanitización de sistemas de ductos en edificios y comunidades.
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ mb: 4, lineHeight: 1.8 }}
              >
                Trabajamos con equipos especializados para intervenir ductos
                verticales, horizontales, cámaras de alcantarillado y ductos de
                basura con sus salas, asegurando resultados eficientes, seguros
                y duraderos.{'  '}
                {/* <Box
                  component={Link}
                  href='/docs/nosotros'
                  sx={{
                    color: 'secondary.main',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    textDecoration: 'none',
                  }}
                >
                  Leer más...
                </Box> */}
              </Typography>

              <Grid container spacing={3}>
                {[
                  'Equipo Certificado',
                  'Tecnología de Punta',
                  'Resolución Sanitaria',
                  'Cobertura Nacional',
                ].map((text) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={text}>
                    <Stack
                      direction='row'
                      spacing={1.5}
                      sx={{ alignItems: 'flex-start' }}
                    >
                      <CircleCheck color='white' fill='#D32F2F' size={30} />
                      <Typography
                        variant='body1'
                        color='primary.main'
                        sx={{ fontWeight: 700 }}
                      >
                        {text}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
                <Button
                  component={Link}
                  href='/docs/nosotros'
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
                  Leer Más
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
