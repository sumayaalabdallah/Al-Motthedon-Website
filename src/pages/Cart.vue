<script setup>
import { useCartStore } from "../stores/cart.js";
import { computed } from "vue";
const cart = useCartStore();
const products = computed(() => cart.items);
const itemCount = computed(() => cart.items.length);
</script>

<template>
  <section class="py-5" id="home">
    <v-container>
      <p class="py-4 text-h5">
        <v-icon size="40" color="amber-lighten-1"> mdi-cart </v-icon>
        {{ itemCount }}
        item(s) :
      </p>
      <v-row>
        <v-col cols="12">
          <v-table hover class="bg-amber-lighten-3 text">
            <thead>
              <tr>
                <th>Image</th>
                <th>Quantity</th>
                <th>subTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  <v-img
                    rounded
                    width="100%"
                    height="100%"
                    :src="product.image"
                    alt="cart-img"
                  />
                </td>

                <td>
                  <v-icon
                    class="icon"
                    color="light-green-darken-3"
                    @click="cart.incrementQ(product)"
                  >
                    mdi-plus-circle
                  </v-icon>
                  <v-title class="text">
                    {{ product.count }}
                  </v-title>
                  <v-icon
                    class="icon"
                    color="red-darken-3"
                    @click="cart.decrementQ(product)"
                  >
                    mdi-minus-circle
                  </v-icon>
                </td>
                <td>
                  <v-card-title class="text">
                    AED {{ product.price * product.count }}
                  </v-card-title>
                </td>
                <td>
                  <span>
                    <v-icon
                      class="icon"
                      color="red-darken-3"
                      variant="outlined"
                      @click="cart.removeItem(product)"
                    >
                      mdi-delete
                    </v-icon>
                    <v-tooltip activator="parent" location="bottom" offset="20">
                      Delete this Product?
                    </v-tooltip>
                  </span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marcellus");
* {
  font-family: "Marcellus", sans-serif;
}
tr:nth-child(even) {
  background-color: #fafafa;
}
.text {
  font-size: 25px;
}
.icon {
  font-size: 25px;
}
@media (max-width: 400px) {
  .text {
    font-size: 13px;
  }
  .icon {
    font-size: 17px;
  }
}
</style>
