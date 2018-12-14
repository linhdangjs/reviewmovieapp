<template>
    <!--preloading-->
   <div class="wrap">
  <div class="loading">
    <div class="bounceball"></div>
    <div class="text">NOW LOADING</div>
  </div>
</div>
    <!--end of preloading-->
</template>

<script>
export default {
    
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
body {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #020D18;
  font-family: Montserrat;
}

.wrap {
  position: absolute;
  top: 50%; 
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.text {
  color: #e9dcc4;
  display: inline-block;
  margin-left: 5px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: 15px;
}
.bounceball:before {
  position: absolute;
  content: '';
  display: block;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #DD003F;
  -webkit-transform-origin: 50%;
          transform-origin: 50%;
  -webkit-animation: bounce 500ms alternate infinite ease;
          animation: bounce 500ms alternate infinite ease;
}

@-webkit-keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

@keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

</style>

