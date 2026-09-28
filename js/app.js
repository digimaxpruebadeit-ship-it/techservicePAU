/* TechServicesPAU - interacción ligera y accesible */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Menú móvil + dropdown accesible.
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".nav-toggle");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  if (navbar && navToggle) {
    navToggle.addEventListener("click", () => {
      const open = navbar.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      if (window.innerWidth <= 900) {
        event.preventDefault();
        const open = dropdown.classList.toggle("is-open");
        dropdownToggle.setAttribute("aria-expanded", String(open));
      }
    });
  }

  document.addEventListener("click", (event) => {
    if (navbar && !navbar.contains(event.target)) {
      navbar.classList.remove("menu-open");
      navToggle?.setAttribute("aria-expanded", "false");
      dropdown?.classList.remove("is-open");
      dropdownToggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll(".nav-links a:not(.dropdown-toggle), .dropdown-content a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar?.classList.remove("menu-open");
      navToggle?.setAttribute("aria-expanded", "false");
      dropdown?.classList.remove("is-open");
      dropdownToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Parallax muy ligero: no usa librerías y se desactiva con reduced motion.
  if (!prefersReducedMotion) {
    const parallaxHero = document.querySelector("[data-parallax]");
    if (parallaxHero) {
      let ticking = false;
      const updateParallax = () => {
        const rect = parallaxHero.getBoundingClientRect();
        const speed = Number(parallaxHero.dataset.parallaxSpeed || 0.12);
        const offset = Math.max(-36, Math.min(36, -rect.top * speed));
        parallaxHero.style.setProperty("--parallax-y", `${offset}px`);
        ticking = false;
      };
      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });
      updateParallax();
    }
  }

  // Efecto spotlight sobre tarjetas: se actualiza solo mientras el puntero está encima.
  if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".card, .feature-card, .info-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }, { passive: true });
    });
  }

  // Botones de "Me gusta": estado local, sin almacenar datos sensibles.
  document.querySelectorAll("[data-like]").forEach((button) => {
    button.addEventListener("click", () => {
      const liked = button.classList.toggle("liked");
      button.setAttribute("aria-pressed", String(liked));
    });
  });

  // Evita aparentar que el formulario se envía cuando no existe un backend configurado.
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "Formulario validado localmente. Antes de publicar, conecta este formulario a un endpoint HTTPS de confianza.";
        status.hidden = false;
      }
    });
  });
})();
