import { App } from 'vue'
import Tags from './src/tags.vue'

Tags.install = (Vue: App): void => {
  Vue.component(Tags.name, Tags)
}

export default Tags
