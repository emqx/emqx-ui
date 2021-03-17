import { App } from 'vue'
import Col from './src/col.vue'

Col.install = (Vue: App): void => {
  Vue.component(Col.name, Col)
}

export default Col
