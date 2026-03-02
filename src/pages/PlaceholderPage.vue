<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

/* Derive page title from route name */
const title = String(route.name ?? '')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, (c) => c.toUpperCase())
</script>

<template>
  <section class="py-section">
    <div class="mx-auto max-w-7xl px-4 text-center">
      <h1 class="text-brand-primary text-3xl font-bold lg:text-4xl">{{ title }}</h1>
      <p class="mt-4 text-text-primary/60">Halaman ini sedang dalam pengembangan.</p>
    </div>
  </section>
</template>
