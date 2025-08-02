<script setup>
import { ref } from 'vue';
import { animateNavText, resetNavText } from '../utils/animUtils';
import Menu from 'primevue/menu';
// import Button from 'primevue/button';

const menu = ref();
const items = ref([
    {
        items: [
            {
                label: 'Start',
                url: '#home',
            },
            {
                label: 'Bio',
                url: '#about',
            },
            {
                label: 'Crafts',
                url: '#projects',
            },
            {
                label: 'Journey',
                url: '#experience',
            },
            {
                label: 'Hello',
                url: '#contact',
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

</script>

<template>
    <nav class="navbar lowercase ">
        <div class="hamburger-menu">
            <button type="button" class="cursor-point hamburger" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu">
                <i class="pi pi-bars"></i>
            </button>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <ul class="nav-list">
            <li class="cursor-pointer nav-item">
                <a href="#home">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Start</p>
                </a>
            </li>
            <li class="cursor-pointer nav-item">
                <a href="#about">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Bio</p>
                </a>
            </li>
            <li class="cursor-pointer nav-item">
                <a href="#projects">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Crafts</p>
                </a>
            </li>
            <li class="cursor-pointer nav-item">
                <a href="#experience">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Journey</p>
                </a>
            </li>
            <li class="cursor-pointer nav-item">
                <a href="#contact">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Hello</p>
                </a>
            </li>
            <!-- <li class="nav-item">
                <a href="#blog">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Blog</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#game">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Game</p>
                </a>
            </li> -->
        </ul>
    </nav>
</template>