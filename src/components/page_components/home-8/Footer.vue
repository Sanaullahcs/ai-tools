<template>
    <footer class="footer-two section pb-0">
        <div class="container">
            <div class="row items-gap-two">
                <div class="col-12 col-sm-6 col-xl-4 col-xxl-4">
                    <div class="footer-two__single bt  wow fadeInUp" data-wow-duration="600ms">
                        <router-link to="/" class="logo">
                            <img :src="require('@/assets/images/home-four/logo.png')" alt="Image">
                        </router-link>
                        <p class="made">
                            Made by TechAI
                        </p>
                        <div class="cta-group">
                            <a href="javascript:void(0)">
                                <img :src="require('@/assets/images/home-eight/eight.png')" alt="Image">
                            </a>
                            <a href="javascript:void(0)">
                                <img :src="require('@/assets/images/home-eight/nine.png')" alt="Image">
                            </a>
                        </div>
                        <div class="social">
                            <a href="https://www.facebook.com" aria-label="social media">
                                FB
                            </a>
                            <a href="https://www.twitter.com" aria-label="social media">
                                TW
                            </a>
                            <a href="https://www.linkedin.com" aria-label="social media">
                                LN
                            </a>
                            <a href="https://www.instagram.com" aria-label="social media">
                                IN
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-2 col-xxl-2">
                    <div class="footer-two__single  wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
                        <h5 class="h5">About tech AI</h5>
                        <ul>
                            <li>
                                <router-link to="/about-us">About</router-link>
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
                <div class="col-12 col-sm-6 col-xl-2 col-xxl-2">
                    <div class="footer-two__single  wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <h5 class="h5">Free tools</h5>
                        <ul>
                            <li>
                                <router-link to="/use-case"> AI Article Writer</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Paraphrasing Tool</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case"> Sentence Expander</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case"> Text SummarizerAI</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Art Generator</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-4 col-xxl-4">
                    <div class="footer-two__single h-elf wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <h5 class="h5">Newsletter</h5>
                        <p>We're always on the lookout for the cutting-edge tech and brand innovations. Join us today.
                        </p>
                        <div class="footer-two__form">
                            <form action="#" method="post">
                                <div class="mail-group">
                                    <input type="email" name="subscribe-news" id="subscribeNews"
                                        placeholder="Enter Mail" required>
                                    <button type="submit" aria-label="subscribe to our newsletter">
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                                <div class="group-radio">
                                    <input type="checkbox" name="contact-check" id="contactCheck">
                                    <label for="contactCheck">
                                        I Agree to the Privacy policy
                                    </label>
                                </div>
                            </form>
                        </div>
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
    }
</script>