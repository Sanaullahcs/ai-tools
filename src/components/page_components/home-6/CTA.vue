<template>
    <section class="pr-d">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="pr-d-inner bg-img">
                        <h2>Launch your productivity boost today.</h2>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn">try it free now</router-link>
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
    .pr-d-inner {
        background-image: url('~@/assets/images/home-six/pr-d-light.png');
    }
</style>