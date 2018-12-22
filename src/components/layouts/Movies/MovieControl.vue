<template>

<div class="wrap-movie-control">
    <appHeader />
    <router-view></router-view>
</div>

</template>

<script>
import Header from '@/components/layouts/public/Header.vue'
export default {
    components: {
        appHeader : Header
    }
}
</script>

<style>

</style>
