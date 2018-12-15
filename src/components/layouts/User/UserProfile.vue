<template>
    <div class="wrap-user-profile">
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
                                    <a href="#"><img src="/static/images/uploads/user-img.png" alt=""><br></a>
                                    <a href="#" class="redbtn">Change avatar</a>
                                </div>
                                <div class="user-fav">
                                    <p>Account Details</p>
                                    <ul>
                                        <li  class="active"><a href="#">Profile</a></li>
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
                            <div class="form-style-1 user-pro" action="">
                                <form @submit.prevent="updateUser" class="user">
                                    <h4>01. Profile details</h4>
                                    <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>Email:</label>
                                            <input type="text" v-model="currentUser.email" placeholder="" readonly>
                                        </div>
                                        <div class="col-md-6 form-it">
                                            <label>User UID</label>
                                            <input type="text" v-model="currentUser.uid" placeholder="" readonly>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>Display Name</label>
                                            <input type="text" v-model="currentUser.displayName" placeholder="" maxlength="20">
                                        </div>
                                        <div class="col-md-6 form-it">
                                            <label>Photo Url</label>
                                            <input type="text" v-model="currentUser.photoUrl" placeholder="" readonly>
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>Country</label>
                                            <select>
                                            <option value="united">United States</option>
                                            <option value="saab">Others</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 form-it">
                                            <label>State</label>
                                            <select>
                                            <option value="united">New York</option>
                                            <option value="saab">Others</option>
                                            </select>
                                        </div>
                                    </div> -->
                                    <div class="row">
                                        <div class="col-md-2">
                                            <input class="submit" type="submit" value="save">
                                        </div>
                                    </div>	
                                </form>
                                <form action="userprofile.html" class="password">
                                    <h4>02. Change password</h4>
                                    <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>Old Password</label>
                                            <input type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>New Password</label>
                                            <input type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-it">
                                            <label>Confirm New Password</label>
                                            <input type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <input class="submit" type="submit" value="change">
                                        </div>
                                    </div>	
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Preloader from '@/components/layouts/public/Preloader.vue'
import Header from '@/components/layouts/public/Header.vue'
import Footer from '@/components/layouts/public/Footer.vue'
    export default {
        data() {
            return {
                currentUser: this.$store.getters.user,


            }
        },
        watch: {
            currentUser (value) {
                console.log("watch login")
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            }
        },
        components : {
            appPreloader: Preloader,
            appHeader: Header,
            appFooter: Footer
        },
        methods: {
            updateUser() {
                this.$store.dispatch("updateUser", this.currentUser.displayName).then(()=> {
                    this.$swal({
                          type: 'success',
                          title: 'Updated successfully',
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 2000
                    })
                })
            }
        }
    }
</script>

<style>
    
</style>