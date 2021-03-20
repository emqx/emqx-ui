import { App } from 'vue'
import MenuItem from './src/menu-item.vue'

MenuItem.install = (Vue: App): void => {
  Vue.component(MenuItem.name, MenuItem)
}

export default MenuItem
