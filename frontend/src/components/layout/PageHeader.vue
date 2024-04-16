<template>
  <section class="section cmn-banner">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="cmn-banner__content wow fadeInUp"
            data-wow-duration="600ms"
            data-wow-delay="300ms"
          >
            <h3 class="h3">{{ PageTitle }}</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ PageTitle }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="anime">
      <img
        :src="require('@/assets/images/anime-one.png')"
        alt="Image"
        class="one"
      />
      <img
        :src="require('@/assets/images/anime-two.png')"
        alt="Image"
        class="two"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["PageTitle"],
};
</script>

<style scoped>
.cmn-banner {
  /* --------------------------- */
  /* background-image: url('~@/assets/images/banner/banner-bg.png'); */
  /* background: #111827; */
  /* ---------------------------------- */
  /* ------------------------------------ */
  /* background: linear-gradient(-45deg, #111827, #111827, #e0013f, #111827);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  } */
  /* --------------------------------- */
  /* -------------------------------- */
  animation-name: changeBackground;
  animation-duration: 20s; /* Adjust as needed */
  animation-iteration-count: infinite;
  background-size: cover;
  background-position: center;
  animation-timing-function: linear; /* Change for different easing */

  /* ----------------------------------- */
}
@keyframes changeBackground {
  0% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai1.jpg'); }
  20% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai2.jpg'); }
  40% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai3.jpg'); }
  60% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai4.jpg'); }
  80% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai5.jpg'); }
  100% { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/images/ai/ai1.jpg'); }
}
</style>
