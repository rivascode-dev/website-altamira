'use client';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

export default function AboutUsIntro() {
  return (
    <SectionWrapper id='about-intro' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant='overline'
                color='secondary'
                sx={{ fontWeight: 700, letterSpacing: 2 }}
              >
                SOMOS ALTAMIRA DUCTOS
              </Typography>
              <Typography
                variant='h3'
                component='h2'
                color='primary'
                sx={{ mt: 1, mb: 3, fontWeight: 800 }}
              >
                Expertos en Mantenimiento Sanitario
              </Typography>
              <Stack spacing={3}>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  Altamira Ductos es una empresa especializada en la limpieza,
                  mantención y sanitización de los sistemas de ductos en
                  edificios y condominios. Nos hemos consolidado como el socio
                  estratégico de comunidades que buscan garantizar la salud de
                  sus habitantes y la integridad de su infraestructura.
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  Nos especializamos en ofrecer soluciones integrales para la
                  limpieza y mantención de ductos y salas de basura, ductos
                  verticales, horizontales, sistemas de aguas lluvias y redes de
                  alcantarillado para edificios y condominios, asegurando
                  resultados eficientes, seguros y duraderos.
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  Gracias al uso de maquinaria especializada, equipos de alto
                  rendimiento y sistemas avanzados de videoinspección de ductos,
                  aseguramos un servicio de alta precisión, calidad y
                  trazabilidad. Nuestra experiencia técnica nos permite abordar
                  desafíos complejos, garantizando resultados óptimos, duraderos
                  y alineados con la normativa vigente. Nuestra filosofía de
                  trabajo se resume en una premisa clara:
                </Typography>
                <Typography
                  variant='body1'
                  color='primary'
                  sx={{
                    fontWeight: 600,
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main',
                    pl: 3,
                    py: 1,
                    bgcolor: 'rgba(211, 47, 47, 0.05)',
                  }}
                >
                  "Un ducto limpio no se ve… pero se nota cuando falla."
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 10,
                }}
              >
                <Image
                  src='/assets/images/altamira-ductos-nosotros.jpg'
                  alt='Equipo técnico de Altamira'
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white',
                  }}
                >
                  <Typography variant='h5' sx={{ fontWeight: 700 }}>
                    Tecnología y Compromiso
                  </Typography>
                  <Typography variant='body2' sx={{ opacity: 0.8 }}>
                    Garantizamos la integridad de su infraestructura.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
