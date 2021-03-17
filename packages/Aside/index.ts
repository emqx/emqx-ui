import { App } from 'vue'
import Aside from './src/aside.vue'

Aside.install = (Vue: App): void => {
  Vue.component(Aside.name, Aside)
}

export default Aside
