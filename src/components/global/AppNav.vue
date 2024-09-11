<template>
  <v-app-bar
    color="#000000"
    height="140"
    style="border-bottom: 0.9rem solid #eccd69"
  >
    <v-container class="pa-0">
      <v-row>
        <v-col cols="4">
          <img src="@/assets//images/logo.png" alt="logo" width="70%" />
        </v-col>
        <v-col cols="8" style="">
          <div style="display: flex; gap: 10px; align-items: end">
            <div class="position-relative" style="width: 100%">
              <input
                type="search"
                name="navSearch"
                class="py-3 px-5 search-input"
              />
              <v-btn
                style="
                  position: absolute;
                  right: 25%;
                  top: 80%;
                  transform: translateY(-50%);
                "
                size="35"
                elevation="5"
                color="#fff"
                icon="mdi-magnify"
              />
            </div>
            <div class="d-flex ga-2">
              <img
                src="../../assets/images/facebook_Gold.png"
                width="20"
                height="20"
                alt="facebook"
              />
              <img
                src="../../assets/images/Twitter - Gold.png"
                width="20"
                height="20"
                alt="Twitter"
              />
              <img
                src="../../assets/images/instagram_Gold.png"
                width="20"
                height="20"
                alt="instagram"
              />
              <img
                src="../../assets/images/Youtube - Gold.png"
                width="20"
                height="20"
                alt="Youtube"
              />
            </div>
          </div>
          <div>
            <ul
              class="links d-flex justify-space-between pt-10 ps-1"
              style="
                list-style: none;
                cursor: pointer;
                display: flex;
                align-items: end;
              "
            >
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
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marcellus");
* {
  font-family: "Marcellus", sans-serif;

  font-size: medium;
}
.search-input {
  outline: none;
  width: 80%;
  position: relative;
  top: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.search-input:focus {
  border-color: #eccd69;
}
ul li:hover {
  color: #eccd69;
}
</style>
