<template>
  <div class="res-nav">
    <v-app-bar style="top: 0">
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon
              style="position: relative; top: 10%"
              @click="openMenu"
            ></v-app-bar-nav-icon>
            <v-btn
              style="position: relative; top: 20%"
              size="35"
              elevation="5"
              color="#fff"
              icon="mdi-magnify"
            />
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
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
          </v-col>
          <v-col cols="4" class="d-flex align-end justify-end" justify="end">
            <img width="100" src="../../assets/images/logo.png" alt="logo" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  methods: {
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },
};
</script>
