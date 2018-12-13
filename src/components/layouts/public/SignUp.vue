<template>
    <!--signup form popup-->
    <div class="login-wrapper"  id="signup-content">
        <div class="login-content">
            <a href="index.html#" class="close">x</a>
            <h3>sign up</h3>
            <form id="frmSignup" @submit.prevent="onSignUp">
                <div class="row">
                    <label for="username-2">
                        Username:
                        <input v-model="username" type="text" name="username" id="username-2" placeholder="" />
                    </label>
                </div>
            
                <div class="row">
                    <label for="email-2">
                        your email:
                        <input v-model="email" type="text" name="email" id="email-2" placeholder="" />
                    </label>
                </div>
                <div class="row">
                    <label for="password-2">
                        Password:
                        <input  v-model="password" type="password" name="password" id="password-2" placeholder="" />
                    </label>
                </div>
                <!-- <div class="row">
                    <label for="repassword-2">
                        re-type Password:
                        <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                    </label>
                </div> -->
            <div class="row">
                <button type="submit" id="btnSignup">Sign Up</button>
            </div>
            </form>
        </div>
    </div>
    <!--end of signup form popup-->
</template>

<script>
import firebase from 'firebase';

    export default {
        data() {
            return {
                username: "",
                email: "",
                password: ""
            };
        },
        computed: {
            user() {
                return this.$store.getters.user;
            }
        },
        watch: {
            user (value) {
                if(value !== null && value !== undefined) {
                    this.$router.push({ name: 'HomePage' });
                }
            }
        },
        methods: {
            onSignUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                            console.log(user.user.uid);
                            // const newUser = {
                            //     id: user.user.uid,
                            // }
                            this.username = "";
                            this.email = "";
                            this.password = "";
                            this.$swal("SignUp Success", "Now, You can login to HaiLuaReview","success")
                              // handle close form
                            var sections = document.querySelectorAll('.overlay');
                                for (let i = 0; i < sections.length; i++){
                                    sections[i].classList.remove('openform');   
                                }
                            //this.$store.commit('setUser', newUser)
                        }
                    )
                    .catch(
                        error => {
                        this.$swal("SignUp Failed", error.message , "error")
                        console.log(error)
                        }
                    )
                //this.$store.dispatch('signUserUp', {email: this.email, password: this.password})            
            }
        }
}
</script>

<style>

</style>
