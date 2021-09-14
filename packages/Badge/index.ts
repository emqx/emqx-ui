import { App } from 'vue'
import Badge from './src/badge.vue'

Badge.install = (Vue: App): void => {
  Vue.component(Badge.name, Badge)
}

export default Badge
