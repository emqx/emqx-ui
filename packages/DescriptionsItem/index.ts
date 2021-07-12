import { App } from 'vue'
import DescriptionsItem from './src/descriptions-item.vue'

DescriptionsItem.install = (vue: App): void => {
  vue.component('EmqxDescriptionsItem', DescriptionsItem)
}

export default DescriptionsItem
