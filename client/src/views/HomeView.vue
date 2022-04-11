<template>
  <div>
    <HelloWorld />
    <p>Menus contains {{ menus }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";
import http from "../http-common";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      menus: ["test1"],
    };
  },

  components: {
    HelloWorld,
  },

  methods: {
    async getMenus() {
      this.menus = [];
      try {
        const response = await http.get("/menus");
        // JSON responses are automatically parsed.
        this.menus.push(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    // initialize loading during create
    this.getMenus();
  },
});
</script>
