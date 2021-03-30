import { ElLoading as EmqxLoading } from 'element-plus'
import { App } from 'vue'

EmqxLoading.install = (Vue: App): void => {
  Vue.directive('EmqxLoading', EmqxLoading.directive)
}

export default EmqxLoading
