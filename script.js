document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    
    // Navbar background blur effect on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Auto-close nav when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other active items
                document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });
                
                // Open the clicked one if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});
