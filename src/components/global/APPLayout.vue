<template>
  <div class="layout">
    <v-layout class="position-relative">
      <MenuDrawer />

      <v-main
        :style="`padding-top: ${
          $route.name == 'check-out'
            ? '0px'
            : windowWidth <= 990
            ? '10px'
            : '150px'
        }`"
      >
        <slot></slot>
      </v-main>
      <APPNav v-show="!showFixed && windowWidth > 990" />
      <ResponsiveNav v-show="windowWidth <= 990" />
      <FixedNav v-show="showFixed && windowWidth > 990" />
      <APPFooter />
    </v-layout>
  </div>
</template>

<script>
import APPNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import APPFooter from "./AppFooter.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
import mitt from "mitt";

const emitter = mitt();
export default {
  data: () => ({
    drawer: true,
    showFixed: false,
    windowWidth: 0,
  }),
  provide() {
    return {
      Emitter: emitter,
    };
  },
  components: {
    APPNav,
    ResponsiveNav,
    APPFooter,
    FixedNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
    window.onscroll = () => {
      if (window.screenY >= 205) {
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    };
  },
};
</script>
