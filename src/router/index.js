import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('@/components/layouts/Index')
const User = () => import(/* webpackChunkName: "group-user" */ '@/components/layouts/User/User')
const UserProfile = () => import(/* webpackChunkName: "group-user" */ '@/components/layouts/User/UserProfile')
const UserReviews = () => import(/* webpackChunkName: "group-user" */ '@/components/layouts/User/UserReviews')
const UserBills = () => import(/* webpackChunkName: "group-user" */ '@/components/layouts/User/UserBills')
const MovieList = () => import('@/components/layouts/Movies/MovieList')
const MovieControl = () => import(/* webpackChunkName: "group-movie" */ '@/components/layouts/Movies/MovieControl')
const MovieDetail = () => import(/* webpackChunkName: "group-movie" */ '@/components/layouts/Movies/MovieDetail')
const TvShowList = () => import('@/components/layouts/TvShows/TvShowList')
const TvShowControl = () => import(/* webpackChunkName: "group-tvshow" */'@/components/layouts/TvShows/TvShowControl')
const TvShowDetail = () => import(/* webpackChunkName: "group-tvshow" */ '@/components/layouts/TvShows/TvShowDetail')
const BookTicket = () => import('@/components/layouts/Ticket/BookTicket')
const Page404 = () => import('@/components/layouts/Page404')
const Preloader = () => import('@/components/layouts/public/Preloader')
//import firebase from 'firebase'
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
      { path: 'profile', name: 'UserProfile', component: UserProfile },
      { path: 'myreviews', name: 'UserReviews', component: UserReviews },
      { path: 'bills', name: 'UserBills', component: UserBills }

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
    { path: '/ticket',
      name: 'BookTicket',
      component: BookTicket,
      meta: {
      requiresAuth: true
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
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});


//nav guard
router.beforeEach((to, from, next ) => {

 
  if(to.matched.some(record => record.meta.requiresAuth)) {
        var tokenUser = localStorage.getItem("current-user");
        //console.log(tokenUser);
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