import { createApp } from 'vue'
import App from './App.vue'
import UI from '../packages/index'

createApp(App)
  .use(UI)
  .mount('#app')
