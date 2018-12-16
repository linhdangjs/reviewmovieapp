<template>
    <!--login form popup-->
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper"  @click="$emit('closeSignUp')">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header">
              <h3 style="display:inline;">Sign Up</h3>
            </slot>
             <button class="modal-default-button btn-x" @click="$emit('closeSignUp')">X</button>
          </div>
        <form id="frmLogin" @submit.prevent="onSignUp">
          <div class="modal-body">
            <slot name="body">
                    
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

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
                <button type="submit" class="btnSignUp" id="btnSignUp">OK</button>
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
                            this.username = "";
                            this.email = "";
                            this.password = "";
                            this.$swal("SignUp Success", "Now, You can login to HaiLuaReview","success")
                              // handle close form
                            this.$emit("closeSignUp");
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

    color: white;
  width: 300px;
  position: fixed-top;
  margin: 0px auto;
  padding: 20px 30px;
   background: url(/static/img/slider-bg.ae23a17.jpg) center no-repeat;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 7px rgba(223, 211, 211, 0.33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
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
label, input {
    width: 94%;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
}
.btn-x {
    background-color: rgb(231, 56, 56);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
}
.btnSignUp {
    background-color: rgb(56, 216, 117);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
}
button {
    cursor: pointer;
    color: white;
}
</style>
