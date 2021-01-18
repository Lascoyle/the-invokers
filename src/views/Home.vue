<template>
  <section id="home">
    <v-parallax src="../assets/images/final-characters-home-m.jpg" height="700" alt="Pictures of final fantasy games protagonists">
      <v-banner dark>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h3 text-lg-h1 mb-5"><span class="home-title">Welcome to <strong class="title-emphasis">// The InvoKers</strong></span></h1>
            <h1 class="text-h3 text-lg-h1 mb-5"><span class="home-title mirror">Welcome to <strong class="title-emphasis">// The InvoKers</strong></span></h1>
            <v-divider></v-divider>
            <h2 class="text-h6 text-lg-h2 my-5">Find all the informations you want about Final Fantasy games and their respective universes!</h2>
            <p class="text-caption text-lg-subtitle-2 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit dolorem illum eveniet eaque magni pariatur quae, alias quibusdam ducimus, harum dicta ea, blanditiis enim dolor corporis ex tempora dignissimos expedita maxime nulla architecto. Saepe corporis voluptatum quod dolorum non dignissimos adipisci perferendis qui assumenda nesciunt, esse consectetur reprehenderit? Quidem repellendus tempora reprehenderit quia illo! Voluptates laboriosam, reprehenderit eaque deserunt necessitatibus perspiciatis tempore suscipit, error corporis adipisci nihil voluptas eligendi minima atque ea reiciendis molestias vitae molestiae fugiat non nam quos?</p>
          </v-col>
        </v-row>
      </v-banner>
    </v-parallax>
    <template>
      <v-carousel hide-delimiters cycle interval="6000">
        <v-carousel-item v-for="(slide,index) in slides" :key="index">
          <v-sheet :color="colors[index]" height="100%" class="d-flex align-center">
            <v-layout class="lg-d-flex justify-center">
              <v-img :src="slide.src" class="col-lg-5 block" :aspect-ratio="16/9"></v-img>
              <div class="ml-5 col-lg-5">
                <v-btn text class="text-h4 my-5 pa-0" router :to="slide.route">Learn more about the //<strong>{{ slide.title }}</strong></v-btn>
                <h3 class="text-h5 mb-5 ml-3">{{ slide.subtitle }}</h3>
                <v-divider class="mb-5"></v-divider>
                <p class="ml-3 font-weight-light">
                  {{ slide.infos }}
                </p>
              </div>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
  </section>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      slides: [
        {
          title: "Games",
          src: require("../assets/images/city.jpg"),
          subtitle:"You will find here everything about your favorite games!",
          infos: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe officiis dolorum aut ex facere corrupti voluptatem nam eaque fugiat quam assumenda voluptatibus molestiae quidem totam, aperiam beatae sequi atque voluptas minus. Quo rerum aperiam voluptas suscipit obcaecati quisquam tenetur animi sapiente quae minima ab possimus distinctio mollitia, libero modi qui nemo error debitis impedit asperiores laudantium veniam voluptates. Quis tempore laboriosam consequatur!",
          route: "/games"
          },
        {
          title: "Characters",
          src: require("../assets/images/characters.jpg"),
          subtitle:"You will know everything about the protagonists!",
          infos: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe officiis dolorum aut ex facere corrupti voluptatem nam eaque fugiat quam assumenda voluptatibus molestiae quidem totam, aperiam beatae sequi atque voluptas minus. Quo rerum aperiam voluptas suscipit obcaecati quisquam tenetur animi sapiente quae minima ab possimus distinctio mollitia, libero modi qui nemo error debitis impedit asperiores laudantium veniam voluptates. Quis tempore laboriosam consequatur!",
          route: "/characters"
          },
        {
          title: "Monsters",
          src: require("../assets/images/monsters.jpg"),
          subtitle:"You will learn everything about monsters caracteristics!",
          infos: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe officiis dolorum aut ex facere corrupti voluptatem nam eaque fugiat quam assumenda voluptatibus molestiae quidem totam, aperiam beatae sequi atque voluptas minus. Quo rerum aperiam voluptas suscipit obcaecati quisquam tenetur animi sapiente quae minima ab possimus distinctio mollitia, libero modi qui nemo error debitis impedit asperiores laudantium veniam voluptates. Quis tempore laboriosam consequatur!",
          route: "/monsters"
        }
      ],
      colors: [
        'blue lighten-1',
        'cyan lighten-1',
        'indigo lighten-2'
      ]
    }
  }
}
</script>

<style>

.home-title {
    font-family: 'Imbue', 'serif' !important;
    text-transform: uppercase;
    font-size: 8.5rem;
}

.mirror {
  display: block;
  transform: matrix(1, 0, 0, -1, 0, 0) skew(-20deg);
  opacity: 0.5;
  line-height: 23px;
  margin-bottom: 5%;
  margin-left: 33.5px;
}

.title-emphasis {
    font-weight: 600;
}

.v-parallax__content {
 justify-content: unset!important;
 margin-top: 8rem!important;
}
</style>