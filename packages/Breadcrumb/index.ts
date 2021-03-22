import { App } from 'vue'
import Breadcrumb from './src/breadcrumb.vue'

Breadcrumb.install = (Vue: App): void => {
  Vue.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
