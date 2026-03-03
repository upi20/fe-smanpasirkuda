<script setup lang="ts">
import { RouterLink } from 'vue-router'

import g1 from '@/assets/galeri/galeri-1.jpg'
import g2 from '@/assets/galeri/galeri-2.jpg'
import g3 from '@/assets/galeri/galeri-3.jpg'
import g4 from '@/assets/galeri/galeri-4.jpg'
import g5 from '@/assets/galeri/galeri-5.jpg'
import g6 from '@/assets/galeri/galeri-6.jpg'
import g7 from '@/assets/galeri/galeri-7.jpg'

const photos = [
  { src: g1, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g2, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g3, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g4, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g5, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g6, alt: 'Kegiatan SMAN 1 Pasirkuda' },
  { src: g7, alt: 'Kegiatan SMAN 1 Pasirkuda' },
]

/* Lightbox */
import { ref } from 'vue'
const lightboxIndex = ref<number | null>(null)

function openLightbox(i: number) {
  lightboxIndex.value = i
}
function closeLightbox() {
  lightboxIndex.value = null
}
function prevPhoto() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length
}
function nextPhoto() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % photos.length
}

function onKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return
  if (e.key === 'ArrowRight') nextPhoto()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'Escape') closeLightbox()
}
</script>

<template>
  <section class="py-14 sm:py-16" @keydown="onKeydown" tabindex="-1">
    <div class="container mx-auto max-w-6xl px-4 sm:px-6">

      <!-- Heading -->
      <div class="mb-10 text-center" v-reveal.fade>
        <span class="mb-2 inline-block font-accent text-xl text-brand-primary">Momen Bersama</span>
        <h2 class="text-3xl font-bold text-text-primary sm:text-4xl">Foto Galeri</h2>
        <p class="mx-auto mt-3 max-w-lg text-sm text-neutral-500">
          Dokumentasi kegiatan, prestasi, dan kehidupan sekolah SMAN 1 Pasirkuda.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <!-- item besar (col-span-2, row-span-2) -->
        <div
          v-reveal="{ delay: 0 }"
          class="gallery-item col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-xl"
          @click="openLightbox(0)"
        >
          <img :src="photos[0].src" :alt="photos[0].alt" class="gallery-img" loading="lazy" />
          <div class="gallery-overlay">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
        </div>

        <!-- item sisa -->
        <div
          v-for="(photo, i) in photos.slice(1)"
          :key="i"
          v-reveal="{ delay: (i + 1) * 80 }"
          class="gallery-item cursor-pointer overflow-hidden rounded-xl"
          @click="openLightbox(i + 1)"
        >
          <img :src="photo.src" :alt="photo.alt" class="gallery-img" loading="lazy" />
          <div class="gallery-overlay">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 text-center" v-reveal="{ delay: 200 }">
        <RouterLink
          to="/media/galeri"
          class="inline-flex items-center gap-2 rounded-full border-2 border-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-white"
        >
          Lihat Semua Foto
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          @click.self="closeLightbox"
        >
          <!-- Close -->
          <button
            class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            @click="closeLightbox"
            aria-label="Tutup"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Prev -->
          <button
            class="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            @click="prevPhoto"
            aria-label="Sebelumnya"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Image -->
          <img
            :src="photos[lightboxIndex!].src"
            :alt="photos[lightboxIndex!].alt"
            class="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          <!-- Next -->
          <button
            class="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            @click="nextPhoto"
            aria-label="Berikutnya"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Counter -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {{ lightboxIndex! + 1 }} / {{ photos.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  background: #f1f1f1;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition:
    background 0.3s ease,
    opacity 0.3s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.06);
}

.gallery-item:hover .gallery-overlay {
  background: rgba(0, 0, 0, 0.45);
  opacity: 1;
}

/* item besar mempertahankan aspect-ratio berbeda */
.gallery-item.col-span-2.row-span-2 {
  aspect-ratio: auto;
}
</style>
