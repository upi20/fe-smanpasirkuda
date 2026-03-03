<script setup lang="ts">
interface Stat {
  icon: string
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    value: '1',
    label: 'Prestasi Tingkat Kabupaten',
    description: 'Juara 1 Dakwah tingkat Kabupaten dalam kegiatan Pentas PAI oleh Cecep Kurnia.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    value: '13+',
    label: 'Tenaga Pendidik',
    description: 'Guru dan staff profesional yang berdedikasi dalam membentuk generasi unggul.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    value: '2+',
    label: 'Ekstrakurikuler',
    description: 'PMR, Badminton, dan wadah pengembangan bakat siswa yang terus berkembang.',
  },
]
</script>

<template>
  <section class="bg-surface-alt py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div v-reveal.fade="{ delay: 0 }" class="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
        <h3 class="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-secondary">
          TRADISI JUARA
        </h3>
        <h2 class="mb-6 font-heading text-3xl font-extrabold text-neutral-text sm:text-4xl md:text-5xl">
          Membangun Prestasi,<br />Menginspirasi Negeri
        </h2>
        <div class="mx-auto h-1.5 w-20 rounded-full bg-brand-primary" />
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          v-reveal.scale="{ delay: i * 150 }"
          class="flex flex-col items-center rounded-3xl border border-neutral-border bg-surface p-10 text-center shadow-sm transition-all duration-300 hover:shadow-card lg:p-12"
        >
          <!-- Icon circle -->
          <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-surface-alt text-brand-primary lg:mb-8">
            <span v-html="stat.icon" />
          </div>

          <!-- Value -->
          <div class="mb-2 text-5xl font-extrabold text-brand-secondary">
            {{ stat.value }}
          </div>

          <!-- Label -->
          <p class="mb-4 font-bold text-neutral-text">
            {{ stat.label }}
          </p>

          <!-- Description -->
          <p class="text-sm text-neutral-text/60">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
