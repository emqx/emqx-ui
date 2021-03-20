import { App } from 'vue'
import MenuItemGroup from './src/menu-item-group.vue'

MenuItemGroup.install = (Vue: App): void => {
  Vue.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup
