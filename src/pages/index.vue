<template>
  <div class="home">
    <heroSection />
    <FlashDeals />
    <JewelryCollection />
    <categorySection />
    <categoryPage />
  </div>
</template>

<script>
import heroSection from "../components/homePage/heroSection.vue";
import FlashDeals from "@/components/homePage/productsSwiper.vue";
import JewelryCollection from "../components/homePage/aboutSection.vue";
import categorySection from "../components/homePage/categorySection.vue";
import categoryPage from "../components/homePage/categoryPage.vue";

export default {
  components: {
    heroSection,
    FlashDeals,
    JewelryCollection,
    categorySection,
    categoryPage,
  },
};
</script>
