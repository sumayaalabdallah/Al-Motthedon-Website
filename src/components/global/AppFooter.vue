<template>
  <div class="app-footer">
    <v-container class="pa-0">
      <v-footer :app="true" color="#000" absolute>
        <v-row class="footer">
          <v-col cols="12" lg="12" md="12" sm="12" class="px-10">
            <v-divider
              :thickness="1"
              class="border-opacity-100"
              color="amber-lighten-2"
            ></v-divider>
          </v-col>
          <v-col cols="12" md="5" sm="6" lg="4" style="flex-wrap: wrap">
            <img
              src="../../assets//images/logo.png"
              alt="logo-img"
              width="80%"
            />
            <div class="py-1 d-flex justify-start align-start ga-5 social-img">
              <img
                src="../../assets/images/facebook_White.png"
                width="7%"
                alt="facebook"
              />
              <img
                src="../../assets/images/Youtube - White .png"
                width="7%"
                alt="Youtube"
              />
              <img
                src="../../assets/images/instagram_White.png"
                width="7%"
                alt="instagram"
              />
              <img
                src="../../assets/images/Twitter - White .png"
                width="7%"
                alt="Twitter"
              />
            </div>
          </v-col>
          <v-col cols="12" md="2" sm="6" lg="2"
            ><ul>
              <li
                class="text-h5 font-weight-light text-white"
                @click="this.$router.push({ name: 'homePage' })"
              >
                Home
              </li>
              <li><p>About Us</p></li>
              <li><p>Media center</p></li>
              <li><p>Contact Us</p></li>
            </ul>
          </v-col>
          <v-col cols="12" md="2" sm="6" lg="2"
            ><ul>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'electronics' },
                  })
                "
              >
                <p>Electronics</p>
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'jewelery' },
                  })
                "
              >
                <p>Jewelry</p>
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'men\'s clothing' },
                  })
                "
              >
                <p>Men Clothing</p>
              </li>
              <li
                @click="
                  $router.push({
                    name: 'CategoryPage',
                    params: { category: 'women\'s clothing' },
                  })
                "
              >
                <p>Women Clothing</p>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="3" sm="6" lg="3"
            ><ul>
              <li class="text-h5 font-weight-light text-white">Contact Us</li>
              <li><p>+971 56715 5150</p></li>
              <li><p>+971 4832 2253</p></li>
              <li><p>info@almotthedon.com</p></li>
            </ul>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="px-10">
            <v-divider
              :thickness="1"
              class="border-opacity-100"
              color="#fff"
            ></v-divider>

            <p class="text-white py-3 text-center font-weight-thin">
              © Al Motthedon
              {{ new Date().getFullYear() }} . All Right Reserved.
            </p>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
  cursor: pointer;
  color: #eccd69;
}
.social-img {
  padding-left: 6rem !important;
}
ul li {
  padding: 5px 1px;
}
.footer {
  color: #000;
  display: flex;

  align-items: center;
  justify-content: center;
}
ul li:hover {
  color: #fff;
}
@media (max-width: 500px) {
  .v-col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
