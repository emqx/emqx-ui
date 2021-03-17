import { App } from 'vue'
import Main from './src/main.vue'

Main.install = (Vue: App): void => {
  Vue.component(Main.name, Main)
}

export default Main
