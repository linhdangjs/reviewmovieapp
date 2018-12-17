import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/layouts/Index'
import User from '@/components/layouts/User/User'
import UserProfile from '@/components/layouts/User/UserProfile'
import MovieList from '@/components/layouts/Movies/MovieList'
import MovieControl from '@/components/layouts/Movies/MovieControl'
import MovieDetail from '@/components/layouts/Movies/MovieDetail'
import TvShowList from '@/components/layouts/TvShows/TvShowList'
import TvShowControl from '@/components/layouts/TvShows/TvShowControl'
import TvShowDetail from '@/components/layouts/TvShows/TvShowDetail'
import Page404 from '@/components/layouts/Page404'
import firebase from 'firebase'
import { store } from '../store/index'
Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component:  HomePage,
      meta: {
        requiresGuest: true
      }
    },
    { path: '/user',
      name: 'user',
      component: User,
      meta: {
      requiresAuth: true
      } 
      , children: [
      { path: 'profile', name: 'UserProfile', component: UserProfile }

  ] },
    {
      path: '/movies',
      name: 'MovieList',
      component: MovieList,
      meta: {
        requiresGuest: true
      }
    },
    { path: '/movie',
      meta: {
        requiresGuest: true
      },
      components: {
        default: MovieControl,    
      }
      ,children: [
      { path: '', name: 'MovieRedirext', component: MovieList },
      { path: ':id', name: 'MovieDetail', component: MovieDetail },
      ] 
    },
    {
      path: '/tvshows',
      name: 'TvShowList',
      component: TvShowList,
      meta: {
        requiresGuest: true
      }
    },
    { path: '/tvshow',
      meta: {
        requiresGuest: true
      },
      components: {
        default: TvShowControl,    
      }
      ,children: [
      { path: '', name: 'TvShowRedirect', component: TvShowList },
      { path: ':id', name: 'TvShowDetail', component: TvShowDetail },
      ] 
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
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});


//nav guard
router.beforeEach((to, from, next ) => {

 
  if(to.matched.some(record => record.meta.requiresAuth)) {
        var tokenUser = localStorage.getItem("current-user");
        console.log(tokenUser);
        if(tokenUser) var user = JSON.parse(tokenUser);
        store.commit('setUser', JSON.parse(tokenUser));
      if(user) {
        next();
      } else {
        console.log('not log in')
        next({
          path:"/",
          query: {
            redirect: to.fullPath
          }
        })
      }

   
    }
    // unsubscribe()
  else if(to.matched.some(record => record.meta.requiresGuest)) {
        next();
  } else {
    // Proceed to route
    next();
  }
})

export default router;