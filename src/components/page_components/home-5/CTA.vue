<template>
    <section class="section cta-two">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-two__inner bg-img wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                            <h2 class="h2">Ready to expedite your writing?</h2>
                            <p>
                                Generate unique article drafts from headlines and keywords,
                                now
                            </p>
                        </div>
                        <ul>
                            <li>FULL ARTICLE DRAFT IN MINUTES</li>
                            <li>SEO FRIENDLY CONTENT</li>
                            <li>LIST OF CITATIONS FOR VERIFICATION</li>
                            <li>UNIQUE & RELEVANT ORIGINAL CONTENT</li>
                        </ul>
                        <div class="section__content-cta text-center">
                            <router-link to="/sign-up" class="btn btn-fo">
                                start free trial
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
        name: "CTA",
    }
</script>

<style>
    .cta-two__inner.bg-img {
        background-image: url('~@/assets/images/cta-two-bg.png');
    }
</style>