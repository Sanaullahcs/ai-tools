<template>
    <section class="section h-case-study">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h1">Case Study</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap">
                <div class="col-12 col-lg-6">
                    <div class="h-case-study__single alt-er wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="300ms">
                        <div class="thumb">
                            <router-link to="use-case-details" class="ig">
                                <img :src="require('@/assets/images/home-eight/one.png')" alt="Image">
                            </router-link>
                            <router-link to="use-case-details" class="ic">
                                <i class="fa-solid fa-arrow-up-long"></i>
                            </router-link>
                        </div>
                        <div class="content">
                            <span>Branding</span>
                            <h4>
                                <router-link to="use-case-details">A visual identity for one of Philly’s most iconic public
                                    spaces. Love Park</router-link>
                            </h4>
                        </div>
                    </div>
                    <div class="h-case-study__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="thumb">
                            <router-link to="use-case-details" class="ig">
                                <img :src="require('@/assets/images/home-eight/two.png')" alt="Image">
                            </router-link>
                            <router-link to="use-case-details" class="ic">
                                <i class="fa-solid fa-arrow-up-long"></i>
                            </router-link>
                        </div>
                        <div class="content">
                            <span>Branding</span>
                            <h4>
                                <router-link to="use-case-details">A visual identity for one of Philly’s most iconic public
                                    spaces. Love Park</router-link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="h-case-study__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="thumb">
                            <router-link to="use-case-details" class="ig">
                                <img :src="require('@/assets/images/home-eight/three.png')" alt="Image">
                            </router-link>
                            <router-link to="use-case-details" class="ic">
                                <i class="fa-solid fa-arrow-up-long"></i>
                            </router-link>
                        </div>
                        <div class="content">
                            <span>Branding</span>
                            <h4>
                                <router-link to="use-case-details">A visual identity for one of Philly’s most iconic public
                                    spaces. Love Park</router-link>
                            </h4>
                        </div>
                    </div>
                    <div class="h-case-study__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="thumb">
                            <router-link to="use-case-details" class="ig">
                                <img :src="require('@/assets/images/home-eight/four.png')" alt="Image">
                            </router-link>
                            <router-link to="use-case-details" class="ic">
                                <i class="fa-solid fa-arrow-up-long"></i>
                            </router-link>
                        </div>
                        <div class="content">
                            <span>Branding</span>
                            <h4>
                                <router-link to="use-case-details">A visual identity for one of Philly’s most iconic public
                                    spaces. Love Park</router-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CaseStudy",
    }
</script>