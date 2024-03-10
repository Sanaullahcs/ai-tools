<template>
    <section class="section pb-0 h-e-case">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__header--secondary">
                        <div class="row align-items-center items-gap">
                            <div class="col-12 col-lg-8">
                                <h2 class="h1 wow fadeInUp" data-wow-duration="600ms">
                                    what we do
                                </h2>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="h-e-pagination justify-content-start justify-content-lg-end">
                                    <button aria-label="previous slide" class="slide-btn prev-h-e-case">
                                        <i class="tech-left-angle"></i>
                                    </button>
                                    <button aria-label="next slide" class="slide-btn next-h-e-case">
                                        <i class="tech-right-angle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="case__slider-h-e">
                        <div class="swiper-wrapper">
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">software development</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">web development</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">UX/UI design</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">Search Engine Opti</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">software development</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">web development</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">UX/UI design</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                            <div class="case__slider-single-h-e swiper-slide">
                                <div class="content">
                                    <h4 class="h4">Search Engine Opti</h4>
                                    <p>
                                        Have you ever imagined being able to ask for information, advice, and ideas, all
                                        enriched by generated code?
                                    </p>
                                    <router-link to="/use-case-details">
                                        learn more
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "WhatWeDo",
        mounted() {
            new Swiper('.case__slider-h-e', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: '.next-h-e-case',
                    prevEl: '.prev-h-e-case',
                },
            });
        }
    }
</script>

<style>
    .case__slider-h-e {
        overflow: hidden;
    }
</style>