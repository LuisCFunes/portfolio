const translations = {
  en: {
    "nav-about": "About Me",
    "nav-skills": "Skills",
    "nav-cert": "Certifications",
    "nav-projects": "Projects",
    "hero-bio": "Hello, I'm Luis Funes — Application Development Engineer",
    "hero-tagline": "Application Development Engineering student passionate about building clean, efficient, and user-centric applications.",
    "about-title": "About Me",
    "about-p1": "I am an Application Development Engineering student at USAP focused on software development. I am passionate about building well-structured, functional, and scalable applications using technologies like JavaScript, TypeScript, React, Node.js, Python, and relational databases.",
    "about-p2": "I enjoy solving real-world challenges through code, paying close attention to software logic, architecture, and user experience. I am looking to join an engineering team where I can contribute value, collaborate on impactful projects, and continue growing professionally.",
    "skills-title": "Skills",
    "projects-title": "Projects",
    "cert-title": "Certifications",

    // Projects
    "p1-desc": "Modern restaurant digital menu with catalog management, Turso database, Cloudinary, and automated Vitest tests.",
    "p2-desc": "Video game price comparison tool comparing authorized stores (IsThereAnyDeal API) and key shops in real time.",
    "p3-sub": "Python • CustomTkinter • Cryptography",
    "p3-desc": "Desktop 2FA authenticator for Windows with AES-256 encrypted vault, QR code scanning, and RFC 6238 codes.",
    "p4-desc": "Responsive workout timer web app for configuring custom exercise intervals, rest breaks, and routine tracking.",
    "p5-desc": "Inventory management web application with complete CRUD operations, real-time database, and product tracking.",

    // Buttons
    "btn-demo": "Live Demo",
    "btn-repo": "Repo",

    // Certifications
    "cert1-title": "Application Development Engineering",
    "cert1-sub": "2021 - Present",
    "cert2-title": "Personal Development Training",
    "cert2-sub": "2024 - Alura",
    "cert3-title": "Beginner Training in Programming Development",
    "cert3-sub": "2024 - Alura",
    "cert4-title": "Web Development from 0: HTML5, CSS3, Javascript",
    "cert4-sub": "2022 - Udemy"
  },
  es: {
    "nav-about": "Sobre Mí",
    "nav-skills": "Habilidades",
    "nav-cert": "Certificaciones",
    "nav-projects": "Proyectos",
    "hero-bio": "Hola, soy Luis Funes — Ingeniero en Desarrollo de Aplicaciones",
    "hero-tagline": "Estudiante de Ingeniería en Desarrollo de Aplicaciones apasionado por construir aplicaciones limpias, eficientes y centradas en el usuario.",
    "about-title": "Sobre Mí",
    "about-p1": "Soy estudiante de Ingeniería en Desarrollo de Aplicaciones en USAP enfocado en el desarrollo de software. Me apasiona construir aplicaciones bien estructuradas, funcionales y escalables, trabajando con tecnologías como JavaScript, TypeScript, React, Node.js, Python y bases de datos relacionales.",
    "about-p2": "Me entusiasma resolver desafíos reales a través del código, cuidando tanto la lógica y arquitectura del software como la experiencia del usuario. Busco unirme a un equipo de ingeniería donde pueda aportar valor, colaborar en proyectos de impacto y continuar creciendo profesionalmente.",
    "skills-title": "Habilidades",
    "projects-title": "Proyectos",
    "cert-title": "Certificaciones",

    // Projects
    "p1-desc": "Menú digital moderno para restaurantes con gestión de catálogo, base de datos Turso, Cloudinary y pruebas automatizadas con Vitest.",
    "p2-desc": "Comparador de precios de videojuegos entre tiendas autorizadas (API IsThereAnyDeal) y tiendas de claves en tiempo real.",
    "p3-sub": "Python • CustomTkinter • Criptografía",
    "p3-desc": "Autenticador 2FA de escritorio para Windows con bóveda cifrada en AES-256, escaneo de códigos QR y códigos RFC 6238.",
    "p4-desc": "Aplicación web responsiva para configurar intervalos de entrenamiento personalizados, descansos y seguimiento de rutinas.",
    "p5-desc": "Aplicación web de gestión de inventarios con operaciones CRUD completas, base de datos en tiempo real y catálogo de productos.",

    // Buttons
    "btn-demo": "Ver Demo",
    "btn-repo": "Repo",

    // Certifications
    "cert1-title": "Ingeniería en Desarrollo de Aplicaciones",
    "cert1-sub": "2021 - Presente",
    "cert2-title": "Formación en Desarrollo Personal",
    "cert2-sub": "2024 - Alura",
    "cert3-title": "Formación Principiante en Programación",
    "cert3-sub": "2024 - Alura",
    "cert4-title": "Desarrollo Web desde 0: HTML5, CSS3, Javascript",
    "cert4-sub": "2022 - Udemy"
  }
};

function updateLanguage(lang) {
  const selectedLang = translations[lang] ? lang : "en";
  const dict = translations[selectedLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = selectedLang;
  localStorage.setItem("preferred_lang", selectedLang);

  document.querySelectorAll(".lang-opt").forEach((opt) => {
    if (opt.getAttribute("data-lang-opt") === selectedLang) {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred_lang");
  const browserIsSpanish = (navigator.language || "").toLowerCase().startsWith("es");
  const initialLang = savedLang || (browserIsSpanish ? "es" : "en");

  updateLanguage(initialLang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentLang = document.documentElement.lang || "en";
      const nextLang = currentLang === "en" ? "es" : "en";
      updateLanguage(nextLang);
    });
  }
});
