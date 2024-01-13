document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    // Variables globales
    let scrolled = 0;
    const navHeader = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.main-nav-links li a');
    const navLogo = document.querySelector('.logo img');
    const navBurger = document.querySelector('.burger-icon');

    // Écouteur d'événement pour le défilement
    document.addEventListener('scroll', handleScroll);

    // Écouteur d'événement pour le chargement du DOM
    handleScroll(); // Appeler la fonction handleScroll une fois au chargement pour mettre à jour l'apparence initiale

    // Autres écouters d'événements...
    const burgerIcon = document.querySelector('.burger-icon');
    const menuSlide = document.querySelector('.menu-slide');
    const body = document.querySelector('body');

    burgerIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        menuSlide.classList.toggle('on');
    });

    body.addEventListener('click', function () {
        menuSlide.classList.remove('on');
    });

    menuSlide.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Initialiser SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200,
        offset: 80
    });

    // Fonction pour gérer le défilement
    function handleScroll() {
        scrolled = window.scrollY;

        if (scrolled >= 200) {
            navHeader.style.backgroundColor = '#fff';
            navHeader.style.position = 'fixed';
            navHeader.style.top = '0';

            navLogo.src = "assets/images/logo-black.png";
            navBurger.style.color = "#101010";

            navHeader.classList.add('scrolled');
        } else {
            navHeader.style.backgroundColor = '';
            navHeader.style.position = '';
            navHeader.style.top = '';

            navLogo.src = "assets/images/logo-white.png";
            navBurger.style.color = "#fff";

            navHeader.classList.remove('scrolled');
        }
    }

    // Autres fonctions...
    $(document).ready(function () {
        $(".burger").click(function () {
            $(".slide-bar").animate({
                right: '0',
            }, 250);
        });

        $(".close-menu").click(function () {
            $(".slide-bar").animate({
                right: '-500px',
            }, 250);
        });
    });
});
