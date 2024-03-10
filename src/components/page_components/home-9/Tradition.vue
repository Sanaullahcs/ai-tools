<template>
    <section class="section tradi pb-0">
        <div class="container">
            <div class="row items-gap">
                <div class="col-12 col-lg-6">
                    <div class="tradi__single trad-1 bg-img" data-background="assets/images/home-nine/t-one.png">
                        <h2>
                            Stop Traditional video
                            creation
                        </h2>
                        <ul class="section__content-cta">
                            <li>
                                <i class="fa-solid fa-xmark"></i>
                                Working with expensive 3rd parties
                            </li>
                            <li>
                                <i class="fa-solid fa-xmark"></i>
                                Hiring actors, equipment and studios
                            </li>
                            <li>
                                <i class="fa-solid fa-xmark"></i>
                                Complex editing tools & processes
                            </li>
                            <li>
                                <i class="fa-solid fa-xmark"></i>
                                Challenging to update and maintain consistency
                            </li>
                            <li>
                                <i class="fa-solid fa-xmark"></i>
                                Localizing content requires extra time and resources
                            </li>
                        </ul>
                        <div>
                            <router-link to="/about" class="btn btn--quinary">know more about it</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="tradi__single trad-2 wer bg-img" data-background="assets/images/home-nine/t-two.png">
                        <h2>
                            Generate AI videos with
                            real human
                        </h2>
                        <ul class="section__content-cta">
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Working with expensive 3rd parties
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Hiring actors, equipment and studios
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Complex editing tools & processes
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Challenging to update and maintain consistency
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Localizing content requires extra time and resources
                            </li>
                        </ul>
                        <div>
                            <router-link to="/sign-up" class="btn btn--quinary">Create a free AI video</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Tradition",
    }
</script>

<style>
    .trad-1 {
        background-image: url('~@/assets/images/home-nine/t-one.png');
    }
    .trad-2 {
        background-image: url('~@/assets/images/home-nine/t-two.png');
    }
</style>