import { App } from 'vue'
import Select from './src/select.vue'

Select.install = (Vue: App): void => {
  Vue.component(Select.name, Select)
}

export default Select
