import { App } from 'vue'
import Submenu from './src/submenu.vue'

Submenu.install = (Vue: App): void => {
  Vue.component(Submenu.name, Submenu)
}

export default Submenu
