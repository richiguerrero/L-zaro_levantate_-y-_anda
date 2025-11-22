
/**********************************************
 *  REFERENCIAS EN EL DOM
 **********************************************/
const header = document.getElementById("header");
const aboutSection = document.querySelector("#about");
const portfolioItems = document.querySelectorAll("#portfolio .item");

// Formulario de contacto
const contactForm = document.querySelector("#contact form");
const botonForm = document.getElementById("boton_form");

/**********************************************
 *  VALIDACIÓN DE FORMULARIO
 **********************************************/
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "") {
    alert("El campo de nombre no puede estar vacío.");
    return false;
  }
  if (email === "") {
    alert("El campo de correo no puede estar vacío.");
    return false;
  }
  if (mensaje === "") {
    alert("El campo de mensaje no puede estar vacío.");
    return false;
  }

  return true;
}

/**********************************************
 *  LIGHTBOX: REFERENCIAS
 **********************************************/
const lightboxOverlay = document.querySelector(".lightbox-overlay");
const lightboxImage = document.querySelector(".lightbox-image");

// Abrir lightbox
function openLightbox(element) {
  const fullSrc = element.getAttribute("data-full-src");
  lightboxImage.src = fullSrc;
  lightboxOverlay.classList.add("active");
}

// Cerrar lightbox
function closeLightbox() {
  lightboxOverlay.classList.remove("active");

  // Esperar la transición antes de limpiar la imagen
  setTimeout(() => {
    lightboxImage.src = "";
  }, 300); // coincide con tu transition CSS
}

// Cerrar al hacer clic fuera de la imagen
lightboxOverlay.addEventListener("click", (event) => {
  if (event.target === lightboxOverlay) {
    closeLightbox();
  }
});

// Cerrar con la tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightboxOverlay.classList.contains("active")) {
    closeLightbox();
  }
});
