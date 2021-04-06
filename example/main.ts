import { createApp } from 'vue'
import App from './App.vue'
import EmqxUI from '../packages'
import './emqx-ui-variables.scss'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
import '../packages/style/index.scss'

locale.use(lang)

console.log(EmqxUI)

createApp(App)
  .use(EmqxUI)
  .mount('#app')
