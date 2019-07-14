[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/v-body-scroll-lock)

# v-body-scroll-lock
A Vue directive to lock the body from scrolling without stopping the target element from scrolling.<br>
Uses the body-scroll-lock library ([https://github.com/willmcpo/body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)).<br>
Works on mobile and tablet (iOS, Android) and desktop (Chrome, Firefox, Safari). 

## Table of Contents

- [Installation](#installation)
- [How to use](#how-to-use)
- [Options](#options)
- [Issues](#issues)
- [Contributing](#contributing)

<a name="installation"></a>
## Installation
#### Yarn
```
yarn add v-body-scroll-lock
```
#### Npm
```
npm i v-body-scroll-lock --save
```
#### Install the Vue plugin
In your main JS file first import this plugin

`import VBodyScrollLock from 'v-body-scroll-lock'`

Install the plugin

`Vue.use(VBodyScrollLock)`

<a name="how-to-use"></a>
## How to use
Add `v-body-scroll-lock` or `v-bsl` (short version) to the element which you want to keep scrollable.<br>
`v-body-scroll-lock` and `v-bsl` take a `boolean` as an argument like `v-body-scroll-lock="modalIsOpen"`<br>
If `modalIsOpen` is true, *body scroll lock* will be applied to other elements except for the one which has `v-body-scroll-lock="modalIsOpen"`

#### Code
For a more deep example checkout `App.vue` in `/src/App.vue`.
```html
<template>
    <div 
         v-body-scroll-lock="modalIsOpen"  
         v-show="modalIsOpen" 
         class="modal"
    >
         <p>This is a modal! I am scrollable while the body is not!</p>
         <button @click="closeModal">Close modal</button>
    </div>
</template>
```

```js
<script>
export default {
    name: 'modal',
    data() {
        return {
            modalIsOpen: false,   
        }
    },
    methods: {
        closeModal() {
            this.$set(this, 'modalIsOpen', false)
        },
        openModal() {
            this.$set(this, 'modalIsOpen', true)
        }
    }
}
</script>
```
<a name="options"></a>
## Options
#### reserveScrollBarGap
Reserves the width of the scrollbar and prevents the unpleasant flickering effect that can occur when locking the body scroll.<br>
More info [here](https://github.com/willmcpo/body-scroll-lock#options).

To enable the `reserveScrollBarGap` option add `:reserveScrollBarGap` after `v-body-scroll-lock` or `v-bsl`.<br>
Example: `v-body-scroll-lock:reserveScrollBarGap="modalIsOpen"`.

<a name="issues"></a>
## Issues
Issues can be created on the [issues](https://github.com/Pixeldenker/vue-body-scroll-lock/issues) page.

<a name="contributing"></a>
## Contributing
To contribute, please make a [pull request](https://github.com/Pixeldenker/vue-body-scroll-lock/pulls).

