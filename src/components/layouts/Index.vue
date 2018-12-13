<template>
    <div class="wrap-content">
            <appMainSlider />
            <appMovieContent />
            <!-- <appTrailers /> -->
            <appLastestNews />
    </div>

</template>

<script>

import MainSlider from '@/components/layouts/HomePage/SlickMainSlider.vue'
import Login from '@/components/layouts/public/Login.vue'
import SignUp from '@/components/layouts/public/SignUp.vue'
import MovieContent from '@/components/layouts/HomePage/MovieContent.vue'
import Trailers from '@/components/layouts/HomePage/Trailers.vue'
import LastestNews from '@/components/layouts/HomePage/LastestNews.vue'

    export default {
        data() {
            return {
                
            }
        },
        components: {
            appMainSlider: MainSlider,
            appLogin : Login,
            appSignUp : SignUp,
            appMovieContent : MovieContent,
            appTrailers : Trailers,
            appLastestNews : LastestNews,

        }
    }
</script>

<style>

</style>
    