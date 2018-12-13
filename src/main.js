// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'
import firebaseConfig from './components/firebaseConfig';

import "slick-carousel/slick/slick.css";
import '@/assets/css/index.css';
import jQuery from 'jquery'
window.jQuery = jQuery
window.$ =jQuery;
require('bootstrap') 
import './assets/js/index';


import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);



Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig);
  },
  // template: '<App/>',
  // components: { App },
})
/* eslint-disable no-new */
