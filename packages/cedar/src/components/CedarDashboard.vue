<template>
  <div class="cedar-dashboard">
    <h2>Cedar Dashboard</h2>
    <div class="stats">
      <div class="stat-item">
        <h3>Active Users</h3>
        <p>{{ activeUsers }}</p>
      </div>
      <div class="stat-item">
        <h3>Total Transactions</h3>
        <p>{{ totalTransactions }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CedarData } from '../types/CedarData'

const activeUsers = ref(150)
const totalTransactions = ref(1234)

const sampleData: CedarData = {
  id: 'cedar-001',
  value: activeUsers.value,
  label: 'Active Users Stat'
}

console.log('Cedar Sample Data:', sampleData);
</script>

<style scoped>
.cedar-dashboard {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem 0;
}

.stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
}

.stat-item {
  text-align: center;
}
</style>
