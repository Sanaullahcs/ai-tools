<template>
    <section class="section generate generate-two generate-three">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">Focus on solving bigger problems</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap">
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="generate__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="generate__content-btn generate__content-btn-active">
                            <div class="content">
                                <h5 class="h5">Get AI-based suggestions</h5>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove background from image in
                                    one click.
                                </p>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove background from image in
                                    one click.
                                </p>
                            </div>
                        </div>
                        <div class="generate__content-btn">
                            <div class="content">
                                <h5 class="h5">flying with your favorite editor</h5>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                            </div>
                        </div>
                        <div class="generate__content-btn">
                            <div class="content">
                                <h5 class="h5">Code confidently in unfamiliar</h5>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                            </div>
                        </div>
                        <div class="generate__content-btn">
                            <div class="content">
                                <h5 class="h5">data does tech for Individuals</h5>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                                <p>
                                    Drop the complex brushes and layers. Use techAI to remove
                                    background from image in one click.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-7">
                    <div class="generate__thumb wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="tab-content active">
                            <img :src="require('@/assets/images/home-six/t-one.png')" alt="Image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/home-six/t-one.png')" alt="Image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/home-six/t-one.png')" alt="Image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/home-six/t-one.png')" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FeatureTabs",
        mounted(){
            document.querySelectorAll(".tab-content").forEach((content, index) => {
                if (index !== 0) {
                    content.style.display = "none";
                }
            });

            document.querySelectorAll(".generate__content-btn").forEach((btn) => {
                btn.addEventListener("click", function () {
                    // Remove the 'active' class from all tab buttons
                    document.querySelectorAll(".generate__content-btn").forEach((btn) => {
                        btn.classList.remove("generate__content-btn-active");
                    });

                    // Hide all tab content
                    document.querySelectorAll(".tab-content").forEach((content) => {
                        content.style.display = "none";
                    });

                    // Add the 'active' class to the clicked tab button
                    this.classList.add("generate__content-btn-active");

                    // Get the index of the clicked tab button
                    var tabIndex = Array.from(this.parentNode.children).indexOf(this);

                    // Show the corresponding tab content with fade-in animation
                    document.querySelectorAll(".tab-content")[tabIndex].style.display = "block";
                });
            });
        }
    }
</script>