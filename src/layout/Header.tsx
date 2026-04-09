'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

const DATA_MENU = [
  { label: 'Nosotros', target: 'about-us' },
  { label: 'Servicios', target: 'services' },
  { label: 'Cómo', target: 'how-we-work' },
  { label: 'Normativa', target: 'regulations' },
  { label: 'Galería', target: 'gallery' },
  { label: 'Complementarios', target: 'complementary-services' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component='nav'
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        bgcolor:
          theme.palette.mode === 'dark'
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow:
          theme.palette.mode === 'dark'
            ? 'none'
            : '0 10px 15px -3px rgba(15, 23, 42, 0.05)',
        py: 2,
      }}
    >
      <Container maxWidth='lg'>
        <Stack
          direction='row'
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box sx={{ width: { xs: 140, md: 180 }, display: 'flex' }}>
            <Image
              src='/assets/logos/logo-altamira-limpieza-ductos-small.png'
              alt='Altamira Ductos Logo'
              width={854}
              height={285}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </Box>

          {!isMobile && (
            <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
              {DATA_MENU.map((item) => (
                <Typography
                  variant='subtitle1'
                  key={item.target}
                  component='a'
                  href={`#${item.target}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleLinkClick(e, item.target)
                  }
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          )}

          <Button
            variant='contained'
            color='secondary'
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleLinkClick(e, 'contact')
            }
            sx={{
              fontWeight: 700,
              boxShadow: '0 10px 15px -3px rgba(211, 47, 47, 0.2)',
              '&:active': { transform: 'scale(0.95)' },
              display: { xs: 'none', md: 'inline-flex' },
            }}
          >
            Solicitar evaluación técnica
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
