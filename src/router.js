import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import Sessions from './views/Sessions.vue'
import Peeps from './views/Peeps.vue'
import Likes from './views/Likes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions
    },
    {
      path: '/peeps',
      name: 'peeps',
      component: Peeps
    },
    {
      path: '/peeps/:id',
      name: 'peeps',
      component: Peeps
    },
    {
      path: 'peeps/:peep_id/likes/:user_id',
      name: 'likes',
      component: Likes
    }
  ]
})
