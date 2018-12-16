<template>
    <div class="wrap-user-view">
        <div class="main-user-profile">
            <div class="hero user-hero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hero-ct">
                                <h1>{{ currentUser.displayName ? currentUser.displayName :  currentUser.email }}'s profile</h1>
                                <ul class="breadcumb">
                                    <li class="active"><a href="#">Home</a></li>
                                    <li> <span class="ion-ios-arrow-right"></span>Profile</li>
                                </ul>
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
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">Favorite movies</a></li>
                                        <li><a href="#">Rated movies</a></li>
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
                            <router-view></router-view>
                            <!-- END ROUTER VIEW USER -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
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

        }
    }
</script>

<style>
    
</style>