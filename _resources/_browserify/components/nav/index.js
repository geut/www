import velocity from 'velocity-animate';

function scrollTo(e) {
    const elem = document.querySelector(typeof e === 'object' ? e.currentTarget.getAttribute('href') : e);
    velocity(elem, "scroll", { duration: 1000, easing: "easeInOutQuad" });
}

export function fadeNav() {
    const element = document.querySelector('.hero nav');
    return velocity(element, 'fadeIn');
}

export function startScroll() {
    const links = document.querySelectorAll('nav[role="navigation"] a[href*="#"]');
    for (let link of links) {
        link.addEventListener('click', scrollTo);
    }

    if (window.location.hash.length > 0) {
        scrollTo(window.location.hash);
    }
}
