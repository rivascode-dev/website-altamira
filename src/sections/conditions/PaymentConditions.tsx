'use client';
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Paper,
  alpha,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Clock,
  ShieldAlert,
} from 'lucide-react';

export default function PaymentConditions() {
  const theme = useTheme();

  const fundamentalPoints = [
    'Asegurar la disponibilidad inmediata del equipo técnico.',
    'Garantizar una respuesta oportuna ante la contingencia.',
    'Cubrir los insumos y logística de despliegue rápido.',
  ];

  return (
    <SectionWrapper id='payment-conditions' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Stack spacing={8}>
          {/* Introducción y Disponibilidad */}
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {/* <ShieldAlert color={theme.palette.primary.main} size={32} /> */}
                    <Typography
                      variant='h4'
                      color='primary'
                      sx={{ fontWeight: 800 }}
                    >
                      Condiciones del Servicio de Emergencia
                    </Typography>
                  </Box>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}
                  >
                    Nuestro servicio de emergencia sanitaria está diseñado para
                    responder de forma rápida y efectiva ante situaciones
                    críticas que afectan la habitabilidad y salubridad de un
                    inmueble.
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: '#f8fafc',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Clock color={theme.palette.secondary.main} size={24} />
                      <Typography variant='h5' sx={{ fontWeight: 700 }}>
                        Disponibilidad y Respuesta
                      </Typography>
                    </Box>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      sx={{ lineHeight: 1.7 }}
                    >
                      Para garantizar una atención inmediata, contamos con
                      personal disponible que se activa en el momento, incluso
                      en horarios nocturnos, fines de semana y festivos.
                    </Typography>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      sx={{ lineHeight: 1.7, fontWeight: 500 }}
                    >
                      Entendemos que un colapso sanitario no puede esperar, por
                      lo que nuestra estructura operativa está optimizada para
                      la contingencia.
                    </Typography>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Condiciones de Pago */}
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 8 },
                  borderRadius: 6,
                  bgcolor: 'primary.main',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Stack spacing={3}>
                      <Typography variant='h3' sx={{ fontWeight: 800 }}>
                        Condiciones de Pago
                      </Typography>
                      <Typography
                        variant='h5'
                        sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}
                      >
                        Debido a la naturaleza urgente del servicio y a los
                        costos operativos asociados a su ejecución inmediata,
                        todo servicio de emergencia debe ser cancelado antes de
                        su realización.
                      </Typography>

                      <Box sx={{ mt: 2 }}>
                        <Typography
                          variant='subtitle1'
                          sx={{
                            fontWeight: 700,
                            mb: 3,
                            color: 'secondary.light',
                          }}
                        >
                          Esta condición es fundamental para:
                        </Typography>
                        <Stack spacing={2}>
                          {fundamentalPoints.map((point, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center',
                              }}
                            >
                              <CheckCircle2
                                size={20}
                                color={theme.palette.secondary.light}
                              />
                              <Typography
                                variant='body1'
                                sx={{ fontWeight: 500 }}
                              >
                                {point}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        bgcolor: alpha('#fff', 0.1),
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: alpha('#fff', 0.2),
                      }}
                    >
                      <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
                        <AlertCircle
                          size={48}
                          color={theme.palette.secondary.light}
                        />
                        <Typography
                          variant='h6'
                          sx={{ fontWeight: 700, color: 'white' }}
                        >
                          Importante
                        </Typography>
                        <Typography
                          variant='body1'
                          sx={{ opacity: 0.9, color: 'white' }}
                        >
                          La solicitud del servicio de emergencia implica la
                          aceptación de estas condiciones comerciales y
                          operativas.
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Box>

          {/* Nota Final */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: '1px dashed',
                borderColor: 'primary.main',
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Info size={24} color={theme.palette.primary.main} />
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ fontWeight: 500 }}
              >
                Para servicios de mantención programada, por favor consulte
                nuestras condiciones comerciales estándar con su ejecutivo de
                cuentas.
              </Typography>
            </Paper>
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
