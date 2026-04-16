'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowBigLeft, Menu } from 'lucide-react';
import { Box, Drawer, useTheme, useMediaQuery } from '@mui/material';
import { Sidebar } from './components/Sidebar';

interface Doc {
  slug: string;
  title: string;
  order: number;
}

interface LayoutProps {
  docs: Doc[];
  children?: React.ReactNode;
}

export function ArticleLayout({ docs, children }: LayoutProps) {
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
          <Sidebar docs={docs} />
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
          <Sidebar docs={docs} onClose={closeSidebar} />
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
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              p: 2,
            }}
          >
            <Link href='/' style={{ textDecoration: 'none' }}>
              <ArrowBigLeft color='#D32F2F' size={40} />
            </Link>

            <Box onClick={toggleSidebar}>
              <Menu color='#D32F2F' size={35} />
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
