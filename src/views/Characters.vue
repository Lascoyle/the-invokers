<template>
  <section id="characters" class="mt-4">
      <div v-if="loader.state === true" class="loader-content d-flex align-center justify-space-between cyan--text text-h4">
        <div class="loader-bar"></div>
        <p class="loader-message">{{ loader.message }}</p>
      </div>
      <v-row>
        <v-card class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(character, index) in characters" :key="index">
          <v-container class="mt-5 d-flex flex-column">
            <v-img v-for="(picture, index) in character.pictures" :key="index" :src="picture.url" width="40%" contain :aspect-ratio="1" class="block align-self-end">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="cyan lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="text-h4 mt-5"><span>{{ character.name }}</span><span v-if="character.japaneseName != null" class="ml-3 text-subtitle-2"> // {{ character.japaneseName }}</span></v-card-title>
            <v-card-subtitle>{{ character.origin }}</v-card-subtitle>
            <v-card-text class="scroller">
              {{ character.description ? character.description : "This character does not have a description yet. A full description will be added soon, so meanwhile keep connected for reading all the available content!"  }}
            </v-card-text>
          </v-container>
          <v-list disabled class="text-right mx-3 rounded-0">
            <v-list-item-group>
              <v-list-item>
                Gender :
                <v-list-item-content>
                  <v-list-item-title class="text-body-2" v-if="character.gender === 'Male' || character.gender === 'Female'">{{ character.gender }}</v-list-item-title>
                  <v-list-item-title class="text-body-2" v-else>Asexual</v-list-item-title>
                </v-list-item-content>
                <v-icon class="ml-2 mr-0" v-if="character.gender === 'Male'" :color="colors[0]">mdi-gender-male</v-icon>
                <v-icon class="ml-2 mr-0" v-else-if="character.gender === 'Female'" :color="colors[1]">mdi-gender-female</v-icon>
                <v-icon class="ml-2 mr-0" v-else :color="colors[2]">mdi-gender-male-female-variant</v-icon>
              </v-list-item>
              <v-list-item>
                Race :
                <v-list-item-content>
                  <v-list-item-title class="text-body-2">{{ character.race }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                Age :
                <v-list-item-content>
                  <v-list-item-title class="text-body-2" v-if="character.age === '??'"> Unknown</v-list-item-title>
                  <v-list-item-title class="text-body-2" v-else> {{ character.age }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-divider inset></v-divider>
            <v-list-item-group>
              <v-divider inset></v-divider>
              <v-list-item disabled>
                <v-list-item-content>
                  <v-list-item-title class="text-caption">Height : {{ character.height }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item disabled>
                <v-list-item-content>
                  <v-list-item-title class="text-caption">Weight : {{ character.weight }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-row>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Characters',

  data() {
    return {
      characters: [],
      colors: ['blue', 'pink', 'purple'],
      loader: {
        state: true,
        message: "Please wait, the caracters will be displayed in few seconds... :)"
      }
    }
  },

  mounted() {
    axios
    .get('https://www.moogleapi.com/api/v1/characters', {
      onDownloadProgress: () => {
        this.loader = true
      }
    })
    .then(response => {this.characters = response.data});
  },
}
</script>

<style>
.scroller {
  height: 150px;
  overflow-y: scroll;
  scrollbar-color: lightgray rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

.loader-content {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
}

.loader-bar {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #26c6da;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>