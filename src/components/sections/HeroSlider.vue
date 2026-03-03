<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import slide1 from '@/assets/slides/slide-1.webp'
import slide2 from '@/assets/slides/slide-2.webp'
import slide3 from '@/assets/slides/slide-3.webp'
import slide4 from '@/assets/slides/slide-4.webp'
import slide5 from '@/assets/slides/slide-5.webp'
import slide6 from '@/assets/slides/slide-6.webp'
import slide7 from '@/assets/slides/slide-7.webp'
import slide8 from '@/assets/slides/slide-8.webp'

interface Slide {
  image: string
  alt: string
  badge: string
  badgeIcon: 'campaign' | 'groups' | 'school' | 'flag' | 'star' | 'health' | 'celebration'
  title: string
  highlight?: string
  description: string
  ctas?: { label: string; to: string; variant: 'solid' | 'outline'; icon?: string }[]
}

const slides: Slide[] = [
  {
    image: slide1,
    alt: 'Photo Bersama Pegawai SMAN 1 Pasirkuda',
    badge: 'Selamat Datang',
    badgeIcon: 'campaign',
    title: 'Selamat Datang di',
    highlight: 'SMAN 1 Pasirkuda',
    description: 'Berkarakter, Berwawasan, Beriman \u2014 Membentuk generasi unggul di Kabupaten Cianjur sejak tahun 2012.',
    ctas: [
      { label: 'Profil Sekolah', to: '/profil/tentang', variant: 'solid' },
      { label: 'Video Profil', to: '/media/video', variant: 'outline', icon: 'play' },
    ],
  },
  {
    image: slide2,
    alt: 'Guru, Stap Tata Usaha & Siswa',
    badge: 'Keluarga Besar',
    badgeIcon: 'groups',
    title: 'Guru, Staf TU',
    highlight: '& Siswa',
    description: 'Bersinergi menciptakan lingkungan belajar yang kondusif, bermakna, dan penuh semangat kekeluargaan.',
  },
  {
    image: slide3,
    alt: 'Pegawai SMAN 1 Pasirkuda',
    badge: 'Tenaga Pendidik',
    badgeIcon: 'school',
    title: 'Pegawai',
    highlight: 'SMAN 1 Pasirkuda',
    description: 'Tenaga pendidik profesional dan berdedikasi tinggi untuk membimbing siswa meraih prestasi terbaik.',
  },
  {
    image: slide4,
    alt: 'Tendik dan Paskibraka',
    badge: 'Pembentukan Karakter',
    badgeIcon: 'flag',
    title: 'Tendik dan',
    highlight: 'Paskibraka',
    description: 'Membangun jiwa nasionalisme dan kedisiplinan melalui kegiatan pembinaan kesiswaan.',
  },
  {
    image: slide5,
    alt: 'PPKKS SMAN 1 Pasirkuda Tahun Pelajaran 2021/2022',
    badge: 'Program Unggulan',
    badgeIcon: 'star',
    title: 'PPKKS SMAN 1 Pasirkuda',
    highlight: 'TP 2021/2022',
    description: 'Program Penguatan Kompetensi dan Karakter Siswa untuk meningkatkan kualitas lulusan yang berdaya saing.',
  },
  {
    image: slide6,
    alt: 'Vaksinasi dari Puskesmas Girijaya Pasirkuda',
    badge: 'Peduli Kesehatan',
    badgeIcon: 'health',
    title: 'Vaksinasi bersama',
    highlight: 'Puskesmas Girijaya',
    description: 'Kolaborasi dengan instansi kesehatan setempat untuk menjaga kesehatan seluruh warga sekolah.',
  },
  {
    image: slide7,
    alt: 'Upacara Bendera Merah Putih',
    badge: 'Nasionalisme',
    badgeIcon: 'flag',
    title: 'Upacara Bendera',
    highlight: 'Merah Putih',
    description: 'Menanamkan rasa cinta tanah air dan semangat kebangsaan kepada seluruh siswa.',
  },
  {
    image: slide8,
    alt: 'Kenaikan Kelas dan Perpisahan',
    badge: 'Prestasi Siswa',
    badgeIcon: 'celebration',
    title: 'Kenaikan Kelas &',
    highlight: 'Perpisahan',
    description: 'Merayakan pencapaian siswa dan menyambut babak baru dalam perjalanan pendidikan.',
  },
]

const current = ref(0)
const isTransitioning = ref(false)
const isPaused = ref(false)

const INTERVAL = 3000
const TRANSITION_MS = 700

let timer: ReturnType<typeof setInterval> | null = null

function goTo(index: number) {
  if (isTransitioning.value || index === current.value) return
  isTransitioning.value = true
  current.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, TRANSITION_MS)
}

function next() {
  goTo((current.value + 1) % slides.length)
}

function prev() {
  goTo((current.value - 1 + slides.length) % slides.length)
}

function startAutoplay() {
  stopAutoplay()
  timer = setInterval(() => {
    if (!isPaused.value) next()
  }, INTERVAL)
}

function stopAutoplay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

let touchStartX = 0
const SWIPE_THRESHOLD = 50

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
}
function onTouchEnd(e: TouchEvent) {
  const touchEndX = e.changedTouches[0].screenX
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > SWIPE_THRESHOLD) {
    if (diff > 0) next()
    else prev()
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    class="group relative w-full overflow-hidden bg-brand-secondary"
    aria-roledescription="carousel"
    aria-label="Slider foto kegiatan sekolah"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @keydown="onKeydown"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
    tabindex="0"
  >
    <div class="relative h-[420px] w-full sm:h-[500px] md:h-[580px] lg:h-[650px]">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700 ease-[var(--ease-standard)]"
        :class="i === current ? 'z-10 opacity-100' : 'z-0 opacity-0'"
        role="group"
        aria-roledescription="slide"
        :aria-label="`Slide ${i + 1} dari ${slides.length}: ${slide.alt}`"
        :aria-hidden="i !== current"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="h-full w-full object-cover"
          :loading="i === 0 ? 'eager' : 'lazy'"
          decoding="async"
        />

        <div class="hero-overlay absolute inset-0" />

        <div class="absolute inset-0 z-20 flex items-center">
          <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl text-white">
              <span
                class="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/90 px-4 py-1.5 text-sm font-bold backdrop-blur-sm sm:mb-6"
                :class="i === current ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'"
                style="transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s"
              >
                <svg v-if="slide.badgeIcon === 'campaign'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l5 3V6L5 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/></svg>
                <svg v-else-if="slide.badgeIcon === 'groups'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>
                <svg v-else-if="slide.badgeIcon === 'school'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                <svg v-else-if="slide.badgeIcon === 'flag'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                <svg v-else-if="slide.badgeIcon === 'star'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg v-else-if="slide.badgeIcon === 'health'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
                <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 22l14-5-9-1zm12.53-9.16L13.18 11.5l4.95-4.95 1.34 1.34-4.94 4.95zm-3.54 3.54-1.34-1.34 4.95-4.95 1.34 1.34-4.95 4.95zM19.07 4.93l-7.07 7.07 1.41 1.41 7.07-7.07c.78-.78.78-2.05 0-2.83-.78-.78-2.04-.78-2.83 0l.42.42z"/></svg>
                {{ slide.badge }}
              </span>

              <h2
                class="mb-4 font-heading text-3xl font-extrabold leading-[1.1] drop-shadow-lg sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                :class="i === current ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
                style="transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s"
              >
                {{ slide.title }}<br v-if="slide.highlight" />
                <span v-if="slide.highlight" class="text-brand-primary">{{ slide.highlight }}</span>
              </h2>

              <p
                class="mb-6 max-w-xl text-base leading-relaxed sm:mb-8 sm:text-lg md:text-xl"
                :class="i === current ? 'translate-y-0 opacity-95' : 'translate-y-4 opacity-0'"
                style="transition: opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s"
              >
                {{ slide.description }}
              </p>

              <div
                v-if="slide.ctas"
                class="flex flex-wrap gap-3 sm:gap-4"
                :class="i === current ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
                style="transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s"
              >
                <RouterLink
                  v-for="cta in slide.ctas"
                  :key="cta.label"
                  :to="cta.to"
                  :class="cta.variant === 'solid'
                    ? 'bg-white text-brand-secondary hover:bg-neutral-gray50 shadow-2xl'
                    : 'border-2 border-white/60 hover:border-white text-white'"
                  class="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all sm:px-10 sm:py-4 sm:text-base"
                >
                  <svg v-if="cta.icon === 'play'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  {{ cta.label }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-14 sm:w-14 lg:opacity-0 lg:group-hover:opacity-100"
      aria-label="Slide sebelumnya"
      @click="prev"
    >
      <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      class="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-14 sm:w-14 lg:opacity-0 lg:group-hover:opacity-100"
      aria-label="Slide berikutnya"
      @click="next"
    >
      <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="absolute inset-x-0 bottom-6 z-30 flex items-center justify-center gap-3 sm:bottom-8">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        class="flex h-4 items-center"
        :aria-label="`Ke slide ${i + 1}: ${slide.alt}`"
        :aria-current="i === current ? 'true' : undefined"
        @click="goTo(i)"
      >
        <span
          class="block h-1.5 rounded-full transition-all duration-300"
          :class="i === current
            ? 'w-12 bg-white'
            : 'w-12 bg-white/30 hover:bg-white/50 cursor-pointer'"
        />
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-overlay {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.72) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
</style>
