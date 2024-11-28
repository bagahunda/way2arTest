<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <caption class="table-caption" v-bind="attrs">
    <slot />
  </caption>
</template>

<style>
.table-caption {
  margin-top: 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
  color: hsl(240 3.8% 46.1%);
}
</style>