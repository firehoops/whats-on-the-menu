<template>
  <div>
    <Home />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Home from "../components/Home.vue";
export default defineComponent({
  name: "HomeView",
  data: () => ({}),
  components: {
    Home,
  },
});
</script>
