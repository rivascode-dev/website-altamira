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
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import {
  Gavel,
  Scale,
  AlertTriangle,
  ShieldCheck,
  FileText,
} from 'lucide-react';

export default function PenaltyContent() {
  const theme = useTheme();

  return (
    <SectionWrapper id='normativa-legal' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Stack spacing={10}>
          {/* Marco Normativo */}
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {/* <Scale color={theme.palette.primary.main} size={32} /> */}
                    <Typography
                      variant='h3'
                      color='primary'
                      sx={{ fontWeight: 800 }}
                    >
                      Marco Normativo y Responsabilidad Legal
                    </Typography>
                  </Box>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}
                  >
                    El mantenimiento de las instalaciones sanitarias no es solo
                    una cuestión de operatividad y limpieza; es una{' '}
                    <strong>obligación legal</strong> que recae sobre las
                    administraciones y comunidades de copropietarios.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}
                  >
                    <Gavel
                      color={theme.palette.secondary.main}
                      size={28}
                      style={{ flexShrink: 0 }}
                    />
                    <Box>
                      <Typography variant='h5' sx={{ fontWeight: 700, mb: 1 }}>
                        Ley N° 21.442 sobre Copropiedad Inmobiliaria
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ lineHeight: 1.7 }}
                      >
                        Según la <strong>Ley N° 21.442</strong>, las comunidades
                        y administradores están obligados a mantener en correcto
                        estado las instalaciones del edificio mediante
                        mantenciones periódicas que garanticen la seguridad y
                        salud de los residentes.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: alpha(theme.palette.primary.main, 0.03),
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant='h6' sx={{ fontWeight: 700, mb: 3 }}>
                    El cumplimiento de esta normativa asegura:
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      'La integridad física de los habitantes.',
                      'El correcto funcionamiento de las áreas comunes.',
                      'El respaldo legal ante eventuales fiscalizaciones o siniestros.',
                    ].map((item, i) => (
                      <Box
                        key={i}
                        sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                      >
                        <ShieldCheck
                          size={20}
                          color={theme.palette.primary.main}
                        />
                        <Typography variant='body1' sx={{ fontWeight: 500 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Consecuencias del Incumplimiento */}
          <Box>
            <Typography
              variant='h3'
              color='primary'
              sx={{ fontWeight: 800, mb: 6, textAlign: 'center' }}
            >
              Consecuencias del Incumplimiento
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Multas y Sanciones',
                  desc: 'Penalizaciones económicas por parte de juzgados de policía local o autoridades sanitarias.',
                  icon: <AlertTriangle size={32} />,
                },
                {
                  title: 'Responsabilidad Civil',
                  desc: 'Obligación de indemnizar daños causados a departamentos particulares o bienes comunes por negligencia en el mantenimiento (ej. filtraciones o rebalses).',
                  icon: <Scale size={32} />,
                },
                {
                  title: 'Responsabilidad Penal',
                  desc: 'En los casos más graves, consecuencias legales ante accidentes personales derivados de instalaciones en mal estado.',
                  icon: <Gavel size={32} />,
                },
              ].map((item, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        borderRadius: 4,
                        bgcolor: 'white',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        minHeight: { xs: 'auto', md: 320 },
                        '&:hover': {
                          borderColor: 'secondary.main',
                          boxShadow: '0 10px 30px rgba(211,47,47,0.1)',
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'secondary.main', mb: 3 }}>
                        {item.icon}
                      </Box>
                      <Typography variant='h5' sx={{ fontWeight: 800, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ lineHeight: 1.7 }}
                      >
                        {item.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Riesgo de Omisión y Cierre */}
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
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={3}>
                  <Typography variant='h3' sx={{ fontWeight: 800 }}>
                    El Riesgo de la Omisión
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      opacity: 0.9,
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: 'secondary.light',
                    }}
                  >
                    No realizar mantenciones preventivas no solo deteriora
                    aceleradamente las instalaciones y la plusvalía del
                    edificio: también{' '}
                    <strong>expone directamente a la administración</strong>{' '}
                    frente a posibles demandas y consecuencias legales.
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ opacity: 0.8, fontSize: '1.1rem' }}
                  >
                    La mantención planificada con <strong>Altamira</strong> es
                    la herramienta más efectiva para mitigar estos riesgos,
                    asegurando que el edificio opere siempre bajo el marco legal
                    vigente y con los estándares de seguridad exigidos por el
                    mercado y las compañías de seguros.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: alpha('#fff', 0.1),
                    border: '1px solid',
                    borderColor: alpha('#fff', 0.2),
                    textAlign: 'center',
                  }}
                >
                  <FileText
                    size={48}
                    color={theme.palette.secondary.light}
                    style={{ marginBottom: '16px' }}
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      fontStyle: 'italic',
                      opacity: 0.9,
                      color: 'secondary.light',
                    }}
                  >
                    Para certificaciones específicas o asesoría sobre el
                    cumplimiento del DS.594, no dude en contactar a nuestro
                    equipo legal-técnico.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
