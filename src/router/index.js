import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bussiness from '../views/Bussiness.vue'
import Entertainment from '../views/Entertainment.vue'
import General from '../views/General.vue'
import Health from '../views/Health.vue'
import Science from '../views/Science.vue'
import Sports from '../views/Sports.vue'
import Technology from '../views/Technology.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bussiness',
    name: 'Bussiness',
    component: Bussiness
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
  {
    path: '/general',
    name: 'General',
    component: General
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
  {
    path: '/science',
    name: 'Science',
    component: Science
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
