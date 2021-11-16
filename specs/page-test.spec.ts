import { mount } from '@vue/test-utils'
import PageTest from '@/pages/test/index.vue'

jest.mock('@/store/useHelloWorld', () => ({
  useHelloWorldStore: jest.fn(() => ({ count: 0 }))
}))

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({ meta: null }))
}))

describe('Test page', () => {
  it('check test page text', async () => {
    const wrapper = mount(PageTest)
    expect(wrapper.text()).toContain('test page')
  })
})
