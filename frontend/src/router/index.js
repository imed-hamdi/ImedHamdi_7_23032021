import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,

  },
  {
    path: '/Accueil',
    name : 'Accueil',
    component: Accueil,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes :routes
})

export default router
