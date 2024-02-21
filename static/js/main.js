/*
 * Utils
 */

// Throttle
var throttle = (callback, limit) => {
    let timeoutHandler = null;
    return () => {
        if (timeoutHandler == null) {
            timeoutHandler = setTimeout(() => {
                callback();
                timeoutHandler = null;
            }, limit);
        }
    };
};

// addEventListener Helper
var listen = (ele, e, callback) => {
    if (document.querySelector(ele) !== null) {
        document.querySelector(ele).addEventListener(e, callback);
    }
};

// FUNCTIONS

// Auto Hide Header
var header = document.getElementById('site-header');
var lastScrollPosition = window.pageYOffset;

var autoHideHeader = () => {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        header.classList.remove('slideInUp');
        header.classList.add('slideOutDown');
    } else {
        header.classList.remove('slideOutDown');
        header.classList.add('slideInUp');
    }
    lastScrollPosition = currentScrollPosition;
};

// Mobile Menu Toggle
var mobileMenuVisible = false;

var toggleMobileMenu = () => {
    let mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuVisible == false) {
        mobileMenu.style.animationName = 'bounceInRight';
        mobileMenu.style.webkitAnimationName = 'bounceInRight';
        mobileMenu.style.display = 'block';
        mobileMenuVisible = true;
    } else {
        mobileMenu.style.animationName = 'bounceOutRight';
        mobileMenu.style.webkitAnimationName = 'bounceOutRight';
        mobileMenuVisible = false;
    }
};

// Featured Image Toggle
const showImg = () => {
    document.querySelector('.bg-img').classList.add('show-bg-img');
};

var hideImg = () => {
    document.querySelector('.bg-img').classList.remove('show-bg-img');
};

// ToC Toggle
var toggleToc = () => {
    document.getElementById('toc').classList.toggle('show-toc');
};

if (header !== null) {
    const throttledAutoHideHeader = throttle(() => {
        autoHideHeader();

        if (mobileMenuVisible) {
            toggleMobileMenu();
        }
    }, 250);

    // Check if showImg function already exists
    //const showImg = () => {
    //    document.querySelector('.bg-img').classList.add('show-bg-img');
    //};

    listen('#menu-btn', 'click', toggleMobileMenu);
    listen('#toc-btn', 'click', toggleToc);
    listen('#img-btn', 'click', showImg);
    listen('.bg-img', 'click', hideImg);

    window.addEventListener(
        'scroll',
        throttledAutoHideHeader
    );
}
