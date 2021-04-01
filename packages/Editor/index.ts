import { App } from 'vue'
import Editor from './src/editor.vue'

Editor.install = (Vue: App): void => {
  Vue.component(Editor.name, Editor)
}

export default Editor
