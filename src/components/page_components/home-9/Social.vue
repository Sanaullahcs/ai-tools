<template>
    <section class="language pb-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-8">
                    <div class="section__header">
                        <h2 class="h2">AI Voices every language in the world</h2>
                        <p>
                            Generate realistic Text to Speech (TTS) audio using our online
                            AI Voice Generator and the best synthetic voices. Instantly
                            convert text in to natural-sounding speech and download as MP3
                            and WAV audio files.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="language__slider">
            <div class="swiper-wrapper">
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/insta.png')" alt="Image">
                        Instagram
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/facebook.png')" alt="Image">
                        Facebook
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/twitch.png')" alt="Image">
                        Twitch
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/twitter.png')" alt="Image">
                        Twitter
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/tiktok.png')" alt="Image">
                        Tiktok
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/podcast.png')" alt="Image">
                        Podcast
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/presentation.png')" alt="Image">
                        Presentation
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/braodcast.png')" alt="Image">
                        Broadcast
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/vimeo.png')" alt="Image">
                        Vimeo
                    </router-link>
                </div>
                <div class="language__slider-single swiper-slide">
                    <router-link to="/use-case">
                        <img :src="require('@/assets/images/home-nine/commercials.png')" alt="Image">
                        Commercial
                    </router-link>
                </div>
            </div>
        </div>
        <div dir="rtl">
            <div class="language__slider-rtl">
                <div class="swiper-wrapper">
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/insta.png')" alt="Image">
                            Instagram
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/facebook.png')" alt="Image">
                            Facebook
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/twitch.png')" alt="Image">
                            Twitch
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/twitter.png')" alt="Image">
                            Twitter
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/tiktok.png')" alt="Image">
                            Tiktok
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/podcast.png')" alt="Image">
                            Podcast
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/presentation.png')" alt="Image">
                            Presentation
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/braodcast.png')" alt="Image">
                            Broadcast
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/vimeo.png')" alt="Image">
                            Vimeo
                        </router-link>
                    </div>
                    <div class="language__slider-single swiper-slide">
                        <router-link to="/use-case">
                            <img :src="require('@/assets/images/home-nine/commercials.png')" alt="Image">
                            Commercial
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
        name: "Social",
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