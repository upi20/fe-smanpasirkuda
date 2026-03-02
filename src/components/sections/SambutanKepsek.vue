<script setup lang="ts">
import { RouterLink } from 'vue-router'
import kepsekUrl from '@/assets/kepsek.webp'
</script>

<template>
  <section class="bg-surface py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
        <!-- Photo Column -->
        <div class="relative shrink-0">
          <!-- Decorative circle -->
          <div v-reveal.scale="{ delay: 0 }" class="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-neutral-gray50 lg:-left-10 lg:-top-10 lg:h-40 lg:w-40" />

          <!-- Photo frame -->
          <div v-reveal.left="{ delay: 100 }" class="relative z-10 h-[360px] w-72 overflow-hidden rounded-2xl border-8 border-neutral-gray50 shadow-xl sm:h-[420px] sm:w-80 md:h-[500px] md:w-[380px] lg:h-[560px] lg:w-[420px]">
            <img
              :src="kepsekUrl"
              alt="Foto Kepala Sekolah SMAN 1 Pasirkuda — Darman, S.E.,M.M"
              class="h-full w-full object-contain object-bottom"
              loading="lazy"
              decoding="async"
            />
          </div>

          <!-- Name card overlay -->
          <div v-reveal="{ delay: 400 }" class="absolute -bottom-5 -right-4 z-20 min-w-[260px] rounded-2xl border border-neutral-border bg-surface p-6 shadow-card sm:-bottom-6 sm:-right-6 sm:p-8 lg:min-w-[300px]">
            <p class="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-primary">
              Kepala Sekolah
            </p>
            <p class="mt-1 font-heading text-lg font-extrabold text-brand-secondary sm:text-xl">
              Darman, S.E.,M.M
            </p>
          </div>
        </div>

        <!-- Content Column -->
        <div class="flex-1">
          <!-- Section label -->
          <h3 v-reveal.right="{ delay: 100 }" class="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.15em] text-brand-secondary">
            <span class="block h-1 w-12 bg-brand-primary" />
            Sambutan Kepala Sekolah
          </h3>

          <!-- Heading -->
          <h2 v-reveal.right="{ delay: 200 }" class="mb-6 font-heading text-3xl font-extrabold leading-tight text-neutral-text sm:text-4xl lg:mb-8 lg:text-5xl">
            Berkarakter, Berwawasan, Beriman
          </h2>

          <!-- Body text -->
          <div v-reveal.right="{ delay: 300 }" class="space-y-5 text-base leading-relaxed text-neutral-text/70 sm:text-lg lg:space-y-6">
            <p>
              Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi SMAN 1 Pasirkuda. Sebagai lembaga pendidikan yang berdiri sejak tahun 2012 dan dinegerikan pada 20 Mei 2013, kami senantiasa berkomitmen untuk mencetak peserta didik yang berprestasi, religius, ramah lingkungan, dan berkarakter Pancawaluya.
            </p>
            <p>
              Fokus kami tidak hanya pada keunggulan akademik, tetapi juga pada pembentukan karakter dan keimanan siswa. Melalui kegiatan pembiasaan, pengembangan minat dan bakat, serta penguasaan ilmu pengetahuan dan teknologi, kami yakin dapat mempersiapkan generasi yang siap menghadapi tantangan masa depan.
            </p>
          </div>

          <!-- Signature area -->
          <div v-reveal.fade="{ delay: 450 }" class="mt-10 flex items-center gap-6 lg:mt-12">
            <div class="h-px flex-1 max-w-[80px] bg-neutral-border" />
            <p class="text-sm font-medium text-neutral-text/50 italic">
              "Menjadikan Peserta Didik yang Berprestasi, Religius, Ramah Lingkungan dan Berkarakter Pancawaluya"
            </p>
          </div>

          <!-- CTA -->
          <div v-reveal="{ delay: 550 }" class="mt-8">
            <RouterLink
              to="/profil/kepala-sekolah"
              class="inline-flex items-center gap-2 text-sm font-extrabold text-brand-secondary transition-colors hover:text-brand-primary"
            >
              Selengkapnya
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
