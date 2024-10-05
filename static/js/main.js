/*
 * Minimal JS for Mobile Menu and Table of Contents Toggle
 */

// Table of Contents Toggle
const toggleToc = () => {
    document.getElementById('toc').classList.toggle('show-toc');
};

// Mobile Menu Toggle
let mobileMenuVisible = false;
const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.style.display = mobileMenuVisible ? 'none' : 'block';
        mobileMenuVisible = !mobileMenuVisible;
    }
};

// Event Listeners
document.querySelector('#toc-btn')?.addEventListener('click', toggleToc);
document.querySelector('#menu-btn')?.addEventListener('click', toggleMobileMenu);
