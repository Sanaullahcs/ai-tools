<template>
  <div>
    <div  class="my-app home-two-dark">
      <Header class="header--dark" />
      <MobileMenu />
      <div class="mobile-menu__backdrop"></div>
      <Banner />
      <Testimonials />
      <Generate />
      <Tour />
      <Publish />
      <hr id="horizon-break" />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Tools />
      <Footer />
    </div>
    <BackToTop />
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import MobileMenu from "../components/layout/MobileMenu.vue";
import Banner from "../components/page_components/home/Banner.vue";
import Testimonials from "../components/page_components/home/Testimonials.vue";
import Generate from "../components/page_components/home/Generate.vue";
import Tour from "../components/page_components/home/Tour.vue";
import Publish from "../components/page_components/home/Publish.vue";
import Features from "../components/page_components/home/Features.vue";
import Pricing from "../components/page_components/home/Pricing.vue";
import FAQ from "../components/page_components/home/FAQ.vue";
import CTA from "../components/page_components/home/CTA.vue";
import Tools from "../components/page_components/home/Tools.vue";
import Footer from "../components/layout/Footer.vue";
import BackToTop from "../components/common/BackToTop.vue";
export default {
  name: "Home",
  components: {
    Header,
    MobileMenu,
    Banner,
    Testimonials,
    Generate,
    Tour,
    Publish,
    Features,
    Pricing,
    FAQ,
    CTA,
    Tools,
    Footer,
    BackToTop,
  },
};
</script>

<style>
.home-two-dark .anime--light {
  display: none;
}

.home-two-light .anime--dark {
  display: none;
}
</style>
