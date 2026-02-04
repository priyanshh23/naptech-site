document.addEventListener('DOMContentLoaded', () => {
    // 1. Staggered Fade-in Animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is full view
    });

    fadeElements.forEach(el => observer.observe(el));

    // 2. Header Scroll Effect (Glassmorphism shrink)
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                header.style.boxShadow = "var(--shadow-sm)";
            } else {
                header.classList.remove('scrolled');
                header.style.boxShadow = "none";
            }
        });
    }

    // 3. Add stagger delay classes automatically to grids within fade-in sections
    // This makes children animate in one by one
    const grids = document.querySelectorAll('.fade-in > div[style*="display: grid"], .fade-in > .container > div[style*="display: grid"]');
    grids.forEach(grid => {
        Array.from(grid.children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 100}ms`; // 0ms, 100ms, 200ms...
            child.classList.add('fade-in'); // Ensure children also fade if parent does
            observer.observe(child); // Observation needs to be on children for staggered effect to look best
        });
    });
});
