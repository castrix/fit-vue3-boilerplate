
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routerHistory = createWebHistory()
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: routerHistory,
  routes
})

export default router
