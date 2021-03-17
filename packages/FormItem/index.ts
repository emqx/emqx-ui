import { App } from 'vue'
import FormItem from './src/form-item.vue'

FormItem.install = (Vue: App): void => {
  Vue.component(FormItem.name, FormItem)
}

export default FormItem
