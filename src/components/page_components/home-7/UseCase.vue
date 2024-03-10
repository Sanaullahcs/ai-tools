<template>
    <section class="language pb-0">
        <div class="language__slider">
            <div class="swiper-wrapper">
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Food & Drink
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        technology
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        business & Office
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Wallpapers
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        beauty & fashion
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Home decore
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Interior design
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Sky Dive human
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Air Business Class
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Friends Hangouts
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        luxury Hotel
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Wedding couple
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        winter nature
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        4K wallpaper
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        Games
                    </router-link>
                </div>
            </div>
        </div>
        <div dir="rtl">
            <div class="language__slider-rtl">
                <div class="swiper-wrapper">
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Food & Drink
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            technology
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            business & Office
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Wallpapers
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            beauty & fashion
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Home decore
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Interior design
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Sky Dive human
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Air Business Class
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Friends Hangouts
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            luxury Hotel
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Wedding couple
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            winter nature
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            4K wallpaper
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            Games
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script scoped>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "UseCase",
        mounted() {
            new Swiper('.language__slider', {
                slidesPerView: 'auto',
                slidesPerGroup: 12,
                loop: true,
                speed: 80000,
                easing: 'linear',
                autoplay: {
                    delay: 0,
                },
                spaceBetween: 30,
            });

            new Swiper('.language__slider-rtl', {
                slidesPerView: 'auto',
                slidesPerGroup: 12,
                loop: true,
                speed: 80000,
                easing: 'linear',
                autoplay: {
                    delay: 0,
                },
                spaceBetween: 30,
            });
        }
    };
</script>