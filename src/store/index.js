import Vue from 'vue'
import Vuex from 'vuex'
import db from '../components/firebaseInit.js'
import firebase from 'firebase'

Vue.use(Vuex)

var optionsFormatDate = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

export const store = new Vuex.Store({
    state: {
      userLogin: null,
      users: [],
      userDetail : null,
      movies: [],
      tvshows: [],
      reviews: null,
      currentReviews: [],
      movieSchedules: null,
      currentTicketRoom : {
        schedule_id : "",
        listseat : {
          RowA: []
        },
        user_uid: "",
        cine_name: "",
        show_time: ""
      },
      currentUserBill : []
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
      },
      setCurrentTicketRoom (state, payload) {
        state.currentTicketRoom = payload;
      },
      setCurrentUserBill (state, payload) {
        state.currentUserBill = payload;
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
                    created_at: doc.data().created_at.toDate().toLocaleDateString("en-US", optionsFormatDate)
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
                  created_at: doc.data().created_at.toDate().toLocaleDateString("en-US", optionsFormatDate)
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
                  created_at: doc.data().created_at.toDate().toLocaleDateString("en-US", optionsFormatDate)
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
      getTicketRoomByScheduleID ({commit}, payload) {
        let data;
        db.collection('TicketRoom').where('schedule_id', '==', payload).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data = {
              'schedule_id': doc.data().schedule_id,
              'listseat': doc.data().ListSeat,
              'user_uid': doc.data().user_uid,
              'cine_name': doc.data().cine_name,
              'show_time': doc.data().show_time
            }
          })
          commit('setCurrentTicketRoom', data);
          
        })
      },
      submitBookTicket({commit}, payload) {
          db.collection("TicketRoom").where("schedule_id", "==", payload.schedule_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              payload.rowA.forEach(seat_name => {
                var path = `ListSeat.RowA.${seat_name}.status`
                var objectUpdate = {};
                objectUpdate[path] = false;
  
                  db.collection("TicketRoom").doc(doc.id).update(objectUpdate)
              })
              payload.rowB.forEach(seat_name => {
                var path = `ListSeat.RowB.${seat_name}.status`
                var objectUpdate = {};
                objectUpdate[path] = false;
  
                  db.collection("TicketRoom").doc(doc.id).update(objectUpdate)
              })
              payload.rowC.forEach(seat_name => {
                var path = `ListSeat.RowC.${seat_name}.status`
                var objectUpdate = {};
                objectUpdate[path] = false;
  
                  db.collection("TicketRoom").doc(doc.id).update(objectUpdate)
              })
              payload.rowD.forEach(seat_name => {
                var path = `ListSeat.RowD.${seat_name}.status`
                var objectUpdate = {};
                objectUpdate[path] = false;
  
                  db.collection("TicketRoom").doc(doc.id).update(objectUpdate)
              })
            })
          })
      },
      addBillByUserID({commit}, payload) {
        db.collection("Bills").add({
          user_uid: payload.user_uid,
          movie_name: payload.movie_name,
          show_time: payload.show_time,
          quantum: payload.quantum,
          totalPay: payload.totalPay,
          //created_at: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((bill) => {
          // console.log("Document written with title: ", review.id);
              db.collection("Bills").doc(bill.id).update({booked_at: firebase.firestore.FieldValue.serverTimestamp()})
      })
    },
    getBillByUserID({commit}, payload) {
      let result = [];
      db.collection("Bills").where('user_uid', '==', payload).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'user_uid': doc.data().user_uid,
            'movie_name': doc.data().movie_name,
            'show_time': doc.data().show_time,
            'quantum': doc.data().quantum,
            'totalPay': doc.data().totalPay,
            'booked_at': doc.data().booked_at.toDate().toLocaleDateString("en-US", optionsFormatDate)
          }
          result.push(data)
        })
        console.log(result);
        commit('setCurrentUserBill', result);
        
      })
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
      updateVisibleReviews: (state, getters) => (payload) => {
        return getters.currentReviews
          .slice(payload.currentPage * payload.pageSize, (payload.currentPage * payload.pageSize) + payload.pageSize)
      },
      movieSchedules (state) {
        return state.movieSchedules;
      },
      getMovieSchedule: (state, getters) => (id, date, cine) => {
        return getters.movieSchedules
        .filter(movieSchedule => movieSchedule.movie_id === id 
                  && movieSchedule.date_show === date
                  && movieSchedule.cine_name === cine
                  );
      },
      getCurrentTicketRoom(state) {
        return state.currentTicketRoom;
      },
      getCurrentUserBill(state) {
        return state.currentUserBill;
      }
    }
  })
  