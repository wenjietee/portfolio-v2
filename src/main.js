import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './style.css';
import scrollFade from './directives/v-scroll-fade';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.directive('scroll-fade', scrollFade);
app.mount('#app');
