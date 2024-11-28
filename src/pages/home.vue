<script setup lang='ts'>
import { AppSkeleton } from '@/ui/components/AppSkeleton';
</script>

<template>
  <div class="container">
    home
    <AppSkeleton class="home-skeleton" />
  </div>
</template>

<style scoped>
.home-skeleton {
  height: 20px;
}
</style>