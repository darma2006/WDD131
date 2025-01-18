// JavaScript to handle the hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

// Toggle the visibility of the navigation menu
hamburgerMenu.addEventListener('click', () => {
    navbar.querySelector('ul').classList.toggle('show');
});

// Populate current year and last modified date dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
