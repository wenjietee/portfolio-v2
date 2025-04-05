import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(el, binding) {
        const { duration, x, y, start, ease } = binding.value || {};

        gsap.from(el, {
            opacity: 0,
            x,
            y,
            duration,
            ease,
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: 'play none none none',
            },
        });
    },
};
