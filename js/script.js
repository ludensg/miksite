function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex' || navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle for mobile
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.getElementById('nav-links');
    menuIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (navLinks.style.display === 'flex' || navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }

    // Header background change on scroll
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero-section');

    // Function to check scroll position
    function checkScroll() {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= heroHeight) {
            // User has scrolled past the hero section
            header.classList.remove('transparent');
            header.classList.add('scrolled');
        } else {
            // User is within the hero section
            header.classList.remove('scrolled');
            header.classList.add('transparent');
        }
    }

    // Initial check
    checkScroll();

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
});
