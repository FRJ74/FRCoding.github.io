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

    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const hamburger = menuToggle.querySelector('.hamburger');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('.hamburger').classList.remove('active');
        }
    });

    // Language switcher
    const languageLinks = document.querySelectorAll('.language-switch a');
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            languageLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // Here you would typically implement language switching logic
            // For now, we'll just log the selected language
            console.log(`Switching to ${link.dataset.lang}`);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
                menuToggle.querySelector('.hamburger').classList.remove('active');
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}); 