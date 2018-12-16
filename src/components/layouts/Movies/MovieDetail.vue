<template>
    <div class="wrap-movie-detail">
        <div class="hero mv-single-hero" :style="{ 'background-image': 'url(' + currentMovie[0].backgroundUrl + ')' }">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!-- <h1> movie listing - list</h1>
                        <ul class="breadcumb">
                            <li class="active"><a href="#">Home</a></li>
                            <li> <span class="ion-ios-arrow-right"></span> movie listing</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="page-single movie-single movie_single">
		<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img :src="currentMovie[0].photoUrl" alt="">
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							<div><a class="item item-1 redbtn"> <i class="ion-play"></i> Watch Trailer</a></div>
							<div><a @click="showTrailerModal = true" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div>
						</div>
						<div class="btn-transform transform-vertical">
							<div><a href="moviesingle.html#" class="item item-1 yellowbtn"> <i class="ion-card"></i> Buy ticket</a></div>
							<div><a href="moviesingle.html#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
						</div>
					</div>
				</div>
			</div>
            	<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">Movie-{{ currentMovie[0].movie_id }} - {{ currentMovie[0].name }} <span>{{ currentMovie[0].year }}</span></h1>
					<div class="social-btn">
						<a href="moviesingle.html#" class="parent-btn"><i class="ion-heart"></i> Add to Favorite</a>
						<div class="hover-bnt">
							<a href="moviesingle.html#" class="parent-btn"><i class="ion-android-share-alt"></i>share</a>
							<div class="hvr-item">
								<a href="moviesingle.html#" class="hvr-grow"><i class="ion-social-facebook"></i></a>
								<a href="moviesingle.html#" class="hvr-grow"><i class="ion-social-twitter"></i></a>
								<a href="moviesingle.html#" class="hvr-grow"><i class="ion-social-googleplus"></i></a>
								<a href="moviesingle.html#" class="hvr-grow"><i class="ion-social-youtube"></i></a>
							</div>
						</div>		
					</div>
					<div class="movie-rate">
						<div class="rate">
							<i class="ion-android-star"></i>
							<p><span>{{ currentMovie[0].rating }}</span> /10<br>
								<span class="rv">56 Reviews</span>
							</p>
						</div>
						<div class="rate-star">
							<p>Rate This Movie:  </p>
						  <star-rating :max-rating="10" :rating="currentMovie[0].rating" :read-only="true" :star-size="28" :show-rating="false" :border-width="0.5" border-color="#9BA6B2" inactive-color="#040506" active-color="#ffbd00" :increment="0.5"></star-rating>
						</div>
					</div>
					<div class="movie-tabs">
						<div class="tabs">
							<ul class="tab-links tabs-mv">
								<li class="active"><a href="moviesingle.html#overview">Overview</a></li>
								<li><a href="moviesingle.html#reviews"> Reviews</a></li>
								<li><a href="moviesingle.html#cast">  Cast & Crew </a></li>
								<li><a href="moviesingle.html#media"> Media</a></li> 
								<li><a href="moviesingle.html#moviesrelated"> Related Movies</a></li>                        
							</ul>
						    <div class="tab-content">
						        <div id="overview" class="tab active">
						            <div class="row">
						            	<div class="col-md-8 col-sm-12 col-xs-12">
						            		<p>{{ currentMovie[0].overView }}</p>
						            		<div class="title-hd-sm">
												<h4>Media</h4>
												<a href="moviesingle.html#" class="time">All 5 Videos & 245 Photos <i class="ion-ios-arrow-right"></i></a>
											</div>
											<div class="mvsingle-item ov-item">

                                                    <gallery :images="currentMovie[0].media" :index="index" @close="index = null"></gallery>
                                                    <div
                                                    class="img-lightbox"
                                                    v-for="(image, imageIndex) in currentMovie[0].media"
                                                    :key="imageIndex"
                                                    @click="index = imageIndex"
                                                    :style="{ backgroundImage: 'url(' + image + ')', width: '100px', height: '100px'}"
                                                    ></div>
											</div>
											<div class="title-hd-sm">
												<h4>cast</h4>
												<a href="moviesingle.html#" class="time">Full Cast & Crew  <i class="ion-ios-arrow-right"></i></a>
											</div>
											<!-- movie cast -->
											<div class="mvcast-item">											
												<div v-for="(cast, index) in currentMovie[0].cast" :key="index" class="cast-it">
													<div class="cast-left">
														<img :src="cast.avatarUrl" alt="">
														<a href="moviesingle.html#">{{ cast.name }}</a>
													</div>
													<p>...  {{ cast.character }}</p>
												</div>
											</div>
											<div class="title-hd-sm">
												<h4>User reviews</h4>
												<a href="moviesingle.html#" class="time">See All 56 Reviews <i class="ion-ios-arrow-right"></i></a>
											</div>
											<!-- movie user review -->
											<div class="mv-user-review-item">
												<h3>Best Marvel movie in my opinion</h3>
												<div class="no-star">
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star last"></i>
												</div>
												<p class="time">
													17 December 2016 by <a href="moviesingle.html#"> hawaiipierson</a>
												</p>
												<p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
											</div>
						            	</div>
						            	<div class="col-md-4 col-xs-12 col-sm-12">
						            		<div class="sb-it">
						            			<h6>Director: </h6>
						            			<p><a href="moviesingle.html#">{{ currentMovie[0].director }}</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Producer: </h6>
						            			<p><a href="moviesingle.html#">{{ currentMovie[0].producer }}</a></p>
						            		</div>
						            		<!-- <div class="sb-it">
						            			<h6>Stars: </h6>
						            			<p><a href="moviesingle.html#">Robert Downey Jr,</a> <a href="moviesingle.html#">Chris Evans,</a> <a href="moviesingle.html#">Mark Ruffalo,</a><a href="moviesingle.html#"> Scarlett Johansson</a></p>
						            		</div> -->
						            		<div class="sb-it">
						            			<h6>Genres:</h6>
						            			<p><a v-for="(tag, index) in currentMovie[0].tags" :key="index" style="cursor:pointer">{{ tag }} </a> </p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Release Date:</h6>
						            			<p>May 1, 2015 (U.S.A)</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Run Time:</h6>
						            			<p>141 min</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>MMPA Rating:</h6>
						            			<p>PG-13</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Plot Keywords:</h6>
						            			<p class="tags">
						            				<span class="time"><a href="moviesingle.html#">superhero</a></span>
													<span class="time"><a href="moviesingle.html#">marvel universe</a></span>
													<span class="time"><a href="moviesingle.html#">comic</a></span>
													<span class="time"><a href="moviesingle.html#">blockbuster</a></span>
													<span class="time"><a href="moviesingle.html#">final battle</a></span>
						            			</p>
						            		</div>
						            		<div class="ads">
												<img src="https://via.placeholder.com/200x178" alt="">
											</div>
						            	</div>
						            </div>
						        </div>
						       
						    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	<appTrailerModal :videoID="currentMovie[0].trailerID" v-show="showTrailerModal" @closeTrailer="showTrailerModal = false"/>
    </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import StarRating from 'vue-star-rating'
import TrailerModal from '@/components/layouts/Movies/ModalTrailer.vue'
export default {
    data: function () {
      return {
		index: null,
		showTrailerModal: false
      };
	},
	    computed: {
        currentMovie() {
				var movies = this.$store.getters.movies;
				var currentMovie = movies.filter(movie => movie.movie_id === this.$route.params.id);
				return currentMovie;
            }
    },
	created() {
        //console.log('created');
        this.fetchAllMovies();
    },
    methods: {
        fetchAllMovies() {
            this.$store.dispatch("getAllMovies").then(() => {
                //console.log(this.$store.getters.movies)
            })
        }
	},
	
    components: {
	  'gallery': VueGallery,
	  StarRating,
	  appTrailerModal : TrailerModal
    },
  }
</script>

<style scoped>
.vue-star-rating-rating-text {
	color: black !important;
}
</style>
