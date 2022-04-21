<template>
  <v-container>
    <v-container align="end">
      <v-btn variant="outlined" color="primary" size="x-large" @click.stop="drawer = !drawer">
          <v-icon>
            mdi-cart
          </v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" color="#393939" temporary position="right">
        <v-list align="center" class="text-h4" v-if="checkout_cart" lines>
            <v-list-item-header class="mt-2 font-weight-bold" >Checkout Cart</v-list-item-header>
            <v-list-item v-for="(menu_name, idx) in checkout_cart" :key="idx" class="text-body-1">
              <span>{{idx + 1}}. {{ menu_name }}</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="removeFromCart(idx)" color="error" size="x-small">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item>
            <div v-if="!checkout_cart.length" class="mt-6">Your Cart is Empty!</div>
            <v-btn v-if="checkout_cart.length" color="primary" @click="sendEmail">Submit your order!</v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <!-- Intro & Add new menu area -->
    <v-row class="text-center">
      <v-col cols="8" align="left">
        <h1 class="display-2 font-weight-bold mb-3">Whats on the Menu?</h1>
        <h3>Create a menu to plan out your meals for the week. Whether you're planning for yourself, family, or friends be prepared and know whats on the menu.</h3>
      </v-col>
      <v-col cols="4">
          <v-form>
            <v-container>
              <v-card color="#393939" class="">
                <v-row>
                  <v-col>
                    <v-text-field label="Menu Name" v-model="name" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea auto-grow rows="2" label="Menu Description" v-model="description" required></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field label="Image Name" v-model="img_name" required></v-text-field>
                  </v-col>
                </v-row>
                  <v-col>
                    <v-btn color="primary" outlined @click="addMenu" block
                      >Add Menu
                    </v-btn>
                  </v-col>
                </v-card>
            </v-container>
          </v-form>
      </v-col>
      <!-- Menu Card section -->
      <v-col cols="12">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="menu in menus"
              :key="menu.id"
              class="mx-auto"
              cols="4"
            >
              <v-card min-height="200px" max-width="350px" color="#393939">
                <v-img
                  class="align-end text-white"
                  max-height="200"
                  cover
                  :src="getImg(menu.img_name)"
                  :alt="require(`../assets/logo.svg`)"
                >
                </v-img>
                <v-card-title>
                  <span class="text-h5">{{ menu.name }}</span>
                </v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-text id="text-box">{{ menu.description }}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-row>
                    <v-col align="end">
                      <v-btn color="primary" icon variant="outlined" size="small" @click="addToCart(menu.name)" class="mr-2">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn variant="outlined" icon @click="deleteMenu(menu.id)" color="error" size="small" align="right">
                       <v-icon>mdi-trash-can</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
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
    img_name: "",
    submitted: false,
    menus: [],
    checkout_cart: [],
    drawer: false,
  }),
  computed: { 
    // compute checkout cart dynamically
    // getImg () {
    //   if (this.img_name && require(`../assets/${this.img_name}.png`)) {
    //     return require(`../assets/${this.img_name}.png`)
    //   } else {
    //     return require(`../assets/logo.png`)

    //   }
      
    // }
  },
  methods: {
    addMenu() {
      var data = {
        name: this.name,
        description: this.description,
        img_name: this.img_name
      };
      MenusDataService.add(data)
        .then(res => {
          console.log(res.data);
          this.getMenus();
          this.name = "";
          this.description = "";
          this.img_name = "";
        })
        .catch(e => {
          console.log(e);
        });
    },
    getImg (img_name) {
      try  {
        var res = require(`../assets/${img_name}.png`);
        return res
      } 
      catch (e) {
        console.log(e)
        return require(`../assets/logo.png`);
      }
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
    },
  },
  mounted() {
    this.getMenus();
  },
};
</script>

<style>
#text-box {
  text-align: left;
  color: white;
  overflow: auto;
}
#card-gray {
  color: #393939;
}
</style>
