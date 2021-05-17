import { App } from 'vue'
import RadioGroup from './src/radio-group.vue'

RadioGroup.install = (Vue: App): void => {
  Vue.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup
