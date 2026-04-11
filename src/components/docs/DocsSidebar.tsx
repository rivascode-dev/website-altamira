'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Image from 'next/image';
import {
  Box,
  Typography,
  alpha,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface Doc {
  slug: string;
  title: string;
  order: number;
}

interface DocsSidebarProps {
  docs: Doc[];
  children?: React.ReactNode;
}

const SidebarContent = ({ docs, onClose }: { docs: Doc[]; onClose?: () => void }) => {
  const pathname = usePathname();
  const sortedDocs = [...docs].sort((a, b) => a.order - b.order);

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 320 },
        borderRight: { xs: 'none', md: '1px solid' },
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'relative',
        }}
      >
        {onClose && (
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: { md: 'none' },
              color: 'text.secondary',
            }}
          >
            <X size={24} />
          </IconButton>
        )}

        <Link href='/' style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'secondary.main',
              '&:hover': {
                opacity: 0.8,
                transform: 'translateX(-4px)',
              },
              transition: 'all 0.2s ease-in-out',
              mb: 4,
            }}
          >
            <ArrowLeft size={20} />
            <Typography
              variant='subtitle2'
              sx={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Volver al inicio
            </Typography>
          </Box>
        </Link>

        <Typography variant='h6' color='primary.main' sx={{ fontWeight: '800' }}>
          DOCUMENTACIÓN
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Box component='nav' sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {sortedDocs.map((doc) => {
            const cleanSlug = doc.slug.replace(/^docs\//, '');
            const href = `/docs/${cleanSlug}`;
            const isExactActive = pathname === href || pathname === `${href}/`;
            const isDefaultActive =
              (pathname === '/docs' || pathname === '/docs/') &&
              doc.order === 1;
            const isActive = isExactActive || isDefaultActive;

            return (
              <Link
                key={doc.slug}
                href={href}
                style={{ textDecoration: 'none' }}
                onClick={handleLinkClick}
              >
                <Box
                  sx={(theme) => ({
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    bgcolor: isActive
                      ? alpha(theme.palette.primary.main, 0.08)
                      : 'transparent',
                    color: isActive ? 'primary.main' : 'text.secondary',
                    fontWeight: isActive ? 700 : 500,
                    borderLeft: isActive
                      ? `4px solid ${theme.palette.primary.main}`
                      : '4px solid transparent',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  })}
                >
                  {doc.title}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>

      <Box sx={{ p: 4, borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src='/assets/logos/logo-altamira-limpieza-ductos-small.png'
            alt='Altamira Ductos Logo'
            width={854}
            height={285}
            style={{ width: '70%', height: 'auto' }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export function DocsSidebar({ docs, children }: DocsSidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      {!isMobile && (
        <Box sx={{ flexShrink: 0 }}>
          <SidebarContent docs={docs} />
        </Box>
      )}

      {isMobile && (
        <Drawer
          anchor='left'
          open={isSidebarOpen}
          onClose={closeSidebar}
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
          <SidebarContent docs={docs} onClose={closeSidebar} />
        </Drawer>
      )}

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {isMobile && (
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'background.default',
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={toggleSidebar}
              color='primary'
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.1) },
              }}
            >
              <Menu size={24} />
            </IconButton>
            <Box
              sx={{
                ml: 2,
                fontWeight: 800,
                color: 'primary.main',
                fontSize: '0.9rem',
                letterSpacing: 1,
              }}
            >
              MENÚ DE DOCUMENTACIÓN
            </Box>
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 8, lg: 10 },
            overflowY: 'auto',
            bgcolor: isMobile ? 'background.default' : '#fafafa',
          }}
        >
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
