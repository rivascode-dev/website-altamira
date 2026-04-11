'use client';

import { usePathname } from 'next/navigation';

import { Box } from '@mui/material';
import Footer from './Footer';

export function ConditionalFooter() {
  const pathname = usePathname();

  // List of paths where the footer should NOT be shown
  const excludedPaths = ['/chat', '/docs', '/terms', '/privacy'];

  const shouldExclude = excludedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (shouldExclude) return null;

  const isHome = pathname === '/';

  if (isHome) {
    return <Footer />;
  }

  return <Footer />;
}
