'use client';
import { Stack, Typography, Box } from '@mui/material';
import ServicesHero from '@/sections/services/ServicesHero';
import ServiceItem from '@/sections/services/ServiceItem';
import EmergenciesSection from '@/sections/services/EmergenciesSection';
import ContactSection from '@/sections/home/ContactSection';

export default function ServiciosPage() {
  return (
    <main>
      <ServicesHero />

      <ServiceItem
        id='limpieza-mantenimiento'
        title='Limpieza y Mantención de Ductos'
        image='/assets/images/gallery/altamira-ductos-verticales-3.jpg'
        imageAlt='Limpieza y Mantención de Ductos'
        quote='Un ducto limpio no se ve… pero se nota cuando falla'
        content={
          <Stack spacing={2}>
            <Typography variant='body1'>
              En nuestra empresa entendemos que la limpieza y mantención de las
              infraestructuras sanitarias es un factor clave para el correcto
              funcionamiento, la seguridad y la durabilidad de cualquier
              edificación.
            </Typography>
            <Typography variant='body1'>
              Por ello, nuestro servicio principal está enfocado en la limpieza
              especializada de ductos verticales, horizontales, redes de
              alcantarillado, ductos y salas de basura abordando no solo la
              resolución de problemáticas inmediatas, sino también la prevención
              de obstrucciones, emergencias sanitarias y daños a largo plazo.
            </Typography>
            <Typography variant='body1'>
              Para ello, utilizamos tecnología de alto rendimiento, como
              maquinaria de vibración espiral, equipos Hydrojet de alta presión
              (hasta 3.100 PSI) y sistemas de videoinspección profesional, lo
              que nos permite ejecutar trabajos precisos, controlados y
              completamente verificables.
            </Typography>
            <Typography variant='body1'>
              Nuestro enfoque técnico y preventivo garantiza resultados
              confiables, eficientes y dentro de las normativas exigidas por
              SEREMI, contribuyendo a la continuidad operativa de las
              instalaciones y a la tranquilidad de administradores, comités y
              residentes.
            </Typography>
          </Stack>
        }
      />

      <ServiceItem
        id='ductos-verticales-horizontales'
        title='Ductos Horizontales, Verticales y Alcantarillado'
        image='/assets/images/gallery/altamira-ductos-verticales-5.jpg'
        imageAlt='Ductos Horizontales, Verticales y Alcantarillado'
        reverse
        bgcolor='#f8fafc'
        content={
          <Stack spacing={2}>
            <Typography variant='body1'>
              Durante el proceso de mantención sanitaria, el objetivo principal
              es prevenir la formación de obstrucciones internas que afecten el
              normal funcionamiento de la red.
            </Typography>
            <Typography variant='body1'>
              Los ductos horizontales y verticales sanitarios tienden a
              acumular, con el paso del tiempo, borra orgánica, grasa, sebo,
              sarro y residuos propios del uso doméstico, los cuales se adhieren
              a las paredes internas de las tuberías y reducen progresivamente
              su diámetro útil (lumen).
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
              Si estos ductos no reciben una limpieza periódica, dicha
              acumulación puede generar atascamientos parciales o totales,
              provocando:
            </Typography>
            <Box component='ul' sx={{ pl: 2 }}>
              <li>
                <Typography variant='body1'>
                  Rebalses de aguas servidas.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Retornos por artefactos sanitarios.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>Filtraciones.</Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Daños a departamentos y estructuras del edificio.
                </Typography>
              </li>
            </Box>
            <Typography variant='body1'>
              La limpieza técnica de ductos sanitarios y redes de alcantarillado
              permite restablecer el flujo normal, prolongar la vida útil de la
              red y reducir significativamente el riesgo de emergencias
              sanitarias.
            </Typography>
          </Stack>
        }
      />

      <ServiceItem
        id='aguas-lluvias'
        title='Sistemas de Aguas Lluvias'
        image='/assets/images/gallery/altamita-ductos-alcantarillado-4.jpg'
        imageAlt='Sistemas de Aguas Lluvias'
        quote='Prevención hoy, tranquilidad mañana'
        content={
          <Stack spacing={2}>
            <Typography variant='body1'>
              Los ductos de aguas lluvias cumplen un rol fundamental en la
              evacuación eficiente del agua proveniente de lluvias, terrazas,
              cubiertas y áreas exteriores del edificio.
            </Typography>
            <Typography variant='body1'>
              Este tipo de ductos suele verse afectado por la acumulación de
              hojas, ramas, tierra, sedimentos, nidos de aves y residuos
              arrastrados por el viento, especialmente en edificaciones de gran
              altura o con áreas verdes cercanas.
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
              La falta de mantención en los sistemas de aguas lluvias puede
              generar:
            </Typography>
            <Box component='ul' sx={{ pl: 2 }}>
              <li>
                <Typography variant='body1'>Saturación de la red.</Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Rebalses en terrazas y cubiertas.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Filtraciones hacia muros y losas.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Daños estructurales y deterioro de terminaciones interiores.
                </Typography>
              </li>
            </Box>
            <Typography variant='body1'>
              La limpieza preventiva de estos ductos es clave para evitar
              emergencias durante períodos de lluvia, asegurando una correcta
              evacuación del agua y protegiendo la infraestructura del edificio.
            </Typography>
          </Stack>
        }
      />

      <ServiceItem
        id='salas-basura'
        title='Limpieza, Mantención y Sanitización de Ductos y Salas de Basura'
        image='/assets/images/gallery/altamira-ductos-sala-basura-5.jpeg'
        imageAlt='Limpieza, Mantención y Sanitización de Ductos y Salas de Basura'
        reverse
        bgcolor='#f8fafc'
        content={
          <Stack spacing={2}>
            <Typography variant='body1'>
              Los ductos de basura y sus salas asociadas son focos de
              acumulación de residuos, humedad, bacterias y vectores sanitarios.
            </Typography>
            <Typography variant='body1'>
              La falta de mantención genera malos olores, obstrucciones y
              riesgos para la salud de la comunidad.
            </Typography>
            <Typography variant='body1'>
              Nuestro servicio interviene estos espacios de forma integral,
              recuperando condiciones sanitarias óptimas y controladas.
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
              Proceso de intervención:
            </Typography>
            <Box component='ol' sx={{ pl: 2 }}>
              <li>
                <Typography variant='body1'>
                  Evaluación inicial del estado del ducto y sala.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Limpieza profunda con equipos de alta presión (hidrojet).
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Aplicación de desengrasantes y desincrustantes.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Sanitización y desinfección de superficies.
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  Control de olores y aplicación de tratamiento insecticida
                  focalizado.
                </Typography>
              </li>
            </Box>
          </Stack>
        }
      />

      <EmergenciesSection />
      <ContactSection />
    </main>
  );
}
