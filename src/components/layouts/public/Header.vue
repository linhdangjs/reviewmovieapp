 <template>
 <div class="wrap-header">
   <!-- BEGIN | Header -->
    <header class="ht-header">
        <div class="container">
            <nav class="navbar navbar-default navbar-custom">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header logo">
                        <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <a href="index.html"><img class="logo" src="/static/images/logo1.png" alt="" width="119" height="58"></a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav flex-child-menu menu-left">
                            <li class="hidden">
                                <a href="index.html#page-top"></a>
                            </li>
            
                            <router-link
                                tag="li"
                                to="/"
                                exact><a class="btn btn-default dropdown-toggle lv1">
                                Home
                                </a>

                            </router-link>

                                <router-link
                                tag="li" 
                                to="/movies"><a class="btn btn-default dropdown-toggle lv1">
                                Movies
                                </a>

                            </router-link>
                               <router-link
                                tag="li"
                                to="/tvshows"><a class="btn btn-default dropdown-toggle lv1">
                                TvShows
                                </a>

                            </router-link>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                news <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="dropdown first">
                                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                community <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav flex-child-menu menu-right">   
                            <li v-show="isLoggedIn"> <span id="welcome" style="color: #dd003f; font-size: 16px; cursor: context-menu">Welcome </span></li>   
                            <li v-show="isLoggedIn"  id="user-area" class="dropdown first">       
                              <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                              <span style="border: 2px solid white; border-radius: 10px; padding: 8px 8px">{{ currentUser.displayName ? currentUser.displayName :  currentUser.email }}<i class="fa fa-angle-down" aria-hidden="true"></i></span> 
                                </a>
                                <ul class="dropdown-menu level1">
                                    <!-- <li><a href="#">Profile</a></li> -->
                                    <router-link
                                        tag="li" 
                                        to="/user/profile"
                                        active-class="active"
                                        exact><a href="#">Profile</a>
                                    </router-link>
                                    <li><a href="#">Setting</a></li>
                                    <li class="it-last"><a href="#">Log Out</a></li>
                                </ul>
                            </li>   
                            <li v-show="!isLoggedIn" id="loginLink" @click="showLogin = true"><a>LOG In</a></li>  
                            <li v-show="!isLoggedIn" id="btn"><a id="signupLink" @click="showSignUp = true">sign up</a></li>           
                            <li v-show="isLoggedIn"  class="logout" @click="logout"><a>Log Out</a></li>
                            
                        </ul>
                    </div>
                <!-- /.navbar-collapse -->
            </nav>
            
            <!-- top search form -->
            <div class="top-search">
                <select v-model="typeSearch" @change="queryData">
                    <option value="movie">Movies In Theater</option>
                    <option value="tvshow">TV show</option>
                </select>
                <input type="text" v-model="querySearch" @input="queryData" placeholder="Search for a movie, TV Show or celebrity that you are looking for">
            </div>
           
        </div>
       
    </header>
    <div class="resultSearch" v-if="queryResult.length > 0">
        <div class="close-box" @click="closeBox">
            <img src="/static/images/uploads/close-box.png" alt="">    
        </div> 
        <div v-if="typeSearch=='movie'" class="result-movie">
            <router-link tag="div" :to="{name: 'MovieDetail', params: {id: result.movie_id }}" class="resultItem" v-for="(result, index) in queryResult" :key="index" >
                <img :src="result.photoUrl" alt="">
                <span>{{ result.name }}</span>
            </router-link>
        </div>
        <div v-if="typeSearch=='tvshow'" class="result-tvshow">
            <router-link tag="div" :to="{name: 'TvShowDetail', params: {id: result.tvshow_id }}" class="resultItem" v-for="(result, index) in queryResult" :key="index">
                <img :src="result.photoUrl" alt="">
                <span>{{ result.name }}</span>
            </router-link>
        </div>
 
    </div>
        <!-- END | Header -->
    <appLogin v-if="showLogin" @closeLogin="showLogin = false"/>
    <appSignUp v-if="showSignUp" @closeSignUp="showSignUp = false"/>
 </div>
     
    
</template>

<script>
import { eventBus } from '@/main.js'
import Login from '@/components/layouts/public/Login'
import SignUp from '@/components/layouts/public/SignUp'
import firebase from 'firebase'
export default {
    data() {
        return {
           //isLoggedIn : false
            currentUser: this.$store.getters.user ? this.$store.getters.user : {
                displayName : "",
                email: "",
                uid: "",
                photoUrl: "",
            },
            showLogin : false,
            showSignUp: false,
            typeSearch: "movie",
            querySearch: "",
            queryResult: [],
        
        }
    },
    created() {

    // Listening the event hello
        eventBus.$on('openLogin', (value) => {
            this.showLogin = value;
        });
        var tokenUser = localStorage.getItem("current-user");
        console.log(tokenUser);
        if(tokenUser) this.currentUser = JSON.parse(tokenUser);
        this.$store.commit('setUser', JSON.parse(tokenUser))
        this.$store.dispatch("getAllMovies");
        this.$store.dispatch("getAllTvShows");
    },
    // mounted() { 
    //      this.$on("openLogin", value => {
    //        console.log(value)
    //     })
    // },
    computed: {
        isLoggedIn () {
            let isLoggedIn;
            if(this.userIsAuthenticated) isLoggedIn = true;
            else isLoggedIn = false;
            return isLoggedIn;
        },
    
        userIsAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
        },
        user() {
                return this.$store.getters.user;
            },
        movies() {
            return this.$store.getters.movies;
        },
        tvshows() {
            return this.$store.getters.tvshows;
        },
        resetQuery() {
            this.querySearch = "";
            this.queryResult = [];
        }
    },
    watch: {
            user (value) {
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            }
        },

    methods: {
        logout: function() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                localStorage.removeItem('current-user');
                this.$store.commit("setUser", null)
                if(this.$route.path === "/user/profile" || this.$route.path === "/user/myreviews" || this.$route.path === "/ticket"
                || this.$route.path === "/user/bills") this.$router.push('/')
            })
        },
        queryData() {
            if(this.querySearch.toLowerCase() !== "") {
                 if(this.typeSearch === "movie") {
                    this.queryResult = this.movies.filter(movie => {
                        return movie.name.toLowerCase().indexOf(this.querySearch) > -1;
                    })
                } 
                if(this.typeSearch === "tvshow"){
                    console.log
                    this.queryResult = this.tvshows.filter(tvshow => {
                        return tvshow.name.toLowerCase().indexOf(this.querySearch) > -1;
                    })
                }
            } else {
                this.queryResult = []
            }
           
        },
        closeBox() {
            this.querySearch = "";
            this.queryResult = [];
        }
    },
    components : {
        appLogin : Login,
        appSignUp : SignUp
    }
}      
</script>

<style>
    .resultSearch {
        background-color: #080d13ed;
        width: 70%;
        float: right;
        border-right: 4px solid #020d18;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        z-index: 9999;
        top: 27%;
        right: 104px;
    }
    .resultSearch .close-box {
        position: absolute;
        top: -5px;
        right: -21px;
        cursor: pointer;
    }
    .resultSearch .close-box img{
        width: 30px;
        height: 30px;
    }
    .resultItem {
        color: white;
        margin-bottom: 10px;
        padding: 5px;
        cursor: pointer;
    }
    .resultItem:hover {
        background-color: #182838E6;
    }
    .resultItem img {
        width: 50px;
        height: 60px;
        margin-right: 20px;
    }
    /* .resultItem span {
      
    } */
 </style>
    