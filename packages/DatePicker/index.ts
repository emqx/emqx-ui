import { App } from 'vue'
import DatePicker from './src/date-picker.vue'

DatePicker.install = (Vue: App): void => {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
