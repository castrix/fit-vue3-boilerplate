<script setup lang="ts">
import HelloWorldVue from '@/components/HelloWorld.vue'
import { useRoute } from 'vue-router';

const route: any = useRoute()
</script>

<template>
  <div>
    your id: {{route.params.id}}
    <HelloWorldVue msg="Vite + Vue 3 + Typescript + Pinia + File Based Routing" />
  </div>
</template>
