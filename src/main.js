/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import i18n from "@/i18n/index.js";

const app = createApp(App).use(i18n)

registerPlugins(app)

app.mount('#app')
