<template>
    <section class="banner-four">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6 col-xxl-6">
                    <div class="banner-four__content">
                        <p>Trusted by 2.5 million successful job seekers worldwide.</p>
                        <h2 class="h2-light wow fadeInUp" data-wow-delay="300ms">
                            The smartest
                            <span>GPT-powered</span>
                            resume builder.
                        </h2>
                        <p>
                            techAI is the only resume platform that uses leading AI to automate every aspect of creating
                            a hirable resume—writing, editing, formatting, and optimizing.
                        </p>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn btn-fo">
                                start free now
                            </router-link>
                            <router-link to="/teams" class="btn btn--secondary">
                                view all resume
                            </router-link>
                        </div>
                        <div class="ban-spo ban-spo-dark wow fadeInUp" data-wow-delay="300ms">
                            <p class="text-lg">Loved by interviewers at</p>
                            <div class="ban-spo-wrapper">
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/one.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/two.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/three.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/four.png')" alt="Image">
                                </div>
                            </div>
                        </div>
                        <div class="ban-spo ban-spo-light wow fadeInUp" data-wow-delay="300ms">
                            <p class="text-lg">Loved by interviewers at</p>
                            <div class="ban-spo-wrapper">
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/l-one.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/l-two.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/l-three.png')" alt="Image">
                                </div>
                                <div class="ban-spo-single">
                                    <img :src="require('@/assets/images/home-four/l-four.png')" alt="Image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5 offset-lg-1 col-xxl-5 offset-xxl-1 d-none d-lg-block">
                    <div class="banner-four__thumb">
                        <img :src="require('@/assets/images/home-four/thumb.png')" alt="Image" class="unset">
                        <img :src="require('@/assets/images/home-four/dot.png')" alt="Image" class="dot wow fadeInDown"
                            data-wow-delay="700ms">
                        <img :src="require('@/assets/images/home-four/hire.png')" alt="Image" class="hire wow fadeInUp"
                            data-wow-delay="700ms">
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
    .banner-four {
        background-image: url('~@/assets/images/home-four/bg.png');
    }

    .home-four-light .banner-four {
        background-image: url('~@/assets/images/home-four/bg-light.png');
    }

    .home-four:not(.home-four-light) .ban-spo-light {
        display: none;
    }

    .home-four-light .ban-spo-dark {
        display: none;
    }

    .home-four-light .banner-four .btn--secondary {
        color: #4569e7;
        border: 1px solid #4569e7;
        transition: all .4s ease-in-out;
    }

    .home-four-light .banner-four .btn--secondary:hover {
        color: white;
    }
    
</style>