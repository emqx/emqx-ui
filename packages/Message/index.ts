import { ElMessage as EmqxMessage } from 'element-plus'
import { App } from 'vue'

EmqxMessage.install = (Vue: App): void => {
  Vue.component('EmqxMessage', EmqxMessage)
}

export default EmqxMessage
