import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WalletBalance from '../src/components/WalletBalance.vue'

describe('WalletBalance', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(WalletBalance)
    // Check if the component renders the title
    expect(wrapper.find('h2').text()).toBe('Wallet Balance')
    // Check if the component renders the balance text
    expect(wrapper.text()).toContain('Current Balance:')
  })

  it('displays the initial balance', () => {
    const wrapper = mount(WalletBalance)
    // Check if the initial formatted balance ($1,234.56) is displayed
    expect(wrapper.text()).toContain('$1,234.56')
  })
})
