<template>
    <nav>
        <!-- Top Navbar -->
        <v-app-bar app dark width="100%">
            <v-btn text class="text-h4" @click="drawer = !drawer">
                <span class="nav-title">The // InvoKers</span>
            </v-btn>
        </v-app-bar>

        <!-- Sliding Navigation-->
        <v-navigation-drawer app dark temporary width="250" color="cyan lighten-1" v-model="drawer">
            <v-list>
                <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list light color="white lighten-2">
                <v-list-group>
                    <template v-slot:activator>
                         <v-list-item-title class="cyan--text">Games List</v-list-item-title>
                    </template>
                    <div class="nav-scroller">
                        <v-list-item v-for="(game, index) in games" :key="index" router :to="{path:'/game/' + game.gameId}">
                            <v-list-item-content>
                                <v-list-item-title class="ml-5 pl-3 text-caption cyan--text">{{ game.title }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-img :src="game.picture" width="50"></v-img>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-list-group>
                <v-list-group>
                    <template v-slot:activator>
                         <v-list-item-title class="cyan--text">Characters List</v-list-item-title>
                    </template>
                    <div class="nav-scroller">
                        <v-list-item v-for="(character, index) in characters" :key="index" router :to="{path:'/character/' + character.id}">
                            <v-list-item-content>
                                <v-list-item-title class="ml-5 pl-3 text-caption cyan--text">{{ character.name }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-img v-for="(picture, index) in character.pictures" :key="index" :src="picture.url" width="1"></v-img>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
</nav>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Navigation',
    data() {
        return {
            links: [
                {name: 'Home', route: '/', icon: "mdi-home"},
                {name: 'Games', route: '/games', icon: "mdi-disc" },
                {name: 'Characters', route: '/characters', icon: "mdi-human-queue" },
                {name: 'Monsters', route: '/monsters', icon: "mdi-human-queue" },
            ],
            drawer: false,
            games: [],
            characters: []
        }
    },

    mounted() {
    axios
    .get('https://www.moogleapi.com/api/v1/games')
    .then(response => (this.games = response.data));
    axios
    .get('https://www.moogleapi.com/api/v1/characters')
    .then(res => (this.characters = res.data));
  },
}
</script>

<style>
.nav-scroller {
  height: 57.2vh;
  overflow-y: scroll;
  scrollbar-color: rgba(34, 137, 163, 0.5) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

.nav-title {
    font-family: 'Imbue', 'serif';
    text-transform: uppercase;
}


</style>