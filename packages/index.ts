import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import Row from './Row'
import Col from './Col'

interface VueWindow extends Window {
  Vue?: App
}

const components = [Button, Input, Row, Col]

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
  Input,
  Row,
  Col,
}
