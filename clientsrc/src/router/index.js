import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/dashboard.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: authGuard
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})