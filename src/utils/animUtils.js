import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Util to wrap each letter into a span element for animation
 * @param {EventTarget} event.target event target
 * @returns Nodelist of '.letter' elements
 */
const splitTargetToElements = (target) => {
    if (!target.classList.contains('split')) {
        const lettersHTML = target.innerText
            .split('')
            .map((letter) => `<span class="letter">${letter}</span>`)
            .join('');
        target.innerHTML = lettersHTML;
        target.classList.add('split');
    }

    return target.querySelectorAll('.letter');
};

export const animateNavText = (event) => {
    const letters = event.target;
    gsap.to(letters, { y: -8, duration: 0.3, ease: 'sine.out' });
};

export const resetNavText = (event) => {
    const letters = event.target;
    gsap.to(letters, { y: 0, duration: 0.3, ease: 'sine.inOut' });
};

export const animateTitleText = (event) => {
    return;
    const letters = event.target;
    gsap.to(letters, { y: -8, duration: 0.3, ease: 'sine.out' });
};

export const resetTitleText = (event) => {
    return;
    const letters = event.target;
    gsap.to(letters, { y: 0, duration: 0.3, ease: 'sine.inOut' });
};

export const animateExpSection = (event) => {
    const header = event.target.closest('.accordion-header');
    if (header) {
        const content = header
            .closest('.accordion-panel')
            .querySelector('.accordion-content');
        const expContent = content.querySelectorAll('.exp-content');
        const chips = content.querySelectorAll('.chip');

        gsap.from(expContent, {
            opacity: 0,
            ease: 'sine.inOut',
            delay: 0.1,
            stagger: 0.2,
        });
        gsap.from(chips, {
            opacity: 0,
            delay: 0.5,
            x: 0,
            y: 50,
            ease: 'sine.inOut',
            stagger: 0.1,
        });
    }
};

export const zoomOnHover = (event, scale) => {
    const elementClass = event.target;

    gsap.to(elementClass, {
        scale: scale,
        ease: 'power2.out',
    });
};
