import { createApp } from 'vue'
import App from './App.vue'
import UI from '../packages/index'
import './emqx-ui-variables.scss'

console.log(UI)

createApp(App)
  .use(UI)
  .mount('#app')
