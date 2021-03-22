import { App } from 'vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

BreadcrumbItem.install = (Vue: App): void => {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
