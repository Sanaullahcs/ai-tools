<template>
	<div>
		<div class="my-app home-nine home-nine-dark">
			<Header class="header--light" :logo-src="require('@/assets/images/home-four/logo.png')"/>
            <MobileMenu />
            <Banner />
            <Social />
            <Tour />
            <Sponsor />
            <Tradition />
            <Broadcast />
            <FAQ />
            <Eraser />
            <Testimonial />
            <CTA />
            <Footer3 :logo-src="require('@/assets/images/logo-light.png')"/>
		</div>
		<BackToTop />
	</div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import MobileMenu from '../components/layout/MobileMenu.vue'
import Banner from '../components/page_components/home-9/Banner.vue'
import Social from '../components/page_components/home-9/Social.vue'
import Tour from '../components/page_components/home-9/Tour.vue'
import Sponsor from '../components/page_components/home-9/Sponsor.vue'
import Tradition from '../components/page_components/home-9/Tradition.vue'
import Broadcast from '../components/page_components/home-9/Broadcast.vue'
import Eraser from '../components/page_components/home-9/Eraser.vue'
import FAQ from '../components/page_components/home-9/FAQ.vue'
import Testimonial from '../components/page_components/home-9/Testimonial.vue'
import CTA from '../components/page_components/home-9/CTA.vue'
import Footer3 from '../components/layout/Footer3.vue'
import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Home3",
		components: {
			Header,
            MobileMenu,
			Banner,
			Social,
			Tour,
			Sponsor,
			Tradition,
			Broadcast,
            FAQ,
            Eraser,
            Testimonial,
            CTA,
            Footer3,
			BackToTop
		},
	};
</script>

<style scoped>
    header {
        background-image: url('~@/assets/images/home-nine/h-bg-two.png');
    }
</style>
