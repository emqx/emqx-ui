import { App } from 'vue'
import Radio from './src/radio.vue'

Radio.install = (Vue: App): void => {
  Vue.component(Radio.name, Radio)
}

export default Radio
