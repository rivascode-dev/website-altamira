'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const DATA_CONTACT = [
  {
    icon: <Phone />,
    title: 'Teléfono',
    detail: '+56 9 9790 2704',
    link: 'tel:+56997902704',
  },
  {
    icon: <MessageCircle />,
    title: 'WhatsApp Urgencias',
    detail: '+56 9 8281 1148',
    link: 'https://wa.me/56982811148',
  },
  {
    icon: <Mail />,
    title: 'Correo Electrónico',
    detail: 'marjorie.limpiezadeductos@gmail.com',
    link: 'mailto:marjorie.limpiezadeductos@gmail.com',
  },
  {
    icon: <MapPin />,
    title: 'Ubicación',
    detail: 'Región Metropolitana, Chile',
    link: '#',
  },
];

export default function ContactSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionWrapper
      id='contact'
      sx={{
        py: 12,
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f2f4f5',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant='overline' color='secondary'>
              CONTACTO
            </Typography>
            <Typography variant='h3' color='primary.main'>
              Solicita tu evaluación técnica
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ mt: 2, lineHeight: 1.8 }}
            >
              Diagnóstico claro + solución concreta
            </Typography>

            <Stack spacing={3} sx={{ mt: 4 }}>
              {DATA_CONTACT.map((item, index) => (
                <Stack
                  key={index}
                  direction='row'
                  sx={{ alignItems: 'center' }}
                  spacing={3}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: 'secondary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant='subtitle2'
                      color='text.secondary'
                      sx={{ mb: 0.5 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component={item.link !== '#' ? 'a' : 'p'}
                      href={item.link !== '#' ? item.link : undefined}
                      //variant='h6'
                      color='primary'
                      sx={{
                        textDecoration: 'none',
                        fontSize: isMobile ? '0.8rem' : '1rem',

                        '&:hover':
                          item.link !== '#' ? { color: 'secondary.main' } : {},
                      }}
                    >
                      {item.detail}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component='form'
              sx={{
                bgcolor: 'white',
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: 4,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                border:
                  theme.palette.mode === 'dark'
                    ? '1px solid rgba(255,255,255,0.1)'
                    : 'none',
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label='Nombre' variant='outlined' />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label='Teléfono' variant='outlined' />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label='Correo Electrónico'
                    variant='outlined'
                    type='email'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label='Comuna' variant='outlined' />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label='Mensaje o requerimiento técnico'
                    variant='outlined'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  {/* <Button
                    variant='contained'
                    fullWidth
                    endIcon={<Send />}
                    size='large'
                    sx={{ mt: 2 }}
                    color='secondary'
                  >
                    Solicitar Evaluación
                  </Button> */}
                  <Button
                    variant='outlined'
                    size='large'
                    color='secondary'
                    endIcon={<Send />}
                    fullWidth
                    sx={{
                      mt: 2,
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
                    Solicitar evaluación técnica
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
