document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
});