// ===============================
// SALUDO INTERACTIVO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const btnSaludo = document.getElementById("btnSaludo");

  if (btnSaludo) {
    btnSaludo.addEventListener("click", () => {
      alert("¡Hola! 👋 Gracias por visitar mi portafolio profesional.");
    });
  }

  // ===============================
  // ANIMACIÓN SUAVE AL HACER SCROLL
  // ===============================
  const elements = document.querySelectorAll("section, .project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
});
