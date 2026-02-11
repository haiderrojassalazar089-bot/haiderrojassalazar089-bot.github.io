/* ============================
   PORTAFOLIO SCRIPT PROFESIONAL
   Autor: Haider Rojas Salazar
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initSmoothScroll();
  initHeaderEffect();
  initGreetingButton();
});

/* ============================
   ANIMACIONES AL HACER SCROLL
   ============================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    "section, .project-card, .skill-category, .education-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
}

/* ============================
   SCROLL SUAVE EN MENÚ
   ============================ */
function initSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* ============================
   EFECTO DINÁMICO EN HEADER
   ============================ */
function initHeaderEffect() {
  const header = document.querySelector("header");

  if (!header) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.style.backgroundPositionY = `${scrollY * 0.3}px`;
  });
}

/* ============================
   BOTÓN DE SALUDO / CONTACTO
   ============================ */
function initGreetingButton() {
  const btn = document.querySelector(".greeting-btn");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "¡Buenos días! ☀️";
    } else if (hour < 18) {
      greeting = "¡Buenas tardes! 👋";
    } else {
      greeting = "¡Buenas noches! 🌙";
    }

    alert(
      `${greeting}\n\nGracias por visitar mi portafolio.\nSi te interesa trabajar conmigo, no dudes en contactarme.`
    );
  });
}

