<template>
    <section class="banner-eight">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-10">
                    <div class="banner-eight__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h1>Smart Innovation Through AI</h1>
                    </div>
                </div>
                <div class="col-12 col-lg-2 d-none d-xl-block">
                    <div class="baner-eight__thumb">
                        <img :src="require('@/assets/images/home-eight/banner-thumb.png')" alt="Image">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-3 d-none d-lg-block">
                    <div class="banner-eigh__thumb-two">
                        <img :src="require('@/assets/images/home-eight/banner-thumb-two.png')" alt="Image">
                    </div>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="banner-eight__content-two">
                        <p class="text-xl">We leverage the power of artificial intelligence to build cognitive
                            solutions, products, and platforms that help businesses automate their operations and solve
                            their challenges.</p>
                    </div>
                </div>
            </div>
        </div>
        <router-link class="video-frame" to="/contact-us">
            <img :src="require('@/assets/images/home-eight/frame.png')" alt="Image" class="shape">
            <div class="in-frame">
                <img :src="require('@/assets/images/home-eight/message.png')" alt="Image">
            </div>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "Banner",
    }
</script>