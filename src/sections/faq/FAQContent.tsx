'use client';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  {
    title: '1. Mantenimiento y Periodicidad',

    questions: [
      {
        q: '¿Cada cuánto tiempo se deben limpiar los ductos en un edificio?',
        a: 'La frecuencia depende del uso y las condiciones del edificio, pero en la mayoría de los casos se recomienda realizar una limpieza y mantención **al menos una vez al año**.\n\nEn comunidades con alta ocupación o uso intensivo, puede ser necesario realizar mantenciones cada 6 meses para evitar acumulación de residuos, malos olores y obstrucciones críticas. Lo más recomendable es realizar una evaluación técnica inicial.',
      },
      {
        q: '¿Qué ocurre si no se realizan mantenciones de los ductos?',
        a: 'La falta de mantención genera una acumulación progresiva de residuos que no es visible al inicio, pero con el tiempo provoca:\n\n- Obstrucciones y rebalses sanitarios.\n- Malos olores permanentes en áreas comunes y departamentos.\n- Filtraciones estructurales.\n- El sistema pasa de requerir una mantención a convertirse en una **emergencia sanitaria**, con costos mucho más elevados.',
      },
    ],
  },
  {
    title: '2. Normativa y Salud',
    questions: [
      {
        q: '¿Es obligatorio limpiar los ductos de basura?',
        a: 'Sí, los ductos de basura son focos críticos de acumulación de residuos orgánicos, lo que atrae plagas y genera riesgos biológicos. La limpieza y sanitización periódica permite cumplir con las normativas sanitarias vigentes y evitar riesgos para la salud de los residentes.',
      },
      {
        q: '¿Cómo saber si una empresa cumple con la normativa sanitaria?',
        a: 'Es fundamental que la empresa cuente con:\n\n- **Resolución Sanitaria Vigente.**\n- Procedimientos certificados de limpieza y sanitización.\n- Entrega de un **Informe Técnico** con respaldo fotográfico.\n- Uso exclusivo de productos autorizados por el ISP/Minsal.',
      },
    ],
  },
  {
    title: '3. Identificación de Problemas',
    questions: [
      {
        q: '¿Cómo sé si mi edificio necesita una limpieza de ductos inmediata?',
        a: 'Algunas señales de alerta clara son:\n\n- Presencia de malos olores persistentes.\n- Lentitud en la evacuación de aguas servidas.\n- Presencia inusual de plagas (cucarachas o roedores).\n- Rebalses o filtraciones en los niveles inferiores.',
      },
      {
        q: '¿La limpieza elimina los malos olores?',
        a: 'Sí, el proceso de limpieza remueve los residuos adheridos a las paredes del ducto, y la sanitización posterior elimina las bacterias que generan la descomposición y el mal olor, mejorando significativamente el ambiente del edificio.',
      },
    ],
  },
  {
    title: '4. Sobre nuestro Servicio',
    questions: [
      {
        q: '¿El servicio incluye informe técnico?',
        a: 'Absolutamente. Cada intervención finaliza con la entrega de un informe técnico detallado que incluye registro fotográfico del "antes y después". Este documento sirve como respaldo ante la administración, comités de copropietarios y compañías de seguros.',
      },
      {
        q: '¿Se interrumpe la vida normal de los residentes durante el servicio?',
        a: 'No. Los trabajos se planifican meticulosamente para minimizar molestias. Coordinamos horarios y accesos con la administración para que el impacto en la rutina de los residentes sea prácticamente nulo.',
      },
      {
        q: '¿Qué incluye una evaluación técnica?',
        a: 'La evaluación permite revisar el estado real del sistema, detectar puntos críticos de obstrucción mediante cámaras si es necesario, y definir el tipo de intervención más eficiente para el edificio.',
      },
      {
        q: '¿Atienden emergencias sanitarias?',
        a: 'Sí, disponemos de una unidad de respuesta rápida para emergencias, diseñada para atender rebalses u obstrucciones críticas que comprometan la habitabilidad del edificio en el menor tiempo posible.',
      },
    ],
  },
];

export default function FAQContent() {
  return (
    <SectionWrapper id='faq-content'>
      <Container maxWidth='md'>
        <Stack spacing={8}>
          {faqCategories.map((category, catIndex) => (
            <Box key={catIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Stack
                  direction='row'
                  spacing={2}
                  sx={{ alignItems: 'center', mb: 3 }}
                >
                  {/* <Box sx={{ color: 'primary.main' }}>{category.icon}</Box> */}
                  <Typography
                    variant='h3'
                    color='primary.main'
                    sx={{ fontWeight: 700 }}
                  >
                    {category.title}
                  </Typography>
                </Stack>

                <Box>
                  {category.questions.map((item, qIndex) => (
                    <Accordion
                      key={qIndex}
                      sx={{
                        mb: 1,
                        '&:before': { display: 'none' },
                        boxShadow: 'none',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'transparent',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ChevronDown color='#D32F2F' />}
                        sx={{ px: 0 }}
                      >
                        <Typography
                          variant='h5'
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 0, pb: 4 }}>
                        <Typography
                          variant='body1'
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {item.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </motion.div>
            </Box>
          ))}
          <Box
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 4,
              bgcolor: 'grey.50',
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ fontStyle: 'italic' }}
            >
              Para consultas técnicas o solicitudes de presupuesto, por favor
              contáctenos a través de nuestro portal de soporte o directamente a
              nuestro canal de ventas.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
