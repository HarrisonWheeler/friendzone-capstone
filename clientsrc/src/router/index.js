import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/dashboard.vue'

import { authGuard } from "@bcwdev/auth0-vue"
import store from '../store'
import { profileService } from '../store/ProfileService'

Vue.use(Router)

function loadView(file) {
  return () => import("../views/" + file)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/onBoarding',
      name: 'onBoarding',
      component: loadView("UserOnboarding.vue"),
      beforeEnter: authGuard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter(to, from, next) {
        async function isNew() {
          if (!store.state.profile.id) {
            return await profileService.getProfile((profile) => {
              if (profile.firstTimeUser) {
                return next("/onBoarding")
              }
              next()
            })
          }
          if (store.state.profile.firstTimeUser) {
            return next("/onBoarding")
          }
          next()
        }
        authGuard(to, from, isNew)
      },

    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})