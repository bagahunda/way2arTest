<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <th class="table-head" v-bind="attrs">
    <slot />
  </th>
</template>

<style>
.table-head {
  height: 2.5rem;
  padding: 0 1rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  border-bottom: 1px solid hsl(240 5.9% 90%);
}
</style>