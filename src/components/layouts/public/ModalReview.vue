<template>
    <!--login form popup-->
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper"  @click="$emit('closeReview')">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header">
              <h3 style="display:inline;">Write Review</h3>
            </slot>
             <button class="modal-default-button btn-x" @click="$emit('closeReview')">X</button>
          </div>
        <form id="frmReview" @submit.prevent="onSubmitReview(0)">
          <div class="modal-body">
            <slot name="body">
                    
                <div class="row">
                    <label for="email">
                        Title
                        <input v-model="title" name="title" id="title" placeholder="Write title for your review" />
                    </label>
                </div>
            
                <div class="row">
                       <textarea rows="5" cols="50" v-model="content" name="content" id="content" placeholder="Write something here" />
                </div>
                <div class="row">
                    <p style="color: #fd153d; font-weight:bold;">Rate for movie:  </p>
					<star-rating @rating-selected="setRating" :max-rating="10" :rating="currentMovie[0].rating"  :star-size="20" :show-rating="false" :border-width="0.5" border-color="#9BA6B2" inactive-color="#040506" active-color="#ffbd00" :increment="0.5"></star-rating>
                </div>
            </slot>
          </div>
            <div class="modal-footer">
                <slot name="footer">
                       <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
                     <button type="submit" class="btnReview"  :disabled="loading" id="btnReview">
                   
                         
                    Submit
                </button>
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
import { eventBus } from '@/main.js'
import firebase from 'firebase';
import VueSweetalert2 from 'vue-sweetalert2';
import StarRating from 'vue-star-rating'
    export default {

        data() {
            return {
                title: "",
                content: "",
                rating : 0,
                loading: false
            };
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
            currentMovie() {
				var movies = this.$store.getters.movies;
                var currentMovie = movies.filter(movie => movie.movie_id === this.$route.params.id);
                console.log(currentMovie);
				return currentMovie;
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
            setRating(rating) {
                this.rating = rating;
            },
            onSubmitReview(currentPage) {
                //var time = firebase.firestore.FieldValue.serverTimestamp();
                if(this.title && this.content) {
                    this.$store.dispatch("postReview", {
                        user_uid: this.user.uid,
                        user_email: this.user.email,
                        user_avatar: this.user.photoUrl,
                        type: "movie",
                        media_id: this.currentMovie[0].movie_id,
                        media_photo: this.currentMovie[0].photoUrl,
                        media_name: this.currentMovie[0].name,
                        media_year: this.currentMovie[0].year,
                        title: this.title,
                        content: this.content,
                        rating: this.rating==0? this.currentMovie[0].rating: this.rating,
                        //created_at: time
                    }).then(()=>{
                        this.$emit("page:update", currentPage)
                    })
                    .catch(err => console.log(err))
                    this.$swal({
                        title: 'Review Success',
                        text:  "Cảm ơn chia sẻ của bạn!",
                        type: 'success',
                        timer: 1000
                        })
                    this.$emit("closeReview")
                } else {
                    this.$swal("Submit Failed", "Vui lòng không để trống!","warning")
                }
            
    
            }
        },
        components: {
             StarRating
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
  width: 450px;
  position: fixed-top;
  margin: 0px auto;
  padding: 20px 30px;
   background: url(/static/img/slider-bg.ae23a17.jpg) center no-repeat;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 7px rgba(223, 211, 211, 0.33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-footer {
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
form#frmReview label, input {
    width: 100%;
    /* padding: 5px; */
    margin-bottom: 5px;
    border-radius: 5px;
}
.btn-x {
    background-color: rgb(231, 56, 56);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
}
.btnReview {
    background-color: rgb(56, 216, 117);
    border-radius: 5px;
    border: none;
    text-align: center;
    box-sizing: border-box;
    width: 35%;
    padding: 5px 25px;


}
.btnReview:disabled {
    background: rgba(149, 209, 173, 0.788);
    cursor: not-allowed;

}

button {
    cursor: pointer;
    color: white;
}
/* CSS Spinner */
.lds-ring-container {
    position: absolute;
    right: 50%;
     box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
    top: 50px;
  left: 31%;
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
textarea#content {
    height: inherit;
}
</style>
