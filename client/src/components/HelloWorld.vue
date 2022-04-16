<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Whats on the Menu???</h1>
      </v-col>
      <v-col>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field label="Menu Name" v-model="name" required>
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Menu Description" v-model="description" required>
                </v-text-field>
              </v-col>
              <v-col>
                <v-btn outlined @click="addMenu" block info
                  >Add Menu
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="menu in menus"
              :key="menu.id"
            >
              <v-card height="200px">
                <v-card-title>
                  <span class="text-h4">{{ menu.name }}</span>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="deleteMenu(menu.id)">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-subtitle>
                  {{ menu.description }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import MenusDataService from '../services/MenusDataService';
export default {
  name: "HelloWorld",

  data: () => ({
    name: "",
    description: "",
    submitted: false,
    menus: ["test1"],
  }),

  methods: {
    addMenu() {
      var data = {
        name: this.name,
        description: this.description
      };
      MenusDataService.add(data)
        .then(res => {
          console.log(res.data);
          this.submitted = true;
          this.getMenus();
          this.name = "";
          this.description = "";
        })
        .catch(e => {
          console.log(e);
        });
    },
    getMenus() {
      MenusDataService.getAll()
        .then(res => {
          this.menus = res.data;
          console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMenu(id) {
      MenusDataService.delete(id)
        .then(res => {
          delete this.menus[id-1]
          console.log(res.data);
          this.getMenus();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getMenus();
  },
};
</script>
