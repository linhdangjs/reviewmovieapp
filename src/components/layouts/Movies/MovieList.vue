<template>
<div class="wrap-movie-grid">
    <app-header />
            <div class="hero common-hero">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="hero-ct">
                        <h1 style="text-align:center; margin-left: 0"> movie listing - grid</h1>
                        <ul class="breadcumb">
                            <li class="active"><a>Home</a></li>
                            <li> <span class="ion-ios-arrow-right"></span> movie listing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-single">
        <div class="container">
            <div class="row ipad-width">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="topbar-filter">
                        <p>Found <span>{{ movies.length }}</span> in total</p>
                        <label>Sort by:</label>
                        <select>
                            <option value="popularity">Popularity Descending</option>
                            <option value="popularity">Popularity Ascending</option>
                            <option value="rating">Rating Descending</option>
                            <option value="rating">Rating Ascending</option>
                            <option value="date">Release date Descending</option>
                            <option value="date">Release date Ascending</option>
                        </select>
                        <a class="list"><i class="ion-ios-list-outline "></i></a>
                        <a class="grid"><i class="ion-grid active"></i></a>
                    </div>
                      <div class="resetList" @click="resetListMovie">
                        <img src="/static/images/uploads/reset.png" alt="Reset Button">
                    </div>
                    <div v-if="init" class="flex-wrap-movielist">
                            <div v-for="(movie, index) in movies" :key="index" class="movie-item-style-2 movie-item-style-1">
                                <v-lazy-image :src="movie.photoUrl" />
                                <div class="hvr-inner">
                                    <router-link tag="a" :to="'movie/'+movie.movie_id"> Read more <i class="ion-android-arrow-dropright"></i> </router-link>
                                </div>
                                <div class="mv-item-infor">
                                    <h6><router-link tag="a" :to="'movie/'+ movie.movie_id">{{ movie.name }}</router-link></h6>
                                    <p class="rate"><i class="ion-android-star"></i><span>{{ movie.rating }}</span> /10</p>
                                </div>
                            </div>					

                    </div>		
                   <!-- <div class="query-title" v-if="queryResult.length>0 && queryMovieName !==''" style="padding-bottom: 20px">
                                <p>Kết quả tìm kiếm cho từ khóa "<span class="keyword" style="color:#d1043ee6; font-size: 16px; font-weight:bold">{{ queryMovieName }}</span>"</p>
                    </div> -->
                  
                    <div v-if="queryResult.length>0" class="flex-wrap-movielist">
                            <div v-for="(movie, index) in queryResult" :key="index" class="movie-item-style-2 movie-item-style-1">
                                <v-lazy-image :src="movie.photoUrl" />
                                <div class="hvr-inner">
                                    <router-link tag="a" :to="'movie/'+movie.movie_id"> Read more <i class="ion-android-arrow-dropright"></i> </router-link>
                                </div>
                                <div class="mv-item-infor">
                                    <h6><router-link tag="a" :to="'movie/'+ movie.movie_id">{{ movie.name }}</router-link></h6>
                                    <p class="rate"><i class="ion-android-star"></i><span>{{ movie.rating }}</span> /10</p>
                                </div>
                            </div>					

                    </div>	
                    <div v-if="queryResult.length==0 && !init" class="notification" style="padding-bottom: 30px; text-align:center">
                        <p>Không có kết quả tìm kiếm nào phù hợp!</p>
                    </div>
                    <div class="topbar-filter">
                        <label>Movies per page:</label>
                        <select>
                            <option value="range">20 Movies</option>
                            <option value="saab">10 Movies</option>
                        </select>
                        
                        <div class="pagination2">
                            <span>Page 1 of 2:</span>
                            <a class="active" >1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>...</a>
                            <a>78</a>
                            <a>79</a>
                            <a><i class="ion-arrow-right-b"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="sidebar">
                        <div class="searh-form">
                            <h4 class="sb-title">Search for movie</h4>
                            <form class="form-style-1" @submit.prevent="submitSearch">
                                <div class="row">
                                    <div class="col-md-12 form-it">
                                        <label>Movie name</label>
                                        <input type="text" v-model="queryMovieName" placeholder="Enter keywords">
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label>Genres</label>
                                        <div class="group-ip">
                                            <select v-model="queryGenres"
                                                name="skills">
                                                <option value="">Enter to filter genres</option>
                                                <option value="Sci-fi">Sci-fi</option>
                                                <option value="Horror">Horror</option>
                                                <option value="Action">Action</option>
                                                <option value="Advanture">Advanture</option>
                                                <option value="Comedy">Comedy</option>
                                                <option value="Drama">Drama</option>
                                                <option value="sport">Sport</option>
                                            </select>
                                        </div>	
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label>Rating Range</label>
                                        <select v-model="queryRating">
                                        <option value="">Choose rating rage</option>
                                        <option value="below">-- Select the rating range below 7 stars --</option>
                                        <option value="over">-- Select the rating range over 7 stars --</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 ">
                                        <input class="submit" type="submit" value="submit">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="ads">
                            <img src="/static/images/uploads/ads1.png" alt="">
                        </div>
                        <!-- <div class="sb-facebook sb-it">
                            <h4 class="sb-title">Find us on Facebook</h4>
                            <iframe src="moviegrid.html" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315" style="width:100%;border:none;overflow:hidden" ></iframe>
                        </div>
                        <div class="sb-twitter sb-it">
                            <h4 class="sb-title">Tweet to us</h4>
                            <div class="slick-tw">
                                <div class="tweet item" id="599202861751410688">
                                </div>
                                <div class="tweet item" id="297462728598122498">
                                </div>
                            </div>					
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/layouts/public/Header.vue'
import VLazyImage from "v-lazy-image";
export default {
    data() {
        return {
            queryMovieName : "",
            queryGenres : "",
            queryRating: "",
            queryResult: [],
            init: true,
        }
    },
    computed: {
        movies() {
                return this.$store.getters.movies;
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
        },
        submitSearch() {
            this.init = false;
            if(this.queryMovieName !== "") {
                if(this.queryGenres !== "") {
                    if(this.queryRating == "below") {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1 
                                                && movie.tags.indexOf(this.queryGenres) > -1
                                                && movie.rating < 7)
                    } else if(this.queryRating == "over") {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1 
                                                && movie.tags.indexOf(this.queryGenres) > -1
                                                && movie.rating >= 7)
                     
                    } else {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1 
                                                && movie.tags.indexOf(this.queryGenres) > -1)
                    }
                } else {
                    if(this.queryRating == "below") {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1
                                                && movie.rating < 7)
                    } else if(this.queryRating == "over") {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1
                                                && movie.rating >= 7)
                    
                    } else {
                        this.queryResult =  this.movies
                                                .filter(movie => movie.name.toLowerCase()
                                                .indexOf(this.queryMovieName.toLowerCase()) > -1)
                    }
                }
            } else {
                if(this.queryGenres !== "") {
                    if(this.queryRating == "below") {
                        this.queryResult =  this.movies
                                                .filter(movie => 
                                                movie.rating < 7
                                                && movie.tags.indexOf(this.queryGenres) > -1) 
                    } else if(this.queryRating == "over") {
                        this.queryResult =  this.movies
                                                .filter(movie => 
                                                movie.rating >= 7
                                                && movie.tags.indexOf(this.queryGenres) > -1)  
                    } else {
                        this.queryResult =  this.movies
                                                .filter(movie => 
                                                movie.tags.indexOf(this.queryGenres) > -1) 
                    }
                } else {
                    if(this.queryRating == "below") {
                        this.queryResult =  this.movies
                                                .filter(movie => 
                                                movie.rating < 7) 
                    } else if(this.queryRating == "over") {
                        this.queryResult =  this.movies
                                                .filter(movie => 
                                                movie.rating >= 7)  
                    } else {
                        this.queryResult = this.movies;
                    }
                }
            }
        },
        resetListMovie() {
            this.queryMovieName = "";
            this.queryGenres = "";
            this.queryRating = "";
            this.queryResult = [];
            this.init = true;
        }
    },
    components: { 
        VLazyImage ,
        appHeader: Header    
    }
}
</script>

<style scoped>
 .v-lazy-image {
  filter: blur(10px);
  transition: filter 2s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.resetList {
    text-align: right;
    position: absolute;
    right: -50px;
    top: 0px;
    z-index: 300;
    cursor: pointer;
}
.resetList img {
    width: 35px;
    height: 35px;
}
</style>
