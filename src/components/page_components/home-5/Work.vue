<template>
    <div>
        <!-- ==== overview start ==== -->
        <section class="section pb-0 h-fi-overview">
            <div class="container">
                <div class="row items-gap">
                    <div class="col-12 col-md-6 col-xxl-4">
                        <div class="h-fi-overview-single">
                            <div class="thumb">
                                <img :src="require('@/assets/images/home-five/h-one.png')" alt="Image">
                            </div>
                            <div class="content">
                                <p>for blog writers</p>
                                <h4>Write blogs 10x faster</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xxl-4">
                        <div class="h-fi-overview-single">
                            <div class="thumb">
                                <img :src="require('@/assets/images/home-five/h-two.png')" alt="Image">
                            </div>
                            <div class="content">
                                <p>for social media manager</p>
                                <h4>Write higher converting</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xxl-4">
                        <div class="h-fi-overview-single">
                            <div class="thumb">
                                <img :src="require('@/assets/images/home-five/h-three.png')" alt="Image">
                            </div>
                            <div class="content">
                                <p>for email marketers</p>
                                <h4>Write engaging emails</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ==== / overview end ==== -->
        <!-- ==== work start ==== -->
        <section class="section h-fi-work">
            <div class="container">
                <div class="row justify-content-center items-gap">
                    <div class="col-12 col-xl-6">
                        <div class="section__header wow fadeInUp" data-wow-duration="600ms">
                            <h2 class="h2">How it works</h2>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center line-th">
                    <div class="col-12 col-lg-6">
                        <div class="h-thumb wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                            <img :src="require('@/assets/images/home-five/one.png')" alt="Image">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="h-content wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                            <span class="tag">01</span>
                            <h4>Enter your copywriting project</h4>
                            <p>Are you struggling to find the right words for your resume? Our AI resume builder can
                                find them in no time! It's powered by OpenAI's GPT-4, the world's most powerful language
                                .</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 section__content-cta">
                        <div class="h-content alt-content wow fadeInUp" data-wow-duration="300ms"
                            data-wow-delay="400ms">
                            <span class="tag">02</span>
                            <h4>Give Copy.ai a bit of context</h4>
                            <p>Are you struggling to find the right words for your resume? Our AI resume builder can
                                find them in no time! It's powered by OpenAI's GPT-4, the world's most powerful language
                                .</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 section__content-cta">
                        <div class="h-thumb alt-thumb wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                            <img :src="require('@/assets/images/home-five/two.png')" alt="Image">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="h-thumb wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                            <img :src="require('@/assets/images/home-five/three.png')" alt="Image">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="h-content wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                            <span class="tag">03</span>
                            <h4>Sift through the results</h4>
                            <p>Are you struggling to find the right words for your resume? Our AI resume builder can
                                find them in no time! It's powered by OpenAI's GPT-4, the world's most powerful language
                                .</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 section__content-cta">
                        <div class="h-content alt-content wow fadeInUp" data-wow-duration="300ms"
                            data-wow-delay="400ms">
                            <span class="tag">04</span>
                            <h4>Edit, polish, and publish</h4>
                            <p>Are you struggling to find the right words for your resume? Our AI resume builder can
                                find them in no time! It's powered by OpenAI's GPT-4, the world's most powerful language
                                .</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 section__content-cta">
                        <div class="h-thumb alt-thumb mb-0 wow fadeInUp" data-wow-duration="300ms"
                            data-wow-delay="400ms">
                            <img :src="require('@/assets/images/home-five/four.png')" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ==== / work end ==== -->
    </div>
</template>

<script>
    export default {
        name: "Work",
    }
</script>