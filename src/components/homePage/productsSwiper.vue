<template>
  <v-container>
    <div class="products-swiper pt-3 pb-10">
      <div class="mb-16 px-5 position-relative">
        <img
          src="../../assets/images/ALMOTTHEDON COMPANY Logo (3)1.png"
          alt="line-img"
          width="20%"
          class="position-absolute line"
          style="right: 49%; top: 60%"
        />
        <h2 style="font-size: 30px; font-weight: 100;" class="title text-center text-uppercase">
          Latest Products
        </h2>
      </div>

      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="4"
        :space-between="50"
        class="pb-10 px-5"
        :autoplay="{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :breakpoints="breakpoints"
        loop="true"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <div elevation="0" class="pb-5 ">
            <v-hover v-slot="{ isHovering, props }">
              <div class="img-parent" style=" height: 300px">
                <img
                  :style="`height: 100%;  transition: 0.5s all ease-in-out;cursor: pointer; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                  :src="item.img"
                  class="w-100 position-relative"
                  v-bind="props"
                  alt="product-img"
                  cover
                ></img>
                <img src="../../assets/images/heart_10826871.png" alt="heart-img" class=" position-absolute top-0 right-0 pa-3" width="30">
              </div>
            </v-hover>

            <v-card-text class="pl-0 pb-1 text-h6" align="center">
              {{ item.title }}</v-card-text
            >

            <v-card-text
              class="pl-0 pt-0 text-subtitle-1 font-weight-light text-amber-lighten-2 text-h4"
              align="center"
            >
              <span>AED {{ item.price }}</span>
            </v-card-text>

            <div class="mt-5" align="center">
              <v-btn
                class="py-2 px-12 font-weight-light text-uppercase"
                density="combact"
                style="text-transform: none; border: 1px solid #eccd69 ;"
              >see more</v-btn>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  </v-container>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../../assets/images/levitating-music-headphones-display.jpg";
import img2 from "../../assets/images/beautiful-luxury-necklace-jewelry-stand-neck.jpg";
import img3 from "../../assets/images/home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.jpg";
export default {
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 3,
      },
    },
    products: [
      {
        id: "1",
        img: img1,
        title: "Headphone",
        price: 250,
      },
      {
        id: "2",
        img: img2,
        title: "Necklace",
        price: 1500,
      },
      {
        id: "3",
        img: img3,
        title: "Home Appliances",
        price: 5000,
      },
    ],
  }),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Marcellus");
h2 {
  font-family: "Marcellus", sans-serif;
  font-size: medium;
}

.products-swiper {
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #eccd69;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    width: 15px;
    height: 15px;
  }
}
@media (max-width: 400px) {
.line{

   width:45%;
}
  h2 {
   font-size: 21px !important;
  }
}
</style>
