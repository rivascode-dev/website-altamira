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
import {
  ArrowUpDown,
  MoveHorizontal,
  Droplets,
  CloudRain,
  Trash2,
  TriangleAlert,
  Building,
  BrushCleaning,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

const DATA_SERVICES = [
  {
    icon: <ArrowUpDown size={32} />,
    title: 'Ductos verticales',
    description:
      'Limpieza y mantención de ductos verticales en edificios, evitando obstrucciones y emergencias sanitarias.',
    accent: 'Incluye Sanitización',
  },
  {
    icon: <MoveHorizontal size={32} />,
    title: 'Ductos horizontales',
    description:
      'Limpieza y mantención de ductos horizontales con eliminación de residuos acumulados e incluye sanitización.',
    accent: 'Incluye Sanitización',
  },
  {
    icon: <Droplets size={32} />,
    title: 'Alcantarillado',
    description:
      'Desobstrucción y mantención de alcantarillado para prevenir rebalses y daños estructurales.',
  },
  {
    icon: <CloudRain size={32} />,
    title: 'Aguas lluvias',
    description:
      'Limpieza de sistemas de aguas lluvias para evitar saturaciones, filtraciones y colapsos en temporada.',
  },
  {
    icon: <Trash2 size={32} />,
    title: 'Ductos de basura',
    description:
      'Limpieza, sanitización y desinfección de ductos de basura para eliminar olores, bacterias y focos infecciosos.',

    featured: true,
  },
  {
    icon: <TriangleAlert size={32} />,
    title: 'Emergencias sanitarias',
    description:
      'Atención inmediata 24/7 ante colapsos, rebalses y situaciones críticas en la red sanitaria.',
  },
];

const DATA_SERVICES_EXTRAS = [
  {
    icon: <Building />,
    text: 'Desde los pisos superiores hasta la sala de basura',
  },
  {
    icon: <BrushCleaning />,
    text: 'Incluye limpieza, mantención y sanitización de las áreas intervenidas',
  },
];

export default function ServicesSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='services'
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f2f4f5',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant='overline'
            color='secondary'
            sx={{
              //fontWeight: 700,
              //letterSpacing: 3,
              //textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography variant='h3' color='primary'>
            Intervención completa del sistema de ductos
          </Typography>
          <Typography
            variant='body1'
            sx={{ mt: 2, fontWeight: 400, maxWidth: 800, mx: 'auto' }}
          >
            Disponemos de servicios específicos y eficientes, garantizando un
            impacto de tiempo y dinero adaptado a su necesidad en estos tiempos
            difíciles y empatizamos con su gestión financiera.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {DATA_SERVICES.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Box
                component={Link}
                href='docs/servicios/'
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  accent={service.accent}
                  featured={service.featured}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {DATA_SERVICES_EXTRAS.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, lg: 6 }}
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? 'background.paper'
                    : '#eceeef',
              }}
            >
              <Stack direction='row' spacing={2}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>
                  {item.icon}
                </Box>
                <Typography variant='body2' color='primary.main'>
                  {item.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  accent,
  featured,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: string;
  featured?: boolean;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        p: 4,
        borderRadius: 3,
        border: featured
          ? '2px solid rgba(211, 47, 47, 0.4)'
          : '2px solid #e0e0e0',
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          bgcolor: featured ? 'secondary.main' : 'grey.50',
          color: featured ? 'white' : 'inherit',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: 'colors 0.3s',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant='h6'
        color='primary.main'
        sx={{ fontWeight: 700, mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{ mb: 3, lineHeight: 1.8 }}
      >
        {description}
      </Typography>
      {accent && (
        <Typography
          variant='caption'
          color='secondary.main'
          sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}
        >
          {accent}
        </Typography>
      )}
    </Box>
  );
}
