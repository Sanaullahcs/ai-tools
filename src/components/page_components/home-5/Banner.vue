<template>
    <section class="banner-five">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-9">
                    <div class="banner-five__content text-center wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="300ms">
                        <p>Trusted by 2.5 million successful writers worldwide.</p>
                        <h2 class="h2-light">
                            Whatever you want to ask,
                            <span>our chat has the answers</span>
                        </h2>
                        <div class="section__content-cta">
                            <div class="authentic">
                                <router-link to="/sign-up" class="btn btn--nonary">
                                    <img :src="require('@/assets/images/google.png')" alt="Image">
                                    continue with google
                                </router-link>
                                <div class="divide">
                                    <p>Or</p>
                                </div>
                                <router-link to="/sign-up" class="btn btn--nonary">
                                    <img :src="require('@/assets/images/facebook.png')" alt="Image">
                                    continue with facebook
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__content-cta tour">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tour__content wow fadeInUp" data-wow-duration="600ms"
                                data-before-image="assets/images/frame.png">
                                <div class="video-frame"></div>
                                <video muted loop autoplay controls>
                                    <source :src="require('@/assets/images/video/video.mp4')" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner",
    }
</script>

<style scoped>
    .video-frame {
        background-image: url('~@/assets/images/frame.png');
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>