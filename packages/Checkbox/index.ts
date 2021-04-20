import { App } from 'vue'
import Checkbox from './src/checkbox.vue'

Checkbox.install = (Vue: App): void => {
  Vue.component(Checkbox.name, Checkbox)
}

export default Checkbox
