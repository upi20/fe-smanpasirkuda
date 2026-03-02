<script setup lang="ts">
interface NilaiItem {
  icon: string
  title: string
  description: string
}

const items: NilaiItem[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    title: 'Integritas',
    description: 'Menanamkan nilai kejujuran dan disiplin tinggi di setiap aktivitas akademik dan non-akademik.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>`,
    title: 'Akademik',
    description: 'Kurikulum yang adaptif dan menantang untuk memaksimalkan potensi setiap peserta didik.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Digitalisasi',
    description: 'Pemanfaatan teknologi terkini dalam sistem manajemen dan proses pembelajaran.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    title: 'Kreativitas',
    description: 'Mendukung bakat dan minat siswa melalui berbagai kegiatan ekstrakurikuler yang berprestasi.',
  },
]
</script>

<template>
  <section class="bg-surface-alt py-14 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="group rounded-2xl border border-neutral-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-brand-secondary hover:shadow-card lg:p-10"
        >
          <!-- Icon -->
          <span
            class="mb-5 block text-brand-secondary transition-transform duration-300 group-hover:scale-110"
            v-html="item.icon"
          />

          <!-- Title -->
          <h5 class="mb-3 text-lg font-bold uppercase tracking-tight text-neutral-text">
            {{ item.title }}
          </h5>

          <!-- Description -->
          <p class="text-sm leading-relaxed text-neutral-text/60">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
