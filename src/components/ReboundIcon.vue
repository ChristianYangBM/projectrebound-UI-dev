<script setup lang="ts">
defineProps<{ name: 'scan' | 'inventory' | 'growth' | 'market' | 'profit' | 'listing' | 'analytics' }>()
</script>

<template>
  <svg class="rebound-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <template v-if="name === 'scan'"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10" /></template>
    <template v-else-if="name === 'inventory'"><path d="m5 7 7-3 7 3-7 3-7-3Z" /><path d="m5 7v9l7 4 7-4V7M12 10v10" /></template>
    <template v-else-if="name === 'growth'"><path d="M4 18 10 12l4 3 6-8" /><path d="M15 7h5v5" /></template>
    <template v-else-if="name === 'market'"><path d="M5 19V10M12 19V5M19 19v-7" /><path d="M3 19h18" /></template>
    <template v-else-if="name === 'profit'"><circle cx="12" cy="12" r="8" /><path d="M14.5 9.5c-.7-.7-1.4-1-2.5-1-1.4 0-2.5.8-2.5 2s1 1.7 2.5 2c1.5.3 2.5.8 2.5 2s-1.1 2-2.5 2c-1.1 0-2-.4-2.7-1.1M12 6.5v11" /></template>
    <template v-else-if="name === 'listing'"><path d="M5 5h10l4 4v10H5V5Z" /><path d="M15 5v4h4M8 13h8M8 16h5" /></template>
    <template v-else><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /><path d="m4 7 6-4 6 6 6-5" /></template>
  </svg>
</template>
