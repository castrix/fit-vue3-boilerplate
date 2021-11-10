import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    Vue(),
    Pages({
      exclude: ['**/components/*.vue']
    }),
    Layouts({
      layoutsDir: 'src/components/layout',
      defaultLayout: 'default'
    })
  ]
})
