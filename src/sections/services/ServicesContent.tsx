

import ServiceItem from '@/sections/services/ServiceItem';
import EmergenciesSection from '@/sections/services/EmergenciesSection';
import ContactSection from '@/sections/home/ContactSection';

export default function ServicesContent() {
  return (
    <>
      <ServiceItem
        id="limpieza-mantenimiento"
        title="Limpieza y Mantención de Ductos"
        image="/assets/images/gallery/altamira-ductos-verticales-3.jpg"
        imageAlt="Limpieza y Mantención de Ductos"
        quote="Un ducto limpio no se ve… pero se nota cuando falla"
        className="bg-white dark:bg-background"
        content={
          <>
            <p>
              En nuestra empresa entendemos que la limpieza y mantención de las
              infraestructuras sanitarias es un factor clave para el correcto
              funcionamiento, la seguridad y la durabilidad de cualquier
              edificación.
            </p>
            <p>
              Por ello, nuestro servicio principal está enfocado en la limpieza
              especializada de ductos verticales, horizontales, redes de
              alcantarillado, ductos y salas de basura abordando no solo la
              resolución de problemáticas inmediatas, sino también la prevención
              de obstrucciones, emergencias sanitarias y daños a largo plazo.
            </p>
            <p>
              Para ello, utilizamos tecnología de alto rendimiento, como
              maquinaria de vibración espiral, equipos Hydrojet de alta presión
              (hasta 3.100 PSI) y sistemas de videoinspección profesional, lo
              que nos permite ejecutar trabajos precisos, controlados y
              completamente verificables.
            </p>
            <p>
              Nuestro enfoque técnico y preventivo garantiza resultados
              confiables, eficientes y dentro de las normativas exigidas por
              SEREMI, contribuyendo a la continuidad operativa de las
              instalaciones y a la tranquilidad de administradores, comités y
              residentes.
            </p>
          </>
        }
      />

      <ServiceItem
        id="ductos-verticales-horizontales"
        title="Ductos Horizontales, Verticales y Alcantarillado"
        image="/assets/images/gallery/altamira-ductos-verticales-5.jpg"
        imageAlt="Ductos Horizontales, Verticales y Alcantarillado"
        reverse
        className="bg-gray-50 dark:bg-card"
        content={
          <>
            <p>
              Durante el proceso de mantención sanitaria, el objetivo principal
              es prevenir la formación de obstrucciones internas que afecten el
              normal funcionamiento de la red.
            </p>
            <p>
              Los ductos horizontales y verticales sanitarios tienden a
              acumular, con el paso del tiempo, borra orgánica, grasa, sebo,
              sarro y residuos propios del uso doméstico, los cuales se adhieren
              a las paredes internas de las tuberías y reducen progresivamente
              su diámetro útil (lumen).
            </p>
            <p className="font-semibold text-foreground">
              Si estos ductos no reciben una limpieza periódica, dicha
              acumulación puede generar atascamientos parciales o totales,
              provocando:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Rebalses de aguas servidas.</li>
              <li>Retornos por artefactos sanitarios.</li>
              <li>Filtraciones.</li>
              <li>Daños a departamentos y estructuras del edificio.</li>
            </ul>
            <p className="mt-4">
              La limpieza técnica de ductos sanitarios y redes de alcantarillado
              permite restablecer el flujo normal, prolongar la vida útil de la
              red y reducir significativamente el riesgo de emergencias
              sanitarias.
            </p>
          </>
        }
      />

      <ServiceItem
        id="aguas-lluvias"
        title="Sistemas de Aguas Lluvias"
        image="/assets/images/gallery/altamita-ductos-alcantarillado-4.jpg"
        imageAlt="Sistemas de Aguas Lluvias"
        quote="Prevención hoy, tranquilidad mañana"
        className="bg-white dark:bg-background"
        content={
          <>
            <p>
              Los ductos de aguas lluvias cumplen un rol fundamental en la
              evacuación eficiente del agua proveniente de lluvias, terrazas,
              cubiertas y áreas exteriores del edificio.
            </p>
            <p>
              Este tipo de ductos suele verse afectado por la acumulación de
              hojas, ramas, tierra, sedimentos, nidos de aves y residuos
              arrastrados por el viento, especialmente en edificaciones de gran
              altura o con áreas verdes cercanas.
            </p>
            <p className="font-semibold text-foreground">
              La falta de mantención en los sistemas de aguas lluvias puede
              generar:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Saturación de la red.</li>
              <li>Rebalses en terrazas y cubiertas.</li>
              <li>Filtraciones hacia muros y losas.</li>
              <li>Daños estructurales y deterioro de terminaciones interiores.</li>
            </ul>
            <p className="mt-4">
              La limpieza preventiva de estos ductos es clave para evitar
              emergencias durante períodos de lluvia, asegurando una correcta
              evacuación del agua y protegiendo la infraestructura del edificio.
            </p>
          </>
        }
      />

      <ServiceItem
        id="salas-basura"
        title="Limpieza, Mantención y Sanitización de Ductos y Salas de Basura"
        image="/assets/images/gallery/altamira-ductos-sala-basura-5.jpeg"
        imageAlt="Limpieza, Mantención y Sanitización de Ductos y Salas de Basura"
        reverse
        className="bg-gray-50 dark:bg-card"
        content={
          <>
            <p>
              Los ductos de basura y sus salas asociadas son focos de
              acumulación de residuos, humedad, bacterias y vectores sanitarios.
            </p>
            <p>
              La falta de mantención genera malos olores, obstrucciones y
              riesgos para la salud de la comunidad.
            </p>
            <p>
              Nuestro servicio interviene estos espacios de forma integral,
              recuperando condiciones sanitarias óptimas y controladas.
            </p>
            <p className="font-semibold text-foreground">
              Proceso de intervención:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>Evaluación inicial del estado del ducto y sala.</li>
              <li>Limpieza profunda con equipos de alta presión (hidrojet).</li>
              <li>Aplicación de desengrasantes y desincrustantes.</li>
              <li>Sanitización y desinfección de superficies.</li>
              <li>Control de olores y aplicación de tratamiento insecticida focalizado.</li>
            </ol>
          </>
        }
      />

      <EmergenciesSection />
      <ContactSection />
    </>
  );
}
