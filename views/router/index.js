import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/users.vue'
import homePage from '../pages/home.vue'
import companiesPage from '../pages/companies'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: 
  [
    {
      path: '/users',
      name: 'users',
      component: usersPage
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/companies',
      name: 'companies',
      component: companiesPage
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router