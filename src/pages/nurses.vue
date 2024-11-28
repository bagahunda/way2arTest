<script setup lang='ts'>
import useViewState from '@/composables/useViewState';
import { usePersonal, PersonalTable } from '@/entities/personal';

const { isLoading, setViewStateAs, withError } = useViewState();

setViewStateAs.loading();

const { nurses, addNurse, deleteNurse } = usePersonal();

const columns = [
  {
    name: 'name',
    label: 'Имя',
  },
  {
    name: 'department',
    label: 'Отделение',
  }
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function init() {
  const num = Math.floor(Math.random() * 10) + 1;
  if (num % 2) {
    await sleep(1000);
    setViewStateAs.withError();
  } else {
    await sleep(1000);
    setViewStateAs.done();
  }
}

async function onAddNurse() {
  await sleep(10);
  addNurse({
    name: '',
    department: '',
    isEditing: true
  });
}
init();
</script>

<template>
  <div class="container">
    <PersonalTable :columns="columns" :table-data="nurses" :is-loading="isLoading" :with-error="withError"
      caption="Медсёстры" @delete="deleteNurse" />
    <div v-if="!withError && !isLoading" class="personal-page__add">
      <button class="add-button" @click="onAddNurse">Добавить</button>
    </div>
  </div>
</template>

<style>
.table-loading {
  height: 20px;
}
</style>