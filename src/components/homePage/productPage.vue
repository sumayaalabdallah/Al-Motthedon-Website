<template>
  <v-container class="pa-0">
    <h1 class="text-h4 my-16">Product Details</h1>
    <v-row class="pa-0">
      <v-col>
        <v-row justify="center" align="center" height="100%" class="ma-0">
          <v-col md="5" cols="12" class="pa-0" align="center">
            <v-img
              height="80%"
              width="80%"
              :src="product.image"
              alt="product.image"
            />
          </v-col>
          <v-col md="7" cols="12" class="py-0">
            <v-card-title class="text-h4">
              {{ product.title }}
            </v-card-title>

            <div class="pl-4">
              <v-rating
                v-if="product.rating"
                half-increments
                readonly
                :length="5"
                size="small"
                density="compact"
                :model-value="product.rating.rate"
                color="amber-lighten-2"
                active-color="amber-lighten-2"
              ></v-rating>
            </div>
            <v-card-text
              style="line-height: 40px"
              class="text-h6 text space-line py-0"
              >{{ product.description }}</v-card-text
            >

            <v-card-title class="text-h4 text text-amber-lighten-2">
              The Price:
              <span class="text-white"
                >AED {{ product.price }}</span
              ></v-card-title
            >
            <v-btn
              @click="cart.addItem(product)"
              class="mx-auto my-3 pa-5 font-weight-regular text-h5 btn"
              block
              color="amber-lighten-2"
            >
              Add To Cart
            </v-btn>
          </v-col>
        </v-row>
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
      product: {},
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const productId = this.$route.params.productId;
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        this.product = response.data;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
  },
  created() {
    this.fetchProduct();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marcellus");
* {
  font-family: "Marcellus", sans-serif;

  font-size: medium;
}
.btn {
  letter-spacing: 3px !important;
}
.btn:hover {
  background-color: #2222229d !important;
  color: #eccd69 !important;
  border: 1px solid #eccd69;

  transition: all 0.2s ease-out;
}
.btn:active {
  background-color: #eccd6947 !important;
}
</style>
