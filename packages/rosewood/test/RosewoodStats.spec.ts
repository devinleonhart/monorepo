import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RosewoodStats from '../src/components/RosewoodStats.vue'

describe('RosewoodStats', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(RosewoodStats)
    // Check title
    expect(wrapper.find('h2').text()).toContain('Rosewood Statistics')
    // Check metric items
    expect(wrapper.findAll('.metric').length).toBe(2)
    expect(wrapper.text()).toContain('Performance Score')
    expect(wrapper.text()).toContain('Uptime')
  })

  it('displays the initial stats', () => {
    const wrapper = mount(RosewoodStats)
    // Check initial values
    expect(wrapper.text()).toContain('98%')
    expect(wrapper.text()).toContain('99.9%')
  })
})
