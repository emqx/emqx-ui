# emqx-ui

🌌 EMQ X UI Library.

## Usage

Install package

```shell
yarn add @emqx/emqx-ui
```

main.js

```js
import { createApp } from 'vue'
import EmqxUI from '@emqx/emqx-ui'
import '@emqx/emqx-ui/lib/emqx-ui.css'

const app = createApp(App)
app.use(EmqxUI)
```

```html
<template>
  <emqx-button>Test</emqx-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss"></style>
```

## Project setup

```shell
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn serve

# Lints and fixes files
yarn lint
```

```shell
# Build to lib
yarn lib

# Publish package
npm publish
```

## Thanks

Powered by [Vue.js 3.0](https://v3.vuejs.org/) and [element-plus](https://element-plus.org/#/en-US)
