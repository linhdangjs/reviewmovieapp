<template>
     <button type="button" :class="{selected : isSelected}" @click="isSelected = !isSelected"><slot></slot></button>
</template>

<script>
export default {
    data() {
        return {
            isSelected: false
        }
    }
}
</script>

<style >
    

button::-moz-focus-inner {
  border: 0;
}


</style>