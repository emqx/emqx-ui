import { App } from 'vue'
import Menu from './src/menu.vue'

Menu.install = (Vue: App): void => {
  Vue.component(Menu.name, Menu)
}

export default Menu
