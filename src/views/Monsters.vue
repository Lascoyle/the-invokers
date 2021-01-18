<template>
    <section id="monsters" class="mt-4">
      <v-row>
        <v-card class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(monster, index) in monsters" :key="index">
          <v-container class="mt-5 d-flex flex-column">
            <v-img :src="monster.picture" width="40%" contain :aspect-ratio="1" class="block align-self-end"></v-img>
            <!-- <p v-for="(picture, index) in monster.pictures" :key="index">{{ picture.url }}</p> -->
            <v-card-title class="text-h4 mt-5"><span>{{ monster.name }}</span><span v-if="monster.japaneseName != null" class="ml-3 text-subtitle-2"> // {{ monster.japaneseName }}</span></v-card-title>
            <v-card-subtitle>{{ monster.game }}</v-card-subtitle>
            <v-card-text class="scroller">
              {{ monster.description ? monster.description : "This monster does not have a description yet. A full description will be added soon, so meanwhile keep connected for reading all the available content!"  }}
            </v-card-text>
          </v-container>
          <v-list class="text-right mx-3">
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-subtitle-2">Elemental Affinity :</v-list-item-title>
                    <v-list-item-subtitle v-if="monster.elementalAffinity === null || monster.elementalAffinity  === 'N/a'" class="text-caption">Unknown</v-list-item-subtitle>
                    <v-list-item-subtitle v-else class="text-caption">{{ monster.elementalAffinity }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                    <v-list-item-title  class="text-subtitle-2">Elemental Weakness :</v-list-item-title>
                    <v-list-item-subtitle v-if="monster.elementalWeakness === null || monster.elementalWeakness  === 'N/a'" class="text-caption">Unknown</v-list-item-subtitle>
                    <v-list-item-subtitle v-else class="text-caption">{{ monster.elementalWeakness }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-divider inset></v-divider>
            <v-list-item-group>
              
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-row>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'monsters',

  data() {
    return {
      monsters: [],
    }
  },

  mounted() {
    axios
    .get('https://www.moogleapi.com/api/v1/monsters')
    .then(response => (this.monsters = response.data));
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
</style>