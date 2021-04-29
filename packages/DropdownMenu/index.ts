import { App } from 'vue'
import DropdownMenu from './src/dropdownMenu.vue'

DropdownMenu.install = (Vue: App): void => {
  Vue.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
