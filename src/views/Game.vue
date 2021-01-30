<template>
    <section id="current-game">
        <div id="current-game-resume">
            <v-img :src="this.currentGame[0].picture" width="600"></v-img>
            <h2>{{ this.currentGame[0].title }}</h2>
            <p>{{ this.currentGame[0].description }}</p>
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
            gameId:this.$route.params.id,
            currentGame: []
        }
    },
    mounted() {
        console.log(this.gameId);
        axios
        .get(`https://www.moogleapi.com/api/v1/games/${this.gameId}`)
        .then(response => (this.currentGame = response.data, console.log(this.currentGame)))
    }
}
</script>