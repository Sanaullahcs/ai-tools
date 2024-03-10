<template>
    <section class="section h-s-lang">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-6">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">client’s feedback</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap">
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/php.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>php 6.0.2</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/python.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>python 3.0</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/word.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>WordPress</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/java.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>Javascript</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/dj.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>django Xc</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-2">
                    <div class="h-s-lang-single">
                        <div class="thumb">
                            <img :src="require('@/assets/images/home-six/flutter.png')" alt="Image">
                        </div>
                        <div class="cotnent">
                            <h4>Flutter App</h4>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Feedback2",
    }
</script>