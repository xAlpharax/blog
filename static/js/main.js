/*
 * Utils
 */

// Throttle Helper
const throttle = (callback, limit) => {
    let timeoutHandler = null;
    return () => {
        if (timeoutHandler === null) {
            timeoutHandler = setTimeout(() => {
                callback();
                timeoutHandler = null;
            }, limit);
        }
    };
};

// addEventListener Helper
const listen = (selector, eventType, callback) => {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(eventType, callback);
    }
};

// Auto Hide Header
const header = document.getElementById('site-header');
let lastScrollPosition = window.scrollY;

const autoHideHeader = () => {
    const currentScrollPosition = window.scrollY;

    header.classList.toggle('slideInUp', currentScrollPosition <= lastScrollPosition);
    header.classList.toggle('slideOutDown', currentScrollPosition > lastScrollPosition);

    lastScrollPosition = currentScrollPosition;
};

// Mobile Menu Toggle
let mobileMenuVisible = false;
const mobileMenu = document.getElementById('mobile-menu');

const toggleMobileMenu = () => {
    const animationName = mobileMenuVisible ? 'bounceOutRight' : 'bounceInRight';
    mobileMenu.style.animationName = animationName;
    mobileMenu.style.display = mobileMenuVisible ? 'none' : 'block';
    mobileMenuVisible = !mobileMenuVisible;
};

// Featured Image Toggle
const toggleImg = () => {
    document.querySelector('.bg-img').classList.toggle('show-bg-img');
};

// Table of Contents Toggle
const toggleToc = () => {
    document.getElementById('toc').classList.toggle('show-toc');
};

// Event Listeners
const setupEventListeners = () => {
    if (header) {
        const throttledAutoHideHeader = throttle(autoHideHeader, 250);

        listen('#menu-btn', 'click', toggleMobileMenu);
        listen('#toc-btn', 'click', toggleToc);
        listen('#img-btn', 'click', toggleImg);
        listen('.bg-img', 'click', toggleImg);

        window.addEventListener('scroll', throttledAutoHideHeader);
    }
};

// Execute setup function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);
