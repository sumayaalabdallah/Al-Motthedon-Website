<template>
  <div class="menu-drawer">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-card class="px-0" elevation="0">
        <v-card-title
          style="font-size: 19px"
          class="px-5 pt-3 d-flex justify-space-between align-center w-100"
        >
          Menu
          <v-icon color="amber-lighten-2" @click="drawer = false"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-divider
          :thickness="1"
          class="border-opacity-100"
          color="amber-lighten-2"
        ></v-divider>
        <v-list>
          <v-list-item>
            <ul class="pt-5" style="list-style: none; cursor: pointer">
              <li @click="this.$router.push({ name: 'homePage' })">Home</li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'electronics' },
                  })
                "
              >
                Electronics
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'jewelery' },
                  })
                "
              >
                Jewelry
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'men\'s clothing' },
                  })
                "
              >
                Men Clothing
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'women\'s clothing' },
                  })
                "
              >
                Women Clothing
              </li>
              <li @click="$router.push({ name: 'cartPage' })">Cart</li>
              <li>Contact us</li>
              <li>
                <div class="d-flex ga-2">
                  <img
                    src="../../assets/images/facebook_Gold.png"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <img
                    src="../../assets/images/Twitter - Gold.png"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <img
                    src="../../assets/images/instagram_Gold.png"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <img
                    src="../../assets/images/Youtube - Gold.png"
                    width="20"
                    height="20"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
<style scoped>
ul li {
  padding: 10px 0;
}
ul li:hover {
  color: #eccd69;
}
</style>
