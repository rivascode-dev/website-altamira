import MuiRootProvider from '@/providers/MuiRootProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://altamira-ductos.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CL': '/es-CL',
    },
  },
  title: 'Altamira Ductos | Soluciones en Limpieza de Ductos',
  description:
    'Portafolio profesional de Altamira Ductos - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
  icons: {
    icon: '/assets/logos/logo-rivascode-cuadrado-small.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altamira Ductos | Soluciones en Limpieza de Ductos',
    description:
      'Portafolio profesional de Altamira Ductos - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
  openGraph: {
    title: 'Altamira Ductos | Soluciones en Limpieza de Ductos',
    description:
      'Portafolio profesional de Altamira Ductos - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body>
        <MuiRootProvider>{children}</MuiRootProvider>
      </body>
    </html>
  );
}
