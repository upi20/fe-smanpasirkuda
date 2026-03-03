<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MobileNav from '@/components/sections/MobileNav.vue'
import logoUrl from '@/assets/logo.png'

const mobileOpen = ref(false)

export interface NavChild { label: string; to: string }
export interface NavItem { label: string; to?: string; children?: NavChild[] }

const navItems: NavItem[] = [
  { label: 'Beranda', to: '/' },
  {
    label: 'Profil',
    children: [
      { label: 'Tentang Sekolah', to: '/profil/tentang' },
      { label: 'Visi dan Misi', to: '/profil/visi-misi' },
      { label: 'Kepala Sekolah', to: '/profil/kepala-sekolah' },
      { label: 'Prestasi', to: '/profil/prestasi' },
      { label: 'Ekstrakurikuler', to: '/profil/ekstrakurikuler' },
    ],
  },
  {
    label: 'Informasi',
    children: [
      { label: 'Berita', to: '/informasi/berita' },
      { label: 'Pengumuman', to: '/informasi/pengumuman' },
      { label: 'Agenda', to: '/informasi/agenda' },
      { label: 'Unduhan', to: '/informasi/unduhan' },
    ],
  },
  {
    label: 'Data',
    children: [
      { label: 'Guru & Staff', to: '/data/guru' },
      { label: 'Siswa', to: '/data/siswa' },
      { label: 'Sarpras', to: '/data/sarpras' },
    ],
  },
  {
    label: 'Media',
    children: [
      { label: 'Galeri', to: '/media/galeri' },
      { label: 'Video', to: '/media/video' },
    ],
  },
]

const contactInfo = [
  { icon: 'mail', text: 'info@smanegeri1pasirkuda.sch.id' },
  { icon: 'phone', text: '085314245436' },
]
</script>

<template>
  <!-- Top Info Bar (scrolls away naturally, NOT sticky) -->
  <div class="hidden border-b border-neutral-border bg-surface-alt text-text-primary md:block">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
      <div class="flex items-center gap-6">
        <span v-for="c in contactInfo" :key="c.icon" class="flex items-center gap-1.5 font-medium">
          <svg v-if="c.icon === 'mail'" class="h-3.5 w-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <svg v-else class="h-3.5 w-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {{ c.text }}
        </span>
      </div>
      <div class="flex items-center gap-5">
        <a href="#" class="font-semibold transition-colors hover:text-brand-primary">PPDB 2026</a>
        <a href="#" class="font-semibold transition-colors hover:text-brand-primary">E-Learning</a>
      </div>
    </div>
  </div>

  <!-- Main Nav Bar (sticky, glass surface) -->
  <header class="sticky top-0 z-100 h-[70px] border-b border-neutral-border bg-white/95 shadow-dropdown backdrop-blur-md lg:h-20">
    <div class="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
      <RouterLink to="/" class="flex shrink-0 items-center gap-3" aria-label="Beranda SMAN 1 Pasirkuda">
        <img :src="logoUrl" alt="Logo SMAN 1 Pasirkuda" class="h-10 w-10 object-contain lg:h-12 lg:w-12" width="48" height="48" />
        <div class="hidden sm:block">
          <span class="text-brand-primary text-lg font-bold leading-tight lg:text-xl">SMAN 1 Pasirkuda</span>
          <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-text-primary/50">Kab. Cianjur</p>
        </div>
      </RouterLink>

      <nav aria-label="Navigasi utama" class="hidden items-center gap-8 font-semibold text-text-primary lg:flex">
        <template v-for="item in navItems" :key="item.label">
          <RouterLink
            v-if="item.to && !item.children"
            :to="item.to"
            class="transition-colors duration-[var(--duration-fast)] hover:text-brand-primary"
          >
            {{ item.label }}
          </RouterLink>

          <div v-else class="group relative">
            <button class="flex items-center gap-1 transition-colors duration-[var(--duration-fast)] hover:text-brand-primary">
              {{ item.label }}
              <svg class="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="pointer-events-none absolute left-0 top-full z-200 min-w-[200px] origin-top scale-95 rounded-lg border border-neutral-border bg-surface py-2 opacity-0 shadow-dropdown transition-all duration-[var(--duration-fast)] group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
              <RouterLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="block px-4 py-2.5 text-sm text-text-primary transition-colors hover:bg-surface-alt hover:text-brand-primary"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
        </template>
      </nav>

      <div class="flex items-center gap-3">
        <button class="hidden p-2 text-text-primary transition-colors hover:text-brand-primary lg:block" aria-label="Cari">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <a href="#" class="hidden rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-text-on-primary shadow-md transition-all hover:bg-brand-primary/90 hover:shadow-lg active:scale-95 lg:inline-flex">
          PPDB 2026
        </a>
        <button
          class="flex h-11 w-11 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-surface-alt lg:hidden"
          :aria-label="mobileOpen ? 'Tutup menu' : 'Buka menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <MobileNav
    :open="mobileOpen"
    :nav-items="navItems"
    @close="mobileOpen = false"
  />
</template>
