<script setup lang='ts'>
import { useAttrs, useTemplateRef } from 'vue';

const attrs = useAttrs();

const rowRef = useTemplateRef('rowRef');

defineExpose({
  rowRef
})
</script>

<template>
  <tr class="table-row" v-bind="attrs" ref="rowRef">
    <slot />
  </tr>
</template>

<style>
.table-row {
  transition: background-color 0.2s ease-in-out;
}

.table-row:hover {
  background-color: hsl(240 4.8% 95.9% / 0.5);
}

.table-row:last-child td {
  border-bottom: none;
}
</style>