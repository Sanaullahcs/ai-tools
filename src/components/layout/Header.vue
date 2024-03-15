<template>
<header :class="{ 'header-active': scrollPosition >= 100, }" class="header header-two">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <nav class="nav">
                    <div class="nav__content">
                        <div class="nav__logo">
                            <router-link to="/">
                                <img :src="require('@/assets/images/logo-three.png')" alt="Logo" />
                            </router-link>
                        </div>
                        <div class="nav__menu">
                            <ul class="nav__menu-items">
								<li>
                                    <router-link to="/" class="nav__menu-link hide-nav">
                                                    Home
                                                </router-link>
                                            </li>
								<li class="nav__menu-item nav__menu-item--dropdown">
                                    <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                        Ai Tools
                                    </a>
                                    <div class="nav__dropdown nav__dropdown--alt">
                                        <ul>
                                            <li>
                                                <router-link to="/" class="nav__dropdown-item hide-nav">
                                                    Content Writer
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Background Remover
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Resume Builder
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Copy Writing
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Write Code
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Image Generator
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/comingsoon" class="nav__dropdown-item hide-nav">
                                                    Video Creation
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav__menu-item nav__menu-item--dropdown">
                                    <a href="/blog-two" class="nav__menu-link">
                                        Blogs
                                    </a>
                                </li>
                                <li class="nav__menu-item">
                                    <router-link to="/about" class="nav__menu-link hide-nav">About
                                        Us</router-link>
                                </li>
                                <li class="nav__menu-item nav__menu-item--dropdown">
                                    <a href="/use-case" class="nav__menu-link">
                                        Use
                                        Cases
                                    </a>
                                </li>
                                <!-- <li class="nav__menu-item nav__menu-item--dropdown">
                                    <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                        Pages
                                    </a>
                                    <ul class="nav__dropdown">
                                        <li>
                                            <router-link to="/404" class="nav__dropdown-item hide-nav">Error</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/sign-up" class="nav__dropdown-item hide-nav">
                                                Sign
                                                Up
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/sign-in" class="nav__dropdown-item hide-nav">
                                                Sign
                                                In
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/teams" class="nav__dropdown-item hide-nav">
                                                Our
                                                Teams
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/about" class="nav__dropdown-item hide-nav">
                                                About
                                                Us
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/contact-us" class="nav__dropdown-item hide-nav">
                                                Contact
                                                Us
                                            </router-link>
                                        </li>
                                    </ul>
                                </li> -->

                                <li class="nav__menu-item">
                                    <router-link to="/contact-us" class="nav__menu-link hide-nav">Contact
                                        Us</router-link>
                                </li>
								
                                <!-- <li class="nav__menu-item d-block d-md-none">
                                    <router-link to="/sign-up" class="btn btn--septenary">
                                        Sign
                                        Up
                                    </router-link>
                                </li> -->
                            </ul>
                            <div class="social">
                                <a href="https://www.facebook.com" aria-label="social media">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://www.twitter.com" aria-label="social media">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com" aria-label="social media">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com" aria-label="social media">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div class="nav__uncollapsed">
                            <div class="nav__uncollapsed-item d-none d-md-flex">
                                <router-link to="/sign-up" class="btn btn--septenary">Start Writing Free</router-link>
                            </div>
							
                            <button class="nav__bar d-block d-xl-none">
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="backdrop"></div>
</header>
</template>

<script>
export default {
    name: "Header2",
    data: function () {
        return {
            scrollPosition: null,
        };
    },
    methods: {
        updateScroll() {
            this.scrollPosition =
                window.scrollY;
        },
    },
    mounted() {
        window.addEventListener(
            "scroll",
            this.updateScroll
        );
    },
};
</script>

<style>
</style>
