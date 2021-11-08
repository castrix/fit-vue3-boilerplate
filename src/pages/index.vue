<script setup lang="ts">
import HelloWorldVue from '../components/HelloWorld.vue'
</script>

<template>
  <HelloWorldVue msg="Vite + Vue 3 + Typescript + Pinia + File Based Routing" />
</template>

<route lang="yaml">
meta:
  isAuth: false
  role: ['admin', 'tes', 'user']
</route>
