<template>
    <section id="current-game" class="px-5 mt-md-5 pa-md-5">
        <div id="current-game-resume" class="d-flex flex-column align-center">
            <v-img contain :src="this.currentGame.picture" width="100%" height="50vh" class="mb-sm-5"></v-img>
            <p class="ma-lg-5 py-sm-5 col-12 col-md-10 col-lg-8">{{ this.currentGame.description }}</p>
        </div>
        <div id="current-game-characters">

        </div>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Game',
    data() {
        return {
            gameId: this.$route.params.id,
            currentGame: Object
        }
    },

    mounted() {
        this.gameId = this.$route.params.id
        axios
        .get(`https://www.moogleapi.com/api/v1/games/${this.gameId}`)
        .then(response => (this.currentGame = response.data[0]))
    },

    updated() {
        this.gameId = this.$route.params.id
        axios
        .get(`https://www.moogleapi.com/api/v1/games/${this.gameId}`)
        .then(response => (this.currentGame = response.data[0]))
    }
}
</script>