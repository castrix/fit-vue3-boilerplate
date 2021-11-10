import { defineStore } from 'pinia'

export const useHelloWorldStore = defineStore('HelloWorld', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
