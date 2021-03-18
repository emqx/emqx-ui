import { App } from 'vue'
import Pagination from './src/pagination.vue'

Pagination.install = (Vue: App): void => {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
