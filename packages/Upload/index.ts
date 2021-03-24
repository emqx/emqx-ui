import { App } from 'vue'
import Upload from './src/upload.vue'

Upload.install = (Vue: App): void => {
  Vue.component(Upload.name, Upload)
}

export default Upload
