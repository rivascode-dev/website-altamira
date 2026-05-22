'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const DATA_MENU = [
  { label: 'Nosotros', target: '/nosotros' },
  { label: 'Servicios', target: '/servicios' },
  { label: 'Porqué Limpiar?', target: '/preguntas-frecuentes' },
  { label: 'Evita Multas', target: '/evita-multas' },
  { label: 'Galería', target: '/galeria' },
  { label: 'Promociones', target: '/promociones' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
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
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
    target: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (target.startsWith('/')) {
      router.push(target);
    } else {
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
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4 border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div
            onClick={handleLogoClick}
            className="w-[120px] sm:w-[140px] md:w-[180px] cursor-pointer transition-transform duration-200 active:scale-95"
          >
            <Image
              src="/assets/logos/logo-altamira-limpieza-ductos-chile.png"
              alt="Altamira Ductos Logo"
              width={250}
              height={84}
              sizes="(max-width: 768px) 150px, 250px"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {DATA_MENU.map((item) => (
              <a
                key={item.target}
                href={item.target}
                onClick={(e) => handleLinkClick(e, item.target)}
                className="font-semibold text-primary hover:text-secondary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="lg"
              className="hidden lg:inline-flex"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Solicitar evaluación técnica
            </Button>

            <button
              className="lg:hidden p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
              onClick={toggleMenu(true)}
              aria-label="Abrir menú"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={toggleMenu(false)}
        />
      )}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div
              onClick={handleLogoClick}
              className="w-[140px] cursor-pointer transition-transform duration-200 active:scale-95"
            >
              <Image
                src="/assets/logos/logo-altamira-limpieza-ductos-chile.png"
                alt="Altamira Ductos Logo"
                width={200}
                height={67}
                sizes="200px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <button onClick={toggleMenu(false)} className="p-2 text-secondary hover:bg-secondary/10 rounded-full transition-colors">
              <X size={28} />
            </button>
          </div>

          <div className="h-px bg-border my-2" />

          <div className="flex-1 overflow-y-auto py-8">
            <ul className="space-y-8">
              {DATA_MENU.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={(e) => handleLinkClick(e, item.target)}
                    className="w-full text-left text-lg text-primary hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border my-4" />

          <div className="space-y-4 pb-4">
            <Button
              variant="secondary"
              className="w-full font-bold"
              size="lg"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Solicitar evaluación técnica
            </Button>

            <a
              href="https://wa.me/56997902704"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold h-12 px-8 rounded-md transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Urgencias
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
