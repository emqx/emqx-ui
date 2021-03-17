import { App } from 'vue'
import Footer from './src/footer.vue'

Footer.install = (Vue: App): void => {
  Vue.component(Footer.name, Footer)
}

export default Footer
