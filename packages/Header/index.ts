import { App } from 'vue'
import Header from './src/header.vue'

Header.install = (Vue: App): void => {
  Vue.component(Header.name, Header)
}

export default Header
