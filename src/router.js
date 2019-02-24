import Vue from 'vue'
import Router from 'vue-router'
import Users from './views/Users.vue'
import Sessions from './views/Sessions.vue'
import Peeps from './views/Peeps.vue'
import Peep from './views/Peep.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/peeps'
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
      path: '/peeps/:id',
      name: 'peep',
      component: Peep
    },
    {
      path: '/peeps',
      name: 'peeps',
      component: Peeps
    }
  ]
})
