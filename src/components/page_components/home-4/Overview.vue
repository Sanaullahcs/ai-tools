<template>
    <div class="f-overview section pt-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="f-overview__inner wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms"
                        data-background="">
                        <div class="row items-gap">
                            <div class="col-12 col-sm-6 col-xl-4">
                                <div class="thumb">
                                    <img :src="require('@/assets/images/home-four/f-i-one.png')" alt="Image">
                                </div>
                                <div class="content">
                                    <h4>AI Cover Letter Builder</h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-xl-4">
                                <div class="thumb">
                                    <img :src="require('@/assets/images/home-four/f-i-two.png')" alt="Image">
                                </div>
                                <div class="content">
                                    <h4>Resume Checker</h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-xl-4">
                                <div class="thumb">
                                    <img :src="require('@/assets/images/home-four/f-i-three.png')" alt="Image">
                                </div>
                                <div class="content">
                                    <h4>Personal Website</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pb-0">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7">
                        <div class="section__header text-center wow fadeInUp" data-wow-duration="600ms"
                            data-wow-delay="300ms">
                            <h2 class="text-white">
                                Pick a resume template and build
                                your resume in minutes!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="f-overview__slider">
            <div class="swiper-wrapper">
                <div class="f-overview__single swiper-slide">
                    <img :src="require('@/assets/images/home-four/f-one.png')" alt="Image">
                    <div class="f-content">
                        <router-link to="/use-case-details" class="al">
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </router-link>
                        <h4>
                            <router-link to="/use-case-details">Creative Resume</router-link>
                        </h4>
                    </div>
                </div>
                <div class="f-overview__single swiper-slide">
                    <img :src="require('@/assets/images/home-four/f-three.png')" alt="Image">
                    <div class="f-content">
                        <router-link to="/use-case-details" class="al">
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </router-link>
                        <h4>
                            <router-link to="/use-case-details">Creative Resume</router-link>
                        </h4>
                    </div>
                </div>
                <div class="f-overview__single swiper-slide">
                    <img :src="require('@/assets/images/home-four/f-two.png')" alt="Image">
                    <div class="f-content">
                        <router-link to="/use-case-details" class="al">
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </router-link>
                        <h4>
                            <router-link to="/use-case-details">Creative Resume</router-link>
                        </h4>
                    </div>
                </div>
                <div class="f-overview__single swiper-slide">
                    <img :src="require('@/assets/images/home-four/f-four.png')" alt="Image">
                    <div class="f-content">
                        <router-link to="/use-case-details" class="al">
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </router-link>
                        <h4>
                            <router-link to="/use-case-details">Creative Resume</router-link>
                        </h4>
                    </div>
                </div>
                <div class="f-overview__single swiper-slide">
                    <img :src="require('@/assets/images/home-four/f-five.png')" alt="Image">
                    <div class="f-content">
                        <router-link to="/use-case-details" class="al">
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </router-link>
                        <h4>
                            <router-link to="/use-case-details">Creative Resume</router-link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row align-items-center trt-c items-gap">
                <div class="col-6 col-lg-3 d-flex justify-content-end justify-content-lg-start">
                    <button aria-label="previous slide" class="slide-btn prev-f">
                        <i class="tech-left-angle"></i>
                    </button>
                </div>
                <div class="col-12 col-lg-6 order-2 order-lg-0">
                    <div class="tour__content-cta m-0 wow fadeInUp" data-wow-duration="600ms">
                        <div class="trust">
                            <div class="review">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="fw-7">Rated Excellent on Trustpilot</p>
                        </div>
                        <div class="action">
                            <router-link to="/sign-up" class="btn btn-fo">
                                start free now
                            </router-link>
                        </div>
                        <img :src="require('@/assets/images/frame-two.png')" alt="Image" class="frame">
                    </div>
                </div>
                <div class="col-6 col-lg-3 d-flex justify-content-start justify-content-lg-end">
                    <button aria-label="next slide" class="slide-btn next-f">
                        <i class="tech-right-angle"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "Overview",
        mounted() {
            new Swiper('.f-overview__slider', {
                slidesPerView: 'auto',
                centeredSlides: true,
                slidesPerGroup: 1,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: '.next-f',
                    prevEl: '.prev-f',
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                    },
                }
            });
        }
    }
</script>

<style scoped>
    .f-overview__inner {
        background-image: url('~@/assets/images/home-four/f-overview-bg.png');
    }

    .home-four .f-overview__single.swiper-slide-active .f-content {
        transform: translateY(0px);
    }
</style>