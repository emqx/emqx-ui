import { App } from 'vue'
import InputNumber from './src/input-number.vue'

InputNumber.install = (vue: App): void => {
  vue.component(InputNumber.name, InputNumber)
}

export default InputNumber
