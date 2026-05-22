import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

// ...

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
// ... (rest of metadata stays same)
  metadataBase: new URL('https://altamiraductos.cl'),
  alternates: {
    canonical: '/',
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

import { ConditionalHeader } from '@/layout/ConditionalHeader';
import { ConditionalFooter } from '@/layout/ConditionalFooter';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Altamira Ductos',
    image: 'https://altamiraductos.cl/assets/logos/logo-rivascode-cuadrado-small.png',
    description:
      'Empresa con resolución sanitaria especialista en limpieza, mantención y sanitización de sistemas de ductos verticales y horizontales.',
    url: 'https://altamiraductos.cl',
    areaServed: 'CL',
  };

  return (
    <html lang='es' className={inter.variable}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5F4NBTGQ');`,
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col relative bg-background text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F4NBTGQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <div className="sticky top-0 z-[1100]">
          <ConditionalHeader />
        </div>
        
        <main className="flex-grow relative z-1">
          {children}
        </main>
        
        <div className="px-4 md:px-8 lg:px-12 py-8 relative z-1 border-t border-border">
          <ConditionalFooter />
        </div>
        
        <WhatsAppFab />
        <SpeedInsights />
      </body>
    </html>
  );
}
