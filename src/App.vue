<template>
  <v-app>
    <navigation></navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components : {
    Navigation
  },
  data: () =>
    ({

  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Imbue:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
