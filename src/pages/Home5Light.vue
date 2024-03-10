<template>
	<div>
		<div class="my-app home-five home-five-light">
            <TopHeader />
			<Header class="header--light" :logo-src="require('@/assets/images/home-four/logo-light.png')"/>
			<MobileMenu />
			<Banner />
			<Work />
			<Case />
            <FAQ class="faq-light"/>
			<Review class="pb-0"/>
			<CTA />
			<Footer :logo-src="require('@/assets/images/home-four/logo-light.png')"/>
		</div>
		<BackToTop />
	</div>
</template>

<script>
import TopHeader from '../components/page_components/home-5/TopHeader.vue'
import Header from '../components/layout/Header.vue'
import MobileMenu from '../components/layout/MobileMenu.vue'
import Banner from '../components/page_components/home-5/Banner.vue'
import Work from '../components/page_components/home-5/Work.vue'
import FAQ from '../components/page_components/home-5/FAQ.vue'
import Case from '../components/page_components/home/Case.vue'
import Review from '../components/page_components/home/Review.vue'
import CTA from '../components/page_components/home-5/CTA.vue'
import Footer from '../components/page_components/home-5/Footer.vue'
import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Home",
		components: {
            TopHeader,
			Header,
			MobileMenu,
			Banner,
			Work,
			FAQ,
			Case,
			Review,
			CTA,
			Footer,
			BackToTop
		},
	};
</script>
