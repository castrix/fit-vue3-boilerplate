<script setup lang="ts">
import HelloWorldVue from '../components/HelloWorld.vue'

const newMethod = (val: string) => { return val}
</script>

<template>
  <HelloWorldVue msg="Vite + Vue 3 + Typescript + Pinia + File Based Routing" />
  {{newMethod("test")}}
</template>

<route lang="yaml">
meta:
  isAuth: false
  role: ['admin', 'tes', 'user']
</route>
