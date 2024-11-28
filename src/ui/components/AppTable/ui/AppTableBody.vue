<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <tbody class="table-body" v-bind="attrs">
    <slot />
  </tbody>
</template>

<style>
.table-body tr:last-child {
  border: none;
}
</style>