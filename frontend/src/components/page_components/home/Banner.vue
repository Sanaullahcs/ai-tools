<template>
    <section class="section banner-two">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-9">
                    <div class="banner-two__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h1 class="h1" style="color: #B31AA0 !important; margin-top: -100px;">Ai Savr</h1>

                        <h1 class="h1" style="margin-bottom: 76px;">best ai writer for creating</h1>
                        <h2 class="h1" style="margin-bottom: 76px;">
                            <span id="textTyped">Your AI Writer</span>
                        </h2>
                        <p class="text-lg">
                            Create human-quality blog posts, SEO articles, news, press
                            releases, and more in seconds
                        </p>
                        <div class="section__content-cta">
                            <router-link to="/chat" class="btn btn--senary">
                                start writing free
                            </router-link>
                            <p>7-day trial. No credit card required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="anime">
            <img :src="require('@/assets/images/banner/anime-one.png')" alt="Image" class="one">
            <img :src="require('@/assets/images/banner/anime-two.png')" alt="Image" class="two">
            <img :src="require('@/assets/images/banner/anime-three.png')" alt="Image" class="three">
            <img :src="require('@/assets/images/banner/anime-four.png')" alt="Image" class="four">
            <img :src="require('@/assets/images/banner/anime-five.png')" alt="Image" class="five">
            <img :src="require('@/assets/images/banner/circle.png')" alt="Image" class="circ">
        </div>
    </section>
</template>

<script>
    import Typed from 'typed.js'

    export default {
        name: "Banner",
        methods: {
            initTyped() {
                const options = {
                    strings: ["Seo friendly Blogs", "Articles", "instagram posts","facebook posts","linkedin posts","product description"],
                    typeSpeed: 50,
                    startDelay: 50,
                    backSpeed: 50,
                    backDelay: 1000,
                    loop: true,
                }
                new Typed("#textTyped", options);
            }
        },
        mounted() {
            this.initTyped()
        }
    }
</script>

<style scoped>
    .banner-two {
        background-image: url('~@/assets/images/banner/banner-two-bg-light.png');
    }
</style>
