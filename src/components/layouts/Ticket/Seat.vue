<template>
     <button type="button" :class="{selected : isSelected}" @click="isSelected = !isSelected" @resetSelected="isSelected = false"><slot></slot></button>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
    data() {
        return {
            isSelected: false
        }
    },
    created() {
        eventBus.$on('resetSelected', (value) => {
            this.isSelected = value;
        });
    }
}
</script>

<style >
    

button::-moz-focus-inner {
  border: 0;
}


</style>