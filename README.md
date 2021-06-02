# emqx-ui

🌌 EMQ X UI Library.

## Usage

### Install package

```shell
yarn add @emqx/emqx-ui
```

main.js

```js
import { createApp } from 'vue'
import EmqxUI from '@emqx/emqx-ui'
import '@emqx/emqx-ui/lib/styles/index.scss'

const app = createApp(App)
app.use(EmqxUI)
```

component.vue

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

### Set custom theme

Create a new theme file.

emqx-ui-variables.scss

```scss
/* theme color */
$--color-primary: $custom-color;

/* icon font path, required */
$--font-path: '~element-plus/lib/theme-chalk/fonts';

@import "~element-plus/packages/theme-chalk/src/index";
```

main.js

```js
import './emqx-ui-variables.scss'
```

## Project setup

### Run server demo

```shell
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn serve
```

### Build npm package lib

```shell
# Build to lib
yarn lib

# Publish package
npm publish
```

## Thanks

Powered by [Vue.js 3.0](https://v3.vuejs.org/) and [element-plus](https://element-plus.org/#/en-US)
