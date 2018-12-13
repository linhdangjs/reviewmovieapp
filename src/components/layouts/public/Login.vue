<template>
    <!--login form popup-->
    <div class="login-wrapper" id="login-content">
        <div class="login-content">
            <a href="#" class="close">x</a>
            <h3>Login</h3>
            <form id="frmLogin" @submit.prevent="onLogin">
                <div class="row">
                    <label for="email">
                        Email:
                        <input v-model="email" type="text" name="email" id="email" placeholder="" />
                    </label>
                </div>
            
                <div class="row">
                    <label for="password">
                        Password:
                        <input v-model="password" type="password" name="password" id="password" placeholder="" />
                    </label>
                </div>
                <div class="row">
                    <div class="remember">
                        <div>
                            <input type="checkbox" name="remember" value="Remember me"><span>Remember me</span>
                        </div>
                        <a href="#">Forget password ?</a>
                    </div>
                </div>
            <div class="row">
                <button type="submit" id="btnLogin">Login</button>
            </div>
            </form>
            <div class="row">
                <p>Or via social</p>
                <div class="social-btn-2">
                    <a class="fb" href="#"><i class="ion-social-facebook"></i>Facebook</a>
                    <a class="tw" href="#"><i class="ion-social-twitter"></i>twitter</a>
                </div>
            </div>
        </div>
    </div>
    <!--end of login form popup-->
</template>

<script>
import firebase from 'firebase';
import VueSweetalert2 from 'vue-sweetalert2';
    export default {

        data() {
            return {
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
            onLogin: function(e) {
                 firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                        const newUser = {
                            id: user.user.uid,
                            email: user.user.email  
                        }
                        localStorage.setItem("current-user", JSON.stringify(newUser)); //store currentuser in localstorage 
                        this.$store.commit('setUser', newUser)
                        this.$swal("Login Success", "Hello " + user.user.email , "success")
                        // handle close form
                        var sections = document.querySelectorAll('.overlay');
                            for (let i = 0; i < sections.length; i++){
                                sections[i].classList.remove('openform');   
                            }
                        }
                    )
                    .catch(
                        error => {
                        this.$swal("Login Failed", error.message, "error")
                        console.log(error)
                        }
                    )
                // this.$store.dispatch("signUserIn", {email: this.email, password: this.password})
            }
        }
}
</script>

<style>

</style>
