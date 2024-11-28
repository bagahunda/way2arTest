<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<template>
  <div class="table-wrapper">
    <table v-bind="attrs">
      <slot />
    </table>
  </div>
</template>

<style>
.table-wrapper {
  position: relative;
  width: 100%;
  overflow-x: auto;
}

.table-wrapper table {
  width: 100%;
  caption-side: top;
  font-size: .875rem;
  line-height: 1.25rem;
  text-indent: 0;
  border-collapse: collapse;
}
</style>