<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <thead class="table-header" v-bind="attrs">
    <slot />
  </thead>
</template>

<style>
.table-header tr {
  border-bottom: 1px solid hsl(240 5.9% 90%);
}
</style>