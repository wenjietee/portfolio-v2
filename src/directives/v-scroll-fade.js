import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(el, binding) {
        const { duration, x, y, start, ease, stagger } = binding.value || {};

        const nestedElements = el.querySelectorAll('*');

        gsap.from(nestedElements, {
            opacity: 0,
            x,
            y,
            duration,
            ease,
            stagger,
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: 'play none none none',
            },
        });
    },
};
