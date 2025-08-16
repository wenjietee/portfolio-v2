import { gsap } from 'gsap';
import SplitType from 'split-type';

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
