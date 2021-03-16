/* eslint-disable */
declare module '../lib/emqx-ui.umd.min'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
