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
  Zap,
  HardHat,
  Handshake,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

const DATA_DIFFERENTIATORS = [
  {
    icon: <ShieldCheck />,
    title: 'Experiencia',
    desc: 'Técnicos especializados en puntos críticos, Contamos con técnicos altamente especializados, con experiencia en puntos críticos y de alta exigencia operativa.',
  },
  {
    icon: <Handshake />,
    title: 'Relación',
    desc: 'Conocemos cada comunidad y su historial, Construimos relaciones de largo plazo basadas en la confianza, la transparencia y la respuesta oportuna.',
  },
  {
    icon: <HardHat />,
    title: 'Prevención',
    desc: 'Anticipamos problemas antes de que ocurran, Promovemos activamente la mantención preventiva de la red sanitaria, asesorando a comités y administraciones sobre la frecuencia adecuada, conforme a la normativa vigente.',
  },
];

export default function BecauseWeSection() {
  const theme = useTheme();

  return (
    <SectionWrapper id='diferenciadores' sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='overline' color='secondary'>
            POR QUÉ ELEGIRNOS
          </Typography>
          <Typography variant='h3' color='secondary' sx={{ color: 'white' }}>
            Por qué nuestros clientes trabajan con nosotros durante años?
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {DATA_DIFFERENTIATORS.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.05)',
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'secondary.main',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mb: 3,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant='h6'
                  sx={{ color: 'white', fontWeight: 700, mb: 2, maxWidth: 100 }}
                >
                  {item.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'grey.100' }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          {/* <Button
            component={Link}
            href='/docs/porque'
            variant='contained'
            color='secondary'
            size='large'
            endIcon={<ArrowRight />}
            sx={{ mt: 4, maxWidth: 200 }}
          >
            Ver más
          </Button> */}
          <Button
            component={Link}
            href='/docs/porque'
            variant='outlined'
            size='large'
            endIcon={<ArrowRight />}
            sx={{
              mt: 4,
              color: 'white',
              borderColor: 'white',

              '&:hover': {
                bgcolor: 'white',
                color: 'primary.main',
              },
              '&:active': { transform: 'scale(0.95)' },
            }}
          >
            Leer Más
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
