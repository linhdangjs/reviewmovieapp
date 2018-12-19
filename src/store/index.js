import Vue from 'vue'
import Vuex from 'vuex'
import db from '../components/firebaseInit.js'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      userLogin: null,
      users: [],
      userDetail : null,
      movies: [],
      tvshows: [],
      reviews: null,
      currentReviews: [],
      movieSchedules: null
    },
    mutations: {
      setUser (state, payload) {
        state.userLogin = payload
      },
      setUsers (state, payload) {
        state.users = payload;
      },
      setUserDetail (state, payload) {
        state.userDetail = payload;
      },
      setMovies (state, payload) {
        state.movies = payload;
      },
      setTvShows (state, payload) {
        state.tvshows = payload;
      },
      setReviews (state, payload) {
        state.reviews = payload
      },
      setCurrentReviews (state, payload) {
        state.currentReviews = payload
      },
      setMovieSchedules (state, payload) {
        state.movieSchedules = payload;
      }
    },
    actions: {
      getAllUsers ({commit}) {
        let result = [];
        // )
        db.collection('Users').get().then
        (querySnapshot => {
          querySnapshot.forEach(doc => {  
            const data = {
              'id' : doc.id,
              'user_uid': doc.data().user_uid,
              'name': doc.data().name,
              'role': doc.data().role
            }
            result.push(data)
          })
          commit('setUsers', result);

        })
        .catch(
          error => {
            console.log(error);
          }
        )
        
      },
      getUserByID ({commit}, payload) {
        let data;
        db.collection('Users').where('user_uid', '==', payload).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data = {
              'user_uid': doc.data().user_uid,
              'name': doc.data().name,
              'role': doc.data().role
            }
          })
          commit('setUserDetail', data);
          // console.log(data);
          
        })
        return data;
      },
      updateUser ({commit}, payload) {
        var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
                user.updateProfile({
                  displayName: payload.displayName,
                  photoURL: payload.photoUrl
        }).then(() => {
            let userUpdate = {
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              uid: user.uid
            }
            commit("setUser", userUpdate);
            localStorage.removeItem('current-user');
            localStorage.setItem("current-user", JSON.stringify(userUpdate));
        })
        .then(() => {     // sau khi update avatar cho 'user' => update lai user_avatar trong 'review'
          db.collection("Reviews").where('user_uid', '==', user.uid).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              db.collection("Reviews").doc(doc.id).update({user_avatar: user.photoURL});
            })
            
          })
        })
        .catch(err => {
          console.log(err);
        })
          } else {
            // No user is signed in.
          }
      });
      unsubscribe();
    
      },
      getAllMovies({commit}) {
        let result = [];
        // )
        db.collection('Movies').orderBy("movie_id").get().then
        (querySnapshot => {
          querySnapshot.forEach(doc => {  
            //console.log(doc.data())
            const data = {
              movie_id : doc.data().movie_id,
              name: doc.data().name,
              backgroundUrl: doc.data().backgroundUrl,
              overView : doc.data().overView,
              media: doc.data().media,
              cast: doc.data().cast,
              director: doc.data().director,
              producer: doc.data().producer,
              photoUrl: doc.data().photoUrl,
              rating: doc.data().rating,
              tags: doc.data().tags,
              year: doc.data().year,
              trailerID: doc.data().trailerID
            }
            result.push(data)
          })
          commit('setMovies', result);

        })
        .catch(
          error => {
            console.log(error);
          }
        )
      },
      getAllTvShows({commit}) {
        let result = [];
        // )
        db.collection('TvShows').orderBy("tvshow_id").get().then
        (querySnapshot => {
          querySnapshot.forEach(doc => {  
            //console.log(doc.data())
            const data = {
              tvshow_id : doc.data().tvshow_id,
              name: doc.data().name,
              backgroundUrl: doc.data().backgroundUrl,
              overView : doc.data().overView,
              media: doc.data().media,
              cast: doc.data().cast,
              director: doc.data().director,
              producer: doc.data().producer,
              photoUrl: doc.data().photoUrl,
              rating: doc.data().rating,
              tags: doc.data().tags,
              year: doc.data().year,
              trailerID: doc.data().trailerID,
              runtime: doc.data().runtime,
              photoSeason: doc.data().photoseason,
              keywords: doc.data().keywords,
              currentseason: doc.data().currentseason,

            }
            result.push(data)
          })
          commit('setTvShows', result);

        })
        .catch(
          error => {
            console.log(error);
          }
        )
      },
      postReview({commit}, payload) {
        //console.log(payload);
        // Add a new document with a generated id.
        db.collection("Reviews").add({
          user_uid: payload.user_uid,
          user_email: payload.user_email, 
          user_avatar: payload.user_avatar,
          type: payload.type,
          media_id: payload.media_id,
          media_photo: payload.media_photo,
          media_name: payload.media_name,
          media_year: payload.media_year,
          title: payload.title,
          content: payload.content,
          rating: payload.rating,
          //created_at: firebase.firestore.FieldValue.serverTimestamp()

        })
        .then((review) => {
          // console.log("Document written with title: ", review.id);
              db.collection("Reviews").doc(review.id).update({created_at: firebase.firestore.FieldValue.serverTimestamp()})
              .then(() => {
                db.collection("Reviews").doc(review.id).get().then(doc => {
                  const data = {
                    user_uid: doc.data().user_uid,
                    user_avatar: doc.data().user_avatar,
                    user_email: doc.data().user_email,
                    type: doc.data().type,
                    media_id: doc.data().media_id,
                    media_photo: doc.data().media_photo,
                    media_name: doc.data().media_name,
                    media_year: doc.data().media_year,
                    title: doc.data().title,
                    content: doc.data().content,
                    rating: doc.data().rating,
                    created_at: doc.data().created_at.toDate().toLocaleDateString("en-US")
                  }
                  this.state.currentReviews.unshift(data)
                })
               
              });
        })
       
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      },
      getAllReviews({commit}) {
        let result = [];
        db.collection("Reviews").orderBy("created_at","desc")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
              //console.log(doc.data());
                 const data = {
                  user_uid: doc.data().user_uid,
                  user_avatar: doc.data().user_avatar,
                  user_email: doc.data().user_email,
                  type: doc.data().type,
                  media_id: doc.data().media_id,
                  media_photo: doc.data().media_photo,
                  media_name: doc.data().media_name,
                  media_year: doc.data().media_year,
                  title: doc.data().title,
                  content: doc.data().content,
                  rating: doc.data().rating,
                  created_at: doc.data().created_at.toDate().toLocaleDateString("en-US")
                 }
                 result.push(data);
              });
              
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
          commit("setReviews", result)
      },
      getCurrentReviews({commit}, payload) {
        let result = [];
        db.collection("Reviews").orderBy("created_at","desc")
          .where("media_id", "==", payload.id).where("type", "==", payload.type)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
              //console.log(doc.data());
                 const data = {
                  user_uid: doc.data().user_uid,
                  user_avatar: doc.data().user_avatar,
                  user_email: doc.data().user_email,
                  type: doc.data().type,
                  media_id: doc.data().media_id,
                  title: doc.data().title,
                  content: doc.data().content,
                  rating: doc.data().rating,
                  created_at: doc.data().created_at.toDate().toLocaleDateString("en-US")
                 }
                 result.push(data);
              });
              // console.log(result);
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
          commit("setCurrentReviews", result)
      },
      getAllMovieSchedules({commit}) {
        let result = [];
        db.collection('MovieSchedule').get().then
        (querySnapshot => {
          querySnapshot.forEach(doc => {  
            const data = {
              cine_id : doc.data().cine_id,  
              cine_name :  doc.data().cine_name,
              date_show :  doc.data().date_show,
              movie_id :  doc.data().movie_id,
              schedule_id :  doc.data().schedule_id,
              show_time :  doc.data().show_time,
            }
            result.push(data);
          })
          console.log(result);
          commit('setMovieSchedules', result);

        })
        .catch(
          error => {
            console.log(error);
          }
        )
      },
      
    },
    getters: {
      user (state) {
        return state.userLogin
      },
      users (state) {
        return state.users
      },
      userDetails (state) {
        return state.userDetail 
      },
      movies (state) {
        return state.movies
      },
      tvshows (state) {
        return state.tvshows
      },
      reviews (state) {
        return state.reviews
      },
      currentReviews (state) {
        return state.currentReviews;
      },
      movieSchedules (state) {
        return state.movieSchedules;
      },
      getMovieMondayBHD: (state, getters) => (id) => {
        return getters.movieSchedules
        .filter(movieSchedule => movieSchedule.movie_id === id 
                  && movieSchedule.date_show ==="monday"
                  && movieSchedule.cine_name === "bhd"
                  );
      },
      getMovieMondayCGV: (state, getters) => (id) => {
        return getters.movieSchedules
        .filter(movieSchedule => movieSchedule.movie_id === id 
                  && movieSchedule.date_show ==="monday"
                  && movieSchedule.cine_name === "cgv"
                  );
      },
      getMovieMondayLOTTE: (state, getters) => (id) => {
        return getters.movieSchedules
        .filter(movieSchedule => movieSchedule.movie_id === id 
                  && movieSchedule.date_show ==="monday"
                  && movieSchedule.cine_name === "lotte"
                  );
      }
    }
  })
  