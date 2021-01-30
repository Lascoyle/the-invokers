import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Characters from '../views/Characters.vue'
import Monsters from '../views/Monsters'
import Game from '../views/Game.vue'
import Character from '../views/Character.vue'

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
    path: '/game/:id',
    name: 'Game',
    component: Game
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
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
