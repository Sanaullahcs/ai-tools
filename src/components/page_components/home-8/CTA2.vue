<template>
    <section class="pr-d section pb-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="pr-d-inner bg-img">
                        <h2 class="h1">Launch your productivity</h2>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn btn-fo">try it free now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CTA2",
    }
</script>

<style>
    .pr-d-inner.bg-img {
        background-image: url('~@/assets/images/home-eight/prt.png');
    }
</style>