'use client';

import {
  Container,
  Box,
  Button,
  Stack,
  Typography,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PromotionsContent() {
  const WHATSAPP_LINK = 'https://wa.me/56982811148';

  return (
    <SectionWrapper
      id='promotions-content'
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth='md'>
        {/* Banner de Promoción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              borderRadius: { xs: 4, md: 6 },
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid',
              borderColor: 'divider',
              mb: 8,
              lineHeight: 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                aspectRatio: { xs: '9/14', md: '9/14' },
                maxHeight: { xs: '80vh', md: '1400px' },
                bgcolor: '#f1f5f9', // Background color for gaps if any
              }}
            >
              <Image
                src='/assets/images/altamira-ductos-promocion-invierno-2026.jpeg'
                alt='Promoción Invierno 2026 Altamira Ductos'
                fill
                sizes='(max-width: 900px) 100vw, 900px'
                priority
                style={{
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>
          </Paper>
        </motion.div>

        {/* Call to Action */}
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Stack
              direction='row'
              spacing={1}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                color: 'secondary.main',
              }}
            >
              <Sparkles size={20} />
              <Typography
                variant='overline'
                sx={{ fontWeight: 700, letterSpacing: 2 }}
              >
                OFERTA EXCLUSIVA
              </Typography>
              <Sparkles size={20} />
            </Stack>

            <Typography
              variant='h2'
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              ¿Deseas agendar esta promoción?
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              No dejes pasar esta oportunidad de temporada. El mantenimiento
              preventivo asegura un ambiente saludable y eficiente. Contáctanos
              hoy mismo y menciona el cupón de esta imagen para obtener tu
              beneficio.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Button
              component={Link}
              href='/nosotros'
              variant='outlined'
              size='large'
              color='secondary'
              endIcon={<ArrowRight />}
              aria-label='Leer más sobre nuestra empresa'
              sx={{
                mt: 4,
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
              Solicitar evaluación técnica gratuita
            </Button>
            {/* <Button
              variant='contained'
              size='large'
              href={WHATSAPP_LINK}
              target='_blank'
              rel='noopener noreferrer'
              startIcon={<MessageCircle size={24} />}
              sx={{
                px: { xs: 4, md: 8 },
                py: 2,
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 700,
                textTransform: 'none',
                bgcolor: '#25D366',
                '&:hover': {
                  bgcolor: '#128C7E',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(37, 211, 102, 0.4)',
                },
                boxShadow: '0 8px 16px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              Contactar por WhatsApp
            </Button> */}
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
