// Función para manejar la visibilidad del menú en dispositivos pequeños
const menuCheckbox = document.getElementById('menu');
const navbar = document.querySelector('.menu .navbar');

menuCheckbox.addEventListener('change', function() {
    if (this.checked) {
        navbar.style.display = 'block'; // Muestra el menú
    } else {
        navbar.style.display = 'none'; // Oculta el menú
    }
});
// Función para realizar un scroll suave al hacer clic en los enlaces
const links = document.querySelectorAll('.navbar ul li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Esto activa el scroll suave
        });
    });
});
// Validación del formulario de contacto
const form = document.querySelector('footer form');
const nombreInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', function(event) {
    if (nombreInput.value === "" || emailInput.value === "") {
        event.preventDefault(); // Prevenir el envío del formulario si los campos están vacíos
        alert("Por favor, complete todos los campos.");
    } else {
        alert("¡Formulario enviado con éxito!");
    }
});
// Ocultar el menú al hacer scroll hacia abajo y mostrarlo al subir
let lastScrollTop = 0;
const navbarMenu = document.querySelector('.menu');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        navbarMenu.style.top = "-80px"; // Se oculta la barra de navegación
    } else {
        navbarMenu.style.top = "0"; // Se muestra la barra de navegación
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar un valor negativo
});
