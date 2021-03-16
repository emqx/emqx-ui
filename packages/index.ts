import Button from './Button'
import { App } from 'vue'

interface VueWindow extends Window {
  Vue?: App
}

const components = [Button]

const install = (Vue: App) => {
  components.map(component => Vue.component(component.name, component))
}

const _window: VueWindow = window

if (typeof _window !== 'undefined' && _window.Vue) {
  install(_window.Vue)
}

export default {
  install,
  Button,
}
