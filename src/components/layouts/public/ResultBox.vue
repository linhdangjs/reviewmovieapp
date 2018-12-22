<template>
    <div class="resultSearch" v-if="queryResult.length > 0">
        <router-link tag="div" :to="{name: 'MovieDetail', params: {id: result.movie_id }}" class="resultItem" v-for="(result, index) in queryResult" :key="index">
            <img :src="result.photoUrl" alt="">
            <span>{{ result.name }}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['queryResult']
}
</script>

