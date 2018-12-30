<template>
    <!--login form popup-->
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper"  @click="$emit('closeLogin')">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header">
              <h3 style="display:inline;">Login</h3>
            </slot>
             <button class="modal-default-button btn-x" @click="$emit('closeLogin')">X</button>
          </div>
        <form id="frmLogin" @submit.prevent="onLogin">
          <div class="modal-body">
            <slot name="body">
                    
                <div class="row">
                    <div class="input-group">
                        <input v-model="email" type="text" name="email" id="email" required />     
                         <label for="email">Email</label>   
                    </div>
                </div>
            
                <div class="row">
                    <div class="input-group">
                        <input v-model="password" type="password" name="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
                    
                </div>

            </slot>
          </div>
            <div class="modal-footer">
                <slot name="footer">
                       <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
                     <button type="submit" class="btnLogin"  :disabled="loading" id="btnLogin"><span>OK</span></button>
                </slot>
 
            </div>
              
        </form>
        </div>
      </div>
    </div>
  </transition> 
    <!--end of login form popup-->

    <!-- modal vue -->


    <!-- end modal vue -->

</template>

<script>
import firebase from 'firebase';
import VueSweetalert2 from 'vue-sweetalert2';
    export default {

        data() {
            return {
                username: "",
                email: "",
                password: "",
                loading: false
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
                if(this.username || this.email)
                {this.loading = true;}
                else {
                    this.loading = false
                     this.$swal({
                            title: 'Login Failed',
                            text:  "Vui lòng điền đầy đủ thông tin",
                            type: 'warning',
                            timer: 1000
                        })
                    }
                 firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                            // console.log(user.user)
                        this.loading = false
                        const newUser = {
                            displayName: user.user.displayName,
                            photoUrl: user.user.photoURL,
                            uid: user.user.uid,
                            email: user.user.email  
                        }
                        console.log(newUser);
                        localStorage.setItem("current-user", JSON.stringify(newUser)); //store currentuser in localstorage 
                        this.$store.commit('setUser', newUser)
                        this.$swal({
                            title: 'Login Success',
                            text:  "Hello " + user.user.email,
                            type: 'success',
                            timer: 1000
                        })
                        // this.$swal("Login Success", "Hello " + user.user.email , "success")
                        // handle close form
                        this.$emit("closeLogin");
                        }
                    )
                    .catch(
                        error => {
                        this.loading = false
                        this.$swal("Login Failed", error.message, "error")
                        //console.log(error)
                        }
                    )
            }
        }
}
</script>

<style scoped>
.modal-mask {

  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    text-shadow: .4px .4px 5px rgba(0,0,0, .2);
    color: white;
    width: 300px;
    position: fixed-top;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    /* background: url(/static/img/slider-bg.ae23a17.jpg) center no-repeat; */
    border-radius: 4px;
    box-shadow: 4.4px 5px 4px 2px  rgba(223, 211, 211, 0.33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
}

.modal-header h3 {
  margin-top: 0;
  color: #28c944e6;
  user-select: none;
}
.modal-footer {
    box-sizing: border-box;
    text-align: center;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* custom */
.input-group {
    margin: 1.6rem 0;
    display: flex;
    align-items: center;
    position: relative;
}

form input {
    display: block;
    margin: 0 auto;
    width: 80%;
    padding: 6px 4px;
    color: rgb(20, 19, 19);
    /* background-color: #0b0b1ab3; */
    border: none;
    border-bottom: 2px solid #78e0a3;
    outline: none;
    /* border-radius: 5px; */
}
form input:focus {
    border-bottom: 2px solid #78e0a3;
}
form input:invalid {
    box-shadow: none;
     -moz-box-shadow: none;
}
form label {
    position: absolute;
    top: 5px;
    left: 30px;
    font-weight: 300;
    font-size: 15px;
    pointer-events: none;
    color: gray;
    transition: 200ms ease;
}
input:focus + label, input:valid + label {
    top: -18px;
    left: 26px;
    font-size: 14px;
    color: #28c944e6;
    font-weight: 500;
}
.btn-x {
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
}

.btnLogin {
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
    width: 35%;
    padding: 5px 25px;
    cursor: pointer;
    box-shadow: 2px 2px 12px (0,0,0, .3);
    outline: none;

}
.btnLogin:disabled {
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    cursor: not-allowed;

}



button::-moz-focus-inner {
  border: 0;
}



button {
    cursor: pointer;
    color: white;
}
/* CSS Spinner */

.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  top: 14px;
  left: 38%;
  padding: 0;
  margin: 0;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  /* margin: 6px; */
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
