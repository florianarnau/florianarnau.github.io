document.addEventListener('DOMContentLoaded', function () {

    AOS.init();

    let scrolled = 0;
    const navHeader = document.getElementById('header');

    document.addEventListener('scroll', handleScroll);
    handleScroll();

    function handleScroll() {
        scrolled = window.scrollY;

        if (scrolled >= 1080) {
            navHeader.style.position = 'fixed';
            navHeader.style.top = '0';

            navHeader.classList.add('scrolled-header-shadow');
        } else {
            navHeader.style.position = '';
            navHeader.style.top = '';

            navHeader.classList.remove('scrolled-header-shadow');
        }
    }
});