'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { BadgeCheck, ShieldAlert, Landmark, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

const DATA_REGULATIONS = [
  'Multas y sanciones legales',
  'Responsabilidad civil ante daños a terceros',
  'Riesgos sanitarios para la comunidad',
];

export default function RegulationsSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='regulations'
      sx={{
        bgcolor:
          theme.palette.mode === 'dark' ? 'background.default' : '#f8fafb',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, lg: 12 }}>
            <Box
              sx={{
                bgcolor: 'white',
                p: { xs: 4, sm: 6 },
                borderRadius: 4,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                mt: { xs: 4, sm: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -16, sm: -24 },
                  left: { xs: 16, sm: 48 },
                  right: { xs: 16, sm: 'auto' },
                  bgcolor: 'secondary.main',
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  //fontWeight: 800,
                  fontSize: { xs: '0.7rem', sm: '1rem' },
                  textAlign: 'center',
                  boxShadow: '0 10px 15px -3px rgba(211, 47, 47, 0.3)',
                }}
              >
                CUMPLIMIENTO DE NORMATIVAS Y RESPONSABILIDAD
              </Box>
              <Typography variant='h3' color='primary' sx={{ mt: 2 }}>
                Ley N° 21.442 de Copropiedad
              </Typography>
              <Typography variant='h6' color='text.secondary' sx={{ mt: 3 }}>
                La Ley N° 21.442 sobre Copropiedad Inmobiliaria (Chile, 2022)
                establece que las comunidades y administraciones tienen la
                obligación de mantener en correcto estado las instalaciones y
                bienes comunes del edificio, resguardando la seguridad,
                salubridad y funcionamiento de la infraestructura.
              </Typography>

              <Typography variant='h6' color='text.secondary' sx={{ mt: 2 }}>
                En este contexto, los sistemas de ductos sanitarios y ductos de
                basura forman parte de estas instalaciones críticas, cuya
                mantención periódica es fundamental para prevenir riesgos
                sanitarios, estructurales y legales.
              </Typography>

              <Typography variant='h6' color='text.secondary' sx={{ mt: 2 }}>
                No realizar mantenciones obligatorias puede generar:
              </Typography>

              <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
                {DATA_REGULATIONS.map((item, index) => (
                  <Stack
                    key={index}
                    direction='row'
                    spacing={2}
                    sx={{ alignItems: 'flex-start' }}
                  >
                    <Box>
                      <BadgeCheck />
                    </Box>
                    <Box>
                      <Typography
                        variant='subtitle1'
                        color='primary.main'
                        sx={{ fontWeight: 700 }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Typography
                variant='subtitle1'
                color='text.secondary'
                sx={{ mt: 2, fontWeight: 700 }}
              >
                Ignorar la normativa no es una opción. Es un riesgo operativo y
                legal.
              </Typography>

              <Typography
                variant='subtitle1'
                color='text.secondary'
                sx={{ mt: 2, fontWeight: 700 }}
              >
                Un ducto no mantenido puede transformarse en un foco sanitario
                crítico, generando colapsos, filtraciones y daños que afectan
                directamente a residentes y a la administración.
              </Typography>

              <Typography
                variant='h6'
                color='text.secondary'
                sx={{ mt: 2, fontStyle: 'italic' }}
              >
                Prevenir no es opcional. Es una obligación legal. “En caso de
                accidente, la responsabilidad recae en la administración.”
              </Typography>

              <Button
                component={Link}
                href='/docs/normativa'
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
                Leer más sobre obligaciones y consecuencias legales
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
