<template>
    <section class="banner-nine">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="banner-nine__inner">
                        <div class="row align-items-center">
                            <div class="col-12 col-xl-7">
                                <div class="banner-nine__content">
                                    <p>#1 AI video creation platform</p>
                                    <h1 class="h2-light">
                                        Create professional
                                        videos in 15 minutes
                                    </h1>
                                    <ul>
                                        <li>Turn text into speech in over 120 languages</li>
                                        <li>No equipment or video editing skills</li>
                                    </ul>
                                    <div class="section__cta">
                                        <router-link to="/use-case" class="btn btn--secondary">Create a free AI video</router-link>
                                    </div>
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
    export default {
        name: "Banner",
    }
</script>

<style>
    .banner-nine__inner {
        background-image: url('~@/assets/images/home-nine/banner-bg.png');
    }
</style>