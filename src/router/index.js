import { createRouter, createWebHistory } from 'vue-router'
import Startpage from '../Views/Startpage.vue'
import Register from '../Views/Register.vue'
import Login from '../Views/Login.vue'
import Homepage from '../Views/Homepage.vue'
const routes = [
  {
    path: '/',
    name: 'startpage',
    component: Startpage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router