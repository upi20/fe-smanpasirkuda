<script setup lang="ts">
import { RouterLink } from 'vue-router'
import berita1 from '@/assets/berita/berita-1.jpg'
import berita2 from '@/assets/berita/berita-2.jpg'
import berita3 from '@/assets/berita/berita-3.jpg'
import berita4 from '@/assets/berita/berita-4.jpg'

interface Berita {
  image: string
  date: string
  title: string
  excerpt: string
  slug: string
}

const articles: Berita[] = [
  {
    image: berita1,
    date: '24 Jul 2023',
    title: 'Upacara Pembukaan Kemah Blok 2023/2024',
    excerpt:
      'Upacara Pembukaan Kemah Blok 2023/2024 dibuka oleh Wawan Setiawan, S.Pd, M.Pd selaku pembina kegiatan pramuka sekolah.',
    slug: '/informasi/berita',
  },
  {
    image: berita2,
    date: '24 Jul 2023',
    title: 'Upacara Pembukaan MPLS 2023/2024',
    excerpt:
      'Upacara pembukaan MPLS Tahun Pelajaran 2023/2024 dibuka oleh Bpk Dian Nopiandi, S.Sos, M.Pd selaku Wakasek Humas.',
    slug: '/informasi/berita',
  },
  {
    image: berita3,
    date: '30 Apr 2022',
    title: 'Rantang Pramuka di Bulan Ramadhan',
    excerpt:
      'Siswa SMA Negeri 1 Pasirkuda berbagi rantang pramuka berisi takjil untuk berbuka puasa kepada masyarakat sekitar.',
    slug: '/informasi/berita',
  },
  {
    image: berita4,
    date: '30 Apr 2022',
    title: 'SmartTren Ramadhan',
    excerpt:
      'SMA Negeri 1 Pasirkuda mengadakan SmartTren di bulan suci Ramadhan dengan tausiah keagamaan dan infak bersama.',
    slug: '/informasi/berita',
  },
]
</script>

<template>
  <section class="bg-surface-alt py-14 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div v-reveal="{ delay: 0 }" class="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end lg:mb-16">
        <div>
          <h3 class="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-primary">
            INFORMASI TERKINI
          </h3>
          <h2 class="font-heading text-3xl font-extrabold text-neutral-text sm:text-4xl lg:text-5xl">
            Berita &amp; Pengumuman
          </h2>
        </div>
        <RouterLink
          to="/informasi/berita"
          class="group inline-flex items-center gap-2 text-sm font-bold text-brand-secondary transition-colors hover:text-brand-primary"
        >
          Lihat Semua Berita
          <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <RouterLink
          v-for="(article, i) in articles"
          :key="i"
          v-reveal="{ delay: i * 120 }"
          :to="article.slug"
          class="group flex flex-col overflow-hidden rounded-2xl border border-neutral-border bg-surface shadow-sm transition-all duration-300 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden sm:h-56">
            <img
              :src="article.image"
              :alt="article.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <!-- Date badge -->
            <div class="absolute bottom-3 left-3 rounded-lg bg-surface px-3 py-1.5 shadow-lg">
              <p class="text-[10px] font-extrabold uppercase text-brand-primary">
                {{ article.date }}
              </p>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col p-6 sm:p-8">
            <h6 class="mb-3 font-heading text-lg font-bold leading-snug text-neutral-text transition-colors group-hover:text-brand-secondary line-clamp-2 sm:mb-4">
              {{ article.title }}
            </h6>
            <p class="mb-5 text-sm leading-relaxed text-neutral-text/60 line-clamp-3 sm:mb-6">
              {{ article.excerpt }}
            </p>
            <div class="mt-auto">
              <span class="inline-flex items-center gap-1 text-sm font-extrabold text-brand-secondary transition-colors group-hover:text-brand-primary">
                Selengkapnya
                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
