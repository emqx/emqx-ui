import { App } from 'vue'
import Empty from './src/empty.vue'

Empty.install = (Vue: App): void => {
  Vue.component(Empty.name, Empty)
}

export default Empty
