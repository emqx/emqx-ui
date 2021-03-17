import { App } from 'vue'
import Option from './src/option.vue'

Option.install = (Vue: App): void => {
  Vue.component(Option.name, Option)
}

export default Option
