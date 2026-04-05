/**
 * AYIRAW TECH - Main JavaScript
 * Handles navigation, simple animations, and mobile menu interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initFormPlaceholders();
});

/**
 * Mobile Navigation Logic
 */
function initNavigation() {
    const menuBtn = document.querySelector('[data-menu-toggle]');
    const mobileNav = document.getElementById('mobile-menu');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('hidden');
        });
    }
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-precision');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Demo Video / Modal Logic (Placeholder)
 */
window.playDemoVideo = function() {
    console.log("Initializing Puttu Maker Demo Video...");
    alert("Industrial Demo Video is being prepared. Contact sales for a full technical briefing.");
};
