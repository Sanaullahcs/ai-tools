<template>
	<div>
		<div class="my-app home-ten home-ten-light">
			<Header2 class="header--light" />
			<MobileMenu />
			<!-- ==== banner start ==== -->
			<section class="banner-ten">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12 col-lg-10">
							<div class="banner-ten__content wow fadeInUp" data-wow-duration="600ms"
								data-wow-delay="300ms">
								<h1>AI Personal Consultant</h1>
								<ul>
									<li>Cost-effective</li>
									<li>24/7 availability</li>
									<li>Flexibility</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ==== / banner end ==== -->
			<div class="h-t-chat">
				<div class="container">
					<div class="row items-gap">
						<div class="col-12 col-lg-6">
							<div class="h-t-chat__thumb wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
								<img :src="require('@/assets/images/home-ten/thumb.png')" alt="Image">
							</div>
						</div>
						<div class="col-12 col-lg-6">
							<div class="h-t-chat__content wow fadeInUp" data-wow-duration="600ms"
								data-wow-delay="600ms">
								<div class="intro">
									<div class="info">
										<img :src="require('@/assets/images/home-ten/thumb-sm.png')" alt="Image">
										<h5>Darth Vader</h5>
									</div>
									<button>
										<i class="fa-solid fa-ellipsis"></i>
									</button>
								</div>
								<div class="content">
									<div class="left-single">
										<p>Hi! How can I help you, today?</p>
									</div>
									<div class="right-single">
										<p>What's the tesla share price now?</p>
									</div>
									<div class="left-single">
										<p>
											Tesla is
											<span>$169.84</span>
											- 8.05 (4.53%)
											today
										</p>
									</div>
								</div>
								<div class="suggestions">
									<button>Suggest a movie.</button>
									<button>What's the weather today?</button>
									<button>Play a song.</button>
								</div>
								<div class="chat-wrapper">
									<form>
										<div class="mail-group">
											<input type="text" name="c-text" id="cText" placeholder="Ask your query...">
											<button>
												<img :src="require('@/assets/images/home-ten/send.png')" alt="Image">
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer class="footer footer-three ft-en-l">
				<div class="container">
					<div class="row items-gap align-items-center top-break">
						<div class="col-12 col-lg-3">
							<div class="logo text-center text-lg-start">
								<router-link to="/">
									<img :src="require('@/assets/images/logo-three.png')" alt="Image">
								</router-link>
							</div>
						</div>
						<div class="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
							<p>
								Copyright &copy;
								<span id="copyYear"></span>
								<router-link to="/">techAI</router-link>
								. Designed By
								<a href="https://themeforest.net/user/gramentheme">Gramentheme</a>
							</p>
						</div>
						<div class="col-12 col-lg-3">
							<div class="social justify-content-center justify-content-lg-end">
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
				</div>
			</footer>
		</div>
		<BackToTop />
	</div>
</template>

<script>
	import Header2 from '../components/layout/Header2.vue'
	import MobileMenu from '../components/layout/MobileMenu.vue'
	import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Home10Light",
		components: {
			Header2,
			MobileMenu,
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

			document.getElementById('copyYear').textContent = new Date().getFullYear();
		}
	};
</script>

<style>
	.home-ten {
		background-image: url('~@/assets/images/home-ten/light-bg.png');
	}
</style>