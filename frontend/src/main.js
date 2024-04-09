import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

// Your existing imports
import WOW from 'wowjs';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  mounted() {
    new WOW.WOW().init(); // Initialize WOW.js
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
