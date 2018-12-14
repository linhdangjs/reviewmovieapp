import Vue from 'vue'
import Vuex from 'vuex'
import db from '../components/firebaseInit.js'
import firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      userLogin: null,
      users: [],
      userDetail : null
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
        
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
                user.updateProfile({
                  displayName: payload
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
    
      }
      // signUserUp ({commit}, payload) {
      //   firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      //     .then(
      //       user => {
      //           console.log(user.user.uid);
      //           const newUser = {
      //               id: user.user.uid,
      //           }
      //           commit('setUser', newUser)
      //       }
      //     )
      //     .catch(
      //       error => {
      //         console.log(error)
      //       }
      //     )
      // },
      // signUserIn ({commit}, payload) {
      //   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      //     .then(
      //       user => {
      //         const newUser = {
      //           id: user.user.uid,
      //           email: user.user.email
      //         }
      //         commit('setUser', newUser)
      //       }
      //     )
      //     .catch(
      //       error => {
      //         console.log(error)
      //       }
      //     )
      // }
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
      }
    }
  })
  