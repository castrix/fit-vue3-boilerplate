<template>
  <ul style="text-align: left;">
    <li v-for="(parent, index) of links" :key="`${index}`">
      <router-link :to="parent.path">{{ parent.title }}</router-link>
      <ul v-if="parent.children && parent.children.length > 0">
        <li v-for="(child, childIndex) of parent.children" :key="`${childIndex}`">
          <router-link :to="child.path">{{ child.title }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const push = (path: string) => router.push(path)

const links = [
  {
    title: 'Index',
    path: '/'
  },
  {
    title: 'Test',
    path: '/test',
    children: [
      {
        title: 'Test Child',
        path: '/test/child'
      }
    ]
  },
  {
    title: 'Dynamic Route',
    path: '/dynamic-route',
    children: [
      {
        title: 'id: 123123123',
        path: '/dynamic-route/123123123'
      },
      {
        title: 'id: abc123',
        path: '/dynamic-route/abc123'
      }
    ]
  },
  {
    title: 'Nested Route',
    path: '/nested-route',
    children: [
      {
        title: 'Nested route child',
        path: '/test/child'
      }
    ]
  }
]
</script>
