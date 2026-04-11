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
  {
    icon: <BadgeCheck />,
    title: 'Normativa SEC',
    desc: 'Certificación técnica SEC vigente.',
  },
  {
    icon: <ShieldAlert />,
    title: 'Decreto Supremo Minsal',
    desc: 'Cumplimiento DS.594 de condiciones sanitarias.',
  },
  {
    icon: <Landmark />,
    title: 'Ordenanzas Municipales',
    desc: 'Validación ante inspecciones de la Dirección de Obras.',
  },
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
              <Typography variant='h3' color='primary' sx={{ mb: 3, mt: 2 }}>
                Ley N° 21.442 de Copropiedad
              </Typography>
              <Typography
                variant='h6'
                color='text.secondary'
                //sx={{ mb: 4, lineHeight: 1.8 }}
              >
                No realizar mantenciones obligatorias puede generar multas,
                sanciones legales y responsabilidades directas ante accidentes.
                Ignorar la normativa no es una opción. Es un riesgo legal.
              </Typography>

              <Typography
                variant='h6'
                color='text.secondary'
                sx={{ mt: 2, fontStyle: 'italic' }}
              >
                Prevenir no es opcional. Es una obligación legal. “En caso de
                accidente, la responsabilidad recae en la administración.”
              </Typography>

              <Stack spacing={3} sx={{ mt: 2 }}>
                {DATA_REGULATIONS.map((item, index) => (
                  <Stack
                    key={index}
                    direction='row'
                    spacing={2}
                    sx={{ alignItems: 'flex-start' }}
                  >
                    <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant='subtitle1'
                        color='primary.main'
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

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
                Leer Más
              </Button>
            </Box>
          </Grid>

          {/* <Grid size={{ xs: 12, lg: 6 }}>
            <Typography
              variant='body2'
              color='secondary.main'
              sx={{
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Marco Regulatorio
            </Typography>
            <Typography
              variant='h3'
              color='primary.main'
              sx={{ fontWeight: 800, mb: 4 }}
            >
              Respaldo Legal para su Edificio
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              sx={{ fontWeight: 400, lineHeight: 1.6 }}
            >
              No arriesgue la clausura de sus instalaciones. Mantenga su
              edificio operativo, seguro y dentro del marco legal, protegiendo a
              los copropietarios y la plusvalía del inmueble.
            </Typography>

            <Box sx={{ mt: 6, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {[
                'Resolución Sanitaria',
                'Firma Ingeniero SEC',
                'Patente Comercial',
              ].map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 8,
                    bgcolor: 'rgba(0, 62, 84, 0.05)',
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    border: '1px solid rgba(0, 62, 84, 0.1)',
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
