<template>
    <section class="section clone">
        <div class="container">
            <div class="row items-gap align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="clone__thumb wow fadeInUp" data-wow-duration="600ms">
                        <img :src="require('@/assets/images/home-four/art-thumb.png')" alt="Image">
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="clone__content section__content">
                        <h2 class="h2 wow fadeInUp">Let artificial intelligence write your resume.</h2>
                        <div class="paragraph wow fadeInUp" data-wow-duration="600ms">
                            <p class="text-md">
                                Are you struggling to find the right words for your resume? Our AI resume builder can
                                find them in no time! It's powered by OpenAI's GPT-4, the world's most powerful language
                                model, and it can automatically produce text indistinguishable from human writers. Say
                                goodbye to writer's block. Generate the first draft
                                of your resume in seconds.
                            </p>
                        </div>
                        <ul class="wow fadeInUp">
                            <li>
                                Powered by GPT-4
                            </li>
                            <li>
                                Generated in seconds
                            </li>
                            <li>
                                Produces human-like text
                            </li>
                        </ul>
                        <div class="section__content-cta wow fadeInUp" data-wow-duration="600ms">
                            <router-link to="/sign-up" class="btn btn-fo">
                                create My resume
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Generate",
    }
</script>