<template>
    <div>
        <div class="my-app home-eight">
            <Header :logo-src="require('@/assets/images/home-four/logo-light.png')" :icon="require('@/assets/images/dashboard.png')"/>
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
            <FAQ class="faq-light"/>
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
    };
</script>