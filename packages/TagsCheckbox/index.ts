import { App } from 'vue'
import TagsCheckbox from './src/tags-checkbox.vue'

TagsCheckbox.install = (Vue: App): void => {
  Vue.component(TagsCheckbox.name, TagsCheckbox)
}

export default TagsCheckbox
