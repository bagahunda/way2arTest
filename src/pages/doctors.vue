<script setup lang='ts'>
import useViewState from '@/composables/useViewState';
import { usePersonal, PersonalTable } from '@/entities/personal';

const { isLoading, setViewStateAs, withError } = useViewState();

setViewStateAs.loading();

const { doctors, addDoctor, deleteDoctor } = usePersonal();

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
  if (!(num % 3)) {
    await sleep(1000);
    setViewStateAs.withError();
  } else {
    await sleep(1000);
    setViewStateAs.done();
  }
}

async function onAddDoctor() {
  await sleep(10);
  addDoctor({
    name: '',
    department: '',
    isEditing: true
  });
}

init();
</script>

<template>
  <div class="container personal-page">
    <PersonalTable :columns="columns" :table-data="doctors" :is-loading="isLoading" :with-error="withError"
      caption="Доктора" @delete="deleteDoctor" />
    <div v-if="!withError && !isLoading" class="personal-page__add">
      <button class="add-button" @click="onAddDoctor">Добавить</button>
    </div>
  </div>
</template>

<style>
.table-loading {
  height: 20px;
}
</style>