# SEO + AEO + GEO — implementación

## SEO técnico
- `lang="es"` y viewport responsive.
- Un título específico por página.
- Meta description específica por página.
- `robots` index/follow.
- Open Graph y Twitter Card.
- HTML semántico con `header`, `main`, `section`, `article`.
- Jerarquía de encabezados.
- Enlaces internos descriptivos.
- Imágenes de fondo locales para el contenido visual principal.
- Iframes Lottie con títulos accesibles y lazy loading cuando no son contenido principal.
- CSS y JS compartidos para reducir duplicación.

## AEO
La arquitectura presenta respuestas directas y escaneables:
- Qué servicio se ofrece.
- Qué incluye.
- Beneficios o alcance descrito en el material original.
- Guías separadas para Atención Personalizada, Respuesta Rápida y Garantía de Servicio.

No se añadió FAQ Schema porque el material original no contiene preguntas y respuestas suficientemente completas para justificarlo.

## GEO / búsqueda local
Se mantiene la ubicación explícita disponible en el material: San Pedro Sula, Honduras.
La página incluye datos estructurados `LocalBusiness` sin inventar horarios, dirección postal, reseñas, coordenadas ni perfiles sociales.

## Pendiente para publicación
Cuando exista el dominio definitivo:
- Añadir `rel="canonical"` con URLs absolutas.
- Crear `sitemap.xml` con URLs absolutas.
- Añadir el sitemap a `robots.txt`.
- Verificar Search Console y el informe de datos estructurados.
- Completar perfiles sociales reales si se desea incluir `sameAs`.
