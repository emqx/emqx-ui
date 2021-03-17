import { App } from 'vue'
import Row from './src/row.vue'

Row.install = (Vue: App): void => {
  Vue.component(Row.name, Row)
}

export default Row
