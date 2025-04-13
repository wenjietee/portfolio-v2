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
    const letters = splitTargetToElements(event.target);

    gsap.to(letters, {
        y: -5,
        duration: 0.3,
        ease: 'power3.in',
        stagger: 0.05,
    });
};

export const resetNavText = (event) => {
    const letters = splitTargetToElements(event.target);

    gsap.to(letters, {
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
        stagger: 0.05,
    });
};

export const animateTitleText = (event) => {
    const letters = splitTargetToElements(event.target);

    gsap.to(letters, {
        y: -5,
        duration: 0.3,
        ease: 'power3.in',
        stagger: 0.05,
    });
};

export const resetTitleText = (event) => {
    const letters = splitTargetToElements(event.target);

    gsap.to(letters, {
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
        stagger: 0.05,
    });
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
            x: -300,
            y: 0,
            ease: 'power4.out',
            stagger: 0.1,
        });
        gsap.from(chips, {
            opacity: 0,
            delay: 0.5,
            x: 0,
            y: 50,
            ease: 'bounce.out',
            stagger: 0.1,
        });
    }
};
