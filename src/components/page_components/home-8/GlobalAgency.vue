<template>
    <section class="global-a section pt-0">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-10">
                    <div class="global-a__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h1">
                            <span class=" fw-8 ">We're a global</span>
                            creative agency based in
                            <span class="fw-8">New York</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="g__inner text-center">
                        <img :src="require('@/assets/images/home-eight/g-bg-two.png')" alt="Image" class="shaper-t g-a-dark">
                        <img :src="require('@/assets/images/home-eight/g-bg.png')" alt="Image" class="shaper-t g-a-light">
                        <button class="video-frame video-btn">
                            <img :src="require('@/assets/images/home-eight/frame-three.png')" alt="Image" class="shape">
                            <div class="in-frame bg-img">
                                <i class="fa-sharp fa-solid fa-play"></i>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="col-12">
                    <div class="gobal-a__content">
                        <p class="text-xl">We're a global creative agency based in New York, Amsterdam and Toronto
                            helping brands overcome growth-limiting challenges with moonshot creativity in branding,
                            advertising and public relations.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="accordion" id="accordioner">
                        <div class="row items-gap">
                            <div class="col-12 col-lg-6">
                                <div class="faq__two-left">
                                    <div class="accordion-item wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="600ms">
                                        <h4 class="accordion-header" id="headingOner">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOner" aria-expanded="true"
                                                aria-controls="collapseOner">
                                                Accessibility
                                            </button>
                                        </h4>
                                        <div id="collapseOner" class="accordion-collapse collapse show"
                                            aria-labelledby="headingOner" data-bs-parent="#accordioner">
                                            <div class="accordion-body">
                                                <p>
                                                    Axil is data-driven and performance-focused, paving the way for us
                                                    to charge your business forward and accelerate your growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="900ms">
                                        <h4 class="accordion-header" id="headingTwor">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwor"
                                                aria-expanded="false" aria-controls="collapseTwor">
                                                Audit & Analyze
                                            </button>
                                        </h4>
                                        <div id="collapseTwor" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwor" data-bs-parent="#accordioner">
                                            <div class="accordion-body">
                                                <p>
                                                    Axil is data-driven and performance-focused, paving the way for us
                                                    to charge your business forward and accelerate your growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="faq__two-right">
                                    <div class="accordion-item content__space wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="1500ms">
                                        <h4 class="accordion-header" id="headingFourr">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFourr"
                                                aria-expanded="false" aria-controls="collapseFourr">
                                                Marketing Expertise
                                            </button>
                                        </h4>
                                        <div id="collapseFourr" class="accordion-collapse collapse"
                                            aria-labelledby="headingFourr" data-bs-parent="#accordioner">
                                            <div class="accordion-body">
                                                <p>
                                                    Axil is data-driven and performance-focused, paving the way for us
                                                    to charge your business forward and accelerate your growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item content__space wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="1500ms">
                                        <h4 class="accordion-header" id="headingFiver">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFiver"
                                                aria-expanded="false" aria-controls="collapseFiver">
                                                Growth Solutions
                                            </button>
                                        </h4>
                                        <div id="collapseFiver" class="accordion-collapse collapse"
                                            aria-labelledby="headingFiver" data-bs-parent="#accordioner">
                                            <div class="accordion-body">
                                                <p>
                                                    Axil is data-driven and performance-focused, paving the way for us
                                                    to charge your business forward and accelerate your growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="global-a-popup" style="display: none;">
            <iframe src="https://www.youtube.com/embed/RvreULjnzFo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </section>
</template>

<script scoped>
    export default {
        name: "GlobalAgency",
        mounted() {
            const popupButton = document.querySelector('.video-btn')
            const popupDiv = document.querySelector('.global-a-popup')

            popupButton.addEventListener('click', function () {
                popupDiv.style.display = 'flex';
            });

            popupDiv.addEventListener('click', function () {
                popupDiv.style.display = 'none';
            });
        }
    }
</script>

<style scoped>
    .in-frame.bg-img {
        background-image: url('~@/assets/images/home-eight/frame-bg.png');
    }

    .global-a-popup {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999999;
    }

    .global-a-popup iframe {
        width: 70%;
        height: 70%;
    }

    .home-eight-dark .g-a-light {
        display: none;
    }

    .home-eight:not(.home-eight-dark) .g-a-dark {
        display: none;
    }
</style>