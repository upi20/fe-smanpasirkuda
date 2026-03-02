<script setup lang="ts">
import AppHeader from '@/components/sections/AppHeader.vue'
import AppFooter from '@/components/sections/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main" class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
