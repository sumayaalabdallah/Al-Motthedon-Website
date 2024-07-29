<template>
  <div class="products-swiper">
    <v-container class="pt-0">
      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="1"
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
        <swiper-slide v-for="slider in sliders" :key="slider.id">
          <img
            class="img-slider"
            :src="slider.img"
            alt="img-slider"
            width="100%"
            height="450"
          />
        </swiper-slide>

        <div class="swiper-pagination"></div>
      </Swiper>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import slide1 from "../../assets/images/Header 1.jpg";
import slide2 from "../../assets/images/Header 2.jpg";
import slide3 from "../../assets/images/Header 3.jpg";
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
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      990: {
        slidesPerView: 1,
      },
    },
    sliders: [
      {
        id: "1",
        img: slide1,
      },
      {
        id: "2",
        img: slide2,
      },
      {
        id: "3",
        img: slide3,
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.products-swiper {
  .swiper-pagination-bullet {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 500px) {
  .img-slider {
    height: 300px;
  }
}
</style>
