<template>
  <section id="home">
    <v-parallax src="../assets/images/final-characters-home-m.jpg" height="700" alt="Pictures of final fantasy games protagonists">
      <v-banner dark>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h3 text-lg-h1 mb-md-5 pt-sm-5"><span class="home-title">Welcome to <strong class="title-emphasis">// The InvoKers</strong></span></h1>
            <h1 class="text-h3 text-lg-h1 mb-md-5 pt-sm-5"><span class="home-title mirror">Welcome to <strong class="title-emphasis">// The InvoKers</strong></span></h1>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <h2 class=" text-subtitle-2 text-lg-h6 text-lg-h2 my-2 my-sm-5 text-center">Find all the informations you want about Final Fantasy games and their respective universes!</h2>
        <p class="text-caption pa-0 my-2 text-lg-subtitle-2 my-sm-5 col-lg-10 text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit dolorem illum eveniet eaque magni pariatur quae, alias quibusdam ducimus, harum dicta ea, blanditiis enim dolor corporis ex tempora dignissimos expedita maxime nulla architecto. Saepe corporis voluptatum quod dolorum non dignissimos adipisci perferendis qui assumenda nesciunt, esse consectetur reprehenderit? Quidem repellendus tempora reprehenderit quia illo! Voluptates laboriosam!</p>
      </v-banner>
    </v-parallax>
    <template>
      <v-carousel hide-delimiters cycle interval="6000">
        <v-carousel-item v-for="(slide,index) in slides" :key="index" class="home-carousel">
          <v-sheet :color="colors[index]" height="100%" class="home-carousel-sheet d-flex align-sm-center pt-5 mt-sm-0 pt-sm-0">
            <v-layout class="home-carousel-layout d-flex flex-column flex-sm-row justify-center mt-5 pt-5 mt-sm-0 pt-sm-0">
              <v-img :src="slide.src" class="col-12 col-sm-5 carousel-img pa-5" :aspect-ratio="16/9"></v-img>
              <div class="pa-1 pa-sm-5 col-11 col-sm-5 home-carousel-text">
                <v-btn text class="text-md-h5 text-lg-h4 my-5 pa-0 home-carousel-link" router :to="slide.route">Learn more about the //<strong>{{ slide.title }}</strong></v-btn>
                <h3 class="text-md-h5 mb-5 ml-3">{{ slide.subtitle }}</h3>
                <v-divider class="mb-5"></v-divider>
                <p class="home-carousel-paragraph text-caption text-md-subtitle-2 text-lg-body-1 ml-3 font-weight-light">
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
    font-size: 2.5rem;
}

.mirror {
  display: block;
  transform: matrix(1, 0, 0, -1, 0, 0) skew(-20deg);
  opacity: 0.5;
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



.carousel-img {
  display: block;
}

.home-carousel-text {
  position: absolute;
  max-width: 80%!important;
  background: rgba(3, 3, 3, 0.363);
  max-width: 100vw!important;
  right: 0;
}


@media screen and (min-width: 600px) {
    .home-title {
        font-size: 5rem
    }

    .mirror {
      line-height: 60px;
    }

    .home-carousel-text {
      position: initial;
    }
}

@media screen and (min-width: 960px) {
    .home-title {
        font-size: 6.5rem;
    }

    .mirror {
      line-height: 80px;
    }

    .carousel-img {
      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.514);
    }

    .home-carousel-text {
      background: none;
    }
}

@media screen and (min-width: 1265px) and (max-width: 1904px) {
    .home-title {
        font-size: 8.5rem;
    }

    .mirror {
      line-height: 70px;
    }
}
</style>