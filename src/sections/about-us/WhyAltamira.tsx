'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Trophy, HeartHandshake, ShieldAlert } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const PILARES = [
  {
    icon: <Trophy size={40} />,
    title: '1. Experiencia',
    subtitle: 'Técnicos especializados en puntos críticos',
    description:
      'Contamos con técnicos altamente especializados, con amplia trayectoria en la intervención de puntos críticos y de alta exigencia operativa. Esta experiencia nos permite:',
    content: [
      'Resolver escenarios complejos con criterio técnico y rapidez.',
      'Garantizar la seguridad de las instalaciones durante cada intervención.',
      'Adaptar herramientas y procesos a las particularidades de cada edificio.',
    ],
  },
  {
    icon: <HeartHandshake size={40} />,
    title: '2. Relación',
    subtitle: 'Conocemos cada comunidad y su historial',
    description:
      'Construimos relaciones de largo plazo basadas en la confianza, la transparencia y la respuesta oportuna. Para nosotros, cada edificio es único:',
    content: [
      'Historial detallado de las intervenciones de cada comunidad.',
      'Soluciones inmediatas y acompañamiento permanente.',
      'Supervisión directa garantizando tranquilidad para administración y residentes.',
    ],
  },
  {
    icon: <ShieldAlert size={40} />,
    title: '3. Prevención',
    subtitle: 'Anticipamos problemas antes de que ocurran',
    description:
      'Promovemos activamente la mantención preventiva de la red sanitaria, asesorando a comités y administraciones sobre la frecuencia adecuada según la normativa vigente (Ley N° 21 .442).',
    content: [
      'Reducción de emergencias: Evitamos colapsos costosos.',
      'Protección de infraestructura: Extendemos la vida útil de los sistemas.',
      'Cumplimiento de seguros y Ley N° 21.442.',
    ],
  },
];

export default function WhyAltamira() {
  const theme = useTheme();

  return (
    <SectionWrapper id='why-altamira' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant='overline'
            color='secondary'
            sx={{ fontWeight: 700, letterSpacing: 2 }}
          >
            ¿POR QUÉ ALTAMIRA?
          </Typography>
          <Typography
            variant='h3'
            color='primary'
            sx={{ mt: 1, fontWeight: 800 }}
          >
            Los 3 Pilares de Nuestro Servicio
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ mt: 2, maxWidth: 800, mx: 'auto' }}
          >
            Nuestra permanencia en el mercado y la fidelidad de nuestros
            clientes se sustentan en un modelo de trabajo basado en la
            excelencia técnica y la confianza mutua.
          </Typography>
        </Box>

        <Stack spacing={6}>
          {PILARES.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    md: index % 2 === 0 ? 'row' : 'row-reverse',
                  },
                  alignItems: 'center',
                  gap: { xs: 4, md: 8 },
                  p: { xs: 3, md: 6 },
                  borderRadius: 6,
                  bgcolor:
                    index % 2 === 0
                      ? alpha(theme.palette.primary.main, 0.03)
                      : 'transparent',
                  border: index % 2 !== 0 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 4,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                  }}
                >
                  {pilar.icon}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant='h4'
                    color='primary'
                    sx={{ fontWeight: 800, mb: 1 }}
                  >
                    {pilar.title}
                  </Typography>
                  <Typography
                    variant='h6'
                    color='secondary'
                    sx={{ fontWeight: 600, mb: 3 }}
                  >
                    {pilar.subtitle}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    sx={{ fontWeight: 400, mb: 2 }}
                  >
                    {pilar.description}
                  </Typography>
                  <Stack spacing={1.5}>
                    {pilar.content.map((item, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          gap: 2,
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'secondary.main',
                            borderRadius: '50%',
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant='body1' color='text.secondary'>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
