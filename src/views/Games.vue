<template>
  <section id="games">
      <template>
        <v-card class="mx-auto d-flex pa-5" v-for="(game, index) in games" :key="index">
          <v-img :src="game.picture" contain :aspect-ratio="1" height="200px" class="col-lg-4"></v-img>
          <div class="col-lg-8">
            <v-card-title>{{ game.title }}</v-card-title>
  
            <v-card-subtitle>{{ game.platform }}</v-card-subtitle>
  
            <v-card-actions>
              <v-btn color="orange lighten-2" text>Description</v-btn>
  
              <v-spacer></v-spacer>
  
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                {{ game.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
          </div>
        </v-card>
      </template>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Games',
  data() {
    return {
      games: [],
      show: false,
    }
  },

  mounted() {
    axios
    .get('https://www.moogleapi.com/api/v1/games')
    .then(response => (this.games = response.data))
  }
}
</script>