import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GoogleLogin from '../views/GoogleLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: GoogleLogin
  }

  // {
  //   path: '/googlelogin',
  //   name: 'Googlelogin',
  //   component: () =>
  //     import(/*webpackChunkName: "parent"*/ '../views/GoogleLogin.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
