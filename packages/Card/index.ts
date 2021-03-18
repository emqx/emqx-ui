import { App } from 'vue'
import Card from './src/card.vue'

Card.install = (Vue: App): void => {
  Vue.component(Card.name, Card)
}

export default Card
