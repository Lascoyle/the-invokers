import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Characters from '../views/Characters.vue'
import Monsters from '../views/Monsters'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/monsters',
    name: 'Monsters',
    component: Monsters
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
