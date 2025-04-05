import { gsap } from 'gsap';

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
