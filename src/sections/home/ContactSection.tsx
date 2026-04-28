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
  CircularProgress,
} from '@mui/material';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, EmailFormValues } from '@/schemas/emailSchema';
import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';

const DATA_CONTACT = [
  {
    icon: <Phone />,
    title: 'Teléfono',
    detail: '+56 9 9573 9887',
    link: 'tel:+56995739887',
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
    detail: 'altamiraductos@gmail.com',
    link: 'mailto:altamiraductos@gmail.com',
  },
  {
    icon: <Mail />,
    title: 'Correo Electrónico',
    detail: 'antonio.limpiezadeductos@gmail.com',
    link: 'mailto:antonio.limpiezadeductos@gmail.com',
  },
  {
    icon: <MapPin />,
    title: 'Ubicación',
    detail: 'Región Metropolitana, Chile',
    link: '#',
  },
];

export default function ContactSection() {
  const [alertInfo, setAlertInfo] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comuna: '',
      message: '',
      fax: '',
    },
  });

  const onSubmit = async (data: EmailFormValues) => {
    setAlertInfo(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await sendEmail(null, formData);

      if (result.success) {
        setAlertInfo({ type: 'success', message: result.message });
        reset();
      } else {
        setAlertInfo({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error(error);
      setAlertInfo({
        type: 'error',
        message: 'Ocurrió un error inesperado al enviar el mensaje.',
      });
    }
  };

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
            <Typography variant='h3' component='h2' color='primary.main'>
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
              onSubmit={handleSubmit(onSubmit)}
              noValidate
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
                  <TextField
                    label='Nombre'
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    disabled={isSubmitting}
                    fullWidth
                    variant='outlined'
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label='Teléfono'
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    disabled={isSubmitting}
                    fullWidth
                    variant='outlined'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label='Correo Electrónico'
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    disabled={isSubmitting}
                    fullWidth
                    variant='outlined'
                    type='email'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label='Comuna'
                    {...register('comuna')}
                    error={!!errors.comuna}
                    helperText={errors.comuna?.message}
                    disabled={isSubmitting}
                    fullWidth
                    variant='outlined'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label='Mensaje o requerimiento técnico'
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    disabled={isSubmitting}
                    fullWidth
                    variant='outlined'
                    multiline
                    rows={4}
                  />

                  {/* Honeypot field - hidden from humans */}
                  <TextField
                    {...register('fax')}
                    autoComplete='off'
                    style={{
                      display: 'none',
                      position: 'absolute',
                      left: '-5000px',
                    }}
                    tabIndex={-1}
                    aria-hidden='true'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type='submit'
                    disabled={isSubmitting}
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress size={18} color='inherit' />
                      ) : (
                        <Send size={18} />
                      )
                    }
                    variant='outlined'
                    size='large'
                    color='secondary'
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
                    {isSubmitting
                      ? 'Enviando...'
                      : 'Solicitar evaluación técnica'}
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
