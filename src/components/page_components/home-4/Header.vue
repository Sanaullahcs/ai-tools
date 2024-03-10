<template>
    <header :class="{ 'header-active': scrollPosition >= 100, }" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="nav">
                        <div class="nav__content">
                            <div class="nav__logo">
                                <router-link to="/">
                                    <img :src="LogoSrc" alt="Logo">
                                </router-link>
                            </div>
                            <div class="nav__menu">
                                <ul class="nav__menu-items">
                                    <li class="nav__menu-item nav__menu-item--dropdown">
                                        <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                            Home
                                        </a>
                                        <div class="nav__dropdown nav__dropdown--alt">
                                            <ul>
                                                <li class="atery">
                                                    <i class="fa-solid fa-moon"></i>
                                                    Dark
                                                </li>
                                                <li>
                                                    <router-link to="/" class="nav__dropdown-item hide-nav">
                                                        Voice Over
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-2" class="nav__dropdown-item hide-nav">
                                                        Content Writer
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-3" class="nav__dropdown-item hide-nav">
                                                        Background Remover
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-4" class="nav__dropdown-item hide-nav">
                                                        Resume Builder
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-5" class="nav__dropdown-item hide-nav">
                                                        Copy Writing
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-6" class="nav__dropdown-item hide-nav">
                                                        Write Code
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-7" class="nav__dropdown-item hide-nav">
                                                        Image Generator
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-8" class="nav__dropdown-item hide-nav">
                                                        Digital Agency
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-9" class="nav__dropdown-item hide-nav">
                                                        Video Creation
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-10" class="nav__dropdown-item hide-nav">
                                                        Personal Consultant
                                                    </router-link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li class="atery">
                                                    <i class="fa-regular fa-moon"></i>
                                                    Light
                                                </li>
                                                <li>
                                                    <router-link to="/home-light" class="nav__dropdown-item hide-nav">
                                                        Voice Over
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-2-light" class="nav__dropdown-item hide-nav">
                                                        Content Writer
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-3-light" class="nav__dropdown-item hide-nav">
                                                        Background Remover
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-4-light" class="nav__dropdown-item hide-nav">
                                                        Resume Builder
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-5-light" class="nav__dropdown-item hide-nav">
                                                        Copy Writing
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-6-light" class="nav__dropdown-item hide-nav">
                                                        Write Code
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-7-light" class="nav__dropdown-item hide-nav">
                                                        Image Generator
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-8-light" class="nav__dropdown-item hide-nav">
                                                        Digital Agency
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-9-light" class="nav__dropdown-item hide-nav">
                                                        Video Creation
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-10-light"
                                                        class="nav__dropdown-item hide-nav">
                                                        Personal Consultant
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav__menu-item">
                                        <router-link to="/about" class="nav__menu-link hide-nav">About
                                            Us</router-link>
                                    </li>
                                    <li class="nav__menu-item nav__menu-item--dropdown">
                                        <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                            Use
                                            Case
                                        </a>
                                        <ul class="nav__dropdown">
                                            <li>
                                                <router-link class="nav__dropdown-item hide-nav" to="/use-case">
                                                    Use
                                                    Case
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link class="nav__dropdown-item hide-nav" to="/use-case-details">
                                                    Use
                                                    Case
                                                    Details
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav__menu-item nav__menu-item--dropdown">
                                        <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                            Pages
                                        </a>
                                        <ul class="nav__dropdown">
                                            <li>
                                                <router-link to="/404"
                                                    class="nav__dropdown-item hide-nav">Error</router-link>
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
                                    </li>
                                    <li class="nav__menu-item nav__menu-item--dropdown">
                                        <a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
                                            Blog
                                        </a>
                                        <ul class="nav__dropdown">
                                            <li>
                                                <router-link to="/blog" class="nav__dropdown-item hide-nav">
                                                    Blog
                                                    Layout
                                                    One
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two" class="nav__dropdown-item hide-nav">
                                                    Blog
                                                    Layout
                                                    Two
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="blog-details" class="nav__dropdown-item hide-nav">
                                                    Blog
                                                    Single
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav__menu-item">
                                        <router-link to="/contact-us" class="nav__menu-link hide-nav">Contact
                                            Us</router-link>
                                    </li>
                                    <li class="nav__menu-item d-block d-md-none">
                                        <router-link to="/sign-up" class="btn btn--secondary">
                                            Sign
                                            Up
                                        </router-link>
                                    </li>
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
                                    <div class="nav__uncollapsed-item d-none d-md-flex">
                                        <router-link to="/sign-up" class="btn btn--secondary">create free resume</router-link>
                                    </div>
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
        name: "Header",
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