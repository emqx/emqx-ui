import { App } from 'vue'
import DropdownItem from './src/dropdownItem.vue'

DropdownItem.install = (Vue: App): void => {
  Vue.component(DropdownItem.name, DropdownItem)
}

export default DropdownItem
