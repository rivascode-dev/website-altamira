import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altamiraductos.cl';

  const routes = [
    '',
    '/servicios',
    '/nosotros',
    '/galeria',
    '/promociones',
    '/preguntas-frecuentes',
    '/evita-multas',
    '/informe',
    '/condiciones',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
