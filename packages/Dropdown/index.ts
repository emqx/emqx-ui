import { App } from 'vue'
import Dropdown from './src/dropdown.vue'

Dropdown.install = (Vue: App): void => {
  Vue.component(Dropdown.name, Dropdown)
}

export default Dropdown
