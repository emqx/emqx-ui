import { App } from 'vue'
import Input from './src/input.vue'

Input.install = (Vue: App): void => {
  Vue.component(Input.name, Input)
}

export default Input
