<template>
    <div class="wrap-user-profile">    
            <ul class="breadcumb">
                <li class="active"><a href="#">Home</a></li>
                <li> <span class="ion-ios-arrow-right"></span>User</li>
                <li> <span class="ion-ios-arrow-right"></span>Profile</li>
            </ul>
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
                            <input type="text" style="cursor: pointer" v-model="currentUser.photoUrl" placeholder="" @mouseleave="editPhotoURL = false" @dblclick="editPhotoURL = true" :readonly="!editPhotoURL">
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
                            <button class="btn btn-primary" type="submit">Save</button>
                        </div>
                    </div>	
                </form  >
                <form class="password">
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
    
</template>

<script>
import firebase from 'firebase'

    export default {
        data() {
            return {
                currentUser: this.$store.getters.user,
                editPhotoURL : false
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
        methods: {
            updateUser() {
                this.$store.dispatch("updateUser", this.currentUser).then(()=> {
                    this.$swal({
                          type: 'success',
                          title: 'Updated successfully',
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 2000
                    })
                    this.$store.dispatch("getAllReviews")
                    })
            }
        }
    }
</script>

<style scoped>
    .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
li, span {
    display: inline-block;
    margin-right: 5px;
    color: #abb7c4
}
li.active a {
    color: #4280bf;
}
</style>