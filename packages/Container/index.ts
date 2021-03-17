import { App } from 'vue'
import Container from './src/container.vue'

Container.install = (Vue: App): void => {
  Vue.component(Container.name, Container)
}

export default Container
