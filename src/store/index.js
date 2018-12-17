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
      tvshows: []
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
            // console.log(user)
            console.log("update user cai wtf")
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
          console.log(result);
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
          console.log(result);
          commit('setTvShows', result);

        })
        .catch(
          error => {
            console.log(error);
          }
        )
      }
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
      }
    }
  })
  