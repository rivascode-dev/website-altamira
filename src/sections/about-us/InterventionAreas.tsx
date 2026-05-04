'use client';
import { Box, Container, Grid, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Pipette,
  Droplets,
  Trash2,
  Home,
  Waves,
  Construction,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const AREAS = [
  {
    category: '1. Sistemas de Ductos Sanitarios',
    icon: <Construction size={24} />,
    items: [
      {
        title: 'Ductos Verticales',
        desc: 'Limpieza, mantención y sanitización para prevenir obstrucciones y emergencias sanitarias.',
        icon: <Pipette />,
      },
      {
        title: 'Ductos Horizontales',
        desc: 'Eliminación de acumulaciones que afectan el flujo y generan filtraciones en redes horizontales.',
        icon: <Droplets />,
      },
    ],
  },
  {
    category: '2. Higiene y Control de Plagas',
    icon: <Trash2 size={24} />,
    items: [
      {
        title: 'Ductos de Basura',
        desc: 'Lavado a presión y desinfección profunda para el control de olores y patógenos.',
        icon: <Trash2 />,
      },
      {
        title: 'Salas de Basura',
        desc: 'Sanitización total de los centros de acopio para garantizar la higiene comunitaria.',
        icon: <Home />,
      },
    ],
  },
  {
    category: '3. Redes Húmedas',
    icon: <Waves size={24} />,
    items: [
      {
        title: 'Alcantarillado',
        desc: 'Desobstrucción técnica y mantenimiento preventivo de redes de aguas servidas.',
        icon: <Waves />,
      },
      {
        title: 'Aguas Lluvias',
        desc: 'Preparación estacional para evitar inundaciones y colapsos en temporales invernales.',
        icon: <Droplets />,
      },
    ],
  },
];

export default function InterventionAreas() {
  return (
    <SectionWrapper
      id='intervention-areas'
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'white' }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ mb: 8 }}>
          <Typography variant='h3' sx={{ fontWeight: 800, mb: 2 }}>
            Intervención completa en sistemas de ductos sanitarios
          </Typography>
          <Typography
            variant='h6'
            sx={{ opacity: 0.8, maxWidth: 800, fontWeight: 400 }}
          >
            Intervenimos de forma completa los sistemas críticos del edificio:
            ductos verticales, horizontales, alcantarillado, aguas lluvias y
            ductos de basura, asegurando su correcto funcionamiento, higiene y
            continuidad operativa de acuerdo a las normas vigentes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {AREAS.map((area, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      pb: 2,
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Box sx={{ color: 'secondary.light' }}>{area.icon}</Box>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 700, color: 'secondary.light' }}
                    >
                      {area.category}
                    </Typography>
                  </Box>

                  {area.items.map((item, i) => (
                    <Paper
                      key={i}
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 3,
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.1)',
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <Stack spacing={1.5}>
                        <Typography
                          variant='subtitle1'
                          sx={{
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'white',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          sx={{ opacity: 0.7, lineHeight: 1.6, color: 'white' }}
                        >
                          {item.desc}
                        </Typography>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
