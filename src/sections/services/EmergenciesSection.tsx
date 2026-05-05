'use client';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  alpha,
  useTheme,
  Paper,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import {
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
} from 'lucide-react';
import Link from 'next/link';

export default function EmergenciesSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='emergencies'
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 6,
            overflow: 'hidden',
            bgcolor: 'primary.main',
            color: 'white',
            mb: 10,
          }}
        >
          <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
            <Image
              src='/assets/images/altamira-ductos-alerta-tecnica-fondo.jpg'
              alt='Emergencias'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>

          <Grid container sx={{ position: 'relative', zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, sm: 6, md: 8 } }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* <AlertCircle color={theme.palette.secondary.light} size={32} /> */}
                  <Typography variant='h3' sx={{ fontWeight: 800 }}>
                    Emergencias
                  </Typography>
                </Box>
                <Typography
                  variant='h5'
                  sx={{ color: 'secondary.light', fontWeight: 600 }}
                >
                  Gestión de crisis y la importancia de la prevención para
                  evitar colapsos operativos en la comunidad.
                </Typography>
                <Typography variant='h6' sx={{ opacity: 0.9, fontWeight: 400 }}>
                  Evita daños, costos y conflictos en tu comunidad
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ opacity: 0.8, lineHeight: 1.8 }}
                >
                  Nuestro objetivo principal es ser una empresa de reacción
                  rápida y acción preventiva, evitando que las obstrucciones en
                  la red sanitaria deriven en emergencias críticas, situaciones
                  de estrés para los residentes y, en los casos más graves, el
                  colapso operativo del edificio.
                </Typography>
              </Stack>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                p: 8,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 300,
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src='/assets/images/gallery/altamira-ductos-sala-basura-2.jpeg'
                  alt='Inspección de emergencia'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant='h4'
                  color='primary'
                  sx={{ fontWeight: 800, mb: 3 }}
                >
                  El Impacto de una Emergencia Sanitaria
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ lineHeight: 1.8, mb: 3 }}
                >
                  Una emergencia en una comunidad puede compararse con un evento
                  de alto impacto: ocurre de forma inesperada, afecta a
                  múltiples residentes de manera simultánea y genera costos
                  económicos, operativos y reputacionales significativos para la
                  administración.
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ lineHeight: 1.8 }}
                >
                  La experiencia nos demuestra que este tipo de situaciones no
                  se originan de un día para otro, sino que son consecuencia
                  directa del descuido prolongado de la red sanitaria y la falta
                  de mantención preventiva oportuna.
                </Typography>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: alpha(theme.palette.secondary.main, 0.05),
                  borderLeft: '6px solid',
                  borderColor: 'secondary.main',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant='h6'
                  color='secondary'
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Consecuencias Críticas:
                </Typography>
                <Stack spacing={2}>
                  {[
                    'Cortes prolongados de agua potable.',
                    'Interrupción del suministro eléctrico por filtraciones.',
                    'Daños en la plusvalía de la propiedad.',
                  ].map((text, i) => (
                    <Box
                      key={i}
                      sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                    >
                      <TrendingDown
                        size={20}
                        color={theme.palette.secondary.main}
                      />
                      <Typography variant='body1' sx={{ fontWeight: 500 }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant='h4'
                  color='primary'
                  sx={{ fontWeight: 800, mb: 3 }}
                >
                  Gestión Responsable y Planificada
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ lineHeight: 1.8, mb: 3 }}
                >
                  Una gestión profesional de la infraestructura no solo protege
                  al edificio y a sus residentes, sino que también respalda la
                  labor de la administración ante el Comité de Copropietarios.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {[
                  {
                    title: 'Minimización de riesgos',
                    desc: 'Reduce la probabilidad de colapsos inesperados.',
                    icon: <ShieldCheck />,
                  },
                  {
                    title: 'Reducción de responsabilidades',
                    desc: 'Asegura que la administración cumpla con su deber de cuidado.',
                    icon: <ShieldCheck />,
                  },
                  {
                    title: 'Evita conflictos futuros',
                    desc: 'Mantiene la armonía en la comunidad al evitar servicios higiénicos inoperantes.',
                    icon: <ShieldCheck />,
                  },
                ].map((item, i) => (
                  <Grid size={{ xs: 12 }} key={i}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 3,
                        display: 'flex',
                        gap: 3,
                        alignItems: 'center',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'white',
                        },
                      }}
                    >
                      <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                      <Box>
                        <Typography
                          variant='subtitle1'
                          sx={{ fontWeight: 700 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Typography
                variant='body1'
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  bgcolor: 'rgba(0,51,69,0.05)',
                  p: 3,
                  borderRadius: 2,
                  border: '1px dashed',
                  borderColor: 'primary.main',
                }}
              >
                Mantener la red al día es la mejor herramienta para proteger la
                infraestructura y cumplir con los requisitos exigidos por las
                compañías de seguros ante eventuales daños colaterales.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            textAlign: 'center',
            p: 6,
            borderRadius: 4,
            bgcolor: 'secondary.main',
            color: 'white',
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 800, mb: 2 }}>
            Contamos con una unidad de respuesta rápida
          </Typography>
          <Typography
            variant='h6'
            sx={{ opacity: 0.9, fontWeight: 400, maxWidth: 800, mx: 'auto' }}
          >
            Nuestro mejor servicio es evitar que llegue a necesitarnos de
            urgencia. Consulte por nuestros planes de mantención anual.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href='/condiciones'
            variant='outlined'
            endIcon={<ArrowRight />}
            sx={{
              mt: 6,
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
            Leer Condiciones Servicio
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
