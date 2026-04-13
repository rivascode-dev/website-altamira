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
    'En Altamira nos especializamos en la limpieza, mantención y sanitización de sistemas de ductos en edificios y comunidades.',
  keywords: [
    'limpieza ductos',
    'limpieza de ductos edificios',
    'mantención de ductos',
    'mantención ductos sanitarios',
    'limpieza alcantarillado',
    'ductos verticales',
    'ductos horizontales',
    'ductos de basura',
    'salas de basura limpieza',
    'emergencias sanitarias edificios',
    'empresa limpieza ductos chile',
    'Destape',
    'Desobstrucción ductos',
    'Aguas lluvias',
  ],
  icons: {
    icon: '/assets/logos/logo-rivascode-cuadrado-small.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altamira Ductos | Soluciones en Limpieza de Ductos',
    description:
      'En Altamira nos especializamos en la limpieza, mantención y sanitización de sistemas de ductos en edificios y comunidades.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
  openGraph: {
    title: 'Altamira Ductos | Soluciones en Limpieza de Ductos',
    description:
      'En Altamira nos especializamos en la limpieza, mantención y sanitización de sistemas de ductos en edificios y comunidades.',
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
