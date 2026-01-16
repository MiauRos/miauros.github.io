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
          surface: '#E8EDF7',

          // Colores de acento
          primary: '#3B82F6',
          secondary: '#10B981',

          // Estados
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',

          // Textos
          'on-background': '#1E293B',
          'on-surface': '#1E293B',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',

          // Grises/Slate personalizados para tema claro
          'surface-variant': '#C7D2E8',
          'surface-light': '#E8EDF7',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          'text-disabled': '#94A3B8',
        }
      },
      dark: {
        dark: true,
        colors: {
          background: '#0F172A',
          surface: '#1E293B',

          // Colores de acento
          primary: '#3B82F6',
          secondary: '#10B981',

          // Estados
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',

          // Textos
          'on-background': '#CBD5E1',
          'on-surface': '#CBD5E1',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',

          // Grises/Slate personalizados
          'surface-variant': '#334155',
          'surface-light': '#475569',
          'text-primary': '#F8FAFC',
          'text-secondary': '#94A3B8',
          'text-disabled': '#64748B',
        }
      }
    }
  }
})
