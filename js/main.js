document.querySelectorAll('.wrap a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Obtener el contenido correspondiente
        let languageClass = ""; // Variable para almacenar la clase del contenido

        if (this.nextElementSibling.textContent.trim() === "Español") {
            languageClass = "esp";
        } else if (this.nextElementSibling.textContent.trim() === "Português") {
            languageClass = "pt";
        } else if (this.nextElementSibling.textContent.trim() === "Français") {
            languageClass = "fr";
        }

        const contentToShow = document.querySelector(`.${languageClass}`);

        // Comprobar si el contenido ya está visible
        if (contentToShow.style.display === 'block') {
            contentToShow.style.display = 'none'; // Ocultar el contenido si ya está visible
        } else {
            // Ocultar todos los contenidos
            document.querySelectorAll('.suitcase > div').forEach(div => {
                div.style.display = 'none'; // Ocultar todos los contenidos
            });
            // Mostrar el contenido correspondiente
            contentToShow.style.display = 'block';
        }
    });
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const banner = document.querySelector('.banner');

    // Alternar la visibilidad del menú
    const menuIsActive = navLinks.classList.toggle('show');

    // Aplicar clase 'hide' al banner basado en el estado del menú
    if (menuIsActive) {
        banner.classList.add('hide'); // Oculta el banner cuando el menú está activo
    } else {
        banner.classList.remove('hide'); // Muestra el banner cuando el menú está inactivo
    }
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Alternar la clase del menú
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');

    // Alternar la visibilidad del banner
    const banner = document.querySelector('.banner');
    banner.classList.toggle('hide');
});