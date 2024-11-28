<script setup lang="ts">
import { AppHeader } from '@/ui/components/AppHeader';
</script>
<template>
  <div class="empty-layout">
    <AppHeader />
    <slot />
  </div>
</template>
