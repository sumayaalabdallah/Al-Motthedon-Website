<template>
  <v-container class="home-container">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-1 text-amber-lighten-2">CATEGORIES</h1>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
        v-for="category in categories"
        :key="category"
      >
        <v-card class="category-card" @click="goToCategory(category)">
          <v-card-title>{{ category }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    goToCategory(category) {
      this.$router.push({ name: "CategoryPage", params: { category } });
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marcellus");

h1 {
  font-family: "Marcellus", sans-serif;
  font-size: 50px;
  font-weight: 100;
  position: relative;
  z-index: 1;
}
.home-container {
  background-image: url("../../assets/images/Header 2.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 20rem !important;
}

.home-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.v-card {
  position: relative;
}

.category-card {
  background-color: rgba(214, 178, 89, 0.8);
  color: #fff;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.v-card-title {
  justify-content: center;
  background-color: transparent;
  z-index: 1;
  font-family: "Marcellus", sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
}
@media (max-width: 400px) {
  .category-card {
    height: 100px;
  }
  .home-container {
    margin-top: 10rem !important;
  }
}
</style>
