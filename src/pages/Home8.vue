<template>
    <div>
        <div class="my-app home-eight home-eight-dark">
            <Header :logo-src="require('@/assets/images/home-four/logo.png')" :icon="require('@/assets/images/home-eight/dot.png')"/>
            <MobileMenu />
            <Banner />
            <GlobalAgency />
            <CTA1 />
            <WhatWeDo />
            <CaseStudy />
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <hr class="hr-break">
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <hr class="hr-break">
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <News />
            <CTA2 />
            <Footer />
        </div>
        <BackToTop />
    </div>
</template>

<script scoped>
    import Header from "../components/page_components/home-8/Header.vue";
    import MobileMenu from "../components/layout/MobileMenu.vue";
    import Banner from "../components/page_components/home-8/Banner.vue";
    import GlobalAgency from "../components/page_components/home-8/GlobalAgency.vue";
    import CTA1 from "../components/page_components/home-8/CTA1.vue";
    import WhatWeDo from "../components/page_components/home-8/WhatWeDo.vue";
    import CaseStudy from "../components/page_components/home-8/CaseStudy.vue";
    import Testimonial from "../components/page_components/home-8/Testimonial.vue";
    import FAQ from "../components/page_components/home-8/FAQ.vue";
    import News from "../components/page_components/home-8/News.vue";
    import CTA2 from "../components/page_components/home-8/CTA2.vue";
    import Footer from "../components/page_components/home-8/Footer.vue";
    import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "Home8",
        components: {
            Header,
            MobileMenu,
            Banner,
            GlobalAgency,
            CTA1,
            WhatWeDo,
            CaseStudy,
            Testimonial,
            FAQ,
            News,
            CTA2,
            Footer,
            BackToTop
        },
        mounted() {
            const mobileMenu = document.querySelector(".mobile-menu");
			if (mobileMenu) {
				const navMenuContent = document.querySelector(".nav__menu").innerHTML;
				const mobileMenuList = document.querySelector(".mobile-menu__list");
				mobileMenuList.innerHTML = navMenuContent;

				const dropdownLinks = document.querySelectorAll(".mobile-menu .nav__menu-link--dropdown");
				dropdownLinks.forEach((link) => {
					link.addEventListener("click", function () {
						const navDropdown = this.parentElement.querySelector(".nav__dropdown");
						const navDropdownStyle = window.getComputedStyle(navDropdown);
						if (navDropdownStyle.display === "none") {
							navDropdown.style.display = "block";
						} else {
							navDropdown.style.display = "none";
						}
						this.classList.toggle("navbar__item-active");
					});
				});
			}

			document.querySelector(".nav__bar").addEventListener("click", function () {
				// Add class "mobile-menu__backdrop-active" to .mobile-menu__backdrop
				document.querySelector(".mobile-menu__backdrop").classList.add("mobile-menu__backdrop-active");

				// Apply animation delays to .nav-fade elements
				const navFadeElements = document.querySelectorAll(".nav-fade");
				navFadeElements.forEach((element, index) => {
					element.style.animationDelay = `${0.2 * index}s`;
				});

				// Add class "show-menu" to .mobile-menu
				document.querySelector(".mobile-menu").classList.add("show-menu");

				// Remove class "nav-fade-active" from .mobile-menu__wrapper
				document.querySelector(".mobile-menu__wrapper").classList.remove("nav-fade-active");

				// Add class "body-active" to the body element
				document.body.classList.add("body-active");
			});

			// Add click event listener to .close-mobile-menu and .mobile-menu__backdrop
			document.querySelectorAll(".close-mobile-menu, .mobile-menu__backdrop").forEach((element) => {
				element.addEventListener("click", function () {
					// Remove class "show-menu" from .mobile-menu with a delay of 900ms
					setTimeout(function () {
						document.querySelector(".mobile-menu").classList.remove("show-menu");
					}, 900);

					// Remove class "mobile-menu__backdrop-active" from .mobile-menu__backdrop with a delay of 1100ms
					setTimeout(function () {
						document.querySelector(".mobile-menu__backdrop").classList.remove("mobile-menu__backdrop-active");
					}, 1100);

					// Add class "nav-fade-active" to .mobile-menu__wrapper
					document.querySelector(".mobile-menu__wrapper").classList.add("nav-fade-active");

					// Remove class "body-active" from the body element
					document.body.classList.remove("body-active");
				});
			});

			document.getElementById('copyYear').textContent = new Date().getFullYear();
        }
    };
</script>