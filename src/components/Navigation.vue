<template>
    <nav>
        <!-- Top Navbar -->
        <v-app-bar app dark>
            <v-btn text class="text-h4" @click="drawer = !drawer">
                <span class="nav-title">The // InvoKers</span>
            </v-btn>
          <v-spacer></v-spacer>
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
            <v-list color="cyan lighten-2">
                <v-list-group>
                    <div class="nav-scroller">
                        <v-list-item v-for="(game, index) in games" :key="index">
                            <v-list-item-content>
                                <v-list-item-title class="ml-5 pl-3 text-caption">{{ game.title }}</v-list-item-title>
                            </v-list-item-content>
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
            games: []
        }
    },

    mounted() {
    axios
    .get('https://www.moogleapi.com/api/v1/games')
    .then(response => (this.games = response.data));
  },
}
</script>

<style>
.nav-scroller {
  height: 478px;
  overflow-y: scroll;
  scrollbar-color: rgba(34, 137, 163, 0.5) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

.nav-title {
    font-family: 'Imbue', 'serif';
    text-transform: uppercase;
}


</style>