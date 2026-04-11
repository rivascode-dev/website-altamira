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
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const DATA_SERVICES = [
  {
    icon: <ArrowUpDown size={32} />,
    title: 'Ductos verticales',
    description:
      'Limpieza profunda de shafts de ventilación y extracción en edificios de gran altura.',
    accent: 'Incluye Sanitización',
  },
  {
    icon: <MoveHorizontal size={32} />,
    title: 'Ductos horizontales',
    description:
      'Mantenimiento de redes de extracción en estacionamientos y cocinas industriales.',
  },
  {
    icon: <Droplets size={32} />,
    title: 'Alcantarillado',
    description:
      'Desobstrucción técnica y mantenimiento preventivo de redes de aguas servidas.',
  },
  {
    icon: <CloudRain size={32} />,
    title: 'Aguas lluvias',
    description:
      'Preparación estacional de ductos para evitar colapsos por lluvias intensas.',
  },
  {
    icon: <Trash2 size={32} />,
    title: 'Ductos de basura',
    description:
      'Lavado a presión y desinfección de alta gama para control de olores y plagas.',

    featured: true,
  },
  {
    icon: <TriangleAlert size={32} />,
    title: 'Emergencias sanitarias',
    description:
      'Atención inmediata ante colapsos u obstrucciones críticas que comprometen la salud.',
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
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                accent={service.accent}
                featured={service.featured}
              />
            </Grid>
          ))}

          {/* <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard
              icon={<ArrowUpDown size={32} />}
              title='Ductos verticales'
              description='Limpieza profunda de shafts de ventilación y extracción en edificios de gran altura.'
              accent='Incluye Sanitización'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard
              icon={<MoveHorizontal size={32} />}
              title='Ductos horizontales'
              description='Mantenimiento de redes de extracción en estacionamientos y cocinas industriales.'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard
              icon={<Droplets size={32} />}
              title='Alcantarillado'
              description='Desobstrucción técnica y mantenimiento preventivo de redes de aguas servidas.'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard
              icon={<CloudRain size={32} />}
              title='Aguas lluvias'
              description='Preparación estacional de ductos para evitar colapsos por lluvias intensas.'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard
              icon={<Trash2 size={32} />}
              title='Ductos de basura'
              description='Lavado a presión y desinfección de alta gama para control de olores y plagas.'
              borderColor='secondary.main'
              iconColor='secondary.main'
              iconBgColor='rgba(211, 47, 47, 0.1)'
            />
          </Grid> */}

          {/* Emergency Service Featured Card */}
          {/* <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: 'secondary.main',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <TriangleAlert size={32} color='white' />
                </Box>
                <Typography
                  variant='h6'
                  color='white'
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Emergencias sanitarias
                </Typography>
                <Typography
                  variant='body2'
                  color='rgba(255,255,255,0.7)'
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  Atención inmediata ante colapsos u obstrucciones críticas que
                  comprometen la salud.
                </Typography>
              </Box>
              <Button
                component='a'
                href='tel:+56982811148'
                variant='contained'
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                  py: 1.5,
                  '&:hover': { bgcolor: 'secondary.main', color: 'white' },
                }}
              >
                Llamar Ahora
              </Button>
            </Box>
          </Grid> */}
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
          // '& .MuiBox-root': {
          //   bgcolor: 'secondary.main',
          //   color: 'white',
          // },
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
