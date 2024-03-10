<template>
    <div class="tour section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                    <div class="section__header text-center">
                        <h2>Generate videos at scale, hassle-free</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tour__content wow fadeInUp" data-wow-duration="600ms">
                        <img :src="require('@/assets/images/home-nine/v-bg.png')" alt="Image">
                        <a href="javascript:void(0)" title="video Player"
                            class="video-btn">
                            <i class="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="tour-popup" style="display: none;">
            <iframe src="https://www.youtube.com/embed/RvreULjnzFo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name: "Tour",
        mounted() {
            const popupButton = document.querySelector('.video-btn')
            const popupDiv = document.querySelector('.tour-popup')

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
    .tour-popup {
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

    .tour-popup iframe {
        width: 70%;
        height: 70%;
    }
</style>