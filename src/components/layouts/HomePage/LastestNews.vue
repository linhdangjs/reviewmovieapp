<template>
    <!-- latest new v1 section-->
<div class="latestnew">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-8">
				<appAdsX />
                <appMoreNews />	
			</div>
			<div class="col-md-4">
				<div class="sidebar">
				</div>
			</div>
		</div>
	</div>
</div>
<!--end of latest new v1 section-->
</template>

<script>

import AdvertisementsX from '@/components/layouts/HomePage/AdvertisementsX.vue'
import MoreNews from '@/components/layouts/HomePage/MoreNews.vue'
import PluginFacebook from '@/components/layouts/HomePage/PluginFacebook.vue'
import PluginTweet from '@/components/layouts/HomePage/PluginTweet.vue'

export default {
    components : {
        appAdsX : AdvertisementsX,
        appMoreNews : MoreNews,
        appPluginFB : PluginFacebook,
        appPluginTW : PluginTweet
    }
}
</script>

<style>

</style>
