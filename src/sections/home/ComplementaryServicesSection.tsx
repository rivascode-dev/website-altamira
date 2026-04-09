'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Wrench,
  Brush,
  Home,
  BrushCleaning,
  Video,
  BugOff,
  ArrowRight,
  Link,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const DATA_COMPLEMENTARY_SERVICES = [
  {
    icon: <BrushCleaning />,
    title: 'Sanitización',
    description:
      'Desinfección profunda de ductos para control de malos olores.',
  },
  {
    icon: <Video />,
    title: 'Video inspección',
    description:
      'Revisión y inspección de ductos para detectar obstrucciones y fugas.',
  },
  {
    icon: <BugOff />,
    title: 'Control de plagas',
    description: 'Servicios profesionales de control de plagas',
    cta: true,
    cta_text: 'Ir a Boca Ratón',
    cta_link: 'https://bocaratonpestcontrol.com',
  },
];

export default function ComplementaryServicesSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='complementary-services'
      sx={{
        py: 12,
        bgcolor:
          theme.palette.mode === 'dark' ? 'background.default' : '#ffffff',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='overline' color='secondary'>
            SOLUCIONES INTEGRALES
          </Typography>
          <Typography variant='h3' color='primary' sx={{ mb: 3 }}>
            Servicios Complementarios
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Atendemos todas las necesidades de mantención que garanticen la
            operatividad y seguridad de su edificio, ofreciendo soluciones
            integrales en un solo lugar.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {DATA_COMPLEMENTARY_SERVICES.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? 'background.paper'
                      : '#f8fafb',
                  p: 5,
                  borderRadius: 4,
                  height: '100%',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: 'secondary.main',
                    color: 'white',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    '& svg': { fontSize: 32 },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant='h5'
                  color='primary.main'
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ lineHeight: 1.7 }}
                >
                  {item.description}
                </Typography>

                {item.cta && (
                  <Box sx={{ textAlign: 'center' }}>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='large'
                      endIcon={<ArrowRight />}
                      sx={{ mt: 4 }}
                      //LinkComponent={Link}
                      href={item.cta_link}
                    >
                      {item.cta_text}
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
