import { App } from 'vue'
import KeyValueEditor from './src/key-value-edtitor.vue'

KeyValueEditor.install = (Vue: App): void => {
  Vue.component(KeyValueEditor.name, KeyValueEditor)
}

export default KeyValueEditor
