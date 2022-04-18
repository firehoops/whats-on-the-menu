<template>
  <v-container>
    <v-container align="end">
      <v-btn variant="outlined" color="primary" size="x-large" @click.stop="drawer = !drawer">
          <v-icon>
            mdi-cart
          </v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" color="primary" temporary position="right">
        <v-list color="primary" align="center" class="text-h4" v-if="checkout_cart" lines>
            <v-list-item-header class="mt-2 font-weight-bold" >Checkout Cart</v-list-item-header>
            <v-list-item v-for="(menu_name, idx) in checkout_cart" :key="idx" class="text-body-1">
              <span>{{idx + 1}}. {{ menu_name }}</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="removeFromCart(idx)" color="error" size="x-small">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item>
            <div v-if="!checkout_cart.length" class="mt-4">Empty Cart</div>
            <v-btn @click="sendEmail">Submit your order!</v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-container>
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
              class="mx-auto"
            >
              <v-card min-height="150px" max-width="350px">
                <v-card-title>
                  <span class="text-h4">{{ menu.name }}</span>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="deleteMenu(menu.id)" color="error" size="small">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-subtitle>
                  {{ menu.description }}
                </v-card-subtitle>
                <v-card-text></v-card-text>
                <v-card-actions>
                  <v-btn icon color="primary" variant="outlined" size="small" @click="addToCart(menu.name)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-actions>
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
import emailjs from 'emailjs-com';

export default {
  name: "Home",

  data: () => ({
    name: "",
    description: "",
    submitted: false,
    menus: [],
    checkout_cart: ["tests"],
    drawer: false,
  }),
  computed: { 
    // compute checkout cart dynamically
  },
  methods: {
    addMenu() {
      var data = {
        name: this.name,
        description: this.description
      };
      MenusDataService.add(data)
        .then(res => {
          console.log(res.data);
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
          delete this.menus[id-1];
          console.log(res.data);
          this.getMenus();
        })
        .catch(e => {
          console.log(e);
        });
    },
    addToCart(menu_name) {
      this.checkout_cart.push(menu_name);
    },
    removeFromCart(idx) {
      this.checkout_cart.splice(idx,1);
    },
    sendEmail() {
      var data = {
        service_id: 'service_54shwhf',
        template_id: 'template_1nlev0c',
        user_id: 'GtVbAxTJsFK1pGPad',
        template_params: {
          to_name: 'Tyler',
          from_name: 'Jules',
          message: this.checkout_cart,
      }
    };
    emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
    }
  },
  mounted() {
    this.getMenus();
  },
};
</script>
