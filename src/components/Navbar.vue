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
                label: 'Home',
                url: '#home',
            },
            {
                label: 'About',
                url: '#about',
            },
            {
                label: 'Projects',
                url: '#projects',
            },
            {
                label: 'Experience',
                url: '#experience',
            },
            {
                label: 'Contact',
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
    <nav class="navbar uppercase">
        <div class="hamburger-menu">
            <button type="button" class="hamburger" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
                <i class="pi pi-bars"></i>
            </button>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <ul class="nav-list">
            <li class="nav-item ">
                <a href="#home">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Home</p>
                </a>
            </li>
            <li class="nav-item ">
                <a href="#about">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">About</p>
                </a>
            </li>
            <li class="nav-item ">
                <a href="#projects">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Projects</p>
                </a>
            </li>
            <li class="nav-item ">
                <a href="#experience">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Experience</p>
                </a>
            </li>
            <li class="nav-item ">
                <a href="#contact">
                    <p class="nav-text" @mouseenter="animateNavText" @mouseleave="resetNavText">Contact</p>
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