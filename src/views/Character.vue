<template>
    <section id="current-game" class="px-5 mt-md-5 pa-md-5">
        <div id="current-game-resume" class="d-flex flex-column flex-sm-row align-center">
            <v-img v-for="(picture, index) in currentCharacter.pictures" :key="index" :src="picture.url" width="40vw" contain :aspect-ratio="1" class="character-image pa-5" ></v-img>
            <div class="character-content ma-3 mt-5 ma-md-5 pa-md-5">
                <h2 class="character-name text-md-h4 text-lg-h3">{{ this.currentCharacter.name }} <span class="character-japanese-name" v-if="currentCharacter.japaneseName != null">{{ currentCharacter.japaneseName }}</span></h2>
                <p class="character-description ma-5">{{ this.currentCharacter.description }}</p>
            </div>
        </div>
        <div id="current-game-characters">

        </div>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Character',
    data() {
        return {
            id: this.$route.params.id,
            currentCharacter: {}
        }
    },

    mounted() {
        this.id = this.$route.params.id
        axios
        .get(`https://www.moogleapi.com/api/v1/characters/${this.id}`)
        .then(response => (this.currentCharacter = response.data[0], console.log(this.currentCharacter)))
    },

    updated() {
        this.id = this.$route.params.id
        axios
        .get(`https://www.moogleapi.com/api/v1/characters/${this.id}`)
        .then(response => (this.currentCharacter = response.data[0]))
    }
}
</script>

<style>

</style>