<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <td class="table-cell" v-bind="attrs">
    <slot />
  </td>
</template>

<style>
.table-cell {
  padding: 1rem;
  vertical-align: middle;
  border-bottom: 1px solid hsl(240 5.9% 90%);
}
</style>