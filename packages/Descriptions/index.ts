import { App } from 'vue'
import Descriptions from './src/descriptions.vue'

Descriptions.install = (vue: App): void => {
  vue.component(Descriptions.name, Descriptions)
}

export default Descriptions
