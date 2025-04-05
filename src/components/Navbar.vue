<script setup>
import { animateNavText, resetNavText } from '../utils/animUtils';
</script>

<template>
    <nav class="navbar">
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