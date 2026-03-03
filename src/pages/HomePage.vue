<template>
  <div>
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Sambutan Kepala Sekolah -->
    <SambutanKepsek />

    <!-- Nilai-Nilai Sekolah -->
    <NilaiCards />

    <!-- Guru & Staff Slider -->
    <GuruSlider />

    <!-- Berita & Pengumuman -->
    <BeritaPengumuman />

    <!-- Foto Galeri -->
    <FotoGaleri />

    <!-- Tradisi Juara -->
    <TradisiJuara />

    <!-- CTA Banner -->
    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import HeroSlider from '@/components/sections/HeroSlider.vue'
import SambutanKepsek from '@/components/sections/SambutanKepsek.vue'
import NilaiCards from '@/components/sections/NilaiCards.vue'
import GuruSlider from '@/components/sections/GuruSlider.vue'
import BeritaPengumuman from '@/components/sections/BeritaPengumuman.vue'
import FotoGaleri from '@/components/sections/FotoGaleri.vue'
import TradisiJuara from '@/components/sections/TradisiJuara.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
</script>
