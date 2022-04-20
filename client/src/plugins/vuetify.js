// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify} from "vuetify";

export default createVuetify({
    theme: {
        defaultTheme: 'dark',
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          mainPurple: '#8537ed',
          light: '#4d4d4d',
          darkGray: '#1a1a1a',
        },
      }
});
