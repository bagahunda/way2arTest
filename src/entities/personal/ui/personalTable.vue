<script setup lang='ts'>
import { onUnmounted } from 'vue';
import { type TDoctor, type TNurse } from '@/types';
import useFocusTrap from '@/composables/useFocusTrap'
import { AppTable } from '@/ui/components/AppTable';
import { AppTableBody } from '@/ui/components/AppTable';
import { AppTableCell } from '@/ui/components/AppTable';
import { AppTableHead } from '@/ui/components/AppTable';
import { AppTableHeader } from '@/ui/components/AppTable';
import { AppTableRow } from '@/ui/components/AppTable';
import { AppTableCaption } from '@/ui/components/AppTable';
import { AppTableEmpty } from '@/ui/components/AppTable';
import { AppSkeleton } from '@/ui/components/AppSkeleton';

type Props = {
  tableData: TDoctor[] | TNurse[];
  caption: string;
  columns: Record<string, string>[];
  isLoading: boolean;
  withError: boolean;
}

type Emits = {
  (e: 'delete', id: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { trapRef } = useFocusTrap();

async function onRowClick(item: TDoctor | TNurse) {
  if (item.isEditing) {
    return;
  }
  props.tableData.forEach((i) => {
    i.isEditing = false;
  })
  item.isEditing = true;
}

function onClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.closest('.table-row')) {
    return;
  }
  props.tableData.forEach((i) => {
    i.isEditing = false;
  })
}

function onDeleteClick(id: string) {
  emit('delete', id);
}

document.body.addEventListener('click', onClickOutside);

onUnmounted(() => {
  document.body.removeEventListener('click', onClickOutside);
})
</script>

<template>
  <AppTable>
    <AppTableCaption>{{ props.caption }}</AppTableCaption>
    <AppTableHeader>
      <AppTableRow>
        <AppTableHead v-for="item in props.columns" :key="item.name">{{ item.label }}</AppTableHead>
      </AppTableRow>
    </AppTableHeader>
    <AppTableBody>
      <AppTableEmpty v-if="props.withError" :colspan="2" class="is-text-center">Возникла ошибка. Попробуйте ещё раз
        позже.
      </AppTableEmpty>
      <template v-else-if="props.isLoading">
        <AppTableRow v-for="_ in 10">
          <AppTableCell>
            <AppSkeleton class="table-loading" />
          </AppTableCell>
          <AppTableCell>
            <AppSkeleton class="table-loading" />
          </AppTableCell>
        </AppTableRow>
      </template>
      <template v-else>
        <AppTableRow v-for="item in props.tableData" :title='item.isEditing ? "" : "Нажмите для редактирования"'
          @click="onRowClick(item)" @keydown.escape="item.isEditing = false" @keydown.enter="item.isEditing = false"
          :ref="item.isEditing ? 'trapRef' : ''">
          <AppTableCell v-for="col in props.columns">
            <template v-if="!item.isEditing">
              {{ item[col.name as keyof typeof item] }}
            </template>
            <template v-else>
              <input type="text" v-model="item[col.name as keyof typeof item]" />
            </template>
          </AppTableCell>
          <AppTableCell class="table-actions">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
              @click.stop="onDeleteClick(item.id)">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16">
              </path>
            </svg>
          </AppTableCell>
        </AppTableRow>
      </template>
    </AppTableBody>
  </AppTable>
</template>

<style>
.table-actions svg {
  cursor: pointer;
}
</style>