'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  alpha,
} from '@mui/material';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const DATA_MENU = [
  { label: 'Nosotros', target: '/nosotros' },
  { label: 'Servicios', target: '/servicios' },
  { label: 'Porqué Limpiar?', target: '/preguntas-frecuentes' },
  { label: 'Evita Multas', target: '/evita-multas' },
  { label: 'Galería', target: '/galeria' },
  { label: 'Promociones', target: '/promociones' },
];

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (open: boolean) => () => {
    setIsMenuOpen(open);
  };

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsMenuOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const handleLinkClick = (
    event: React.MouseEvent<
      HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
    >,
    target: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (target.startsWith('/')) {
      router.push(target);
    } else {
      // Es un ancla dentro del home (ej. 'contact')
      if (pathname === '/') {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/#${target}`);
      }
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
          <Box
            onClick={handleLogoClick}
            sx={{
              width: { xs: 120, sm: 140, md: 180 },
              display: 'flex',
              cursor: 'pointer',
              '&:active': { transform: 'scale(0.98)' },
              transition: 'transform 0.2s',
            }}
          >
            <Image
              src='/assets/logos/logo-altamira-limpieza-ductos-chile.png'
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
                  href={item.target}
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

          <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            <Button
              variant='outlined'
              size='large'
              color='secondary'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleLinkClick(e, 'contact')
              }
              sx={{
                borderColor: 'secondary.main',
                bgcolor: 'secondary.main',
                color: 'white',
                border: '1px solid secondary.main',
                display: { xs: 'none', md: 'inline-flex' },
                '&:active': { transform: 'scale(0.95)' },
                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                  border: '1px solid',
                },
              }}
            >
              Solicitar evaluación técnica
            </Button>

            {isMobile && (
              <Box
                color='primary'
                onClick={toggleMenu(true)}
                aria-label='Abrir menú'
                // sx={{
                //   ml: 1,
                //   bgcolor: alpha(theme.palette.primary.main, 0.05),
                //   '&:hover': {
                //     bgcolor: alpha(theme.palette.primary.main, 0.1),
                //   },
                // }}
              >
                <Menu color='#D32F2F' size={35} />
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>

      {/* Menú Móvil */}
      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={toggleMenu(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            bgcolor: 'background.default',
            backgroundImage: 'none',
            borderRight: 'none',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              onClick={handleLogoClick}
              sx={{
                width: 140,
                mt: 1,
                cursor: 'pointer',
                '&:active': { transform: 'scale(0.98)' },
                transition: 'transform 0.2s',
              }}
            >
              <Image
                src='/assets/logos/logo-altamira-limpieza-ductos-chile.png'
                alt='Altamira Ductos Logo'
                width={854}
                height={285}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <IconButton onClick={toggleMenu(false)} color='primary'>
              <X size={30} color='#D32F2F' />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <List sx={{ flexGrow: 1 }}>
            {DATA_MENU.map((item) => (
              <ListItem key={item.target} disablePadding>
                <ListItemButton
                  onClick={(e) => handleLinkClick(e, item.target)}
                  sx={{
                    py: 2,
                    borderRadius: 2,
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant='subtitle1'
                        sx={{
                          //fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

          <Stack spacing={2} sx={{ mt: 'auto', pb: 2 }}>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              size='large'
              onClick={(e) => handleLinkClick(e, 'contact')}
              sx={{ fontWeight: 700, py: 1.5 }}
            >
              Solicitar evaluación técnica
            </Button>

            <Button
              variant='contained'
              color='success'
              fullWidth
              size='large'
              startIcon={<MessageCircle size={20} />}
              component='a'
              href='https://wa.me/56997902704'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                fontWeight: 700,
                py: 1.5,
                bgcolor: 'success.main',
                '&:hover': {
                  bgcolor: 'success.dark',
                },
              }}
            >
              WhatsApp Urgencias
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
