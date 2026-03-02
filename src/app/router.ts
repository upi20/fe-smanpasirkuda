import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/* Placeholder page component for routes not yet built */
const PlaceholderPage = () => import('@/pages/PlaceholderPage.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
      },

      /* ── Profil ── */
      { path: 'profil/tentang', name: 'profil-tentang', component: PlaceholderPage },
      { path: 'profil/visi-misi', name: 'profil-visi-misi', component: PlaceholderPage },
      { path: 'profil/kepala-sekolah', name: 'profil-kepala-sekolah', component: PlaceholderPage },
      { path: 'profil/prestasi', name: 'profil-prestasi', component: PlaceholderPage },
      { path: 'profil/ekstrakurikuler', name: 'profil-ekstrakurikuler', component: PlaceholderPage },

      /* ── Informasi ── */
      { path: 'informasi/berita', name: 'informasi-berita', component: PlaceholderPage },
      { path: 'informasi/pengumuman', name: 'informasi-pengumuman', component: PlaceholderPage },
      { path: 'informasi/agenda', name: 'informasi-agenda', component: PlaceholderPage },
      { path: 'informasi/unduhan', name: 'informasi-unduhan', component: PlaceholderPage },

      /* ── Data ── */
      { path: 'data/guru', name: 'data-guru', component: PlaceholderPage },
      { path: 'data/siswa', name: 'data-siswa', component: PlaceholderPage },
      { path: 'data/sarpras', name: 'data-sarpras', component: PlaceholderPage },

      /* ── Media ── */
      { path: 'media/galeri', name: 'media-galeri', component: PlaceholderPage },
      { path: 'media/video', name: 'media-video', component: PlaceholderPage },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})
