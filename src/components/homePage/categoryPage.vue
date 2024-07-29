<template>
  <v-container class="category-page">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class=" text-amber-lighten-2 text-uppercase mt-3">{{ category }}</h1>
      </v-col>
      <v-col
      class="card"
        cols="12"
        md="3"
        sm="6"
        v-for="product in products"
        :key="product.id"
      >
        <v-card>
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent position-relative" style="height: 300px">
              <img
                :style="`height: 100%;  transition: 0.5s all ease-in-out;cursor: pointer; scale: ${isHovering ? 1.05 : 1}`"
                :src="product.image"
                class="w-100 position-relative"
                v-bind="props"
                alt="category-img"
                cover
              ></img>
              <v-btn
                style="position: absolute; top: 5px; right: 5px;"
                size="35"
                elevation="5"
                class="btn-cart"
                color="#eccd69"
                icon="mdi-heart-outline"
              />
              <v-btn
                style="position: absolute; top: 50px; right: 5px"
                size="35"
                elevation="5"
                class="btn-cart"
                color="#eccd69"
                icon="mdi-cart-outline"
                @click="cart.addItem(product)"
              />
            </div>
          </v-hover>
          <v-card-title class="pa-2 pb-1 text-h6 text-center font-weight-light">
            {{ product.title }}
          </v-card-title>
          <v-card-text class="pl-0 pt-0 text-subtitle-1 font-weight-light text-amber-lighten-2 text-h4 text-center">
            <span>AED {{ product.price }}</span>
          </v-card-text>
          <div>
            <v-btn
              class="py-2 px-12 my-3 font-weight-light text-uppercase btn"
              density="combact"
              style="text-transform: none; border: 1px solid #eccd69;"
              @click="viewProduct(product.id)"
            >see more</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCartStore } from "../../stores/cart.js";
import axios from "axios";

export default {
  setup() {
    const cart = useCartStore();
    return { cart };
  },
  data() {
    return {
      category: "",
      products: [],
    };
  },
  methods: {
    async fetchProductsByCategory() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${this.category}`
        );
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    viewProduct(productId) {
      this.$router.push({ name: "ProductPage", params: { productId } });
    },
  },
  created() {
    this.category = this.$route.params.category;
    this.fetchProductsByCategory();
  },
  watch: {
    "$route.params.category": {
      immediate: true,
      handler(newCategory) {
        this.category = newCategory;
        this.fetchProductsByCategory();
      },
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marcellus");
* {
  font-family: "Marcellus", sans-serif;

}
.btn-cart:hover {
  color: #eccd69 !important;
  background-color: #222 !important;
}
.btn:hover {
  background-color: #eccd69;
  color: #222;
}
@media (max-width: 400px) {
  .card {
    padding: 20px 32px;
  }
  h1{
  font-size: 22px;
}
}
</style>
