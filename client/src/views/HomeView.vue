<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
  name: "HomeView",
  data: () => ({}),
  components: {
    HelloWorld,
  },
});
</script>
