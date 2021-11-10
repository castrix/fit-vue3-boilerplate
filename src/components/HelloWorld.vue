<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useHelloWorldStore } from '@/store/useHelloWorld'

defineProps<{ msg: string }>()

const helloWorld = useHelloWorldStore()

const addTwo = () => {
  helloWorld.count = helloWorld.count + 2
}

const route = useRoute()
</script>

<template>
  <h1>Route meta:</h1>
  <pre>{{ route.meta }}</pre>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="helloWorld.increment">
    count is: {{ helloWorld.count }}
  </button>
  <button type="button" @click="addTwo">add two</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
