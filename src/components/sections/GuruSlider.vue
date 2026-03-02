<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Guru {
  name: string
  role: string
  initial: string
}

const guru: Guru[] = [
  { name: 'Darman, S.E.,M.M', role: 'Kepala Sekolah', initial: 'D' },
  { name: 'Yoga Khoirul Apandi, S.Pd.', role: 'Wakasek Kurikulum', initial: 'Y' },
  { name: 'Bunyamin, S.Pd.', role: 'Wakasek Sarpras', initial: 'B' },
  { name: 'A. Munawar, S.Ag.', role: 'Wakasek Kesiswaan', initial: 'A' },
  { name: 'Dian Nopiandi, S.Sos. M.Pd.', role: 'Wakasek Humas', initial: 'D' },
  { name: 'Ali Rohmat, S.Pd.', role: 'Koordinator BK', initial: 'A' },
  { name: 'Hani Rahmawati Suhendar, S.Pd.', role: 'Guru', initial: 'H' },
  { name: 'Wawan Setiawan, S.Pd. M.Pd.', role: 'Guru', initial: 'W' },
  { name: 'Romli, S.Pd.', role: 'Guru', initial: 'R' },
  { name: 'Tardi Agustiana, S.Pd.', role: 'Guru', initial: 'T' },
  { name: 'G. Gunawan, S.Pd.I', role: 'Guru', initial: 'G' },
  { name: 'Suwandi, S.T.', role: 'Guru', initial: 'S' },
  { name: 'Atep Kurnia', role: 'Guru', initial: 'A' },
]

/* ── Slider logic ── */
const currentIndex = ref(0)
const isTransitioning = ref(false)

/* Responsive items per view */
const itemsPerView = ref(4)

function updateItemsPerView() {
  const w = window.innerWidth
  if (w < 550) itemsPerView.value = 1
  else if (w < 850) itemsPerView.value = 2
  else if (w < 1024) itemsPerView.value = 3
  else itemsPerView.value = 4
}

const maxIndex = computed(() => Math.max(0, guru.length - itemsPerView.value))

function next() {
  if (isTransitioning.value) return
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

function prev() {
  if (isTransitioning.value) return
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

/* Autoplay */
let autoplayTimer: ReturnType<typeof setInterval> | null = null
const isPaused = ref(false)

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (!isPaused.value) next()
  }, 4000)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

/* Touch swipe */
let touchStartX = 0
let touchEndX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  isPaused.value = true
}

function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) {
    diff > 0 ? next() : prev()
  }
  isPaused.value = false
}

onMounted(() => {
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('resize', updateItemsPerView)
})

/* Color palette for avatar backgrounds */
const colors = [
  'bg-brand-secondary',
  'bg-brand-primary',
  'bg-brand-secondary/80',
  'bg-brand-primary/80',
  'bg-brand-secondary/70',
]

function getColor(index: number) {
  return colors[index % colors.length]
}
</script>

<template>
  <section class="bg-surface py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div v-reveal="{ delay: 0 }" class="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end lg:mb-16">
        <div>
          <h3 class="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.15em] text-brand-secondary">
            <span class="block h-1 w-12 bg-brand-primary" />
            TENAGA PENDIDIK
          </h3>
          <h2 class="font-heading text-3xl font-extrabold text-neutral-text sm:text-4xl lg:text-5xl">
            Guru &amp; Staff
          </h2>
        </div>
        <RouterLink
          to="/data/guru"
          class="group inline-flex items-center gap-2 text-sm font-bold text-brand-secondary transition-colors hover:text-brand-primary"
        >
          Lihat Semua
          <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>

      <!-- Slider -->
      <div
        v-reveal="{ delay: 200 }"
        class="relative"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div class="overflow-hidden">
          <div
            ref="trackRef"
            class="flex transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]"
            :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
          >
            <div
              v-for="(g, i) in guru"
              :key="i"
              class="shrink-0 px-3"
              :style="{ width: `${100 / itemsPerView}%` }"
            >
              <div class="group rounded-2xl border border-neutral-border bg-surface p-6 text-center shadow-sm transition-all duration-300 hover:border-brand-secondary/30 hover:shadow-card lg:p-8">
                <!-- Avatar circle -->
                <div
                  class="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-extrabold text-white transition-transform duration-300 group-hover:scale-105 lg:h-28 lg:w-28 lg:text-3xl"
                  :class="getColor(i)"
                >
                  {{ g.initial }}
                </div>

                <!-- Name -->
                <h5 class="mb-1 text-base font-bold text-neutral-text line-clamp-1 lg:text-lg">
                  {{ g.name }}
                </h5>

                <!-- Role -->
                <p class="text-sm text-neutral-text/60">
                  {{ g.role }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Arrow buttons -->
        <button
          class="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-border bg-surface shadow-card transition-all hover:border-brand-secondary hover:bg-brand-secondary hover:text-white sm:-left-5 sm:h-12 sm:w-12"
          aria-label="Slide sebelumnya"
          @click="prev"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          class="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-border bg-surface shadow-card transition-all hover:border-brand-secondary hover:bg-brand-secondary hover:text-white sm:-right-5 sm:h-12 sm:w-12"
          aria-label="Slide berikutnya"
          @click="next"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dot indicators -->
        <div class="mt-8 flex items-center justify-center gap-2">
          <button
            v-for="dot in maxIndex + 1"
            :key="dot"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="currentIndex === dot - 1 ? 'w-8 bg-brand-primary' : 'w-4 bg-neutral-border hover:bg-neutral-text/30'"
            :aria-label="`Go to slide ${dot}`"
            @click="currentIndex = dot - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
