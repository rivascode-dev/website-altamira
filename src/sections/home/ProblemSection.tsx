'use client';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Ban, Biohazard, Waves, Video } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const DATA_PROBLEMS = [
  {
    icon: <Ban />,
    text: 'Obstrucciones severas y colapsos de red.',
  },
  {
    icon: <Biohazard />,
    text: 'Malos olores y propagación de bacterias.',
  },
  {
    icon: <Waves />,
    text: 'Filtraciones en departamentos y daños estructurales.',
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper
      id='el-problema'
      sx={{
        py: 12,
        bgcolor: 'primary.main',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <Image
          src='/assets/images/altamira-limpieza-ductos-problema.png'
          alt='Qué pasa si no se limpian los ductos'
          fill
          style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
        />
      </Box>
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant='overline' color='secondary'>
              Alerta Técnica
            </Typography>
            <Typography variant='h3' sx={{ color: 'white' }}>
              ¿Qué pasa si no se limpian los ductos?
            </Typography>
            <Typography variant='h6' sx={{ color: 'grey.100', mt: 2 }}>
              Cuando el sistema colapsa, el problema deja de ser técnico… y se
              vuelve un caos para toda la comunidad
            </Typography>

            <Stack spacing={3} sx={{ mt: 2 }}>
              {DATA_PROBLEMS.map((item, index) => (
                <Stack
                  key={index}
                  direction='row'
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    '&:hover .icon-box': { bgcolor: 'secondary.main' },
                    '&:hover .icon-svg': { color: 'white' },
                  }}
                >
                  <Box
                    className='icon-box'
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: 'rgba(211, 47, 47, 0.1)',
                      border: '1px solid rgba(211, 47, 47, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                    }}
                  >
                    {item.icon && (
                      <Box
                        className='icon-svg'
                        sx={{
                          color: 'secondary.main',
                          transition: 'all 0.3s',
                          display: 'flex',
                        }}
                      >
                        {item.icon}
                      </Box>
                    )}
                  </Box>
                  <Typography variant='h6' sx={{ color: 'white' }}>
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(4px)',
                p: 4,
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Box
                sx={{
                  aspectRatio: '16/9',
                  borderRadius: 3,
                  overflow: 'hidden',
                  mb: 4,
                }}
              >
                <Box
                  component='img'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuC7QpohPrL0vRXCWn_E6C0qFDnmU1erBZtDPIrka11cs64nzi-cwdX_TMn9OViLoi-oKo-fuLqWwtGVc62FmjCXN3qhJZp5KbUsyMSxooNrlTjKKBi-ZWfyKacAxG9A35Vhpgeui2T_qYNCQu8urVaT-CTNUXTuAfysYE4zobTaLqDtiNjLpPbIDKliArfvCwMQSQkHTQgVDCyx2DVRPbd5pXbbpcYna_iZUy22dvXHRR_lNanDlAMDOlUQmuEi8ZEXGKbZV0QynQtF'
                  alt='Technical inspection camera'
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                <Video
                  style={{
                    color: 'white',
                    width: 36,
                    height: 36,
                  }}
                />
                <Box>
                  <Typography
                    variant='body1'
                    color='white'
                    sx={{ color: 'white', fontWeight: 700 }}
                  >
                    Video Inspección en Tiempo Real
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                    }}
                  >
                    Tecnología de Diagnóstico
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
