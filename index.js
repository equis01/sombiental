// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Language Toggle
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
    welcome: "Welcome to SOMBIENTAL",
    description: "We specialize in waste collection services using containers and hoppers.",
    explore: "Explore Services",
    footer: "&copy; 2025 SOMBIENTAL. All rights reserved.",
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    services: "Servicios",
    contact: "Contáctanos",
    welcome: "Bienvenido a SOMBIENTAL",
    description: "Nos especializamos en la recolección de residuos mediante contenedores y tolvas.",
    explore: "Explorar Servicios",
    footer: "&copy; 2025 SOMBIENTAL. Todos los derechos reservados.",
  },
};

document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
document.getElementById('es-btn').addEventListener('click', () => setLanguage('es'));

function setLanguage(lang) {
  document.querySelectorAll('.translate').forEach((element) => {
    const key = element.getAttribute('key');
    element.innerHTML = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío real del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(`Gracias, ${name}. Hemos recibido tu mensaje.`);
      contactForm.reset(); // Limpia el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
});