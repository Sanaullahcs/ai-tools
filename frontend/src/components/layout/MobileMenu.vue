<template>
    <div>
        <div class="mobile-menu d-block d-xl-none">
            <nav class="mobile-menu__wrapper">
                <div class="mobile-menu__header">
                    <div class="nav__logo">
                        <router-link to="/" aria-label="home page" title="logo">
                            <img :src="require('@/assets/images/logo-four.png')" alt="Image">
                        </router-link>
                    </div>
                    <button aria-label="close mobile menu" class="close-mobile-menu">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="mobile-menu__list"></div>
                <div class="mobile-menu__social social">
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
            </nav>
        </div>
        <div class="mobile-menu__backdrop"></div>
    </div>
</template>

<script>
    export default {
        name: "MobileMenu",
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

			// Add click event listener tohttps://www.facebook.com
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
		}
    }
</script>