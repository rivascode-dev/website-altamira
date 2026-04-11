'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ClipboardCheck,
  Camera,
  ShieldCheck,
  FileText,
  ArrowRight,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

const DATA_TECHNICAL_REPORT = [
  {
    icon: <Camera />,
    text: 'Evidencia fotográfica Antes / Después',
  },
  {
    icon: <ShieldCheck />,
    text: 'Respaldo para administración y Seguros',
  },
  {
    icon: <FileText />,
    text: 'Informe técnico con registro detallado',
  },
];

export default function TechnicalReportSection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='informe-tecnico'
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f2f4f5',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', lg: '50%' },
              p: { xs: 3, sm: 6, lg: 8 },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(211, 47, 47, 0.1)',
                color: 'secondary.main',
                px: 2,
                py: 0.5,
                borderRadius: 4,
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              <ClipboardCheck size={20} />
              Garantía de Calidad
            </Box>
            <Typography variant='h3' color='primary'>
              Informe Técnico y Resolución Sanitaria.
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              sx={{ fontWeight: 400, mt: 2 }}
            >
              Al finalizar cada servicio, entregamos un dossier técnico completo
              que avala la limpieza y cumple con los requerimientos de los
              organismos fiscalizadores.
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              {DATA_TECHNICAL_REPORT.map((item, index) => (
                <Stack
                  key={index}
                  direction='row'
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 3,

                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? 'background.paper'
                        : '#eceeef',
                  }}
                >
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant='body1'
                    color='primary.main'
                    sx={{ fontWeight: 700 }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              component={Link}
              href='/docs/informe'
              variant='outlined'
              size='large'
              color='secondary'
              endIcon={<ArrowRight />}
              sx={{
                mt: 4,
                borderColor: 'secondary.main',
                bgcolor: 'secondary.main',
                color: 'white',
                border: '1px solid',
                display: { xs: 'none', md: 'inline-flex' },
                '&:active': { transform: 'scale(0.95)' },
                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                  border: '1px solid',
                },
              }}
            >
              Leer Más
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', lg: '50%' },
              position: 'relative',
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 6, lg: 8 },
            }}
          >
            <Box
              component='img'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuB7EfpOfV2BOWuOTAUVv_vvmbHdjnUEVWjI_DJQPU73qDyu-U_Z9Dg24QiEVpRUexOz1Lkg7YfK54UVAwfoBgJKdz1qDjdFXCaITEydw06wIlbgiLAe1wISlze4bAdZDOBFGkXJXKNwvUyXB1vjlbiRjcA17XcnEddR5JHstm-iqzRKQtoixDubjdnh8KWh93CFsL9_a5bJUaeoJV38h48wTtvY7RfACzOB8Zi23oTcUjhhYPen38ezaaaKaiyhxHUurvUExHX3BAZ_'
              alt='Technical maintenance report'
              sx={{
                borderRadius: 3,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'rotate(2deg)',
                width: '100%',
                maxWidth: 400,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: 'rgba(0, 51, 69, 0.2)',
                backdropFilter: 'blur(4px)',
                pointerEvents: 'none',
              }}
            />
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
