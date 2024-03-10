<template>
    <section class="banner-seven">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="banner-seven__content text-center wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="300ms">
                        <h1 class="text-uppercase fw-8">AI image generator</h1>
                        <p class="text-lg fw-5">
                            AI image generator lets you quickly turn your words into oh-so-incredible images.
                            Start bringing your ideas to life!
                        </p>
                        <form action="#" method="post">
                            <div class="mail-group-two">
                                <select class="styles">
                                    <option data-display="Style">
                                        Styles
                                    </option>
                                    <option value="1">Style One</option>
                                    <option value="2">Style Two</option>
                                </select>
                                <input type="email" name="search" id="search-field"
                                    placeholder="describe what you want to see" required>
                                <button type="submit" aria-label="subscribe to our newsletter" class="btn btn--nonary">
                                    <span class="d-block">Generate now</span>
                                    <img :src="require('@/assets/images/home-six/ser.png')" alt="Image">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner",
    }
</script>