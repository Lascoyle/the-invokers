<template>
    <nav>
        <!-- Top Navbar -->
        <v-app-bar app dark>
            <v-btn text class="text-h5" @click="drawer = !drawer">
                <span>The InvoKers</span>
            </v-btn>
          <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Sliding Navigation-->
        <v-navigation-drawer app dark temporary color="blue lighten-2" v-model="drawer">
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
        </v-navigation-drawer>
</nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            links: [
                {name: 'Home', route: '/', icon: "mdi-home"},
                {name: 'Games', route: '/games', icon: "mdi-disc" },
                {name: 'Characters', route: '/characters', icon: "mdi-human-queue" },
            ],
            drawer: false
        }
    }
}
</script>