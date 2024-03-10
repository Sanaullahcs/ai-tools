<template>
    <div>
        <div class="my-app home-four">
            <Header class="header--dark" :logo-src="require('@/assets/images/home-four/logo.png')"/>
            <MobileMenu />
            <Banner />
            <Overview />
            <Templates />
            <Generate />
            <Pricing />
            <FAQ />
            <Testimonial />
            <CTA />
            <Footer4 :logo-src="require('@/assets/images/home-four/logo.png')"/>
        </div>
        <BackToTop />
    </div>
</template>

<script>
import Header from '../components/page_components/home-4/Header.vue'
import MobileMenu from '../components/layout/MobileMenu.vue'
import Banner from '../components/page_components/home-4/Banner.vue'
import Overview from '../components/page_components/home-4/Overview.vue'
import Templates from '../components/page_components/home-4/Templates.vue'
import Generate from '../components/page_components/home-4/Generate.vue'
import Pricing from '../components/page_components/home-4/Pricing.vue'
import FAQ from '../components/page_components/home-4/FAQ.vue'
import Testimonial from '../components/page_components/home-4/Testimonials.vue'
import CTA from '../components/page_components/home-4/CTA.vue'
import Footer4 from '../components/layout/Footer4.vue'
import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "Home4",
        components: {
            Header,
            MobileMenu,
            Banner,
            Overview,
            Templates,
            Generate,
            Pricing,
            FAQ,
            Testimonial,
            CTA,
            Footer4,
            BackToTop
        }
    }
</script>