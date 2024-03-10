<template>
    <div>
        <div class="my-app home-seven home-seven-dark">
            <Header :logo-src="require('@/assets/images/home-four/logo.png')"/>
            <MobileMenu />
            <Banner />
            <UseCase />
            <Collection />
            <Broadcast />
            <FAQ />
            <div class="f-media">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="f-m-inner">
                                <div class="row align-items-center items-gap">
                                    <div class="col-12 col-lg-8">
                                        <div class="f-m__content">
                                            <img :src="require('@/assets/images/f-m.png')" alt="Image">
                                            <h4>Free media you can use anywhere</h4>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="text-start text-lg-end">
                                            <router-link to="/use-case" class="btn btn-fo">browse photos</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :logo-src="require('@/assets/images/home-four/logo.png')" />
        </div>
        <BackToTop />
    </div>
</template>

<script>
import Header from '../components/page_components/home-7/Header.vue'
import MobileMenu from '../components/layout/MobileMenu.vue'
import Banner from '../components/page_components/home-7/Banner.vue'
import UseCase from '../components/page_components/home-7/UseCase.vue'
import Collection from '../components/page_components/home-7/Collection.vue'
import Broadcast from '../components/page_components/home-7/Broadcast.vue'
import FAQ from '../components/page_components/home-7/FAQ.vue'
import Footer from '../components/page_components/home-7/Footer.vue'
import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "Home4",
        components: {
            Header,
            MobileMenu,
            Banner,
            UseCase,
            Collection,
            Broadcast,
            FAQ,
            Footer,
            BackToTop
        }
    }
</script>