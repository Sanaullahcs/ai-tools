<template>
    <section class="h-f-vertical">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="section__content">
                        <h2 class="light-title wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                            techAI Over 340 Real-Life
                            Resume Templates
                        </h2>
                        <div class="paragraph">
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                        </div>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn btn-fo">create free resume</router-link>
                            <a href="javascript:void(0)" title="video Player"
                                class="video-btn">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="h-f-w d-none d-lg-flex">
                        <div class="h-f-o-sl">
                            <div class="swiper-wrapper">
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-one.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-two.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-one.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-two.png')" alt="Image">
                                </div>
                            </div>
                        </div>

                        <div class="h-f-o-sl h-f-o-sl-rotated">
                            <div class="swiper-wrapper">
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-one.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-two.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-one.png')" alt="Image">
                                </div>
                                <div class="single swiper-slide">
                                    <img :src="require('@/assets/images/home-four/h-f-two.png')" alt="Image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="template-popup" style="display: none;">
            <iframe src="https://www.youtube.com/embed/RvreULjnzFo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </section>
</template>

<script scoped>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "Templates",
        mounted() {
            new Swiper('.h-f-o-sl', {
                slidesPerView: 'auto',
                slidesPerGroup: 12,
                loop: true,
                speed: 80000,
                easing: 'linear',
                direction: 'vertical',
                autoplay: {
                    delay: 1,
                },
                spaceBetween: 30,
            });

            const popupButton = document.querySelector('.video-btn')
            const popupDiv = document.querySelector('.template-popup')

            popupButton.addEventListener('click', function () {
                popupDiv.style.display = 'flex';
            });

            popupDiv.addEventListener('click', function () {
                popupDiv.style.display = 'none';
            });
        }
    }
</script>

<style scoped>
    .single.swiper-slide {
        height: max-content;
    }

    .h-f-o-sl-rotated {
        transform: rotate(180deg);
    }

    .template-popup {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999999;
    }

    .template-popup iframe {
        width: 70%;
        height: 70%;
    }
</style>