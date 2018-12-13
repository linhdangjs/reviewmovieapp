<template>
  <div id="app">
    <appPreloader />
    <appHeader />
    <transition name="slide">
      <router-view />
    </transition>
    <appFooter />
  </div>
</template>

<script>
import Header from '@/components/layouts/public/Header.vue';
import Preloader from '@/components/layouts/public/Preloader.vue';
import Footer from '@/components/layouts/public/Footer.vue';

export default {
  name: 'App',
  components: {
    appPreloader: Preloader,
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style scoped>
.slide-enter {
    opacity: 0;
    transform: translateX(0);

  }
  .slide-enter-active {
    transition: opacity .4s ease;
    opacity: 1;
    animation: slide-in .4s ease-out forwards;
  }
   .slide-leave {
    opacity: 1;
    transform: translateX(0);

  }
  .slide-leave-active {
    transition: opacity .4s ease;
    opacity: 0;
    animation: slide-out .4s ease-out forwards;
  }
  @keyframes slide-out {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-30px)
    }
  }
    @keyframes slide-in {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-30px)
    }
  }
</style>
