// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
// import firebase from 'firebase'
// import firebaseConfig from './components/firebaseConfig';
export const eventBus = new Vue();
import "slick-carousel/slick/slick.css";
require('bootstrap')
import '@/assets/css/index.css';
import jQuery from 'jquery'
window.jQuery = jQuery
window.$ =jQuery;

import './assets/js/index';
import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
import {Tabs, Tab} from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // created() {
  //   firebase.initializeApp(firebaseConfig);
  // },
  // template: '<App/>',
  // components: { App },
})
/* eslint-disable no-new */
