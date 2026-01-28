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

// Extras
import i18n from "@/i18n/index.js";
import router from "@/router/index.js";

const app = createApp(App)

app.use(i18n)
app.use(router)

registerPlugins(app)

app.mount('#app')
