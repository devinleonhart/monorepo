<template>
  <div
    class="app"
    :class="config.theme"
  >
    <h1>Olive App</h1>
    <wallet-balance />
    <cedar-dashboard />
    <rosewood-stats :value="100" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WalletBalance } from '@monorepo/wallet'
import { CedarDashboard } from '@monorepo/cedar'
import { RosewoodStats } from '@monorepo/rosewood'
import type { OliveConfig } from './types/OliveConfig';
import type { WalletInfo } from '@monorepo/wallet';

const config = ref<OliveConfig>({ theme: 'light' });

const useWallet = (info: WalletInfo) => {
  console.log(`Using wallet with currency: ${info.currency}`);
}

useWallet({ currency: 'USD', balance: 500 });
</script>

<style>
.app {
  padding: 2rem;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
}

.app.light {
  background-color: #fff;
  color: #2c3e50;
}

.app.dark {
  background-color: #2c3e50;
  color: #fff;
}
</style>
