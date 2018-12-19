<template>
    <div class="wrap-user-reviews">    
            <ul class="breadcumb">
                <li class="active"><a href="#">Home</a></li>
                <li> <span class="ion-ios-arrow-right"></span>User</li>
                <li> <span class="ion-ios-arrow-right"></span>My Reviews</li>
            </ul>
         	<div class="topbar-filter">
					<p>Found <span>{{ currentUserReviews.length }} rates</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="range">-- Choose option --</option>
						<option value="saab">-- Choose option 2--</option>
					</select>
				</div>
				<div class="movie-item-style-2 userrate" v-for="(review, index) in currentUserReviews" :key="index">
					<img :src="review.media_photo" alt="">
					<div class="mv-item-infor">
						<h6><router-link tag="a" :to="'/'+ review.type +'/'+ review.media_id" href="userrate.html#">{{ review.media_name }} <span>({{ review.media_year }})</span></router-link></h6>
						<p class="time sm-text">your rate:</p>
						<p class="rate"><i class="ion-android-star"></i><span>{{ review.rating }}</span> /10</p>	
                        	<p class="time sm-text">your reviews:</p>
						<h6>{{ review.title }}</h6>
						<p class="time sm">{{ review.created_at }}</p>
						<p>“{{ review.content }}.”</p>							
					</div>
				</div>
				<div class="topbar-filter">
					<label>Movies per page:</label>
					<select>
						<option value="range">20 Movies</option>
						<option value="saab">10 Movies</option>
					</select>
					<div class="pagination2">
						<span>Page 1 of 1:</span>
						<a class="active" href="userrate.html#">1</a>
						<a href="userrate.html#"><i class="ion-arrow-right-b"></i></a>
					</div>
				</div>
    </div>
    
</template>

<script>
import firebase from 'firebase'

    export default {
        data() {
            return {
                currentUser: this.$store.getters.user,
                editPhotoURL : false
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.fetchReviews();
            });
	    },
        computed: {
           	currentUserReviews() {
			return this.$store.getters.reviews.filter(review => review.user_uid === this.currentUser.uid);
		    }
        },
        watch: {
            currentUser (value) {
                console.log("watch login")
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            }
        },
        methods: {
            fetchReviews() {
                this.$store.dispatch("getAllReviews");
            },
            updateUser() {
                this.$store.dispatch("updateUser", this.currentUser).then(()=> {
                    this.$swal({
                          type: 'success',
                          title: 'Updated successfully',
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 2000
                    })
                    this.$store.dispatch("getAllReviews")
                    })
            }
        }
    }
</script>

<style scoped>
    .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
li, span {
    display: inline-block;
    margin-right: 5px;
    color: #abb7c4
}
li.active a {
    color: #4280bf;
}
</style>