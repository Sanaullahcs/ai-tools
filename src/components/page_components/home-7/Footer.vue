<template>
    <footer class="footer-two footer-two-light section pb-0">
        <div class="container">
            <div class="row items-gap-two">
                <div class="col-12 col-sm-6 col-xl-4 col-xxl-5">
                    <div class="footer-two__single bt  wow fadeInUp" data-wow-duration="600ms">
                        <router-link to="/" class="logo">
                            <img :src="LogoSrc" alt="Image">
                        </router-link>
                        <p>
                            Over 3.1 million+ high quality stock images, videos and music shared by our talented
                            community.
                        </p>
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
                </div>
                <div class="col-12 col-sm-6 col-xl-2 col-xxl-2 offset-xxl-1">
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
                <div class="col-12 col-sm-6 col-xl-2 col-xxl-2">
                    <div class="footer-two__single  wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <h5 class="h5">Meet Stoky</h5>
                        <ul>
                            <li>
                                <router-link to="/about-us">About Stoky</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Careers</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Sitemap</router-link>
                            </li>
                            <li>
                                <router-link to="/use-case">Art Generator</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="copyright text-center">
                        <p>
                            Copyright &copy;
                            <span id="copyYear"></span>
                            <router-link to="/">techAI</router-link>
                            . Design By
                            <a href="https://themeforest.net/user/gramentheme">Gramentheme</a>
                        </p>
                    </div>
                </div>
            </div>
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