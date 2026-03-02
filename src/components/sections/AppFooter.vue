<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const showBackTop = ref(false)

function onScroll() {
  showBackTop.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

/* Footer sitemap links */
const sitemapGroups = [
  {
    title: 'Profil',
    links: [
      { label: 'Tentang Sekolah', to: '/profil/tentang' },
      { label: 'Visi dan Misi', to: '/profil/visi-misi' },
      { label: 'Kepala Sekolah', to: '/profil/kepala-sekolah' },
      { label: 'Prestasi', to: '/profil/prestasi' },
      { label: 'Ekstrakurikuler', to: '/profil/ekstrakurikuler' },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Berita', to: '/informasi/berita' },
      { label: 'Pengumuman', to: '/informasi/pengumuman' },
      { label: 'Agenda', to: '/informasi/agenda' },
      { label: 'Unduhan', to: '/informasi/unduhan' },
    ],
  },
  {
    title: 'Data & Media',
    links: [
      { label: 'Guru & Staff', to: '/data/guru' },
      { label: 'Siswa', to: '/data/siswa' },
      { label: 'Sarpras', to: '/data/sarpras' },
      { label: 'Galeri', to: '/media/galeri' },
      { label: 'Video', to: '/media/video' },
    ],
  },
]

/* Social links (from old website) */
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/sman1pasirkuda/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'Facebook', href: 'https://web.facebook.com/smanpas.smanpas.7/about', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/SMAN1Pasirkuda', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z' },
]
</script>

<template>
  <footer>
    <!-- ════ Layer 1: Footer Info (white/light bg) ════ -->
    <div class="bg-white py-section">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Contact info -->
        <div>
          <h3 class="text-brand-primary mb-4 text-lg font-bold">Hubungi Kami</h3>
          <address class="space-y-3 not-italic text-sm text-text-primary/80">
            <p class="flex items-start gap-2">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jl. Desa Padamulya, Pasirkuda, Kab. Cianjur, Jawa Barat
            </p>
            <p class="flex items-center gap-2">
              <svg class="h-4 w-4 shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              085795106118
            </p>
            <p class="flex items-center gap-2">
              <svg class="h-4 w-4 shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@smansatupasirkuda.sch.id
            </p>
          </address>

          <!-- Social icons -->
          <div class="mt-5 flex items-center gap-3">
            <a
              v-for="s in socialLinks"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path :d="s.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Sitemap columns -->
        <div v-for="group in sitemapGroups" :key="group.title">
          <h3 class="text-brand-primary mb-4 text-lg font-bold">{{ group.title }}</h3>
          <ul class="space-y-2">
            <li v-for="link in group.links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm text-text-primary/80 transition-colors hover:text-brand-primary"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ════ Layer 2: Footer Secondary (school identity) ════ -->
    <div class="bg-footer-secondary-bg py-8 text-text-on-secondary">
      <div class="mx-auto max-w-7xl px-4 text-center">
        <p class="font-accent text-3xl leading-relaxed sm:text-4xl">SMAN 1 Pasirkuda</p>
        <p class="mt-2 text-sm opacity-80">Berkarakter, Berwawasan, Beriman</p>
      </div>
    </div>

    <!-- ════ Layer 3: Absolute Footer ════ -->
    <div class="bg-page-bg py-4 text-text-on-primary">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {{ new Date().getFullYear() }} SMAN 1 Pasirkuda. All rights reserved.</p>
        <nav aria-label="Footer links" class="flex flex-wrap justify-center gap-4 font-bold uppercase tracking-widest">
          <RouterLink to="/" class="transition-colors hover:underline">Beranda</RouterLink>
          <RouterLink to="/profil/tentang" class="transition-colors hover:underline">Profil</RouterLink>
          <RouterLink to="/informasi/berita" class="transition-colors hover:underline">Informasi</RouterLink>
          <RouterLink to="/data/guru" class="transition-colors hover:underline">Data</RouterLink>
          <RouterLink to="/media/galeri" class="transition-colors hover:underline">Media</RouterLink>
        </nav>
      </div>
    </div>
  </footer>

  <!-- ════ Back to Top ════ -->
  <Transition name="fade-up">
    <button
      v-show="showBackTop"
      class="fixed bottom-6 right-6 z-300 flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-brand-primary shadow-lg transition-colors duration-[var(--duration-fast)] hover:bg-brand-primary hover:text-white"
      aria-label="Kembali ke atas"
      @click="scrollToTop"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
