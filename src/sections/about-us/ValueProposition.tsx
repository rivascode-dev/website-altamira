'use client';
import { Box, Container, Typography, Paper, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, FileBarChart } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const VALUE_PROPS = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Resolución Sanitaria',
    desc: 'Cumplimos con la vigencia de todas las normativas del MINSAL.',
    color: '#D32F2F',
  },
  {
    icon: <Zap size={32} />,
    title: 'Tecnología de Punta',
    desc: 'Equipos alta presión y herramientas de inspección avanzada.',
    color: '#1976D2',
  },
  {
    icon: <Users size={32} />,
    title: 'Equipo Certificado',
    desc: 'Nuestro Personal altamente capacitado y con cobertura nacional.',
    color: '#388E3C',
  },
  {
    icon: <FileBarChart size={32} />,
    title: 'Informes Técnicos',
    desc: 'Entrega de toda la documentación detallada tras cada servicio',
    color: '#FBC02D',
  },
];

export default function ValueProposition() {
  return (
    <SectionWrapper
      id='value-proposition'
      sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='h3' color='primary' sx={{ fontWeight: 800 }}>
            Nuestra Propuesta de Valor
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{ mt: 2, maxWidth: 800, mx: 'auto', fontWeight: 400 }}
          >
            Operamos bajo el concepto de "Prevención hoy, tranquilidad mañana".
            Entendemos que el mantenimiento no es un gasto, sino una inversión
            obligatoria para evitar colapsos sanitarios y multas legales.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {VALUE_PROPS.map((prop, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{ display: 'flex' }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ display: 'flex', flex: 1, width: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    minHeight: 300,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                      borderColor: prop.color,
                    },
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{ alignItems: 'center', textAlign: 'center' }}
                  >
                    <Box
                      sx={{
                        color: prop.color,
                        bgcolor: `${prop.color}15`,
                        p: 2,
                        borderRadius: 3,
                      }}
                    >
                      {prop.icon}
                    </Box>
                    <Typography
                      variant='h6'
                      color='primary'
                      sx={{ fontWeight: 700, maxWidth: '80%' }}
                    >
                      {prop.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ lineHeight: 1.6 }}
                    >
                      {prop.desc}
                    </Typography>
                  </Stack>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
