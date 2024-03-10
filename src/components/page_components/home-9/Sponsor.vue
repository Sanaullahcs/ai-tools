<template>
    <div class="sponsor">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="sponsor__inner wow fadeInUp" data-wow-duration="600ms">
                        <div class="section__header">
                            <h4 class="h4">Trusted by 2000+ companies</h4>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="sponsor__slider-h-9">
                                    <div class="swiper-wrapper">
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-one.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-two.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-three.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-four.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-five.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-six.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-one.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-two.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-three.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-four.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-five.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/home-six/s-six.png')" alt="Image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';
    
    export default {
        name: "Sponsor",
        mounted() {
            new Swiper('.sponsor__slider-h-9', {
                slidesPerView: 5,
                centeredSlides: true,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                },
            });
        },
    };
</script>

<style scoped>
    .sponsor__slider-h-9 {
        overflow: hidden;
    }
    .sponsor__slider-item.swiper-slide-active {
        filter: brightness(0) saturate(100%) invert(34%) sepia(86%) saturate(1482%) hue-rotate(214deg) brightness(92%) contrast(98%);
    }
</style>
