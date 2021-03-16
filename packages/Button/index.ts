import { App } from 'vue'
import Button from './src/button.vue'

Button.install = (Vue: App): void => {
  Vue.component(Button.name, Button)
}

export default Button
