/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Compass,
  Feather,
  Layers,
  ShieldCheck,
  Sparkles,
  Download,
  Code2,
  Eye,
  X,
  Check,
  BookOpen,
  Cpu,
  Sliders,
  ExternalLink,
  RotateCcw,
  FolderOpen,
} from 'lucide-react';

// ============================================================================
// 1. IDENTITAS & KONFIGURASI DATA TERPUSAT (PORTFOLIO_DATA / PORTFOLIO_CONFIG)
// Edit objek di bawah ini untuk mengganti teks, proyek, atau path gambar lokal
// di dalam folder `./images/` tanpa perlu mengubah struktur komponen UI.
// ============================================================================
export const PORTFOLIO_DATA = {
  identity: {
    handle: 'Keripikubi',
    logoText: 'Keripikubi.',
    levelShort: 'Lv.01',
    titleBadge: 'Pengrajin Kayu — Lv 01',
    statusText: 'Status: Meraut Kode & Sistem',
    eraMarker: '28 Tahun Setelah Era Himpunan',
    eraFocus: 'Fokus: Performa & UI',
    heroKicker: 'CATATAN PERJALANAN · ERA BARU',
    heroTitlePrefix: 'Merakit Karya',
    heroTitleItalic: 'dalam',
    heroTitleSuffix: 'Sunyi.',
    tagline:
      'Perjalanan karya, eksperimen teknologi, dan hal-hal sepele yang dikerjakan dengan ketelitian seorang pengrajin.',
    heroImage: './images/patung.webp',
    locationNote: 'Lokakarya Digital · Arsip Utara',
  },
  navLinks: [
    { label: 'Kronik', href: '#kronik' },
    { label: 'Eksperimen', href: '#eksperimen' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Catatan', href: '#catatan' },
  ],
  heroIndicators: [
    {
      id: 'presisi',
      title: 'Presisi Kustom',
      subtitle: 'Detail terukur hingga piksel',
      icon: 'compass',
    },
    {
      id: 'ringan',
      title: 'Ringan & Cepat',
      subtitle: '60fps murni tanpa beban',
      icon: 'feather',
    },
    {
      id: 'mandiri',
      title: 'Arsitektur Mandiri',
      subtitle: 'Zero-dependency 3D CSS',
      icon: 'layers',
    },
  ],
  chapterOne: {
    label: 'CHAPTER I — AKAR & FONDASI',
    titlePrefix: 'Menjaga Ketukan Pahat di Dunia yang',
    titleItalic: 'Terburu-buru.',
    marginaliaTop: 'Catatan kecil di tepi jalan',
    marginaliaBottom: 'Ditempa perlahan',
    description:
      'Layaknya seorang pengembara yang mengumpulkan mantra-mantra kecil nan sederhana di sepanjang perjalanan panjang, setiap baris kode di sini ditulis bukan untuk mengejar gemuruh tren sesaat. Kami percaya antarmuka terbaik lahir dari ketenangan, struktur yang jujur, dan penghormatan terhadap perangkat pengguna.',
    secondaryNote:
      'Setiap komponen dirakit menggunakan perhitungan geometri ringan, memastikan layar ponsel paling sederhana sekalipun tetap merasakan kelapangan yang sama.',
    collageImages: [
      {
        id: 'bab-1',
        src: '/src/assets/images/regenerated_image_1793874567087.jpg',
        fallbackKey: 'bab-1',
        title: 'Meja Kerja & Sketsa',
        caption: 'Eksperimen tata letak proporsi emas & tipografi klasik.',
        era: 'Musim Gugur · Tahun Ke-28',
      },
      {
        id: 'bab-2',
        src: '/src/assets/images/regenerated_image_1793874568637.jpg',
        fallbackKey: 'bab-2',
        title: 'Instrumen LERP & Waktu',
        caption: 'Kalibrasi interpolasi gerak 60fps berbasis fisika ringan.',
        era: 'Musim Dingin · Tahun Ke-28',
      },
      {
        id: 'bab-3',
        src: '/src/assets/images/regenerated_image_1793874570352.jpg',
        fallbackKey: 'bab-3',
        title: 'Padang Blue Moonweed',
        caption: 'Studi palet warna tenang dari memori perjalanan utara.',
        era: 'Musim Semi · Tahun Ke-29',
      },
    ],
    values: [
      {
        id: 'efisiensi',
        title: 'Efisiensi',
        desc: 'Hemat siklus CPU & GPU',
        icon: 'cpu',
      },
      {
        id: 'ketelitian',
        title: 'Ketelitian',
        desc: 'Rasio ruang & ritme baca',
        icon: 'compass',
      },
      {
        id: 'eksplorasi',
        title: 'Eksplorasi',
        desc: 'Rasa ingin tahu tak usai',
        icon: 'sparkles',
      },
      {
        id: 'kemandirian',
        title: 'Kemandirian',
        desc: 'Kode bersih & tahan lama',
        icon: 'shield',
      },
    ],
  },
  chapterTwo: {
    label: 'CHAPTER II — EKSPERIMEN TERPILIH',
    title: 'Rute Eksplorasi & Rakitan Karya',
    subtitle:
      'Kumpulan prototipe antarmuka, optimasi sistem, dan instrumen kecerdasan buatan yang ditempa di bengkel kerja.',
    categories: ['Semua', 'Antarmuka Web', 'Optimasi Sistem', 'Eksperimen AI'],
    projects: [
      {
        id: 'proj-1',
        title: 'Diorama Peta Kuno & Mesin Perspektif 2.5D',
        category: 'Antarmuka Web',
        location: 'Arsip Geometri · v2.4',
        summary:
          'Implementasi panggung interaktif berlapis menggunakan murni CSS 3D Transforms dan interpolasi linier tanpa pustaka WebGL berat.',
        details:
          'Proyek ini mengeksplorasi bagaimana ilusi kedalaman ruang (parallax & tilt) dapat berjalan mulus 60fps di peramban mobile kelas bawah. Dengan memisahkan layer latar (-35px), subjek fokal (0px), dan kartu informasi (+45px), pengguna mendapatkan pengalaman taktil yang responsif terhadap sentuhan jari maupun kursor.',
        metrics: '0 KB Library 3D · 60 FPS Stabil · Touch Pan-Y',
        image: './images/proyek-1.webp',
        fallbackKey: 'proyek-1',
        featured: true,
        demoUrl: '#panggung-25d',
      },
      {
        id: 'proj-2',
        title: 'Arsitektur Render Kertas Perkamen',
        category: 'Optimasi Sistem',
        location: 'Bengkel Performa · v1.8',
        summary:
          'Teknik pembatasan overdraw GPU dengan mengisolasi efek blur kaca dan mengandalkan lapisan vektor ringan.',
        details:
          'Mengurangi beban komposit layar pada perangkat bergerak dengan membatasi backdrop-filter hanya pada elemen mikro yang esensial, sementara permukaan lainnya menggunakan gradasi opasitas terukur dan garis batas perunggu tipis.',
        metrics: 'GPU Memory -64% · First Paint 0.3s',
        image: './images/proyek-2.webp',
        fallbackKey: 'proyek-2',
        featured: false,
        demoUrl: '#kronik',
      },
      {
        id: 'proj-3',
        title: 'Indeks Grimoire & Pencarian Semantik Lokal',
        category: 'Eksperimen AI',
        location: 'Laboratorium Bahasa · v1.2',
        summary:
          'Sistem pengarsipan catatan perjalanan yang mengelompokkan fragmen ide berdasarkan kedekatan makna dan konteks waktu.',
        details:
          'Dirancang seperti buku catatan pengembara yang dapat menyusun ulang halamannya sendiri. Menggunakan struktur data JSON terpusat yang memudahkan kurasi manual sekaligus siap dihubungkan ke pipeline embedding ringan.',
        metrics: 'Latensi < 12ms · Struktur Modular',
        image: './images/proyek-3.webp',
        fallbackKey: 'proyek-3',
        featured: false,
        demoUrl: '#galeri',
      },
      {
        id: 'proj-4',
        title: 'Sistem Grid Sambungan Kayu (Joinery UI)',
        category: 'Antarmuka Web',
        location: 'Studi Tipografi · v3.0',
        summary:
          'Tata letak editorial responsif yang terinspirasi dari teknik sambungan kayu tradisional tanpa paku (mortise & tenon).',
        details:
          'Setiap modul halaman saling mengunci dengan proporsi ruang kosong yang terukur. Dari layar ponsel 360px hingga monitor 1440px, tipografi serif dan sans-serif beradaptasi menggunakan fungsi clamp() yang presisi.',
        metrics: 'Skala Clamp Dinamis · WCAG AA Contrast',
        image: './images/proyek-4.webp',
        fallbackKey: 'proyek-4',
        featured: false,
        demoUrl: '#catatan',
      },
    ],
  },
  carouselSection: {
    label: 'CHAPTER III — PANORAMIC ARCHIVE',
    title: 'Fragmen Perjalanan dalam Gulungan Kanvas',
    subtitle:
      'Geser secara horizontal untuk menelusuri lima tahapan proses penciptaan karya—dari sketsa sunyi hingga nyala api unggun di akhir bab.',
  },
  carouselItems: [
    {
      id: 'car-1',
      roman: 'I',
      subtitle: 'AWAL MULA CATATAN',
      title: 'Mencatat Hal-Hal Sepele.',
      quote:
        'Karya besar sering kali berawal dari goresan kecil di sudut buku catatan yang hampir terlupakan saat hujan turun.',
      annotation: 'Pilih satu masalah nyata dan amati dengan perlahan, seolah membaca surat lama dengan suara pelan untuk menemukan ritmenya.',
      image: './images/carousel-1.webp',
      fallbackKey: 'carousel-1',
    },
    {
      id: 'car-2',
      roman: 'II',
      subtitle: 'STRUKTUR & NADA',
      title: 'Kode Adalah Musik yang Terlihat.',
      quote:
        'Baris-baris instruksi pertama selalu dinyanyikan melalui ketukan logika yang teratur dan proporsi yang seimbang.',
      annotation: 'Layaknya dawai harpa pada patung marmer klasik, arsitektur komponen yang baik beresonansi tanpa menyisakan kerumitan yang sia-sia.',
      image: './images/carousel-2.webp',
      fallbackKey: 'carousel-2',
    },
    {
      id: 'car-3',
      roman: 'III',
      subtitle: 'KETELITIAN PENGRAJIN',
      title: 'Menyusun Lembaran Tanpa Debu.',
      quote:
        'Eksperimen teknis tidak selalu bercerita tentang kemegahan, melainkan tentang kejujuran fungsi di balik layar.',
      annotation: 'Setiap milidetik waktu muat yang berhasil dipangkas adalah bentuk penghormatan kepada waktu milik pengembara yang singgah.',
      image: './images/carousel-3.webp',
      fallbackKey: 'carousel-3',
    },
    {
      id: 'car-4',
      roman: 'IV',
      subtitle: 'EMPATI ANTARMUKA',
      title: 'Menangkap Perasaan Pengguna.',
      quote:
        'Sentuhan jari di layar kaca harus terasa sealami membalik halaman kertas perkamen yang hangat.',
      annotation: 'Itulah mengapa gerak panggung 2.5D tidak boleh pernah menghalangi langkah gulir vertikal halaman di genggaman tangan.',
      image: './images/carousel-4.webp',
      fallbackKey: 'carousel-4',
    },
    {
      id: 'car-5',
      roman: 'V',
      subtitle: 'API UNGGUN & INGATAN',
      title: 'Merakit agar Tetap Manusiawi.',
      quote:
        'Teknologi lahir ketika manusia pertama kali berbagi cerita di sekeliling nyala api unggun di tengah malam.',
      annotation: 'Simpan catatan perjalanan ini untuk dibaca kembali kelak, ketika era telah berganti dan bunga Blue Moonweed kembali mekar.',
      image: './images/carousel-5.webp',
      fallbackKey: 'carousel-5',
    },
  ],
  fieldNotes: [
    {
      date: 'Hari ke-104 · Hutan Utara',
      title: 'Mengapa Tidak Menggunakan Library 3D Berat?',
      body: 'Sebuah patung di taman kota tidak membutuhkan mesin uap untuk tampak berwibawa di bawah sinar matahari sore. Dengan CSS 3D perspective dan rumus LERP sederhana, kita mendapatkan keanggunan kedalaman ruang tanpa menguras baterai perangkat pengunjung.',
    },
    {
      date: 'Hari ke-189 · Kota Pelabuhan',
      title: 'Filosofi Bunga Blue Moonweed (#4A7C9B)',
      body: 'Bunga biru kesukaan sang pahlawan membutuhkan waktu bertahun-tahun untuk ditemukan kembali. Dalam antarmuka ini, warna biru tersebut hanya muncul sebagai penanda fokus dan ketenangan di atas hamparan kertas perkamen (#FBFBF9).',
    },
    {
      date: 'Hari ke-240 · Bengkel Kayu',
      title: 'Kemudahan Mengganti Aset Lokal',
      body: 'Seluruh path gambar menggunakan referensi relatif ./images/*.webp di dalam konstanta PORTFOLIO_DATA. Selama file gambar lokal belum ditempatkan, sistem secara otomatis melukis ilustrasi SVG klasik sebagai pengganti yang setia.',
    },
  ],
};

// Alias sesuai instruksi teknis agar kedua nama variabel tersedia
export const PORTFOLIO_CONFIG = PORTFOLIO_DATA;

// ============================================================================
// 2. GENERATOR FALLBACK SVG ARTISTIK (SOUSOU NO FRIEREN EDITORIAL THEME)
// Menghasilkan data URI SVG beresolusi tinggi untuk handler `onerror` pada <img>
// ============================================================================
function getFallbackSvgDataUri(key: string): string {
  const svgs: Record<string, string> = {
    statue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 760" fill="none">
      <defs>
        <radialGradient id="halo" cx="50%" cy="38%" r="48%">
          <stop offset="0%" stop-color="#C5A880" stop-opacity="0.32"/>
          <stop offset="65%" stop-color="#4A7C9B" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#FBFBF9" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="marble" x1="180" y1="110" x2="460" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#F1EFEA"/>
          <stop offset="85%" stop-color="#DDD6C7"/>
          <stop offset="100%" stop-color="#C5B9A5"/>
        </linearGradient>
        <linearGradient id="marbleShadow" x1="260" y1="150" x2="420" y2="580" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#E5E0D5"/>
          <stop offset="100%" stop-color="#B8AC99"/>
        </linearGradient>
        <linearGradient id="hill" x1="320" y1="520" x2="320" y2="750" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#5B7053"/>
          <stop offset="45%" stop-color="#3F523B"/>
          <stop offset="100%" stop-color="#273326"/>
        </linearGradient>
        <linearGradient id="goldSword" x1="320" y1="310" x2="320" y2="610" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#DFC59E"/>
          <stop offset="50%" stop-color="#C5A880"/>
          <stop offset="100%" stop-color="#8C7352"/>
        </linearGradient>
      </defs>

      <!-- Subtle celestial geometric rings behind statue -->
      <circle cx="320" cy="295" r="245" fill="url(#halo)"/>
      <circle cx="320" cy="295" r="205" stroke="#C5A880" stroke-width="1" stroke-dasharray="4 6" opacity="0.55"/>
      <circle cx="320" cy="295" r="168" stroke="#4A7C9B" stroke-width="0.9" opacity="0.35"/>
      <path d="M320 55 L320 95 M320 495 L320 535 M80 295 L120 295 M520 295 L560 295" stroke="#C5A880" stroke-width="1.2" opacity="0.5"/>

      <!-- Flowing Hero Cloak (Back Layer) -->
      <path d="M235 235 C175 295 145 430 130 565 C195 585 265 590 320 585 C385 590 455 580 505 555 C485 425 455 295 405 235 Z" fill="url(#marbleShadow)" stroke="#B5A892" stroke-width="1.5"/>
      <path d="M250 245 C205 320 185 440 175 560" stroke="#9E917C" stroke-width="1.5" opacity="0.6"/>
      <path d="M390 245 C430 320 450 440 460 555" stroke="#9E917C" stroke-width="1.5" opacity="0.6"/>

      <!-- Stone Pedestal Base -->
      <path d="M215 545 L425 545 L445 605 L195 605 Z" fill="#D8D2C5" stroke="#ABA08E" stroke-width="1.5"/>
      <rect x="205" y="532" width="230" height="16" rx="3" fill="#EAE6DC" stroke="#B5A892" stroke-width="1.2"/>

      <!-- Statue Torso & Tunic Folds -->
      <path d="M255 230 C255 215 280 205 320 205 C360 205 385 215 385 230 L398 375 L388 532 L252 532 L242 375 Z" fill="url(#marble)" stroke="#B8AC99" stroke-width="1.5"/>
      <!-- Carved drapery lines -->
      <path d="M282 235 C292 315 288 415 275 530" stroke="#C4B9A6" stroke-width="2" fill="none"/>
      <path d="M358 235 C348 315 352 415 365 530" stroke="#C4B9A6" stroke-width="2" fill="none"/>
      <path d="M262 225 C295 265 345 265 378 225" stroke="#B5A892" stroke-width="2" fill="none"/>

      <!-- Shoulder Pauldrons & Cloak Clasp -->
      <path d="M232 238 C242 210 272 204 298 218 L282 258 C258 256 240 250 232 238 Z" fill="#F6F4EF" stroke="#B5A892" stroke-width="1.5"/>
      <path d="M408 238 C398 210 368 204 342 218 L358 258 C382 256 400 250 408 238 Z" fill="#E8E3D9" stroke="#B5A892" stroke-width="1.5"/>
      <circle cx="320" cy="234" r="11" fill="#C5A880" stroke="#8C7352" stroke-width="1.5"/>
      <circle cx="320" cy="234" r="5" fill="#4A7C9B"/>

      <!-- Classical Marble Head & Wind-swept Hair (Himmel Motif) -->
      <path d="M298 182 L298 212 L342 212 L342 182 Z" fill="#EAE5DB" stroke="#B5A892" stroke-width="1.2"/>
      <path d="M286 135 C286 105 300 90 320 90 C340 90 354 105 354 135 C354 166 338 190 320 190 C302 190 286 166 286 135 Z" fill="url(#marble)" stroke="#B5A892" stroke-width="1.5"/>
      <!-- Sculpted Hair Locks -->
      <path d="M282 132 C276 104 295 80 322 80 C349 80 366 102 358 134 C352 116 338 106 320 108 C302 106 290 116 282 132 Z" fill="#EAE6DD" stroke="#AEA28E" stroke-width="1.4"/>
      <path d="M285 118 C272 130 270 152 280 168" stroke="#B5A892" stroke-width="1.5" fill="none"/>
      <path d="M355 118 C368 130 370 152 360 168" stroke="#B5A892" stroke-width="1.5" fill="none"/>
      <!-- Serene Classical Face Features -->
      <path d="M303 136 Q310 133 315 136" stroke="#8E8371" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M325 136 Q330 133 337 136" stroke="#8E8371" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M320 136 L318 153 L323 155" stroke="#9B907E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M312 167 Q320 171 328 167" stroke="#8E8371" stroke-width="1.4" stroke-linecap="round"/>

      <!-- Sculpted Arms Resting on Sword Hilt -->
      <path d="M248 248 C242 290 262 325 304 334 L312 314 C282 304 270 282 272 252 Z" fill="url(#marble)" stroke="#B5A892" stroke-width="1.5"/>
      <path d="M392 248 C398 290 378 325 336 334 L328 314 C358 304 370 282 368 252 Z" fill="url(#marbleShadow)" stroke="#B5A892" stroke-width="1.5"/>

      <!-- Hero's Longsword (Center Vertical Anchor) -->
      <rect x="316" y="290" width="8" height="42" rx="2" fill="#8C7352"/>
      <circle cx="320" cy="285" r="9" fill="#C5A880" stroke="#7A6242" stroke-width="1.5"/>
      <path d="M282 330 L358 330 L348 340 L292 340 Z" fill="#C5A880" stroke="#7A6242" stroke-width="1.5"/>
      <path d="M312 340 L328 340 L325 562 L320 578 L315 562 Z" fill="url(#goldSword)" stroke="#8C7352" stroke-width="1.3"/>
      <line x1="320" y1="342" x2="320" y2="565" stroke="#FFFDF9" stroke-width="1.2" opacity="0.7"/>

      <!-- Clasp Hands Over Hilt -->
      <ellipse cx="320" cy="324" rx="16" ry="10" fill="#F3F0E8" stroke="#ABA08E" stroke-width="1.4"/>

      <!-- Weathered Moss Spots on Statue Pedestal & Shoulder -->
      <path d="M238 232 Q252 225 265 234 Q254 244 238 232 Z" fill="#6A8759" opacity="0.75"/>
      <path d="M210 532 Q245 524 275 538 L210 542 Z" fill="#5D7A4E" opacity="0.85"/>
      <path d="M375 536 Q405 524 432 536 L430 544 L375 544 Z" fill="#5D7A4E" opacity="0.85"/>

      <!-- Lush Mossy Hill Mound (Foreground Base) -->
      <path d="M65 695 C115 585 215 548 320 548 C425 548 525 585 575 695 C510 735 130 735 65 695 Z" fill="url(#hill)"/>
      <path d="M95 685 C155 595 235 565 320 565 C405 565 485 595 545 685" stroke="#7B966E" stroke-width="2" opacity="0.45" fill="none"/>

      <!-- Blue Moonweed Flowers (#4A7C9B & Sky Blue Petals) Blooming Around the Statue -->
      <g transform="translate(185, 595)">
        <path d="M0 45 Q-8 20 -4 0" stroke="#6F8F63" stroke-width="2" fill="none"/>
        <circle cx="-4" cy="0" r="14" fill="#4A7C9B" opacity="0.95"/>
        <circle cx="-12" cy="-6" r="8" fill="#6FA3C4"/>
        <circle cx="4" cy="-6" r="8" fill="#6FA3C4"/>
        <circle cx="-4" cy="-13" r="8" fill="#82B5D6"/>
        <circle cx="-4" cy="-4" r="4" fill="#F6E3BA"/>
      </g>
      <g transform="translate(235, 572) scale(0.85)">
        <path d="M0 45 Q6 20 2 0" stroke="#6F8F63" stroke-width="2" fill="none"/>
        <circle cx="2" cy="0" r="14" fill="#4A7C9B"/>
        <circle cx="-6" cy="-6" r="8" fill="#77ACD0"/>
        <circle cx="10" cy="-6" r="8" fill="#77ACD0"/>
        <circle cx="2" cy="-4" r="4" fill="#F6E3BA"/>
      </g>
      <g transform="translate(425, 582)">
        <path d="M0 48 Q8 22 4 0" stroke="#6F8F63" stroke-width="2" fill="none"/>
        <circle cx="4" cy="0" r="15" fill="#4A7C9B"/>
        <circle cx="-5" cy="-7" r="9" fill="#6FA3C4"/>
        <circle cx="13" cy="-7" r="9" fill="#6FA3C4"/>
        <circle cx="4" cy="-14" r="9" fill="#88B9D9"/>
        <circle cx="4" cy="-4" r="4.5" fill="#F6E3BA"/>
      </g>
      <g transform="translate(380, 610) scale(0.78)">
        <path d="M0 40 Q-5 18 -2 0" stroke="#6F8F63" stroke-width="2" fill="none"/>
        <circle cx="-2" cy="0" r="13" fill="#4A7C9B"/>
        <circle cx="-9" cy="-5" r="8" fill="#77ACD0"/>
        <circle cx="6" cy="-5" r="8" fill="#77ACD0"/>
        <circle cx="-2" cy="-3" r="4" fill="#F6E3BA"/>
      </g>
      <g transform="translate(295, 622) scale(0.9)">
        <path d="M0 38 Q4 18 2 0" stroke="#6F8F63" stroke-width="2" fill="none"/>
        <circle cx="2" cy="0" r="13" fill="#4A7C9B"/>
        <circle cx="-6" cy="-5" r="8" fill="#77ACD0"/>
        <circle cx="10" cy="-5" r="8" fill="#77ACD0"/>
        <circle cx="2" cy="-3" r="4" fill="#F6E3BA"/>
      </g>

      <!-- Warm Wild Poppies / Bronze Accent Blossoms (Echoing TerraGrip foreground) -->
      <g transform="translate(145, 640) scale(0.85)">
        <circle cx="0" cy="0" r="11" fill="#C5A880"/>
        <circle cx="-6" cy="-4" r="7" fill="#DEC39D"/>
        <circle cx="0" cy="-2" r="3.5" fill="#2C302E"/>
      </g>
      <g transform="translate(480, 635) scale(0.85)">
        <circle cx="0" cy="0" r="11" fill="#C5A880"/>
        <circle cx="6" cy="-4" r="7" fill="#DEC39D"/>
        <circle cx="0" cy="-2" r="3.5" fill="#2C302E"/>
      </g>

      <!-- Floating Wind Petals & Light Motes -->
      <path d="M165 240 C175 234 185 240 178 248 C170 252 162 246 165 240 Z" fill="#6FA3C4" opacity="0.8"/>
      <path d="M465 190 C475 184 485 190 478 198 C470 202 462 196 465 190 Z" fill="#4A7C9B" opacity="0.75"/>
      <path d="M440 340 C448 335 456 340 450 347 C443 350 437 345 440 340 Z" fill="#C5A880" opacity="0.8"/>
      <circle cx="210" cy="155" r="3" fill="#C5A880" opacity="0.7"/>
      <circle cx="435" cy="140" r="3.5" fill="#C5A880" opacity="0.7"/>
      <circle cx="150" cy="390" r="2.5" fill="#4A7C9B" opacity="0.6"/>
    </svg>`,

    'bab-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
      <rect width="600" height="480" fill="#EAE6DF"/>
      <circle cx="460" cy="110" r="140" fill="#C5A880" opacity="0.22"/>
      <path d="M0 360 Q180 310 360 350 T600 330 L600 480 L0 480 Z" fill="#D5CFC4"/>
      <!-- Arch window frame -->
      <path d="M80 400 L80 150 A120 120 0 0 1 320 150 L320 400 Z" fill="#FBFBF9" stroke="#C5A880" stroke-width="2"/>
      <line x1="200" y1="30" x2="200" y2="400" stroke="#C5A880" stroke-width="1.5" opacity="0.6"/>
      <line x1="80" y1="210" x2="320" y2="210" stroke="#C5A880" stroke-width="1.5" opacity="0.6"/>
      <!-- Open Grimoire / Craftsman Sketchbook -->
      <path d="M210 310 L350 285 L490 310 L470 410 L350 385 L230 410 Z" fill="#FBFBF9" stroke="#2C302E" stroke-width="2"/>
      <line x1="350" y1="285" x2="350" y2="385" stroke="#C5A880" stroke-width="2"/>
      <circle cx="290" cy="345" r="24" stroke="#4A7C9B" stroke-width="1.8"/>
      <path d="M380 325 L445 335 M380 345 L435 355 M380 365 L420 372" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
      <!-- Wood Chisel & Compass -->
      <path d="M430 140 L475 260 L405 260 Z" stroke="#2C302E" stroke-width="2" fill="none"/>
      <circle cx="430" cy="140" r="8" fill="#C5A880" stroke="#2C302E" stroke-width="1.5"/>
    </svg>`,

    'bab-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
      <rect width="600" height="480" fill="#232927"/>
      <circle cx="300" cy="240" r="175" stroke="#C5A880" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.6"/>
      <circle cx="300" cy="240" r="130" stroke="#4A7C9B" stroke-width="1.5" opacity="0.7"/>
      <circle cx="300" cy="240" r="82" stroke="#C5A880" stroke-width="2"/>
      <path d="M300 45 L300 435 M105 240 L495 240" stroke="#C5A880" stroke-width="1" opacity="0.45"/>
      <polygon points="300,120 325,215 420,240 325,265 300,360 275,265 180,240 275,215" fill="#C5A880" fill-opacity="0.2" stroke="#C5A880" stroke-width="2"/>
      <circle cx="300" cy="240" r="16" fill="#4A7C9B" stroke="#FBFBF9" stroke-width="2"/>
    </svg>`,

    'bab-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" fill="none">
      <rect width="800" height="420" fill="#EBF0F2"/>
      <circle cx="620" cy="120" r="72" fill="#C5A880" opacity="0.35"/>
      <!-- Distant mountains -->
      <path d="M0 310 L180 175 L340 275 L520 145 L710 265 L800 210 L800 420 L0 420 Z" fill="#CBD7DF"/>
      <path d="M0 340 Q240 265 490 320 T800 295 L800 420 L0 420 Z" fill="#4A7C9B" opacity="0.32"/>
      <path d="M0 365 Q300 315 580 355 T800 340 L800 420 L0 420 Z" fill="#2C302E" opacity="0.85"/>
      <!-- Blue Moonweed Clusters -->
      <g fill="#4A7C9B">
        <circle cx="160" cy="340" r="10"/><circle cx="185" cy="350" r="8"/><circle cx="220" cy="335" r="12"/>
        <circle cx="440" cy="345" r="11"/><circle cx="475" cy="332" r="9"/><circle cx="510" cy="348" r="12"/>
        <circle cx="640" cy="335" r="10"/><circle cx="670" cy="348" r="8"/>
      </g>
      <g fill="#C5A880">
        <circle cx="160" cy="340" r="3"/><circle cx="220" cy="335" r="3.5"/><circle cx="440" cy="345" r="3.5"/><circle cx="510" cy="348" r="3.5"/>
      </g>
    </svg>`,

    'proyek-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 640" fill="none">
      <rect width="720" height="640" fill="#1F2624"/>
      <circle cx="360" cy="300" r="220" fill="#4A7C9B" opacity="0.14"/>
      <circle cx="360" cy="300" r="190" stroke="#C5A880" stroke-width="1.5" stroke-dasharray="5 7" opacity="0.6"/>
      <!-- 2.5D Isometric Floating Planes -->
      <path d="M360 130 L550 225 L360 320 L170 225 Z" fill="#2C3532" stroke="#C5A880" stroke-width="2"/>
      <path d="M360 215 L550 310 L360 405 L170 310 Z" fill="#4A7C9B" fill-opacity="0.25" stroke="#4A7C9B" stroke-width="2"/>
      <path d="M360 300 L550 395 L360 490 L170 395 Z" fill="#FBFBF9" fill-opacity="0.08" stroke="#C5A880" stroke-width="1.5"/>
      <line x1="360" y1="90" x2="360" y2="520" stroke="#C5A880" stroke-width="1.5" stroke-dasharray="4 4"/>
      <circle cx="360" cy="225" r="18" fill="#C5A880"/>
      <circle cx="360" cy="310" r="12" fill="#4A7C9B" stroke="#FBFBF9" stroke-width="2"/>
    </svg>`,

    'proyek-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" fill="none">
      <rect width="640" height="400" fill="#29302D"/>
      <path d="M0 290 L140 205 L285 265 L450 155 L640 245 L640 400 L0 400 Z" fill="#1E2422"/>
      <circle cx="480" cy="120" r="55" fill="#C5A880" opacity="0.35"/>
      <path d="M70 210 C190 90 310 310 430 170 C500 95 550 180 590 140" stroke="#C5A880" stroke-width="3" fill="none"/>
      <path d="M70 245 C190 140 310 340 430 205 C500 135 550 215 590 175" stroke="#4A7C9B" stroke-width="2" stroke-dasharray="5 5" fill="none"/>
    </svg>`,

    'proyek-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" fill="none">
      <rect width="640" height="400" fill="#232B30"/>
      <circle cx="320" cy="200" r="135" stroke="#4A7C9B" stroke-width="1.5" opacity="0.5"/>
      <circle cx="320" cy="200" r="85" stroke="#C5A880" stroke-width="1.5" opacity="0.65"/>
      <!-- Constellation / Knowledge Nodes -->
      <line x1="210" y1="140" x2="320" y2="200" stroke="#C5A880" stroke-width="1.5"/>
      <line x1="320" y1="200" x2="435" y2="155" stroke="#C5A880" stroke-width="1.5"/>
      <line x1="320" y1="200" x2="375" y2="295" stroke="#4A7C9B" stroke-width="1.5"/>
      <line x1="320" y1="200" x2="225" y2="275" stroke="#4A7C9B" stroke-width="1.5"/>
      <circle cx="320" cy="200" r="14" fill="#C5A880"/>
      <circle cx="210" cy="140" r="9" fill="#4A7C9B"/>
      <circle cx="435" cy="155" r="9" fill="#4A7C9B"/>
      <circle cx="375" cy="295" r="8" fill="#FBFBF9"/>
      <circle cx="225" cy="275" r="8" fill="#FBFBF9"/>
    </svg>`,

    'proyek-4': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" fill="none">
      <rect width="640" height="400" fill="#2A2622"/>
      <!-- Architectural Wood Joinery Grid -->
      <rect x="90" y="65" width="210" height="270" rx="8" stroke="#C5A880" stroke-width="2" fill="#35302B"/>
      <rect x="325" y="65" width="225" height="125" rx="8" stroke="#4A7C9B" stroke-width="2" fill="#2F3637"/>
      <rect x="325" y="210" width="225" height="125" rx="8" stroke="#C5A880" stroke-width="1.5" fill="#35302B"/>
      <circle cx="195" cy="200" r="48" stroke="#C5A880" stroke-width="1.5"/>
    </svg>`,

    'carousel-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 660" fill="none">
      <rect width="560" height="660" fill="#1C201E"/>
      <radialGradient id="c1" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#C5A880" stop-opacity="0.32"/>
        <stop offset="100%" stop-color="#1C201E" stop-opacity="0"/>
      </radialGradient>
      <rect width="560" height="660" fill="url(#c1)"/>
      <!-- Classical Scholar's Quill & Open Chronicle -->
      <path d="M120 470 Q200 440 280 475 Q360 440 440 470 L455 545 Q360 515 280 550 Q200 515 105 545 Z" fill="#E8E1D3" stroke="#C5A880" stroke-width="2"/>
      <path d="M355 165 C305 225 275 335 265 465" stroke="#C5A880" stroke-width="3" stroke-linecap="round"/>
      <path d="M355 165 C395 195 405 275 310 365 C295 310 315 225 355 165 Z" fill="#4A7C9B" fill-opacity="0.55" stroke="#C5A880" stroke-width="1.8"/>
      <circle cx="280" cy="270" r="120" stroke="#C5A880" stroke-width="1" stroke-dasharray="4 6" opacity="0.45"/>
    </svg>`,

    'carousel-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 660" fill="none">
      <rect width="560" height="660" fill="#182220"/>
      <circle cx="280" cy="290" r="165" fill="#4A7C9B" opacity="0.16"/>
      <circle cx="280" cy="290" r="145" stroke="#C5A880" stroke-width="1.2" opacity="0.5"/>
      <!-- Classical Marble Bust & Lyre Silhouette -->
      <path d="M185 520 C190 420 225 385 280 385 C335 385 370 420 375 520 Z" fill="#E6E1D6" stroke="#C5A880" stroke-width="2"/>
      <circle cx="280" cy="275" r="56" fill="#EFECE4" stroke="#C5A880" stroke-width="2"/>
      <!-- Classical Lyre Instrument -->
      <path d="M335 330 C315 265 340 220 365 215 L425 230 C435 265 415 320 380 355 Z" fill="#C5A880" fill-opacity="0.3" stroke="#C5A880" stroke-width="2.5"/>
      <line x1="358" y1="222" x2="348" y2="338" stroke="#FBFBF9" stroke-width="1.2"/>
      <line x1="375" y1="226" x2="365" y2="342" stroke="#FBFBF9" stroke-width="1.2"/>
      <line x1="392" y1="230" x2="382" y2="346" stroke="#FBFBF9" stroke-width="1.2"/>
    </svg>`,

    'carousel-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 660" fill="none">
      <rect width="560" height="660" fill="#1B2625"/>
      <!-- Archival Bookshelves & Floating Illuminated Grimoire -->
      <g stroke="#C5A880" stroke-width="1.2" opacity="0.28">
        <line x1="70" y1="120" x2="490" y2="120"/>
        <line x1="70" y1="230" x2="490" y2="230"/>
        <line x1="70" y1="340" x2="490" y2="340"/>
      </g>
      <circle cx="280" cy="330" r="140" fill="#4A7C9B" opacity="0.22"/>
      <path d="M135 350 L275 310 L275 455 L135 485 Z" fill="#F5F1E8" stroke="#C5A880" stroke-width="2"/>
      <path d="M425 350 L285 310 L285 455 L425 485 Z" fill="#E5DEC9" stroke="#C5A880" stroke-width="2"/>
      <circle cx="280" cy="235" r="26" fill="#C5A880" opacity="0.8"/>
    </svg>`,

    'carousel-4': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 660" fill="none">
      <rect width="560" height="660" fill="#241F1C"/>
      <!-- Warm Renaissance Drapery & Lute / Artisan Tools -->
      <path d="M0 0 L220 0 L140 660 L0 660 Z" fill="#6E3B30" opacity="0.45"/>
      <circle cx="310" cy="310" r="145" stroke="#C5A880" stroke-width="1.5" opacity="0.5"/>
      <ellipse cx="275" cy="365" rx="75" ry="52" transform="rotate(-28 275 365)" fill="#C5A880" fill-opacity="0.35" stroke="#C5A880" stroke-width="2.2"/>
      <line x1="215" y1="395" x2="425" y2="275" stroke="#FBFBF9" stroke-width="4"/>
      <circle cx="275" cy="365" r="20" fill="#1C201E" stroke="#C5A880" stroke-width="1.8"/>
    </svg>`,

    'carousel-5': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 660" fill="none">
      <rect width="560" height="660" fill="#141716"/>
      <radialGradient id="fireGlow" cx="50%" cy="68%" r="48%">
        <stop offset="0%" stop-color="#E59A52" stop-opacity="0.55"/>
        <stop offset="50%" stop-color="#C5A880" stop-opacity="0.20"/>
        <stop offset="100%" stop-color="#141716" stop-opacity="0"/>
      </radialGradient>
      <rect width="560" height="660" fill="url(#fireGlow)"/>
      <!-- Starry Night Sky & Rising Embers -->
      <circle cx="150" cy="140" r="2" fill="#FBFBF9" opacity="0.8"/>
      <circle cx="410" cy="110" r="2.5" fill="#C5A880" opacity="0.9"/>
      <circle cx="290" cy="95" r="2" fill="#4A7C9B" opacity="0.9"/>
      <circle cx="245" cy="240" r="3" fill="#E59A52" opacity="0.85"/>
      <circle cx="325" cy="210" r="2.5" fill="#E59A52" opacity="0.75"/>
      <circle cx="285" cy="175" r="2" fill="#C5A880" opacity="0.8"/>
      <!-- Campfire Flames & Crossed Logs -->
      <path d="M175 525 L385 475 M175 475 L385 525" stroke="#7A583B" stroke-width="14" stroke-linecap="round"/>
      <path d="M280 280 C335 350 355 425 325 485 C300 510 260 510 235 485 C205 425 225 350 280 280 Z" fill="#D98A46" opacity="0.9"/>
      <path d="M280 335 C315 385 322 435 305 480 C290 495 270 495 255 480 C238 435 245 385 280 335 Z" fill="#F5D08A"/>
    </svg>`,
  };

  const rawSvg = svgs[key] || svgs['bab-1'];
  return `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;
}

// ============================================================================
// 3. GENERATOR SINGLE-FILE INDEX.HTML MANDIRI (UNTUK DEPLOY GITHUB / NETLIFY)
// Menghasilkan 1 file `index.html` utuh yang berisi konfigurasi data, CSS,
// dan Vanilla JS 2.5D LERP Tilt tanpa ketergantungan build tool.
// ============================================================================
function generateStandaloneHtml(): string {
  const serializedConfig = JSON.stringify(PORTFOLIO_DATA, null, 2);
  const svgMap: Record<string, string> = {
    statue: getFallbackSvgDataUri('statue'),
    'bab-1': getFallbackSvgDataUri('bab-1'),
    'bab-2': getFallbackSvgDataUri('bab-2'),
    'bab-3': getFallbackSvgDataUri('bab-3'),
    'proyek-1': getFallbackSvgDataUri('proyek-1'),
    'proyek-2': getFallbackSvgDataUri('proyek-2'),
    'proyek-3': getFallbackSvgDataUri('proyek-3'),
    'proyek-4': getFallbackSvgDataUri('proyek-4'),
    'carousel-1': getFallbackSvgDataUri('carousel-1'),
    'carousel-2': getFallbackSvgDataUri('carousel-2'),
    'carousel-3': getFallbackSvgDataUri('carousel-3'),
    'carousel-4': getFallbackSvgDataUri('carousel-4'),
    'carousel-5': getFallbackSvgDataUri('carousel-5'),
  };

  return `<!doctype html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${PORTFOLIO_DATA.identity.handle} — ${PORTFOLIO_DATA.identity.titleBadge}</title>
  <meta name="description" content="${PORTFOLIO_DATA.identity.tagline}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #FBFBF9; color: #2C302E; overflow-x: hidden; }
    h1, h2, h3, .font-serif-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
    .stage-perspective { perspective: 1000px; touch-action: pan-y; }
    .stage-preserve-3d { transform-style: preserve-3d; will-change: transform; }
    .hero-glass-card { background: rgba(255,255,255,0.78); border: 1px solid rgba(197,168,128,0.35); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="bg-[#FBFBF9] text-[#2C302E] antialiased">
  <div id="app"></div>
  <script>
    // ============================================================================
    // KONFIGURASI TERPUSAT — Edit path ./images/*.webp atau data proyek di sini
    // ============================================================================
    const PORTFOLIO_CONFIG = ${serializedConfig};
    const PORTFOLIO_DATA = PORTFOLIO_CONFIG;
    const FALLBACK_SVGS = ${JSON.stringify(svgMap)};

    const app = document.getElementById('app');
    app.innerHTML = \`
      <header class="sticky top-0 z-40 bg-[#FBFBF9]/95 border-b border-[#C5A880]/25">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a href="#top" class="font-serif-editorial text-2xl font-bold text-[#2C302E]">
            \${PORTFOLIO_DATA.identity.logoText}
            <span class="text-[11px] font-sans font-medium text-[#64748B] uppercase tracking-widest ml-1">\${PORTFOLIO_DATA.identity.levelShort}</span>
          </a>
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-[#64748B]">
            \${PORTFOLIO_DATA.navLinks.map(l => \`<a href="\${l.href}" class="hover:text-[#2C302E]">\${l.label}</a>\`).join('')}
          </nav>
          <a href="#eksperimen" class="px-4 py-2 rounded-full bg-[#2C302E] text-[#FBFBF9] border border-[#C5A880]/60 text-xs sm:text-sm font-medium">
            Jurnal Karya <span class="text-[#C5A880]">→</span>
          </a>
        </div>
      </header>
      <main id="top" class="max-w-[1280px] mx-auto px-4 sm:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4A7C9B] mb-4">
              <span class="w-2 h-2 rounded-full bg-[#4A7C9B]"></span>
              <span>\${PORTFOLIO_DATA.identity.heroKicker}</span>
            </div>
            <h1 class="font-serif-editorial font-bold text-5xl sm:text-6xl leading-tight mb-5">
              \${PORTFOLIO_DATA.identity.heroTitlePrefix} <em class="italic text-[#4A7C9B]">\${PORTFOLIO_DATA.identity.heroTitleItalic}</em> \${PORTFOLIO_DATA.identity.heroTitleSuffix}
            </h1>
            <p class="text-[#64748B] leading-relaxed mb-8">\${PORTFOLIO_DATA.identity.tagline}</p>
          </div>
          <div class="lg:col-span-6">
            <div id="stage-25d" class="stage-perspective relative w-full min-h-[460px] flex items-center justify-center">
              <div id="stage-inner" class="stage-preserve-3d relative w-full max-w-[500px] h-[440px] flex items-center justify-center">
                <img src="\${PORTFOLIO_DATA.identity.heroImage}" onerror="this.onerror=null;this.src=FALLBACK_SVGS['statue']" style="width:clamp(250px,42vw,400px);height:clamp(310px,48vw,450px);object-fit:contain;" />
              </div>
            </div>
          </div>
        </div>
      </main>
    \`;

    // Vanilla JS requestAnimationFrame + LERP 2.5D Tilt
    const stage = document.getElementById('stage-25d');
    const inner = document.getElementById('stage-inner');
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    stage.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width - 0.5) * 20;
      targetY = -((e.clientY - r.top) / r.height - 0.5) * 16;
    });
    stage.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });
    function animate() {
      currentX += (targetX - currentX) * 0.085;
      currentY += (targetY - currentY) * 0.085;
      inner.style.transform = \`rotateX(\${currentY.toFixed(2)}deg) rotateY(\${currentX.toFixed(2)}deg)\`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  </script>
</body>
</html>`;
}

// ============================================================================
// 4. KOMPONEN UTAMA APLIKASI (REACT + VANILLA rAF LERP ENGINE)
// ============================================================================
export default function App() {
  // Filter state untuk Bab II (Featured Experiments)
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Interactive 2.5D mode state
  const [autoOrbit, setAutoOrbit] = useState<boolean>(false);
  const [tiltDisplay, setTiltDisplay] = useState<{ x: string; y: string }>({
    x: '0.0',
    y: '0.0',
  });

  // Lightbox / Detail Modal state
  const [activeModal, setActiveModal] = useState<{
    title: string;
    subtitle: string;
    description: string;
    metrics?: string;
    image: string;
    fallbackKey: string;
  } | null>(null);

  // Asset Guide Modal state
  const [showAssetGuide, setShowAssetGuide] = useState<boolean>(false);
  const [copiedConfig, setCopiedConfig] = useState<boolean>(false);

  // Carousel scroll state
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselProgress, setCarouselProgress] = useState<number>(20);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const isDraggingCarousel = useRef<boolean>(false);
  const carouselStartX = useRef<number>(0);
  const carouselScrollLeft = useRef<number>(0);

  // Refs untuk 2.5D Interactive Stage (Vanilla JS requestAnimationFrame + LERP)
  const stageContainerRef = useRef<HTMLDivElement | null>(null);
  const stageInnerRef = useRef<HTMLDivElement | null>(null);
  const bgHaloRef = useRef<HTMLDivElement | null>(null);
  const focalStatueRef = useRef<HTMLDivElement | null>(null);
  const cardTopRightRef = useRef<HTMLDivElement | null>(null);
  const cardMidLeftRef = useRef<HTMLDivElement | null>(null);
  const cardBottomRightRef = useRef<HTMLDivElement | null>(null);

  // Penyimpanan koordinat LERP tanpa memicu re-render React setiap frame (60fps murni)
  const motionRef = useRef({
    targetX: 0, // rotateY (horizontal tilt)
    targetY: 0, // rotateX (vertical tilt)
    currentX: 0,
    currentY: 0,
    scrollOffset: 0,
    currentScroll: 0,
    isPointerInside: false,
    touchStartX: 0,
    touchStartY: 0,
  });

  // ==========================================================================
  // ENGINE 2.5D INTERACTIVE TILT (requestAnimationFrame + Linear Interpolation)
  // ==========================================================================
  useEffect(() => {
    let animationFrameId: number;
    let frameCounter = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Batasi parallax lembut pada area Hero (0 - 700px)
      motionRef.current.scrollOffset = Math.min(scrollY, 700) * 0.045;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateStage = (timestamp: number) => {
      const m = motionRef.current;

      // Jika tombol "Mode Interaktif 2.5D" diaktifkan, berikan orbit sinusoidal halus
      let desiredX = m.targetX;
      let desiredY = m.targetY;

      if (autoOrbit && !m.isPointerInside) {
        desiredX = Math.sin(timestamp * 0.0016) * 12;
        desiredY = Math.cos(timestamp * 0.0012) * -8;
      }

      // LERP smoothing factor 0.085 untuk kehalusan 60fps
      m.currentX = lerp(m.currentX, desiredX, 0.085);
      m.currentY = lerp(m.currentY, desiredY, 0.085);
      m.currentScroll = lerp(m.currentScroll, m.scrollOffset, 0.09);

      const rotY = m.currentX;
      const rotX = m.currentY - m.currentScroll * 0.18;

      if (stageInnerRef.current) {
        stageInnerRef.current.style.transform = `rotateX(${rotX.toFixed(
          2
        )}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }

      if (bgHaloRef.current) {
        bgHaloRef.current.style.transform = `translate3d(${(
          -rotY * 0.9
        ).toFixed(1)}px, ${(rotX * 0.7 + m.currentScroll * 0.5).toFixed(
          1
        )}px, -35px)`;
      }

      if (focalStatueRef.current) {
        focalStatueRef.current.style.transform = `translate3d(${(
          rotY * 0.35
        ).toFixed(1)}px, ${(-m.currentScroll * 0.35).toFixed(
          1
        )}px, 0px) rotateY(${(rotY * 0.15).toFixed(2)}deg)`;
      }

      if (cardTopRightRef.current) {
        cardTopRightRef.current.style.transform = `translate3d(${(
          rotY * 1.15
        ).toFixed(1)}px, ${(-rotX * 0.9 - m.currentScroll * 0.6).toFixed(
          1
        )}px, 45px)`;
      }

      if (cardMidLeftRef.current) {
        cardMidLeftRef.current.style.transform = `translate3d(${(
          rotY * 1.3
        ).toFixed(1)}px, ${(-rotX * 0.8 - m.currentScroll * 0.45).toFixed(
          1
        )}px, 45px)`;
      }

      if (cardBottomRightRef.current) {
        cardBottomRightRef.current.style.transform = `translate3d(${(
          rotY * 1.1
        ).toFixed(1)}px, ${(-rotX * 1.05 - m.currentScroll * 0.7).toFixed(
          1
        )}px, 45px)`;
      }

      // Update indikator angka setiap 12 frame agar UI tetap 60fps tanpa beban
      frameCounter++;
      if (frameCounter % 12 === 0) {
        setTiltDisplay({
          x: rotX.toFixed(1),
          y: rotY.toFixed(1),
        });
      }

      animationFrameId = requestAnimationFrame(updateStage);
    };

    animationFrameId = requestAnimationFrame(updateStage);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [autoOrbit]);

  // Handlers untuk Kursor PC & Sentuhan Mobile (touch-action: pan-y)
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageContainerRef.current) return;
    const rect = stageContainerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 s/d 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    motionRef.current.isPointerInside = true;
    motionRef.current.targetX = normX * 22; // Maksimum +/- 11 deg rotateY
    motionRef.current.targetY = -normY * 18; // Maksimum +/- 9 deg rotateX
  };

  const handleStageMouseLeave = () => {
    motionRef.current.isPointerInside = false;
    motionRef.current.targetX = 0;
    motionRef.current.targetY = 0;
  };

  const handleStageTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    motionRef.current.isPointerInside = true;
    motionRef.current.touchStartX = e.touches[0].clientX;
    motionRef.current.touchStartY = e.touches[0].clientY;
  };

  const handleStageTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1 || !stageContainerRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - motionRef.current.touchStartX;
    const deltaY = touch.clientY - motionRef.current.touchStartY;
    const width = stageContainerRef.current.clientWidth || 320;
    // Geseran horizontal memicu efek tilt mulus, sementara pan-y membiarkan scroll vertikal
    const clampedX = Math.max(-1, Math.min(1, deltaX / (width * 0.45)));
    const clampedY = Math.max(-1, Math.min(1, deltaY / 240));
    motionRef.current.targetX = clampedX * 15;
    motionRef.current.targetY = -clampedY * 9;
  };

  const handleStageTouchEnd = () => {
    motionRef.current.isPointerInside = false;
    motionRef.current.targetX = 0;
    motionRef.current.targetY = 0;
  };

  // Filtered projects untuk Bab II
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Semua') {
      return PORTFOLIO_DATA.chapterTwo.projects;
    }
    return PORTFOLIO_DATA.chapterTwo.projects.filter(
      (p) => p.category === selectedCategory
    );
  }, [selectedCategory]);

  // ==========================================================================
  // HANDLERS CAROUSEL HORIZONTAL (SWIPE + DRAG + PROGRESS BAR)
  // ==========================================================================
  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setCarouselProgress(100);
      return;
    }
    const ratio = el.scrollLeft / maxScroll;
    const pct = Math.max(15, Math.min(100, Math.round(15 + ratio * 85)));
    setCarouselProgress(pct);

    const idx = Math.round(
      ratio * (PORTFOLIO_DATA.carouselItems.length - 1)
    );
    setActiveSlideIndex(
      Math.max(0, Math.min(PORTFOLIO_DATA.carouselItems.length - 1, idx))
    );
  };

  const scrollCarouselBy = (direction: 'prev' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = Math.min(440, el.clientWidth * 0.85);
    el.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  const handleCarouselMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDraggingCarousel.current = true;
    carouselStartX.current = e.pageX - carouselRef.current.offsetLeft;
    carouselScrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleCarouselMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingCarousel.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - carouselStartX.current) * 1.35;
    carouselRef.current.scrollLeft = carouselScrollLeft.current - walk;
  };

  const handleCarouselMouseUpOrLeave = () => {
    isDraggingCarousel.current = false;
  };

  // Download Single-File HTML handler
  const handleDownloadSingleFile = () => {
    const htmlContent = generateStandaloneHtml();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(
      `const PORTFOLIO_CONFIG = ${JSON.stringify(PORTFOLIO_DATA, null, 2)};`
    );
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#2C302E] selection:bg-[#C5A880]/25">
      {/* ====================================================================
          A. NAVBAR EDITORIAL (Minimalis & Lapang — 3-Zone Contract)
         ==================================================================== */}
      <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 border-b border-[#C5A880]/25">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="font-serif-editorial text-2xl sm:text-[26px] font-bold tracking-tight text-[#2C302E] whitespace-nowrap shrink-0"
          >
            {PORTFOLIO_DATA.identity.logoText}{' '}
            <span className="font-sans-editorial text-[11px] font-medium text-[#64748B] tracking-widest uppercase ml-1">
              {PORTFOLIO_DATA.identity.levelShort}
            </span>
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#64748B]"
          >
            {PORTFOLIO_DATA.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#2C302E] transition-colors duration-150 underline-offset-8 hover:underline whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center shrink-0">
            <a
              href="#eksperimen"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C302E] text-[#FBFBF9] border border-[#C5A880]/60 text-xs sm:text-sm font-medium hover:bg-[#3A3F3D] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Jurnal Karya</span>
              <span className="text-[#C5A880]" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ==================================================================
            B. HERO SECTION: 2.5D INTERACTIVE DIORAMA (Adaptasi Layout TerraGrip)
           ================================================================== */}
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-[#F4F6F8] via-[#FBFBF9] to-[#FBFBF9] border-b border-[#C5A880]/20">
          {/* Subtle atmospheric background lines (zero GPU blur cost) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 68% 38%, rgba(197, 168, 128, 0.18) 0%, rgba(74, 124, 155, 0.06) 42%, transparent 70%)',
            }}
          />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            {/* Handwritten Editorial Marginalia (Adaptasi "Next stop" Tidepost) */}
            <div className="hidden lg:flex items-center justify-end gap-2 mb-2 pr-8 text-[#64748B]">
              <svg
                width="44"
                height="18"
                viewBox="0 0 44 18"
                fill="none"
                className="text-[#C5A880]"
                aria-hidden="true"
              >
                <path
                  d="M2 14 C14 4, 28 4, 40 10 M35 5 L41 10 L34 14"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif-editorial italic text-base text-[#4A7C9B]">
                {PORTFOLIO_DATA.chapterOne.marginaliaTop}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* SISI KIRI: Tipografi, Deskripsi, CTA, & 3 Indikator Minimalis */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Kicker dengan aksen Blue Moonweed (#4A7C9B) */}
                <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider text-[#4A7C9B] mb-4">
                  <span
                    aria-hidden="true"
                    className="w-2 h-2 rounded-full bg-[#4A7C9B]"
                  />
                  <span>{PORTFOLIO_DATA.identity.heroKicker}</span>
                </div>

                {/* Judul Besar Cormorant Garamond dengan aksen italic */}
                <h1
                  className="font-serif-editorial font-bold text-[#2C302E] tracking-tight leading-[1.06] mb-5"
                  style={{
                    fontSize: 'clamp(2.5rem, 4.8vw, 4.35rem)',
                    textWrap: 'balance',
                  }}
                >
                  {PORTFOLIO_DATA.identity.heroTitlePrefix}{' '}
                  <em className="font-serif-editorial italic font-semibold text-[#4A7C9B]">
                    {PORTFOLIO_DATA.identity.heroTitleItalic}
                  </em>{' '}
                  {PORTFOLIO_DATA.identity.heroTitleSuffix}
                </h1>

                {/* Paragraf Deskripsi Menggunakan Tagline Identitas */}
                <p className="text-[15px] sm:text-base text-[#64748B] leading-[1.7] max-w-[54ch] mb-8">
                  {PORTFOLIO_DATA.identity.tagline}
                </p>

                {/* 2 Tombol CTA */}
                <div className="flex flex-wrap items-center gap-3.5 mb-12">
                  <a
                    href="#kronik"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#2C302E] text-[#FBFBF9] text-sm font-medium hover:bg-[#3B403E] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm"
                  >
                    <span>Telusuri Bab</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setAutoOrbit((prev) => !prev)}
                    className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 border ${
                      autoOrbit
                        ? 'bg-[#4A7C9B]/15 border-[#4A7C9B] text-[#2C302E]'
                        : 'bg-[#F4F6F8]/90 border-[#C5A880]/50 text-[#2C302E] hover:bg-[#EAECEF]'
                    }`}
                  >
                    <RotateCcw
                      className={`w-4 h-4 text-[#4A7C9B] ${
                        autoOrbit ? 'animate-spin' : ''
                      }`}
                    />
                    <span>
                      {autoOrbit
                        ? 'Mode Orbit 2.5D: Aktif'
                        : 'Mode Interaktif 2.5D'}
                    </span>
                  </button>
                </div>

                {/* 3 Indikator Minimalis Berikon Garis Tipis (Adaptasi Kiri Bawah TerraGrip) */}
                <div className="w-full pt-6 border-t border-[#C5A880]/25 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                  {PORTFOLIO_DATA.heroIndicators.map((ind) => (
                    <div key={ind.id} className="flex flex-col items-start">
                      <div className="w-9 h-9 rounded-full border border-[#C5A880]/45 bg-[#FBFBF9] flex items-center justify-center text-[#2C302E] mb-2.5">
                        {ind.icon === 'compass' && (
                          <Compass className="w-4 h-4 stroke-[1.5] text-[#4A7C9B]" />
                        )}
                        {ind.icon === 'feather' && (
                          <Feather className="w-4 h-4 stroke-[1.5] text-[#C5A880]" />
                        )}
                        {ind.icon === 'layers' && (
                          <Layers className="w-4 h-4 stroke-[1.5] text-[#2C302E]" />
                        )}
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#2C302E] leading-snug">
                        {ind.title}
                      </span>
                      <span className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                        {ind.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SISI KANAN / TENGAH: Panggung 2.5D Interaktif (CSS 3D + LERP) */}
              <div className="lg:col-span-6">
                <div
                  ref={stageContainerRef}
                  id="panggung-25d"
                  onMouseMove={handleStageMouseMove}
                  onMouseLeave={handleStageMouseLeave}
                  onTouchStart={handleStageTouchStart}
                  onTouchMove={handleStageTouchMove}
                  onTouchEnd={handleStageTouchEnd}
                  className="stage-perspective relative w-full min-h-[430px] sm:min-h-[540px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing py-4"
                  aria-label="Panggung Interaktif 2.5D Patung Pahlawan"
                >
                  <div
                    ref={stageInnerRef}
                    className="stage-preserve-3d relative w-full max-w-[520px] h-[420px] sm:h-[510px] flex items-center justify-center"
                  >
                    {/* LAYER 1: Latar Belakang Patung (translateZ(-35px)) */}
                    <div
                      ref={bgHaloRef}
                      style={{ transform: 'translate3d(0px, 0px, -35px)' }}
                      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                    >
                      {/* Lingkaran Halo Matahari Redup (#C5A880) */}
                      <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#C5A880]/40 bg-gradient-to-b from-[#C5A880]/20 via-[#4A7C9B]/5 to-transparent flex items-center justify-center">
                        <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-dashed border-[#C5A880]/45" />
                      </div>
                      {/* Siluet Pegunungan Tipis Berwarna Emas Pucat */}
                      <svg
                        viewBox="0 0 500 120"
                        className="w-[92%] max-w-[440px] -mt-12 opacity-60"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 110 L110 38 L195 88 L295 22 L395 82 L455 48 L490 110 Z"
                          stroke="#C5A880"
                          strokeWidth="1.5"
                          fill="rgba(197, 168, 128, 0.08)"
                        />
                      </svg>
                    </div>

                    {/* LAYER 2: Objek Fokal (translateZ(0px)) — Patung Marmer Klasik */}
                    <div
                      ref={focalStatueRef}
                      style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                      className="relative z-10 flex items-center justify-center pointer-events-none"
                    >
                      <img
                        src={PORTFOLIO_DATA.identity.heroImage}
                        alt="Patung Marmer Klasik Penutup Mata"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const tried = target.getAttribute('data-tried') || '';
                          if (!tried.includes('assets-images')) {
                            target.setAttribute('data-tried', tried + ' assets-images');
                            target.src = '/assets/images/patung.webp';
                          } else if (!tried.includes('assets-aistudio')) {
                            target.setAttribute('data-tried', tried + ' assets-aistudio');
                            target.src = '/assets/aistudio/patung.webp';
                          } else {
                            target.onerror = null;
                            target.src = getFallbackSvgDataUri('statue');
                          }
                        }}
                        style={{
                          width: 'clamp(260px, 44vw, 420px)',
                          height: 'clamp(320px, 50vw, 480px)',
                          objectFit: 'contain',
                        }}
                        className="animate-float-gentle drop-shadow-[0_24px_36px_rgba(44,48,46,0.18)] transition-transform duration-150"
                      />
                    </div>

                    {/* LAYER 3: 3 Floating Glass Micro-Cards (translateZ(45px)) */}
                    {/* Kartu 1 — Kanan Atas: Badge Pengrajin Kayu Lv 01 */}
                    <div
                      ref={cardTopRightRef}
                      style={{ transform: 'translate3d(0px, 0px, 45px)' }}
                      className="hero-glass-card absolute top-2 right-0 sm:top-6 sm:right-2 z-20 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm max-w-[215px] sm:max-w-[240px]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#2C302E] text-[#C5A880] flex items-center justify-center shrink-0">
                          <Compass className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-[13px] font-semibold text-[#2C302E] truncate">
                            {PORTFOLIO_DATA.identity.titleBadge}
                          </p>
                          <p className="text-[11px] text-[#64748B] truncate">
                            {PORTFOLIO_DATA.identity.statusText}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Kartu 2 — Kiri Tengah: Penanda Waktu Era Frieren */}
                    <div
                      ref={cardMidLeftRef}
                      style={{ transform: 'translate3d(0px, 0px, 45px)' }}
                      className="hero-glass-card absolute left-0 top-1/2 -translate-y-1/2 sm:-left-2 z-20 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm max-w-[205px] sm:max-w-[235px]"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#4A7C9B]">
                        Penanggalan Kronik
                      </p>
                      <p className="font-serif-editorial text-sm sm:text-base font-bold text-[#2C302E] leading-snug mt-0.5">
                        {PORTFOLIO_DATA.identity.eraMarker}
                      </p>
                      <p className="text-[11px] text-[#64748B] mt-0.5">
                        {PORTFOLIO_DATA.identity.eraFocus}
                      </p>
                    </div>

                    {/* Kartu 3 — Kanan Bawah: Indikator Interaktif 2.5D Tilt */}
                    <div
                      ref={cardBottomRightRef}
                      style={{ transform: 'translate3d(0px, 0px, 45px)' }}
                      className="hero-glass-card absolute bottom-2 right-1 sm:bottom-5 sm:right-2 z-20 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm max-w-[230px] sm:max-w-[255px]"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-[11px] font-semibold text-[#2C302E]">
                          2.5D Tilt Active
                        </span>
                        <span className="font-mono text-[10px] tabular-nums text-[#4A7C9B]">
                          {tiltDisplay.x}° / {tiltDisplay.y}°
                        </span>
                      </div>
                      <p className="text-[11px] text-[#64748B] leading-tight">
                        Geser atau miringkan untuk mengamati kedalaman ruang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            C. STORYTELLING CHAPTERS: KRONIK PERJALANAN (Adaptasi Layout Tidepost)
           ================================================================== */}
        <section
          id="kronik"
          className="relative py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#C5A880]/20"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            {/* Marginalia Tulisan Tangan Miring (Adaptasi "Better Together" Tidepost) */}
            <div className="flex items-center justify-end gap-2 mb-6 text-[#64748B]">
              <span className="font-serif-editorial italic text-lg text-[#4A7C9B]">
                {PORTFOLIO_DATA.chapterOne.marginaliaBottom}
              </span>
              <svg
                width="36"
                height="22"
                viewBox="0 0 36 22"
                fill="none"
                className="text-[#C5A880]"
                aria-hidden="true"
              >
                <path
                  d="M34 4 C24 14, 14 16, 4 14 M9 9 L3 14 L10 19"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* BAB I: Layout Bento / Kolase Asimetris */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Sisi Kiri: Kolase 3 Kartu Visual Bersudut Membulat (border-radius: 20px) */}
              <div className="lg:col-span-6 relative">
                {/* Ornamen Sketsa Tangkai Bunga di Sisi Kiri Kolase (Adaptasi Tidepost) */}
                <svg
                  viewBox="0 0 64 120"
                  fill="none"
                  aria-hidden="true"
                  className="hidden sm:block absolute -left-7 top-1/2 -translate-y-1/2 w-12 h-24 text-[#4A7C9B]/55 pointer-events-none"
                >
                  <path
                    d="M42 110 Q22 65 34 15 M34 45 Q12 38 8 24 M31 68 Q52 54 56 38"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="34" cy="14" r="5" fill="#4A7C9B" opacity="0.5" />
                  <circle cx="8" cy="24" r="4" fill="#C5A880" opacity="0.6" />
                  <circle cx="56" cy="38" r="4" fill="#4A7C9B" opacity="0.5" />
                </svg>

                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {/* Kartu Kolase 1 (Kiri Atas) */}
                  {PORTFOLIO_DATA.chapterOne.collageImages
                    .slice(0, 2)
                    .map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setActiveModal({
                            title: item.title,
                            subtitle: item.era,
                            description: item.caption,
                            image: item.src,
                            fallbackKey: item.fallbackKey,
                          })
                        }
                        className={`group text-left overflow-hidden rounded-[20px] border border-[#C5A880]/35 bg-[#F4F6F8] shadow-xs transition-transform duration-200 hover:-translate-y-1 ${
                          idx === 1 ? 'sm:mt-6' : ''
                        }`}
                      >
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={item.src}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getFallbackSvgDataUri(
                                item.fallbackKey
                              );
                            }}
                            style={{
                              width: '100%',
                              height: 'clamp(140px, 20vw, 210px)',
                              objectFit: 'cover',
                            }}
                            className="group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3.5 sm:p-4">
                          <p className="text-[11px] text-[#64748B]">
                            {item.era}
                          </p>
                          <p className="font-serif-editorial text-base sm:text-lg font-bold text-[#2C302E] mt-0.5">
                            {item.title}
                          </p>
                        </div>
                      </button>
                    ))}

                  {/* Kartu Kolase 3 (Bawah Lebar Penuh) */}
                  {PORTFOLIO_DATA.chapterOne.collageImages
                    .slice(2, 3)
                    .map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setActiveModal({
                            title: item.title,
                            subtitle: item.era,
                            description: item.caption,
                            image: item.src,
                            fallbackKey: item.fallbackKey,
                          })
                        }
                        className="col-span-2 group text-left overflow-hidden rounded-[20px] border border-[#C5A880]/35 bg-[#F4F6F8] shadow-xs transition-transform duration-200 hover:-translate-y-1"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getFallbackSvgDataUri(
                                item.fallbackKey
                              );
                            }}
                            style={{
                              width: '100%',
                              height: 'clamp(160px, 22vw, 220px)',
                              objectFit: 'cover',
                            }}
                            className="group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex items-center justify-between gap-4">
                          <div>
                            <p className="text-[11px] text-[#64748B]">
                              {item.era} · {item.caption}
                            </p>
                            <p className="font-serif-editorial text-lg font-bold text-[#2C302E]">
                              {item.title}
                            </p>
                          </div>
                          <span className="w-8 h-8 rounded-full border border-[#C5A880]/50 flex items-center justify-center text-[#2C302E] group-hover:bg-[#2C302E] group-hover:text-[#FBFBF9] transition-colors shrink-0">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>

              {/* Sisi Kanan: Label Bab, Judul Serif Italic, Filosofi Kerja, & 4 Ikon Nilai Utama */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#4A7C9B] mb-3">
                  {PORTFOLIO_DATA.chapterOne.label}
                </span>

                <h2
                  className="font-serif-editorial font-bold text-[#2C302E] leading-[1.12] mb-5"
                  style={{
                    fontSize: 'clamp(2rem, 3.6vw, 3.1rem)',
                    textWrap: 'balance',
                  }}
                >
                  {PORTFOLIO_DATA.chapterOne.titlePrefix}{' '}
                  <em className="font-serif-editorial italic font-semibold text-[#4A7C9B]">
                    {PORTFOLIO_DATA.chapterOne.titleItalic}
                  </em>
                </h2>

                <p className="text-[15px] sm:text-base text-[#64748B] leading-[1.75] mb-4 max-w-[62ch]">
                  {PORTFOLIO_DATA.chapterOne.description}
                </p>

                <p className="text-sm text-[#64748B] leading-[1.7] mb-8 max-w-[60ch]">
                  {PORTFOLIO_DATA.chapterOne.secondaryNote}
                </p>

                {/* 4 Ikon Nilai Utama (Efisiensi, Ketelitian, Eksplorasi, Kemandirian) */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#C5A880]/25">
                  {PORTFOLIO_DATA.chapterOne.values.map((val) => (
                    <div
                      key={val.id}
                      className="flex flex-col items-start p-3 rounded-2xl bg-[#F4F6F8]/80 border border-[#C5A880]/25"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#FBFBF9] border border-[#C5A880]/40 flex items-center justify-center text-[#4A7C9B] mb-2.5">
                        {val.icon === 'cpu' && (
                          <Cpu className="w-4 h-4 stroke-[1.6]" />
                        )}
                        {val.icon === 'compass' && (
                          <Compass className="w-4 h-4 stroke-[1.6]" />
                        )}
                        {val.icon === 'sparkles' && (
                          <Sparkles className="w-4 h-4 stroke-[1.6]" />
                        )}
                        {val.icon === 'shield' && (
                          <ShieldCheck className="w-4 h-4 stroke-[1.6]" />
                        )}
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#2C302E]">
                        {val.title}
                      </span>
                      <span className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                        {val.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            BAB II: FEATURED EXPERIMENTS & FILTER PILLS (Adaptasi Layout Tidepost)
           ================================================================== */}
        <section
          id="eksperimen"
          className="py-20 sm:py-28 bg-[#F4F6F8] border-b border-[#C5A880]/25"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Kolom Kiri (4 Kolom pada Desktop): Header, Deskripsi, & Tombol Filter */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#4A7C9B] mb-2.5">
                  {PORTFOLIO_DATA.chapterTwo.label}
                </span>

                <h2
                  className="font-serif-editorial font-bold text-[#2C302E] leading-[1.12] mb-4"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    textWrap: 'balance',
                  }}
                >
                  {PORTFOLIO_DATA.chapterTwo.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-[#64748B] leading-[1.65] mb-6">
                  {PORTFOLIO_DATA.chapterTwo.subtitle}
                </p>

                {/* Deretan Tombol Filter Interaktif */}
                <div
                  role="tablist"
                  aria-label="Filter Kategori Proyek"
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {PORTFOLIO_DATA.chapterTwo.categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-2 rounded-full text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 border ${
                          isActive
                            ? 'bg-[#2C302E] text-[#FBFBF9] border-[#2C302E] shadow-xs'
                            : 'bg-[#FBFBF9] text-[#64748B] border-[#C5A880]/40 hover:text-[#2C302E] hover:border-[#C5A880]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Tombol Aksi Sekunder (Seperti "View all surf trips ->" di Tidepost) */}
                <button
                  type="button"
                  onClick={() => setShowAssetGuide(true)}
                  className="inline-flex items-center gap-3 text-sm font-semibold text-[#2C302E] hover:text-[#4A7C9B] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-[#2C302E] text-[#FBFBF9] flex items-center justify-center group-hover:bg-[#4A7C9B] transition-colors">
                    <FolderOpen className="w-4 h-4" />
                  </span>
                  <span>Panduan Aset Lokal (./images/) →</span>
                </button>
              </div>

              {/* Kolom Kanan (8 Kolom pada Desktop): Grid Kartu Proyek Bergaya Bento */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                  {filteredProjects.map((project, index) => {
                    // Kartu pertama tampil besar di kiri (7 kolom, row-span-2) saat ada > 1 item
                    const isPrimaryLarge =
                      index === 0 && filteredProjects.length > 1;

                    return (
                      <article
                        key={project.id}
                        onClick={() =>
                          setActiveModal({
                            title: project.title,
                            subtitle: `${project.category} · ${project.location}`,
                            description: project.details,
                            metrics: project.metrics,
                            image: project.image,
                            fallbackKey: project.fallbackKey,
                          })
                        }
                        className={`group relative overflow-hidden rounded-[22px] border border-[#C5A880]/40 bg-[#1F2624] text-[#FBFBF9] cursor-pointer shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-end ${
                          isPrimaryLarge
                            ? 'md:col-span-7 md:row-span-2 min-h-[380px] sm:min-h-[450px]'
                            : filteredProjects.length === 1
                            ? 'md:col-span-12 min-h-[360px]'
                            : 'md:col-span-5 min-h-[215px]'
                        }`}
                      >
                        {/* Gambar Proyek dengan CSS Responsif & Fallback Otomatis */}
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = getFallbackSvgDataUri(
                              project.fallbackKey
                            );
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Measured Contrast Scrim untuk Keterbacaan WCAG AA */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#141817]/95 via-[#141817]/55 to-transparent"
                        />

                        {/* Konten Kartu */}
                        <div className="relative z-10 p-5 sm:p-6 flex items-end justify-between gap-4">
                          <div className="min-w-0">
                            {/* Metadata unboxed dengan separator */}
                            <div className="flex items-center gap-2 text-[11px] font-medium text-[#C5A880] mb-1.5">
                              <span>{project.category}</span>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#FBFBF9]/80 truncate">
                                {project.location}
                              </span>
                            </div>

                            <h3
                              className={`font-serif-editorial font-bold text-[#FBFBF9] leading-snug ${
                                isPrimaryLarge
                                  ? 'text-2xl sm:text-[28px]'
                                  : 'text-xl'
                              }`}
                            >
                              {project.title}
                            </h3>

                            <p
                              className={`text-xs sm:text-[13px] text-[#FBFBF9]/80 mt-2 leading-relaxed ${
                                isPrimaryLarge ? 'line-clamp-3' : 'line-clamp-2'
                              }`}
                            >
                              {project.summary}
                            </p>

                            {isPrimaryLarge && (
                              <p className="font-mono text-[11px] tabular-nums text-[#C5A880] mt-3">
                                {project.metrics}
                              </p>
                            )}
                          </div>

                          {/* Tombol Panah Bulat di Sudut Kanan Bawah */}
                          <span
                            aria-label={`Baca detail ${project.title}`}
                            className="w-10 h-10 rounded-full bg-[#FBFBF9] text-[#2C302E] flex items-center justify-center shrink-0 group-hover:bg-[#C5A880] group-hover:text-[#141817] transition-colors shadow-sm"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            D. MODUL CAROUSEL HORIZONTAL: PANORAMIC ARCHIVE
               (Adaptasi Layout Referensi "Design Para Carrossel")
           ================================================================== */}
        <section
          id="galeri"
          className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#C5A880]/25 overflow-hidden"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            {/* Header Galeri & Tombol Navigasi Panah Berlapis Emas (#C5A880) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#4A7C9B] block mb-2.5">
                  {PORTFOLIO_DATA.carouselSection.label}
                </span>
                <h2
                  className="font-serif-editorial font-bold text-[#2C302E] leading-[1.12]"
                  style={{
                    fontSize: 'clamp(2rem, 3.6vw, 3.1rem)',
                    textWrap: 'balance',
                  }}
                >
                  {PORTFOLIO_DATA.carouselSection.title}
                </h2>
                <p className="text-sm sm:text-[15px] text-[#64748B] mt-2.5 max-w-[62ch]">
                  {PORTFOLIO_DATA.carouselSection.subtitle}
                </p>
              </div>

              {/* Tombol Navigasi Kiri/Kanan Berlapis Emas (#C5A880) */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs tabular-nums text-[#64748B] mr-2">
                  Bab {PORTFOLIO_DATA.carouselItems[activeSlideIndex]?.roman} / V
                </span>
                <button
                  type="button"
                  onClick={() => scrollCarouselBy('prev')}
                  aria-label="Geser ke kartu sebelumnya"
                  className="w-11 h-11 rounded-full border border-[#C5A880] bg-[#FBFBF9] text-[#2C302E] hover:bg-[#C5A880] hover:text-[#1C201E] transition-colors flex items-center justify-center shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarouselBy('next')}
                  aria-label="Geser ke kartu berikutnya"
                  className="w-11 h-11 rounded-full border border-[#C5A880] bg-[#2C302E] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1C201E] transition-colors flex items-center justify-center shadow-xs"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Track Carousel Bersambung (Seamless Editorial Panorama) */}
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              onMouseDown={handleCarouselMouseDown}
              onMouseMove={handleCarouselMouseMove}
              onMouseUp={handleCarouselMouseUpOrLeave}
              onMouseLeave={handleCarouselMouseUpOrLeave}
              className="no-scrollbar flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory pb-6 cursor-grab active:cursor-grabbing select-none"
            >
              {PORTFOLIO_DATA.carouselItems.map((slide) => (
                <article
                  key={slide.id}
                  className="snap-start shrink-0 w-[86vw] sm:w-[390px] md:w-[420px] rounded-[22px] overflow-hidden border border-[#C5A880]/45 bg-[#1B201E] text-[#FBFBF9] flex flex-col justify-between shadow-sm relative group"
                >
                  {/* Visual Atas / Latar Lukisan Klasik */}
                  <div className="relative h-[250px] sm:h-[275px] overflow-hidden border-b border-[#C5A880]/25">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getFallbackSvgDataUri(
                          slide.fallbackKey
                        );
                      }}
                      style={{
                        width: '100%',
                        height: 'clamp(240px, 28vw, 280px)',
                        objectFit: 'cover',
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#1B201E] via-[#1B201E]/25 to-transparent"
                    />

                    {/* Nomor Urut Romawi I - V */}
                    <div className="absolute top-4 left-5 flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-full bg-[#1B201E]/85 border border-[#C5A880]/60 font-serif-editorial italic font-bold text-lg text-[#C5A880] flex items-center justify-center">
                        {slide.roman}
                      </span>
                      <span className="text-[11px] font-medium tracking-widest uppercase text-[#C5A880]">
                        {slide.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Narasi Editorial Kartu (Adaptasi Tipografi "Design Para Carrossel") */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#1B201E]">
                    <div>
                      <h3 className="font-serif-editorial italic font-bold text-2xl sm:text-[28px] text-[#FBFBF9] leading-tight mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-[#FBFBF9]/90 leading-relaxed mb-4">
                        “{slide.quote}”
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#C5A880]/20 flex items-end justify-between gap-4">
                      <p className="text-xs text-[#C5A880]/85 leading-relaxed">
                        {slide.annotation}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveModal({
                            title: `${slide.roman}. ${slide.title}`,
                            subtitle: slide.subtitle,
                            description: `${slide.quote}\n\n${slide.annotation}`,
                            image: slide.image,
                            fallbackKey: slide.fallbackKey,
                          })
                        }
                        className="text-xs font-medium text-[#C5A880] hover:text-[#FBFBF9] whitespace-nowrap shrink-0 underline underline-offset-4"
                      >
                        Baca Lembar →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Indikator Progress Bar di Bagian Bawah Carousel */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex-1 h-1.5 rounded-full bg-[#E2E6EA] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4A7C9B] to-[#C5A880] rounded-full transition-all duration-200"
                  style={{ width: `${carouselProgress}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-[#64748B] shrink-0">
                {carouselProgress}% Terbaca
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            E. CATATAN PENGRAJIN & EKSPOR MANDIRI (Field Notes & Single-File HTML)
           ================================================================== */}
        <section
          id="catatan"
          className="py-20 sm:py-24 bg-[#F4F6F8] border-b border-[#C5A880]/25"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#4A7C9B] block mb-2">
                  CATATAN PINGGIR · BENGKEL KERJA
                </span>
                <h2
                  className="font-serif-editorial font-bold text-[#2C302E] leading-tight"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
                >
                  Lembar Teknis & Kesiapan Deploy
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAssetGuide(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FBFBF9] border border-[#C5A880]/50 text-xs sm:text-sm font-medium text-[#2C302E] hover:bg-[#EAECEF] transition-colors whitespace-nowrap shrink-0"
                >
                  <Code2 className="w-4 h-4 text-[#4A7C9B]" />
                  <span>Lihat Struktur PORTFOLIO_DATA</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadSingleFile}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C302E] text-[#FBFBF9] border border-[#C5A880]/60 text-xs sm:text-sm font-medium hover:bg-[#3A3F3D] transition-colors whitespace-nowrap shrink-0 shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#C5A880]" />
                  <span>Download Single-File index.html</span>
                </button>
              </div>
            </div>

            {/* 3 Kolom Catatan Jurnal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.fieldNotes.map((note, idx) => (
                <article
                  key={idx}
                  className="p-6 rounded-[20px] bg-[#FBFBF9] border border-[#C5A880]/30 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-medium text-[#4A7C9B] mb-2">
                      {note.date}
                    </p>
                    <h3 className="font-serif-editorial text-xl font-bold text-[#2C302E] mb-3">
                      {note.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {note.body}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#C5A880]/20 flex items-center justify-between text-xs text-[#64748B]">
                    <span>Arsip #{idx + 1}</span>
                    <span className="font-serif-editorial italic text-[#C5A880]">
                      Keripikubi
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER EDITORIAL BERSIH
         ==================================================================== */}
      <footer className="bg-[#FBFBF9] py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-xl font-bold text-[#2C302E]">
              {PORTFOLIO_DATA.identity.logoText}
            </span>
            <span aria-hidden="true" className="text-[#C5A880]">
              ·
            </span>
            <span className="text-xs text-[#64748B]">
              {PORTFOLIO_DATA.identity.titleBadge}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
            <a
              href="#top"
              className="hover:text-[#2C302E] transition-colors whitespace-nowrap"
            >
              Kembali ke Puncak ↑
            </a>
            <button
              type="button"
              onClick={() => setShowAssetGuide(true)}
              className="hover:text-[#2C302E] transition-colors whitespace-nowrap"
            >
              Daftar Path Gambar
            </button>
            <span>© {new Date().getFullYear()} Keripikubi</span>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL 1: LIGHTBOX / DETAIL KARYA & MANUSKRIP
         ==================================================================== */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-[#141817]/75 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="animate-modal-in bg-[#FBFBF9] border border-[#C5A880]/50 rounded-[24px] max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-72 bg-[#1C201E] overflow-hidden group">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = getFallbackSvgDataUri(
                    activeModal.fallbackKey
                  );
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="animate-ken-burns transition-transform duration-700 group-hover:scale-110"
              />
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Tutup jendela detail"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#141817]/80 text-[#FBFBF9] hover:bg-[#2C302E] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#4A7C9B] mb-1.5">
                {activeModal.subtitle}
              </p>
              <h3
                id="modal-title"
                className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#2C302E] mb-4"
              >
                {activeModal.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#64748B] leading-relaxed whitespace-pre-line">
                {activeModal.description}
              </p>

              {activeModal.metrics && (
                <div className="mt-5 pt-4 border-t border-[#C5A880]/25 flex items-center justify-between text-xs text-[#2C302E]">
                  <span className="font-semibold">Catatan Pengukuran:</span>
                  <span className="font-mono tabular-nums text-[#4A7C9B]">
                    {activeModal.metrics}
                  </span>
                </div>
              )}

              <div className="mt-6 flex items-center justify-end gap-3">
                <span className="text-xs text-[#64748B] mr-auto font-mono">
                  Path: {activeModal.image}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 rounded-full bg-[#2C302E] text-[#FBFBF9] text-xs font-medium hover:bg-[#3A3F3D] transition-colors"
                >
                  Tutup Lembar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: PANDUAN ASET GAMBAR LOKAL (./images/*.webp) & KONFIGURASI
         ==================================================================== */}
      {showAssetGuide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="asset-guide-title"
          className="fixed inset-0 z-50 bg-[#141817]/75 flex items-center justify-center p-4"
          onClick={() => setShowAssetGuide(false)}
        >
          <div
            className="bg-[#FBFBF9] border border-[#C5A880]/50 rounded-[24px] max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#C5A880]/25 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A7C9B]">
                  KONFIGURASI TERPUSAT · PORTFOLIO_DATA
                </span>
                <h3
                  id="asset-guide-title"
                  className="font-serif-editorial text-2xl font-bold text-[#2C302E]"
                >
                  Daftar Path Gambar Lokal & Fallback SVG
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAssetGuide(false)}
                aria-label="Tutup panduan aset"
                className="w-9 h-9 rounded-full bg-[#F4F6F8] text-[#2C302E] flex items-center justify-center hover:bg-[#E2E6EA]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#64748B]">
              <p>
                Simpan gambar Anda di dalam folder{' '}
                <code className="font-mono text-xs bg-[#F4F6F8] px-1.5 py-0.5 rounded text-[#2C302E]">
                  ./images/
                </code>{' '}
                (atau{' '}
                <code className="font-mono text-xs bg-[#F4F6F8] px-1.5 py-0.5 rounded text-[#2C302E]">
                  public/images/
                </code>
                ) dengan nama berikut agar otomatis menggantikan ilustrasi SVG
                bawaan:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-[#2C302E]">
                <div className="p-2.5 rounded-lg bg-[#F4F6F8] border border-[#C5A880]/25">
                  ./images/patung.webp{' '}
                  <span className="text-[#4A7C9B]">(Hero 2.5D)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F4F6F8] border border-[#C5A880]/25">
                  ./images/bab-1.webp s/d bab-3.webp
                </div>
                <div className="p-2.5 rounded-lg bg-[#F4F6F8] border border-[#C5A880]/25">
                  ./images/proyek-1.webp s/d proyek-4.webp
                </div>
                <div className="p-2.5 rounded-lg bg-[#F4F6F8] border border-[#C5A880]/25">
                  ./images/carousel-1.webp s/d 5.webp
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#2C302E]">
                    Cuplikan Objek PORTFOLIO_DATA:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyConfig}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A7C9B] hover:underline"
                  >
                    {copiedConfig ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <span>Salin JSON Konfigurasi</span>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#1C201E] text-[#FBFBF9] font-mono text-[11px] overflow-x-auto max-h-48 leading-relaxed">
                  {JSON.stringify(
                    {
                      identity: PORTFOLIO_DATA.identity,
                      carouselCount: PORTFOLIO_DATA.carouselItems.length,
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-[#F4F6F8] border-t border-[#C5A880]/25 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleDownloadSingleFile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C302E] text-[#FBFBF9] text-xs font-medium hover:bg-[#3A3F3D]"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Download Single-File index.html</span>
              </button>
              <button
                type="button"
                onClick={() => setShowAssetGuide(false)}
                className="px-4 py-2 rounded-full border border-[#C5A880]/50 text-xs font-medium text-[#2C302E] hover:bg-[#EAECEF]"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
