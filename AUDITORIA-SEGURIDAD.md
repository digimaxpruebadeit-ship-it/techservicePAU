# Auditoría de seguridad — TechServicesPAU

## Riesgos corregidos en el código
- Se eliminaron scripts inline y el código JavaScript roto de los botones "Me Gusta".
- Se eliminaron referencias a `likeCount` inexistentes y el carácter suelto `C` presente en scripts antiguos.
- Se corrigió HTML mal formado en `ciberseguridad.html`.
- Se redujeron los destinos externos: el único frame externo que permanece es Lottie.
- Font Awesome se carga desde cdnjs con SRI.
- El formulario no envía datos a terceros por defecto.
- Los enlaces sociales que no tenían URL real no fueron inventados.

## Controles incluidos
- CSP restrictiva mediante `.htaccess`.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` bloqueando cámara, micrófono, geolocalización y pagos.
- HSTS para despliegues HTTPS.
- `Options -Indexes`.
- Redirección HTTP → HTTPS en Apache.
- `.well-known/security.txt`.
- JavaScript propio con `defer`.
- `prefers-reduced-motion`.
- Validación nativa y límites de longitud en el formulario.
- Honeypot básico contra bots.

## Riesgos que no puede resolver un HTML estático
1. El formulario necesita un backend HTTPS o proveedor de formularios confiable antes de producción.
2. El hosting debe servir correctamente MIME types y TLS.
3. Las cabeceras del `.htaccess` solo aplican si el servidor utiliza Apache y permite `mod_headers`.
4. Si el hosting es Nginx, Cloudflare Pages, Netlify, Vercel, GitHub Pages u otro, hay que trasladar la política de cabeceras a su configuración.
5. Debe sustituirse el teléfono de ejemplo y completar los perfiles sociales antes de publicar.

## Recomendación operativa
Publicar exclusivamente por HTTPS, mantener el servidor actualizado, proteger el panel de administración del hosting y revisar periódicamente dependencias externas y registros del servidor.
