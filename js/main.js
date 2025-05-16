document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuIcon = document.getElementById('menu-icon');
    const slideoutMenu = document.getElementById('slideout-menu');
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('searchbox');

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        if (slideoutMenu.style.opacity === '1') {
            slideoutMenu.style.opacity = '0';
            slideoutMenu.style.pointerEvents = 'none';
        } else {
            slideoutMenu.style.opacity = '1';
            slideoutMenu.style.pointerEvents = 'auto';
        }
    });

    // Toggle search box
    searchIcon.addEventListener('click', () => {
        if (searchBox.style.top === '72px') {
            searchBox.style.top = '24px';
            searchBox.style.pointerEvents = 'none';
        } else {
            searchBox.style.top = '72px';
            searchBox.style.pointerEvents = 'auto';
        }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            slideoutMenu.style.opacity = '0';
            slideoutMenu.style.pointerEvents = 'none';
        }
    });
}); 