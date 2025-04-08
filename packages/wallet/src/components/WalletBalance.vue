<template>
  <div class="wallet-balance">
    <h2>Wallet Balance</h2>
    <p>Current Balance: ${{ formattedBalance }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { WalletInfo } from '../types/WalletInfo';

const balance = ref(1234.56)
const currency = ref('USD')

const formattedBalance = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.value,
  }).format(balance.value)
})

// Example usage
const info: WalletInfo = {
  currency: currency.value,
  balance: balance.value,
}
console.log('Wallet Info:', info);
</script>

<style scoped>
.wallet-balance {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem 0;
}
</style>
