import { App } from 'vue'
import Table from './src/table.vue'

Table.install = (Vue: App): void => {
  Vue.component(Table.name, Table)
}

export default Table
