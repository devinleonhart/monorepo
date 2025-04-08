<template>
  <div class="rosewood-stats">
    <h2>Rosewood Statistics</h2>
    <div class="metrics">
      <div class="metric">
        <h3>Performance Score <span>{{ trendIndicator }}</span></h3>
        <p>{{ performanceScore }}%</p>
      </div>
      <div class="metric">
        <h3>Uptime</h3>
        <p>{{ uptime }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { RosewoodData } from '../types/RosewoodData'

const props = defineProps({
  value: { type: Number, required: true },
  trend: { type: String, default: 'stable' },
})

const trendIndicator = computed(() => {
  if (props.trend === 'up') return '▲'
  if (props.trend === 'down') return '▼'
  return '-'
})

// Example usage
const statInfo: RosewoodData = {
  statName: 'Sample Stat',
  value: props.value,
  lastUpdated: new Date()
}
console.log('Rosewood Stat Info:', statInfo);

const performanceScore = ref(98)
const uptime = ref(99.9)
</script>

<style scoped>
.rosewood-stats {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem 0;
}

.metrics {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
}

.metric {
  text-align: center;
}
</style>
