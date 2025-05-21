document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const socialLinks = document.querySelector('.social-links');
    const header = document.querySelector('header');

    if (menuToggle && socialLinks) {
        menuToggle.addEventListener('click', function () {
            socialLinks.classList.toggle('open');
            menuToggle.classList.toggle('active');
            header.classList.toggle('menu-open');
        });

        // Fecha o menu ao clicar em um link no mobile
        document.querySelectorAll('.social-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    socialLinks.classList.remove('open');
                    menuToggle.classList.remove('active');
                    header.classList.remove('menu-open');
                }
            });
        });
    }
});