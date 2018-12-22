<template>
    <div class="wrap-content">
            <appHeader />
            <appMainSlider />
            <appMovieContent />
            <!-- <appTrailers /> -->
            <appLastestNews />
    </div>

</template>

<script>

import Header from '@/components/layouts/public/Header.vue'
import MainSlider from '@/components/layouts/HomePage/SlickMainSlider.vue'
import Login from '@/components/layouts/public/Login.vue'
import SignUp from '@/components/layouts/public/SignUp.vue'
import MovieContent from '@/components/layouts/HomePage/MovieContent.vue'
import Trailers from '@/components/layouts/HomePage/Trailers.vue'
import LastestNews from '@/components/layouts/HomePage/LastestNews.vue'
//import Preloader from '@/components/layouts/public/Preloader.vue'
    export default {
        data() {
            return {
               //loading: false
            }
        },
        computed : {
            movies() {
                return this.$store.getters.movies;
            }
        }, 
        created() {
            console.log('created');
           this.fetchAllMovies();
           
        },
 
        methods: {
            fetchAllMovies() {
                this.$store.dispatch("getAllMovies").then(() => {
                //    console.log(this.$store.getters.movies)
                })
            }
        },
        components: {
            appHeader : Header,
            appMainSlider: MainSlider,
            appLogin : Login,
            appSignUp : SignUp,
            appMovieContent : MovieContent,
            appTrailers : Trailers,
            appLastestNews : LastestNews,
            //appPreloader: Preloader
        }
    }
</script>

<style>

</style>
    