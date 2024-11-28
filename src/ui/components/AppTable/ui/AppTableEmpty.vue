<script setup lang='ts'>
import { useAttrs } from 'vue';
import AppTableRow from './AppTableRow.vue';
import AppTableCell from './AppTableCell.vue';

const attrs = useAttrs();

type Props = {
  colspan?: number;
}

const props = withDefaults(defineProps<Props>(), {
  colspan: 1
});
</script>

<template>
  <AppTableRow>
    <AppTableCell :colspan="props.colspan" v-bind="attrs">
      <div class="table-empty">
        <slot />
      </div>
    </AppTableCell>
  </AppTableRow>
</template>

<style>
.table-empty {
  padding: 1rem;
  white-space: nowrap;
  vertical-align: middle;
  font-size: .875rem;
  line-height: 1.25rem;
}
</style>