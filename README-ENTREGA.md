# TechServicesPAU — entrega final

## Qué se corrigió

- Se consolidaron los estilos duplicados en `estilo/style.css`.
- Se retiraron scripts inline y estilos inline de las páginas finales.
- Se corrigieron rutas inconsistentes que apuntaban a `index.html`; el inicio real queda en `menu.html`.
- `index.html` ahora contiene la página principal completa; se eliminó la redirección intermedia que podía provocar un destello/pantalla blanca antes de llegar a `menu.html`.
- Se corrigió el HTML mal formado de Ciberseguridad.
- Se eliminaron referencias rotas a `likeCount` y el carácter suelto `C` de los scripts antiguos.
- El botón "Me Gusta" funciona con estado local y accesible; no almacena datos personales.
- Se añadió menú móvil responsive, dropdown accesible, foco visible y `prefers-reduced-motion`.
- Se añadió un parallax ligero sin librerías y un efecto spotlight en tarjetas.
- Los iframes Lottie conservan sus animaciones y usan carga diferida donde no son contenido principal.
- Se añadieron metadatos SEO básicos, Open Graph/Twitter y JSON-LD de organización.
- Se incorporó estructura semántica con `header`, `main`, `section`, `article`, headings jerárquicos y enlaces descriptivos.
- Se añadieron cabeceras de seguridad para Apache en `.htaccess`.
- Se añadió `.well-known/security.txt`.
- Se conservaron las imágenes entregadas y se generó una versión transparente optimizada del logo.

## Puntos que requieren configuración antes de publicar

1. El teléfono `+504 0000-0000` procede del material original y parece un dato de ejemplo. Sustitúyelo por el número real antes de publicar.
2. Los enlaces de Facebook, Instagram y WhatsApp no estaban definidos en los archivos originales; se dejaron como "enlace pendiente" para no inventar destinos externos.
3. El formulario original no tenía un endpoint de servidor. La entrega valida localmente, pero no simula un envío. Antes de producción, conecta `action` a un backend HTTPS propio o a un proveedor de formularios de confianza.
4. `sitemap.xml` no se generó porque no se proporcionó el dominio público definitivo. Cuando exista, añádelo a `robots.txt` y genera URLs absolutas.
5. `.htaccess` está preparado para Apache. Si el hosting usa Nginx, Cloudflare Pages, GitHub Pages, Netlify, Vercel u otro sistema, las cabeceras deben trasladarse a su configuración equivalente.

## Seguridad

La política CSP permite únicamente:
- recursos propios;
- Font Awesome 6.4.0 desde cdnjs con SRI;
- frames de `lottie.host`;
- el JSON-LD autorizado por hash;
- JavaScript propio.

El sitio no contiene secretos, tokens, contraseñas ni credenciales de API.

## SEO / AEO / GEO

La entrega prioriza contenido HTML visible, respuestas directas, títulos y descripciones específicos, enlaces internos descriptivos y datos estructurados básicos. Para SEO local/GEO se conserva la información explícita disponible: San Pedro Sula, Honduras. No se inventaron horarios, dirección postal, reseñas, redes sociales ni coordenadas.
