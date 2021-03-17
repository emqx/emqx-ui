import { createApp } from 'vue'
import App from './App.vue'
import UI from '../packages/index'
import './emqx-ui-variables.scss'

createApp(App)
  .use(UI)
  .mount('#app')
