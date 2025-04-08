import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

// Mock the modules that App.vue imports from
vi.mock('@monorepo/wallet', () => ({
  WalletBalance: { template: '<div class="mock-wallet">Wallet Mock</div>' }
}));
vi.mock('@monorepo/cedar', () => ({
  CedarDashboard: { template: '<div class="mock-cedar">Cedar Mock</div>' }
}));
vi.mock('@monorepo/rosewood', () => ({
  RosewoodStats: { template: '<div class="mock-rosewood">Rosewood Mock</div>' }
}));

describe('App', () => {
  it('renders the main title and child components', () => {
    // Mount the component - mocks are applied via vi.mock now
    const wrapper = mount(App)

    // Check title
    expect(wrapper.find('h1').text()).toContain('Olive App')

    // Check if mocks are rendered (simple check)
    expect(wrapper.find('.mock-wallet').exists()).toBe(true)
    expect(wrapper.find('.mock-cedar').exists()).toBe(true)
    expect(wrapper.find('.mock-rosewood').exists()).toBe(true)
  })
})
