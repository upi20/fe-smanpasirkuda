<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-secondary py-16 sm:py-20">
    <!-- Decorative skew -->
    <div class="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 skew-x-12 bg-white/5" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-12">
        <!-- Text -->
        <div class="text-white">
          <h2 class="mb-4 text-3xl font-extrabold sm:text-4xl">
            Ayo Jadi Bagian dari <span class="text-brand-primary">Masa Depan</span>
          </h2>
          <p class="max-w-xl text-lg leading-relaxed opacity-90">
            Bergabunglah bersama alumni yang telah membuktikan kualitas pendidikan di SMAN 1 Pasirkuda.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/informasi/ppdb"
            class="rounded-pill bg-white px-8 py-3.5 text-center text-sm font-bold text-brand-secondary shadow-xl transition-all hover:bg-neutral-gray50 active:scale-95 sm:px-10 sm:py-4"
          >
            Daftar PPDB Online
          </RouterLink>
          <RouterLink
            to="/profil/tentang"
            class="rounded-pill border-2 border-white/40 px-8 py-3.5 text-center text-sm font-bold text-white transition-all hover:border-white active:scale-95 sm:px-10 sm:py-4"
          >
            Kontak Kami
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
