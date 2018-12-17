<template>
    <!--login form popup-->
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper"  @click="$emit('closeTrailer')">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header">
              <h3 style="display:inline;">Trailer Official</h3>
            </slot>
             <button class="modal-default-button buttonX" @click="$emit('closeTrailer')">X</button>
          </div>
          <div class="modal-body">
            <slot name="body">                    
                <div class="row">
                    <youtube :video-id="videoID"></youtube>
                </div>
            </slot>
          </div>
            <div class="modal-footer">
                <button @click="$emit('closeTrailer')" class="button2">
                      Close
                </button>
            </div>

        </div>
      </div>
    </div>
  </transition> 
    <!--end of login form popup-->

    <!-- modal vue -->


    <!-- end modal vue -->

</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
    export default {
        props: ['videoID']
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
  background-color: rgba(0, 0, 0, .3);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {

    color: white;
  width: 669px;
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

/* CSS FOR BUTTON CLOSE */

</style>
