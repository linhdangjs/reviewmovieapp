<template>
    <div class="movie-items">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-8">
                <appTheater />
				<appOnTvShow />
			</div>
			<div class="col-md-4">
				<div class="sidebar">
					<appAds />
					<appCelebrities />
				</div>
			</div>
		</div>
	</div>
</div>    
</template>

<script>
    
    import SlickInTheater from '@/components/layouts/HomePage/SlickInTheater.vue'
    import SlickOnTvShow from '@/components/layouts/HomePage/SlickOnTv.vue'
    import Advertisements from '@/components/layouts/HomePage/AdvertisementsY.vue'
    import Celebrities from '@/components/layouts/HomePage/Celebrities.vue'
    
    export default {
        components: {
            appTheater : SlickInTheater,
            appOnTvShow : SlickOnTvShow,
            appAds : Advertisements,
            appCelebrities : Celebrities
        }
    }
</script>

<style>

</style>
