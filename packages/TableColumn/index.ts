import { App } from 'vue'
import TableColumn from './src/table-column.vue'

TableColumn.install = (Vue: App): void => {
  Vue.component(TableColumn.name, TableColumn)
}

export default TableColumn
