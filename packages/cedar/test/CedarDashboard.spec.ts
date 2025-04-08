import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CedarDashboard from '../src/components/CedarDashboard.vue'

describe('CedarDashboard', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(CedarDashboard)
    // Check title
    expect(wrapper.find('h2').text()).toContain('Cedar Dashboard')
    // Check stat items
    expect(wrapper.findAll('.stat-item').length).toBe(2)
    expect(wrapper.text()).toContain('Active Users')
    expect(wrapper.text()).toContain('Total Transactions')
  })

  it('displays the initial stats', () => {
    const wrapper = mount(CedarDashboard)
    // Check initial values
    expect(wrapper.text()).toContain('150')
    expect(wrapper.text()).toContain('1234')
  })
})
