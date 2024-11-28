<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <tfoot class="table-footer" v-bind="attrs">
    <slot />
  </tfoot>
</template>

<style>
.table-footer {
  background-color: hsl(240 4.8% 95.9% / 0.5);
  border-top: 1px solid hsl(240 5.9% 90%);
  font-weight: 500;
}

.table-footer tr:last-child {
  border-bottom: none;
}
</style>