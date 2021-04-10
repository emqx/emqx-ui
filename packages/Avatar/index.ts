import { App } from 'vue'
import Avatar from './src/avatar.vue'

Avatar.install = (Vue: App): void => {
  Vue.component(Avatar.name, Avatar)
}

export default Avatar
