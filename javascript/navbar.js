document.addEventListener("DOMContentLoaded", function (){
    // Get elements
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle menu on hamburger click
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Auto-close menu when a nav link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.warn('Navbar toggle or nav-links not found. Check your HTML IDs');
    }
});
