//menu hamburguer
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    const banner = document.querySelector('.banner');

    // Alternar la visibilidad del menú
    const menuIsActive = navLinks.classList.toggle('show');

    // Aplicar clase 'hide' al banner basado en el estado del menú
    if (menuIsActive) {
        banner.classList.add('hide'); // Oculta el banner cuando el menú está activo
        document.body.classList.remove('menu-open');
    } else {        
        banner.classList.remove('hide'); // Muestra el banner cuando el menú está inactivo
        document.body.classList.add('menu-open');
    }
});


document.querySelector('.menu-toggle').addEventListener('click', function () {
    // Alternar la clase del menú
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');

    // Alternar la visibilidad del banner
    const banner = document.querySelector('.banner');
    banner.classList.toggle('hide');
});

//Row display
document.getElementById('toggleButton').addEventListener('click', function () {
    const wrap = document.querySelector('.wrap');

    if (wrap.style.display === 'none' || wrap.style.display === '') {
        wrap.style.display = 'flex'; // Muestra el div como flex
        setTimeout(() => {
            wrap.style.opacity = '1'; // Cambia la opacidad para la animación
        }, 10);
    } else {
        wrap.style.opacity = '0'; // Cambia la opacidad para ocultar
        setTimeout(() => {
            wrap.style.display = 'none'; // Oculta el div después de la animación
        }, 500);
    }
});

//scroll selection
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los enlaces de clase 'language' en el contenedor 'wrap'
    const languageLinks = document.querySelectorAll(".wrap .language");

    // Añade un evento de clic a cada enlace
    languageLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace

            // Obtén el valor del atributo data-lang para saber a qué sección desplazarse
            const lang = link.getAttribute("data-lang");
            const targetDiv = document.querySelector(`.suitcase .${lang}`);

            // Oculta otros divs, excepto el que se ha hecho clic
            document.querySelectorAll(".suitcase > div").forEach(div => {
                if (div !== targetDiv) {
                    div.style.display = "none";
                }
            });

            // Alterna la visibilidad del div específico
            if (targetDiv.style.display === "none" || !targetDiv.style.display) {
                targetDiv.style.display = "block"; // Muestra el div
                targetDiv.scrollIntoView({ behavior: "smooth" }); // Hace scroll hacia el div
            } else {
                targetDiv.style.display = "none"; // Oculta el div si está visible
            }
        });
    });
});

//scroll selection Row
document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = document.getElementById("toggleButton");

    // Añade un evento de clic a la imagen
    toggleButton.addEventListener("click", () => {
        const wrapSection = document.querySelector(".wrap");
        wrapSection.scrollIntoView({ behavior: "smooth" });
    });
});