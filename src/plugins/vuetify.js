/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#d6def0',
          text: '#14161a',
          primary: '#1453db',   // Verde principal
          secondary: '#a9b7cb', // Verde suave
          accent: '#3bde77',    // Verde acento
          error: '#E53935',
          info: '#1E88E5',
          success: '#43A047',
          warning: '#FB8C00'
        }
      },
      dark: {
        dark: true,
        colors: {
          background: '#0F172A',
          text: '#E5E7EB',
          primary: '#2563EB',
          secondary: '#334155',
          accent: '#22C55E',
          error: '#EF5350',
          info: '#42A5F5',
          success: '#66BB6A',
          warning: '#FFA726'
        }
      }
    }
  }
})
