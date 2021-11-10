<script setup lang="ts">
import HelloWorldVue from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    dynamic route
    <HelloWorldVue msg="Vite + Vue 3 + Typescript + Pinia + File Based Routing" />
  </div>
</template>

<route lang="yaml">
meta:
  isAuth: true
  role: ['admin', 'tes', 'user']
</route>
