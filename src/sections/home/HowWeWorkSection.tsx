'use client';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import SectionWrapper from '@/components/SectionWrapper';

const DATA_HOW_WE_WORK = [
  {
    step: '01',
    title: 'Evaluación',
    desc: 'Inspección ocular y técnica inicial de la red.',
    active: false,
  },
  {
    step: '02',
    title: 'Limpieza',
    desc: 'Succión y raspado mecánico de alta eficiencia.',
    active: false,
  },
  {
    step: '03',
    title: 'Sanitización',
    desc: 'Aplicación de agentes químicos certificados.',
    active: false,
  },
  {
    step: '04',
    title: 'Video Inspección',
    desc: 'Confirmación visual de la limpieza total.',
    active: false,
  },
  {
    step: '05',
    title: 'Informe Técnico',
    desc: 'Entrega de certificado y recomendaciones.',
    active: false,
    last: true,
  },
];

export default function HowWeWorkSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='how-we-work'
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'background.default' : '#fff',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant='overline'
            color='secondary'
            // sx={{
            //   fontWeight: 700,
            //   letterSpacing: 3,
            //   textTransform: 'uppercase',
            //   mb: 2,
            // }}
          >
            COMO TRABAJAMOS
          </Typography>
          <Typography variant='h3' component='h2' color='primary'>
            Ingeniería en cada paso
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {DATA_HOW_WE_WORK.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 2.4 }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: item.active ? 'secondary.main' : 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    mb: 3,
                    border: '4px solid',
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? 'background.paper'
                        : '#f2f4f5',
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {item.step}
                </Box>
                <Typography
                  variant='h6'
                  color='primary.main'
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ lineHeight: 1.6, display: 'block' }}
                >
                  {item.desc}
                </Typography>

                {!item.last && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 40,
                      left: '60%',
                      width: '100%',
                      height: 2,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.1)',
                      zIndex: 1,
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
