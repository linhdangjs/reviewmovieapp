<template>
    <div class="wrap-tvshow-detail">
        <div class="hero mv-single-hero" :style="{ 'background-image': 'url(' + currentTvShow[0].backgroundUrl + ')' }">
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
					<img :src="currentTvShow[0].photoUrl" alt="">
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							<div><a class="item item-1 redbtn"> <i class="ion-play"></i> Watch Trailer</a></div>
							<div><a @click="showTrailerModal = true" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div>
						</div>
						<!-- <div class="btn-transform transform-vertical">
							<div><a href="moviesingle.html#" class="item item-1 yellowbtn"> <i class="ion-card"></i> Buy ticket</a></div>
							<div><a href="moviesingle.html#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
						</div> -->
					</div>
				</div>
			</div>
            	<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">{{ currentTvShow[0].name }} <span>{{ currentTvShow[0].currentseason }}</span></h1>
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
							<p><span>{{ currentTvShow[0].rating }}</span> /10<br>
								<span class="rv">{{  currentTvShowReviews.length }} Reviews</span>
							</p>
						</div>
						<div class="rate-star">
							<p>Rate This Movie:  </p>
						  <star-rating :max-rating="10" :rating="currentTvShow[0].rating" :read-only="true" :star-size="28" :show-rating="false" :border-width="0.5" border-color="#9BA6B2" inactive-color="#040506" active-color="#ffbd00" :increment="0.5"></star-rating>
						</div>
					</div>
			<div class="wrap-tab-detail">
						<tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
							<tab name="Over View">
										  <div id="overview" class="tab active">
						            <div class="row">
						            	<div class="col-md-8 col-sm-12 col-xs-12">
						            		<p>{{ currentTvShow[0].overView }}</p>
						            		<div class="title-hd-sm">
												<h4>Media</h4>
												<a href="moviesingle.html#" class="time">All 5 Videos & 245 Photos <i class="ion-ios-arrow-right"></i></a>
											</div>
											<div class="mvsingle-item ov-item">

                                                    <gallery :images="currentTvShow[0].media.gallery" :index="index" @close="index = null"></gallery>
                                                    <div
                                                    class="img-lightbox"
                                                    v-for="(image, imageIndex) in currentTvShow[0].media.lightbox"
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
												<div v-for="(cast, index) in currentTvShow[0].cast" :key="index" class="cast-it">
													<div class="cast-left">
														<img src="https://via.placeholder.com/40x40" alt="">
														<a href="moviesingle.html#">{{ cast.name }}</a>
													</div>
													<p>...  {{ cast.character }}</p>
												</div>
											</div>
						            	</div>
						            	<div class="col-md-4 col-xs-12 col-sm-12">
						            		<div class="sb-it">
						            			<h6>Director: </h6>
						            			<p><a href="moviesingle.html#">{{ currentTvShow[0].director }}</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Producer: </h6>
						            			<p><a href="moviesingle.html#">{{ currentTvShow[0].producer }}</a></p>
						            		</div>
						            		<!-- <div class="sb-it">
						            			<h6>Stars: </h6>
						            			<p><a href="moviesingle.html#">Robert Downey Jr,</a> <a href="moviesingle.html#">Chris Evans,</a> <a href="moviesingle.html#">Mark Ruffalo,</a><a href="moviesingle.html#"> Scarlett Johansson</a></p>
						            		</div> -->
						            		<div class="sb-it">
						            			<h6>Genres:</h6>
						            			<p><a v-for="(tag, index) in currentTvShow[0].tags" :key="index" style="cursor:pointer">{{ tag }} </a> </p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Run Time:</h6>
						            			<p>{{ currentTvShow[0].runtime }} min</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Plot Keywords:</h6>
						            			<p class="tags">
						            				<span class="time" v-for="(key) in currentTvShow[0].keywords" :key="key" style="display: inline-block;"><a href="moviesingle.html#">{{ key }}</a></span>
						            			</p>
						            		</div>
						            		<div class="ads">
												<img src="https://via.placeholder.com/200x178" alt="">
											</div>
						            	</div>
						            </div>
						        </div>
									</tab>
							<tab name="Review">
										  <div id="reviews" class="tab review">
						           <div class="row">
						            	<div class="rv-hd">
						            		<div class="div">
							            		<h3>Review TV Show </h3>
						       	 				<h2>{{ currentTvShow[0].name }}</h2>
							            	</div>
							            	<a @click="handleWriteReview" class="redbtn" style="cursor: pointer">Write Review</a>
						            	</div>
						            	<div class="topbar-filter">
											<p>Found <span>{{  currentTvShowReviews.length }} reviews</span> in total</p>
											<label>Filter by:</label>
											<select>
												<option value="popularity">Popularity Descending</option>
												<option value="popularity">Popularity Ascending</option>
												<option value="rating">Rating Descending</option>
												<option value="rating">Rating Ascending</option>
												<option value="date">Release date Descending</option>
												<option value="date">Release date Ascending</option>
											</select>
										</div>
									<div class="mv-user-review-item" v-for="(review, index) in visibleReviews" :key="index">
											<div class="user-infor">
												<img :src="review.user_avatar" alt="" v-if="review.user_avatar">
												<img src="/static/images/uploads/user-avatar-default-2.jpg" v-else>
												<div>
													<h3>{{ review.title }}</h3>
													<div class="no-star">
														<star-rating :max-rating="10" :rating="review.rating" :read-only="true" :star-size="20" :show-rating="false" :border-width="0.5" border-color="#9BA6B2" inactive-color="#040506" active-color="#ffbd00" :increment="0.5"></star-rating>
													</div>
													<p class="time">
														{{ review.created_at }} by <a> {{ review.user_email }}</a>
													</p>
												</div>
											</div>
											<p>{{ review.content }}</p>
										</div>
										
										<pagination
													:data="currentTvShowReviews"
													@page:update="updatePage"
													@pageSize:update="updatePageSize"
													:currentPage="currentPage"
													:pageSize="pageSize"
												>

										</pagination>
						            </div>
						        </div>
									</tab>

    						</tabs>
					</div>
						       
				</div>
			</div>
		</div>
	</div>
</div>
	<appTrailerModal :videoID="currentTvShow[0].trailerID" v-show="showTrailerModal" @closeTrailer="showTrailerModal = false"/>
	<appReviewModalTV @page:update="updatePage" v-if="showReviewModalTV" @closeReviewTV="showReviewModalTV = false"/>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import VueGallery from 'vue-gallery';
import StarRating from 'vue-star-rating'
import TrailerModal from '@/components/layouts/public/ModalTrailer.vue'
import ReviewModalTV from '@/components/layouts/TvShows/ModalReviewTV.vue'
import Pagination from '@/components/layouts/public/Pagination.vue'
export default {
    data: function () {
      return {
		index: null,
		showTrailerModal: false,
		showReviewModalTV : false,
		pageSize: 3,
		currentPage: 0,
      };
	},
	    computed: {
		currentUser() {
			return this.$store.getters.user;
		},
        currentTvShow() {
			var tvshows = this.$store.getters.tvshows;
			var currentTvShow = tvshows.filter(tvshow => tvshow.tvshow_id === this.$route.params.id);
			return currentTvShow;
		},
		currentTvShowReviews() {
			return this.$store.getters.currentReviews;
		},
		visibleReviews() {
			return this.$store.getters.updateVisibleReviews({
				currentPage: this.currentPage,
				pageSize: this.pageSize
			})
		}
    },
	created() {
        //console.log('created');
		this.fetchAllTvShows();
		this.fetchAllReviews();
		this.fetchCurrentReviews();
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.fetchAllTvShows();
			vm.fetchAllReviews();
			vm.fetchCurrentReviews();
		});
	},
    methods: {
        fetchAllTvShows() {
            this.$store.dispatch("getAllTvShows");
		},
		 fetchAllReviews() {
            this.$store.dispatch("getAllReviews");
		},
		fetchCurrentReviews() {
			this.$store.dispatch("getCurrentReviews", {
				id: this.$route.params.id,
				type: "tvshow"
			}).then(() => {
				console.log(this.$store.getters.currentReviews)
			})
		},
		tabClicked (selectedTab) {
            //console.log('Current tab re-clicked:' + selectedTab.tab.name);
        },
        tabChanged (selectedTab) {
            //console.log('Tab changed to:' + selectedTab.tab.name);
		},
		handleWriteReview() {
			if(this.currentUser) this.showReviewModalTV = true;
			else {
				this.$swal({
					title: 'Warning !',
					text:  "Vui lòng đăng nhập trước khi đưa ra bình luận!",
					type: 'warning',
					timer: 1000
				})
				eventBus.$emit("openLogin", true)
			}
		},
		updatePage(pageNumber) {
			this.currentPage = pageNumber;
		},
		updatePageSize(pageSize) {
			this.pageSize = parseInt(pageSize);
		}
	},
	
    components: {
	  'gallery': VueGallery,
	  StarRating,
	  appTrailerModal : TrailerModal,
	  appReviewModalTV : ReviewModalTV,
	  Pagination
    },
  }
</script>

<style>
	.vue-star-rating-rating-text {
		color: black !important;
	}
	.tabs-component-tabs {
		/* border: solid 1px #ddd; */
		border-radius: 6px;
		margin-bottom: 5px;
		}
		
		@media (min-width: 700px) {
		.tabs-component-tabs {
			border: 0;
			align-items: stretch;
			display: flex;
			justify-content: flex-start;
			margin-bottom: 5px;
		}
		}
		
		.tabs-component-tab {
		color: #999;
		font-size: 14px;
		font-weight: 600;
		margin-right: 0;
		list-style: none;
		}
		
		/* .tabs-component-tab:not(:last-child) {
		border-bottom: dotted 1px #ddd;
		} */
		
		.tabs-component-tab-a:hover {
		color: #919963;
		}
		.tabs-component-tab.is-active a {
		color: #dcf836 !important;
		}
		
		.tabs-component-tab.is-disabled * {
		color: #cdcdcd;
		cursor: not-allowed !important;
		}
		
		@media (min-width: 700px) {
		.tabs-component-tab {
			background-color: transparent;
			border-radius: 3px 3px 0 0;
			margin-right: .5em;
			transform: translateY(2px);
			transition: transform .3s ease;
		}
		
		.tabs-component-tab.is-active {
			z-index: 2;
			transform: translateY(0);
		}
		}
		
		.tabs-component-tab-a {
		align-items: center;
		color: inherit;
		display: flex;
		padding: .75em 1em;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 14px;
		font-family:  "Noto Sans", sans-serif;
		font-weight: bold;
		}
		
		.wrap-tvshow-detail .tabs-component-panels {
		padding: 4em 0;
		}
		
		@media (min-width: 700px) {
		.wrap-tvshow-detail .tabs-component-panels {
			border-top-left-radius: 0;
			background-color:transparent;
			/* border: solid 1px #405266; */
			border-radius: 0 6px 6px 6px;
			box-shadow: 0 0 10px rgba(0, 0, 0, .05);
			padding: 0.5em 2em;
			margin-top: 30px;
		}
		}
		.tabs-component .movie-items .movie-item .mv-img{
		position: relative;
		margin-right: 0 !important;
		border-radius: 5px;
	}
		.wrap-tvshow-detail .tabs-component-tab.is-active a {
			color: #dcf836 ;
			border-bottom: 3px solid #dcf836;
	}
		.wrap-tvshow-detail .tabs-component-tab {
			padding-top : 19px;
		}
</style>
