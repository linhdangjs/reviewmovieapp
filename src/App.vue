<template>
  <div id="app" >
    <appPreloader v-if="loading" />
    <!-- <appHeader v-if="!loading"/> -->
    <transition name="slide">
      <router-view v-if="!loading"/>
    </transition>
    <appFooter v-if="!loading"/>
  </div>
</template>

<script>
import Header from '@/components/layouts/public/Header.vue';
import Preloader from '@/components/layouts/public/Preloader.vue';
import Footer from '@/components/layouts/public/Footer.vue';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      loading : true,
    }
  },
  mounted() {
        window.addEventListener('load', () => {
          console.log('mounted');
          setTimeout(() => {
            this.loading = false;
          }, 2000)
        
    })
  },
  created() {
        //console.log('created');
        var tokenUser = localStorage.getItem("current-user");
        console.log(tokenUser);
        if(tokenUser) this.currentUser = JSON.parse(tokenUser);
        this.$store.commit('setUser', JSON.parse(tokenUser))
        this.fetchAllData();
    },
  beforeUpdate() {
                if (this.$refs.slick) {
                    this.$refs.slick.destroy();
                }
            },
  updated() {
                this.$nextTick(function () {
                    if (this.$refs.slick) {
                        //console.log(this.$refs.slick)
                        this.$refs.slick.create(this.slickOptions);
                        }
                });
            },
  methods: {
        async fetchAllData() {
          console.log('fetchdata');
          const nameDispatch = ["getAllMovies","getAllTvShows","getAllReviews", "getAllMovieSchedules"];
          const result = await Promise.all(nameDispatch.map(this.$store.dispatch));
          
        },
    },
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
