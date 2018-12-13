import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/layouts/Index'
import UserProfile from '@/components/layouts/User/UserProfile'
import Page404 from '@/components/layouts/Page404'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/user/:id',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ],
  mode: 'history'
})
