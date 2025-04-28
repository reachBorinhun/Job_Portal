import { createRouter, createWebHistory } from 'vue-router'
import Startpage from '../Views/Startpage.vue'
import Register from '../Views/Register.vue'
import Login from '../Views/Login.vue'
import Homepage from '../Views/Homepage.vue'
import Jobpage from '../Views/Jobpage.vue'
import myprofile from '../Views/myprofile.vue'
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
  {
    path: '/jobpage',
    name: 'jobpage',
    component: Jobpage
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: myprofile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router