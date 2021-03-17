import { App } from 'vue'
import Form from './src/form.vue'

Form.install = (Vue: App): void => {
  Vue.component(Form.name, Form)
}

export default Form
