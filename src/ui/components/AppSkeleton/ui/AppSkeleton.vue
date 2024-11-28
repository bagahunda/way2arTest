<script setup lang='ts'>
</script>

<template>
  <div class="skeleton">

  </div>
</template>

<style scoped>
.skeleton {
  background-color: hsl(240 4.8% 95.9%);
  border-radius: 0.375rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}
</style>