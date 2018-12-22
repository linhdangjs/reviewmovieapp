<template>
    <div class="wrap-user-view">
        <appHeader />
        <div class="main-user-profile">
            <div class="hero user-hero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hero-ct">
                                <h1>{{ currentUser.displayName ? currentUser.displayName :  currentUser.email }}'s profile</h1>
                          
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            <div class="page-single">
                <div class="container">
                    <div class="row ipad-width">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div class="user-information">
                                <div class="user-img">
                                    <a href="#"> <v-lazy-image :src="photoUrl" /><br></a>
                                    <a href="#" class="redbtn">Change avatar</a>
                                </div>
                                <div class="user-fav">
                                    <p>Account Details</p>
                                    <ul>
                                        <router-link active-class="active" tag="li" to="/user/profile"><a>Profile</a></router-link>
                                        <router-link active-class="active" tag="li" to="/user/myreviews"><a>My Rated Movie</a></router-link>
                                        <router-link active-class="active" tag="li" to="/user/bills"><a>My Bills</a></router-link>
                                    </ul>
                                </div>
                                <div class="user-fav">
                                    <p>Others</p>
                                    <ul>
                                        <li><a href="#">Change password</a></li>
                                        <li><a href="#">Log out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <!-- ROUTER VIEW USER -->
                             <transition name="slide">
                                    <router-view />
                            </transition>
                            <!-- END ROUTER VIEW USER -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/layouts/public/Header.vue'
import firebase from 'firebase'
import VLazyImage from "v-lazy-image";
    export default {
        data() {
            return {
                currentUser: this.$store.getters.user,
                photoUrl: this.$store.getters.user.photoUrl ? this.$store.getters.user.photoUrl : "/static/images/uploads/user-img.png"
            }
        },
        watch: {
            currentUser (value) {
                console.log("watch login")
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            },
            photoUrl (value) {
                 console.log("watch login")
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            }
        },
        methods: {

        },
        components : {
            appHeader : Header
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