<template>
    <section id="contact">

        <!-- <ul class="contact-social">
            <li class="social-icon">
                <a href="mailto:wenjietj@gmail.com">
                    <i class="pi pi-envelope"></i>
                </a>
            </li>
            <li class="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/teewenjie/">
                    <i class="pi pi-linkedin"></i>
                </a>
            </li>
            <li class="social-icon">
                <a target="_blank" href="https://github.com/wenjietee/">
                    <i class="pi pi-github"></i>
                </a>
            </li>
        </ul>
        <div class="contact-copyright">
            <span>Tee Wenjie </span>
            <span>©{{ new Date().getFullYear() }}</span>
        </div> -->
        <div class="container grid">
            <div class="col-12 text-6xl font-semibold text-center title" @mouseenter="animateTitleText"
                @mouseleave="resetTitleText">Contact
            </div>
            <div class="col-12 text-left">Email here</div>

            <div class="col-4 text-left"> full stack creative technologist with a passion for building things that live
                on the
                internet.</div>
            <div class="col-4 contact-copyright">
                <span>Tee Wenjie </span>
                <span>©{{ new Date().getFullYear() }}</span>
            </div>
            <div class="col-4">
                <div>Socials</div>
                <ul class="contact-social">
                    <li class="social-icon">
                        <a href="mailto:wenjietj@gmail.com">
                            <i class="pi pi-envelope"></i>
                        </a>
                    </li>
                    <li class="social-icon">
                        <a target="_blank" href="https://www.linkedin.com/in/teewenjie/">
                            <i class="pi pi-linkedin"></i>
                        </a>
                    </li>
                    <li class="social-icon">
                        <a target="_blank" href="https://github.com/wenjietee/">
                            <i class="pi pi-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>