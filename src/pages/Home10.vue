<template>
	<div>
		<div class="my-app home-ten">
			<Header2 class="header--dark" />
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

<script scoped>
	import Header2 from '../components/layout/Header2.vue'
	import MobileMenu from '../components/layout/MobileMenu.vue'
	import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Home10",
		components: {
			Header2,
			MobileMenu,
			BackToTop
		},
		mounted() {
			document.getElementById('copyYear').textContent = new Date().getFullYear();
		}
	};
</script>

<style>
	.home-ten {
		background-image: url('~@/assets/images/home-ten/dark-bg.png');
	}
</style>