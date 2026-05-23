'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroPagesProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  breadcrumbs: string | BreadcrumbItem[];
  objectPosition?: string;
}

export default function HeroPages({
  backgroundImage,
  title,
  subtitle,
  breadcrumbs,
  objectPosition = 'center 25%',
}: HeroPagesProps) {
  const items =
    typeof breadcrumbs === 'string' ? [{ label: breadcrumbs }] : breadcrumbs;

  return (
    <SectionWrapper
      id="hero-page"
      className="p-0 relative h-[50vh] md:h-[450px] flex items-center overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-30">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-4">
          <nav className="flex text-white/80 text-sm md:text-base mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              {items.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-white mx-1" />
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-secondary font-semibold">
                        {item.label}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-7xl font-semibold leading-tight">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-secondary mt-4 max-w-3xl text-xl md:text-2xl font-normal italic">
                {subtitle}
              </h2>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
