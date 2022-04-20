<template>
  <v-app id="app">
    <!-- <v-app-bar app color="light-blue" elevation="10">
      <v-app-bar-title text="Whats on the Menu"></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text="buttong"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main id="main-view">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style scoped>
#app {
  font-family: "Helvetica Neue Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#main-view {
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
}

</style>