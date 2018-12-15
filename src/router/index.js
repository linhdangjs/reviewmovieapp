import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/layouts/Index'
import UserProfile from '@/components/layouts/User/UserProfile'
import MovieList from '@/components/layouts/Movies/MovieList'
import Page404 from '@/components/layouts/Page404'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movie',
      name: 'MovieList',
      component: MovieList,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404,
      meta: {
        requiresGuest: true
      }
    }
  ],
  mode: 'history'
});


//nav guard
router.beforeEach((to, from, next ) => {
  //check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //check if NOT logged in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      }
    })
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
        //check if logged in
        firebase.auth().onAuthStateChanged(function(user) { 
          if (user) {
            next();
          } else {
            next();
          }
        })
  } else {
    // Proceed to route
    next();
  }
})

export default router;