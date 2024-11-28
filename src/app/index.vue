<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

const route = useRoute();
const layout = computed<any | string>(() => route.meta.layout ?? EmptyLayout);
</script>

<template>
  <RouterView v-slot="{ Component: ContentComponent }">
    <Transition name="fade-in" mode="out-in">
      <Component :is="layout">
        <Component :is="ContentComponent" />
      </Component>
    </Transition>
  </RouterView>
</template>