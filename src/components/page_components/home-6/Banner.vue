<template>
    <div>
        <section class="banner-six">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-9">
                        <div class="banner-six__content text-center">
                            <p class="fw-6">Trusted by 2.5 million successful writers worldwide.</p>
                            <h2 class="h2-light">
                                Write Code with 10X
                                <span>Faster</span>
                            </h2>
                            <ul class="wow fadeInUp">
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Emotions
                                </li>
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Speech-To-Speech
                                </li>
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Localize
                                </li>
                            </ul>
                            <div class="section__content-cta">
                                <div class="authentic">
                                    <router-link to="/sign-up" class="btn btn--nonary">
                                        get it for Developers
                                        <img :src="require('@/assets/images/home-six/plane.png')" alt="Image">
                                    </router-link>
                                    <div class="divide">
                                        <p>Or</p>
                                    </div>
                                    <router-link to="/sign-up" class="btn btn--nonary">
                                        get it for Enterprise
                                        <img :src="require('@/assets/images/home-six/plane.png')" alt="Image">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="tour">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tour__content wow fadeInUp" data-wow-duration="600ms">
                            <img :src="require('@/assets/images/home-six/v-s-one.png')" alt="Image">
                            <a href="javascript:void(0)" title="video Player"
                                class="video-btn">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img :src="require('@/assets/images/home-six/i-one.png')" alt="Image" class="hs-o">
            <img :src="require('@/assets/images/home-six/i-two.png')" alt="Image" class="hs-t">
        </div>
        <div class="h-6-tour-popup" style="display: none;">
            <iframe src="https://www.youtube.com/embed/RvreULjnzFo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        mounted() {
            const popupButton = document.querySelector('.video-btn')
            const popupDiv = document.querySelector('.h-6-tour-popup')

            popupButton.addEventListener('click', function () {
                popupDiv.style.display = 'flex';
            });

            popupDiv.addEventListener('click', function () {
                popupDiv.style.display = 'none';
            });
        }
    }
</script>

<style>
    .home-six-dark .banner-six {
        background-image: url('~@/assets/images/home-six/banner-bg.png');
    }

    .banner-six {
        background-image: url('~@/assets/images/home-six/banner-bg-light.png');
    }

    .h-6-tour-popup {
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

    .h-6-tour-popup iframe {
        width: 70%;
        height: 70%;
    }
</style>