'use client';
import { Box, Container, Grid, Typography, Stack, Card, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { FileText, Camera, ClipboardCheck, ShieldCheck, Search, Database } from 'lucide-react';

const reportSections = [
  {
    title: '¿Qué incluye nuestro informe?',
    icon: <FileText size={32} />,
    items: [
      'Descripción técnica de los trabajos realizados.',
      'Identificación de los sistemas intervenidos.',
      'Metodología empleada (productos, equipos, tiempos).',
      'Observaciones técnicas y recomendaciones preventivas.'
    ]
  },
  {
    title: 'Registro Fotográfico (Evidencia)',
    icon: <Camera size={32} />,
    items: [
      'Fotos detalladas del estado "Antes" de la intervención.',
      'Fotos detalladas del estado "Después" de la limpieza/mantenimiento.',
      'Evidencia de hallazgos específicos o puntos críticos detectados.'
    ]
  }
];

export default function ReportContent() {
  return (
    <SectionWrapper id="report-content">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" color="primary.main" sx={{ fontWeight: 700, mb: 2 }}>
                Compromiso de Transparencia
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 2 }}>
                En Altamira, entendemos que nuestro trabajo no termina cuando se apaga el último motor o se guarda la última manguera. La garantía de un servicio bien ejecutado reside en la documentación técnica que respalda cada acción.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4 }}>
                Después de cada servicio, nuestro equipo genera un **Informe Técnico Detallado**, un documento fundamental que sirve como bitácora de mantenimiento y respaldo ante auditorías sanitarias o requerimientos de compañías de seguros.
              </Typography>

              <Stack spacing={4}>
                {reportSections.map((section, index) => (
                  <Box key={index}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: 'secondary.main', bgcolor: 'secondary.light', p: 1, borderRadius: 2, opacity: 0.8 }}>
                        {section.icon}
                      </Box>
                      <Typography variant="h4" color="primary.dark">
                        {section.title}
                      </Typography>
                    </Stack>
                    <List sx={{ pl: 2 }}>
                      {section.items.map((item, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={item} 
                            sx={{ '& .MuiListItemText-primary': { fontSize: '1.05rem' } }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  p: 4, 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  borderRadius: 4,
                  boxShadow: 10,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <Box sx={{ position: 'absolute', top: -20, right: -20, opacity: 0.1, transform: 'rotate(15deg)' }}>
                    <ClipboardCheck size={200} />
                  </Box>
                  
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Valor del Informe
                  </Typography>
                  <Stack spacing={3}>
                    <Stack direction="row" spacing={2}>
                      <ShieldCheck size={24} color="#FFD700" />
                      <Typography variant="body2">
                        **Cumplimiento Normativo:** Herramienta indispensable para auditorías de salud y certificaciones de calidad.
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Stack direction="row" spacing={2}>
                      <Search size={24} color="#FFD700" />
                      <Typography variant="body2">
                        **Trazabilidad:** Historial claro de intervenciones para planificar mantenimientos futuros y detectar patrones.
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Stack direction="row" spacing={2}>
                      <Database size={24} color="#FFD700" />
                      <Typography variant="body2">
                        **Activo Documental:** Respaldo digital y físico de la inversión realizada en el mantenimiento de su infraestructura.
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>

              <Box sx={{ 
                p: 3, 
                border: '1px dashed', 
                borderColor: 'divider', 
                borderRadius: 4,
                textAlign: 'center',
                bgcolor: 'grey.50'
              }}>
                <Typography variant="subtitle2" color="text.secondary">
                  El informe se entrega en formato digital (PDF) dentro de las 48-72 horas hábiles posteriores a la ejecución del servicio.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
