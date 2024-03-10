<template>
    <footer class="footer footer-three section pb-0">
        <div class="container">
            <div class="row items-gap-two">
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer__single f-t-f mt-0 wow fadeInUp" data-wow-duration="600ms">
                        <div class="logo">
                            <router-link to="/">
                                <img :src="LogoSrc" alt="Image">
                            </router-link>
                        </div>
                        <p class="text-md">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking
                        </p>
                        <div class="social justify-content-start">
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
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
                        <h5 class="h5">About tech AI</h5>
                        <ul>
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/blog">Blog</router-link>
                            </li>
                            <li>
                                <router-link to="/sign-in">Sign in</router-link>
                            </li>
                            <li>
                                <router-link to="/sign-up">Register</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <h5 class="h5">Creativity</h5>
                        <ul>
                            <li>
                                <router-link to="/use-case"> AI Photo Restorer</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Toongineer Cartoonizer</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case"> VansPortrait</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case"> AI Photo Colorizer</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">AI Photo Retoucher</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                        <h5 class="h5">support</h5>
                        <ul>
                            <li>
                                <router-link to="/about">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/about">Terms of Service</router-link>
                            </li>
                            <li>
                                <router-link to="/about">Cookie Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">FAQ</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us">Helpdesk</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright text-center">
            <p>
                Copyright &copy;
                <span id="copyYear"></span>
                <router-link to="/">techAI</router-link>
                . Design By
                <a href="https://themeforest.net/user/gramentheme">Gramentheme</a>
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            LogoSrc: {
                type: String,
                required: true,
            },
        },
        computed: {
            LogoURL() {
                return this.LogoSrc;
            },
        },
    }
</script>