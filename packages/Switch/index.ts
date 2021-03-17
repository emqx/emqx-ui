import { App } from 'vue'
import Switch from './src/switch.vue'

Switch.install = (Vue: App): void => {
  Vue.component(Switch.name, Switch)
}

export default Switch
