/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Check,
  Plus,
  Minus,
  Trash2,
  Code2,
  Copy,
  Download,
  Eye,
} from 'lucide-react';

import heroImg from './assets/images/hero_sustainable_fashion_1791448586084.jpg';
import teeImg from './assets/images/product_organic_tee_1791448607925.jpg';
import jacketImg from './assets/images/product_eco_jacket_1791448625104.jpg';
import toteImg from './assets/images/product_canvas_totebag_1791448638329.jpg';

interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  image: string;
  sizes: string[];
  description: string;
  impactMetric: string;
}

interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

const PRODUCTS: Product[] = [
  {
    id: 'kaos-polos-organik',
    name: 'Kaos Polos Organik Sage',
    category: 'Esensial Harian',
    material: '100% Katun Organik GOTS (240 GSM)',
    price: 249000,
    image: teeImg,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Potongan rileks berbahan katun organik bersertifikat tanpa pestisida sintetis. Ditenun rapat untuk daya tahan bertahun-tahun dengan pewarna nabati alami.',
    impactMetric: 'Hemat 2.400 liter air dibanding kaos katun konvensional',
  },
  {
    id: 'jaket-ramah-lingkungan',
    name: 'Jaket Utilitas Kanvas Daur Ulang',
    category: 'Pakaian Luar',
    material: '70% Katun Daur Ulang · 30% Rami Alami',
    price: 689000,
    image: jacketImg,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Jaket kerja berstruktur dengan serat kanvas pasca-konsumsi yang dipintal ulang. Dilengkapi kancing tempurung kelapa alami dan jahitan ganda yang tangguh.',
    impactMetric: 'Mendaur ulang setara 1,2 kg limbah tekstil pabrik',
  },
  {
    id: 'tote-bag-kanvas',
    name: 'Tote Bag Kanvas Mentah',
    category: 'Aksesori Berkelanjutan',
    material: '100% Kanvas Katun Tanpa Pemutih (14 oz)',
    price: 179000,
    image: toteImg,
    sizes: ['All Size'],
    description:
      'Tas bahu serbaguna dengan kapasitas luas dan kompartemen internal. Bebas proses pemutihan klorin sehingga mempertahankan tekstur serat kapas alami.',
    impactMetric: 'Menggantikan hingga 500 kantong plastik sekali pakai per tahun',
  },
];

const FEATURES = [
  {
    index: '01',
    title: '100% Bahan Organik & Daur Ulang',
    description:
      'Setiap helai kain berasal dari kapas organik bersertifikat GOTS dan serat daur ulang mekanis tanpa bahan kimia beracun atau mikroplastik.',
    proof: '0% Pestisida Sintetis · Tersertifikasi Standar Tekstil Organik',
  },
  {
    index: '02',
    title: 'Produksi Etis & Adil (Ethical Production)',
    description:
      'Kami bermitra langsung dengan pengrajin lokal di Jawa Barat dan Bali, menjamin upah layak di atas standar hidup serta ruang kerja yang aman.',
    proof: '100% Transparansi Upah · Diaudit Secara Independen Setiap Tahun',
  },
  {
    index: '03',
    title: 'Desain Timeless & Nyaman Dipakai',
    description:
      'Dirancang melampaui tren musiman yang cepat usang. Konstruksi jahitan kelas butik memastikan pakaian tetap nyaman dan awet hingga bertahun-tahun.',
    proof: 'Garansi Perbaikan Jahitan Seumur Hidup untuk Setiap Produk',
  },
];

function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const SINGLE_FILE_HTML_CODE = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EcoSys — Gaya Berkelanjutan untuk Masa Depan Bumi</title>
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            canvas: '#FBFBF9',
            surface: '#F3F1EC',
            sage: {
              DEFAULT: '#3A5A40',
              dark: '#2F4A34',
              light: '#E8ECE6'
            },
            ink: {
              DEFAULT: '#1C211D',
              muted: '#525A54'
            }
          },
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>
</head>
<body class="bg-canvas text-ink font-sans antialiased selection:bg-sage selection:text-white">

  <!-- 1. Header / Navigasi -->
  <header class="sticky top-0 z-40 bg-canvas/95 backdrop-blur-md border-b border-black/8">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#beranda" class="font-serif text-2xl font-semibold tracking-tight text-ink">
        EcoSys
      </a>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted">
        <a href="#beranda" class="hover:text-ink transition-colors">Beranda</a>
        <a href="#koleksi" class="hover:text-ink transition-colors">Koleksi</a>
        <a href="#tentang-kami" class="hover:text-ink transition-colors">Tentang Kami</a>
        <a href="#kontak" class="hover:text-ink transition-colors">Kontak</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="#koleksi" class="hidden sm:inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-sage rounded-lg hover:bg-sage-dark transition-colors">
          Belanja Sekarang
        </a>
        <button id="mobile-menu-btn" aria-label="Buka Menu" class="md:hidden p-2 text-ink">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div id="mobile-menu" class="hidden md:hidden border-b border-black/8 bg-canvas px-6 py-4 space-y-3 text-sm font-medium">
      <a href="#beranda" class="block py-1.5 text-ink">Beranda</a>
      <a href="#koleksi" class="block py-1.5 text-ink-muted hover:text-ink">Koleksi</a>
      <a href="#tentang-kami" class="block py-1.5 text-ink-muted hover:text-ink">Tentang Kami</a>
      <a href="#kontak" class="block py-1.5 text-ink-muted hover:text-ink">Kontak</a>
    </div>
  </header>

  <!-- 2. Bagian Hero (Utama) -->
  <section id="beranda" class="py-16 md:py-24 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-6 space-y-6">
        <p class="text-xs font-medium tracking-wide text-sage">
          Busana Berkelanjutan · Dibuat Secara Etis di Indonesia
        </p>
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-ink" style="text-wrap: balance;">
          Gaya Berkelanjutan untuk Masa Depan Bumi
        </h1>
        <p class="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
          Temukan koleksi pakaian ramah lingkungan yang stylish, nyaman, dan dibuat dari bahan daur ulang berkualitas tinggi.
        </p>
        <div class="pt-2 flex flex-wrap items-center gap-4">
          <a href="#koleksi" class="inline-flex items-center gap-2 px-6 py-3.5 bg-sage text-white text-sm font-medium rounded-lg hover:bg-sage-dark transition-colors">
            <span>Jelajahi Koleksi</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#tentang-kami" class="inline-flex items-center px-5 py-3.5 text-sm font-medium text-ink hover:text-sage transition-colors">
            Pelajari Misi Kami
          </a>
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="overflow-hidden rounded-xl bg-surface border border-black/8 aspect-[16/10]">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=85"
            alt="Koleksi Pakaian Ramah Lingkungan EcoSys"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Bagian Keunggulan (Features / Mengapa EcoSys) -->
  <section class="py-16 md:py-20 px-6 bg-surface border-y border-black/6">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-12">
        <p class="text-xs font-medium text-sage mb-2">Mengapa EcoSys</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-ink">
          Prinsip di Balik Setiap Helai Kain
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Kartu 1 -->
        <div class="bg-canvas p-8 rounded-xl border border-black/8 flex flex-col justify-between">
          <div>
            <span class="text-xs font-medium text-sage block mb-4">01. Material Murni</span>
            <h3 class="font-serif text-2xl font-semibold text-ink mb-3">
              100% Bahan Organik & Daur Ulang
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              Setiap helai kain berasal dari kapas organik bersertifikat dan serat daur ulang mekanis tanpa bahan kimia beracun atau mikroplastik.
            </p>
          </div>
          <p class="text-xs text-ink-muted pt-6 mt-6 border-t border-black/6">
            0% Pestisida Sintetis · Serat Alami
          </p>
        </div>

        <!-- Kartu 2 -->
        <div class="bg-canvas p-8 rounded-xl border border-black/8 flex flex-col justify-between">
          <div>
            <span class="text-xs font-medium text-sage block mb-4">02. Kemanusiaan</span>
            <h3 class="font-serif text-2xl font-semibold text-ink mb-3">
              Produksi Etis & Adil (Ethical Production)
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              Kami bermitra langsung dengan pengrajin lokal, menjamin upah layak di atas standar hidup serta lingkungan kerja yang aman dan manusiawi.
            </p>
          </div>
          <p class="text-xs text-ink-muted pt-6 mt-6 border-t border-black/6">
            100% Transparansi Rantai Pasok
          </p>
        </div>

        <!-- Kartu 3 -->
        <div class="bg-canvas p-8 rounded-xl border border-black/8 flex flex-col justify-between">
          <div>
            <span class="text-xs font-medium text-sage block mb-4">03. Umur Panjang</span>
            <h3 class="font-serif text-2xl font-semibold text-ink mb-3">
              Desain Timeless & Nyaman Dipakai
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              Dirancang melampaui tren musiman yang cepat usang. Konstruksi jahitan berkualitas tinggi memastikan pakaian tetap nyaman bertahun-tahun.
            </p>
          </div>
          <p class="text-xs text-ink-muted pt-6 mt-6 border-t border-black/6">
            Garansi Perbaikan Jahitan Seumur Hidup
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Bagian Koleksi Unggulan (Featured Products) -->
  <section id="koleksi" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <p class="text-xs font-medium text-sage mb-2">Koleksi Unggulan</p>
          <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-ink">
            Esensial Ramah Lingkungan
          </h2>
        </div>
        <p class="text-sm text-ink-muted">
          Diproduksi dalam jumlah terbatas untuk mencegah limbah berlebih.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Produk 1 -->
        <article class="group">
          <div class="overflow-hidden rounded-xl bg-surface border border-black/8 aspect-[3/4] mb-4">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
              alt="Kaos Polos Organik"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="text-xs text-ink-muted mb-1">Esensial Harian · 100% Katun Organik</div>
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-base font-semibold text-ink">Kaos Polos Organik</h3>
            <span class="text-sm font-medium text-ink tabular-nums">Rp 249.000</span>
          </div>
        </article>

        <!-- Produk 2 -->
        <article class="group">
          <div class="overflow-hidden rounded-xl bg-surface border border-black/8 aspect-[3/4] mb-4">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
              alt="Jaket Ramah Lingkungan"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="text-xs text-ink-muted mb-1">Pakaian Luar · Kanvas Daur Ulang</div>
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-base font-semibold text-ink">Jaket Ramah Lingkungan</h3>
            <span class="text-sm font-medium text-ink tabular-nums">Rp 689.000</span>
          </div>
        </article>

        <!-- Produk 3 -->
        <article class="group">
          <div class="overflow-hidden rounded-xl bg-surface border border-black/8 aspect-[3/4] mb-4">
            <img
              src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80"
              alt="Tote Bag Kanvas"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="text-xs text-ink-muted mb-1">Aksesori · Kanvas Tanpa Pemutih</div>
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-base font-semibold text-ink">Tote Bag Kanvas</h3>
            <span class="text-sm font-medium text-ink tabular-nums">Rp 179.000</span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 5. Bagian Tentang Kami (About Us) -->
  <section id="tentang-kami" class="py-20 px-6 bg-surface border-t border-black/6">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <p class="text-xs font-medium text-sage">Tentang Kami</p>
      <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-ink" style="text-wrap: balance;">
        Mengurangi Jejak Limbah, Merayakan Kesederhanaan Alami
      </h2>
      <p class="text-base sm:text-lg text-ink-muted leading-relaxed">
        EcoSys lahir dari kepedulian terhadap tingginya limbah tekstil industri <em>fast fashion</em>. Misi kami adalah menghadirkan alternatif pakaian berkualitas yang memadukan estetika minimalis dengan tanggung jawab ekologis. Dengan mendaur ulang sisa serat tekstil dan menggunakan kapas organik bebas pestisida, kami mengajak Anda untuk tampil percaya diri dan berkelas sekaligus menjaga keberlanjutan bumi bagi generasi mendatang.
      </p>
    </div>
  </section>

  <!-- Bagian Kontak Singkat -->
  <section id="kontak" class="py-16 px-6 border-t border-black/6">
    <div class="max-w-xl mx-auto text-center space-y-4">
      <h2 class="font-serif text-2xl sm:text-3xl font-semibold text-ink">Hubungi Studio Kami</h2>
      <p class="text-sm text-ink-muted">
        Punya pertanyaan mengenai bahan, ukuran, atau kolaborasi berkelanjutan? Kirimkan pesan kepada tim kami.
      </p>
      <form onsubmit="event.preventDefault(); document.getElementById('form-msg').classList.remove('hidden');" class="pt-4 space-y-3 text-left">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" required placeholder="Nama Lengkap" class="w-full px-4 py-2.5 text-sm bg-canvas border border-black/15 rounded-lg focus:outline-none focus:border-sage" />
          <input type="email" required placeholder="Alamat Email" class="w-full px-4 py-2.5 text-sm bg-canvas border border-black/15 rounded-lg focus:outline-none focus:border-sage" />
        </div>
        <textarea rows="3" required placeholder="Pesan Anda..." class="w-full px-4 py-2.5 text-sm bg-canvas border border-black/15 rounded-lg focus:outline-none focus:border-sage"></textarea>
        <button type="submit" class="w-full sm:w-auto px-6 py-2.5 bg-sage text-white text-sm font-medium rounded-lg hover:bg-sage-dark transition-colors">
          Kirim Pesan
        </button>
        <p id="form-msg" class="hidden text-xs font-medium text-sage pt-2">
          Terima kasih! Pesan Anda telah kami terima dan akan segera dibalas.
        </p>
      </form>
    </div>
  </section>

  <!-- 6. Footer -->
  <footer class="py-10 px-6 border-t border-black/8 bg-canvas">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
      <p>© 2026 EcoSys. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-ink transition-colors">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" class="hover:text-ink transition-colors">TikTok</a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer" class="hover:text-ink transition-colors">Pinterest</a>
        <a href="mailto:halo@ecosys.id" class="hover:text-ink transition-colors">Email</a>
      </div>
    </div>
  </footer>

  <script>
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  </script>
</body>
</html>`;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'kaos-polos-organik': 'M',
    'jaket-ramah-lingkungan': 'L',
    'tote-bag-kanvas': 'All Size',
  });
  const [addedFeedback, setAddedFeedback] = useState<string | null>(null);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleAddToCart = (product: Product, customSize?: string) => {
    const size = customSize || selectedSizes[product.id] || product.sizes[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, quantity: 1 }];
    });

    setAddedFeedback(product.id);
    setTimeout(() => {
      setAddedFeedback((prev) => (prev === product.id ? null : prev));
    }, 1600);
  };

  const updateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleCheckout = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setCartOpen(false);
    }, 2800);
  };

  const handleCopySingleHTML = () => {
    navigator.clipboard.writeText(SINGLE_FILE_HTML_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadSingleHTML = () => {
    const blob = new Blob([SINGLE_FILE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ecosys-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    setContactSubmitted(true);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1C211D]">
      {/* 1. Header / Navigasi (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-30 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#beranda"
            className="font-display text-2xl sm:text-[28px] font-semibold tracking-tight text-[#1C211D] whitespace-nowrap"
          >
            EcoSys
          </a>

          {/* Zone 2: 4 clean navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525A54]">
            <a
              href="#beranda"
              className="hover:text-[#1C211D] transition-colors py-1 border-b border-transparent hover:border-[#1C211D] whitespace-nowrap"
            >
              Beranda
            </a>
            <a
              href="#koleksi"
              className="hover:text-[#1C211D] transition-colors py-1 border-b border-transparent hover:border-[#1C211D] whitespace-nowrap"
            >
              Koleksi
            </a>
            <a
              href="#tentang-kami"
              className="hover:text-[#1C211D] transition-colors py-1 border-b border-transparent hover:border-[#1C211D] whitespace-nowrap"
            >
              Tentang Kami
            </a>
            <a
              href="#kontak"
              className="hover:text-[#1C211D] transition-colors py-1 border-b border-transparent hover:border-[#1C211D] whitespace-nowrap"
            >
              Kontak
            </a>
          </nav>

          {/* Zone 3: Primary actions (HTML Code export & Shopping Bag) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCodeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#1C211D] bg-[#F3F1EC] hover:bg-[#E7E4DC] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Lihat atau unduh kode HTML tunggal lengkap"
            >
              <Code2 className="w-3.5 h-3.5 text-[#3A5A40]" />
              <span>Kode HTML</span>
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#3A5A40] hover:bg-[#2F4A34] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Tas Belanja</span>
              <span className="tabular-nums font-semibold">({totalItems})</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu Navigasi"
              className="md:hidden p-2 text-[#1C211D] hover:bg-[#F3F1EC] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBFBF9] border-b border-black/[0.08] px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#1C211D]"
            >
              Beranda
            </a>
            <a
              href="#koleksi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#525A54] hover:text-[#1C211D]"
            >
              Koleksi
            </a>
            <a
              href="#tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#525A54] hover:text-[#1C211D]"
            >
              Tentang Kami
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#525A54] hover:text-[#1C211D]"
            >
              Kontak
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 2. Bagian Hero (Utama) */}
        <section id="beranda" className="py-14 md:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              {/* Quiet unboxed metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#3A5A40] font-medium">
                <span>Koleksi Musim 2026</span>
                <span aria-hidden="true">·</span>
                <span>100% Serat Alami & Daur Ulang</span>
                <span aria-hidden="true">·</span>
                <span>Produksi Berkelanjutan</span>
              </div>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold text-[#1C211D] leading-[1.08] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Gaya Berkelanjutan untuk Masa Depan Bumi
              </h1>

              <p className="text-base sm:text-lg text-[#525A54] leading-relaxed max-w-xl">
                Temukan koleksi pakaian ramah lingkungan yang stylish, nyaman, dan dibuat dari bahan daur ulang berkualitas tinggi.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#koleksi"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#3A5A40] hover:bg-[#2F4A34] text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Jelajahi Koleksi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#tentang-kami"
                  className="inline-flex items-center px-5 py-3.5 text-sm font-medium text-[#1C211D] hover:text-[#3A5A40] transition-colors whitespace-nowrap"
                >
                  Pelajari Misi Kami
                </a>
              </div>

              {/* Claim-to-proof metrics adjacent to hero */}
              <div className="pt-8 mt-4 border-t border-black/[0.07] grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1C211D] tabular-nums">
                    100%
                  </p>
                  <p className="text-xs text-[#525A54] mt-0.5">Kapas Organik & Daur Ulang</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1C211D] tabular-nums">
                    -64%
                  </p>
                  <p className="text-xs text-[#525A54] mt-0.5">Jejak Karbon Produksi</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1C211D] tabular-nums">
                    0%
                  </p>
                  <p className="text-xs text-[#525A54] mt-0.5">Kemasan Plastik Sekali Pakai</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-xl bg-[#F3F1EC] border border-black/[0.07] aspect-16/10">
                <img
                  src={heroImg}
                  alt="Studio pakaian ramah lingkungan EcoSys dengan koleksi bahan linen dan katun organik warna hijau sage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-white/90 font-medium">
                    Studio Tenun EcoSys · Pewarnaan Nabati Tanpa Limbah Berbahaya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bagian Keunggulan (Features / Mengapa EcoSys) */}
        <section className="py-20 px-6 lg:px-8 bg-[#F3F1EC] border-y border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-xs font-medium text-[#3A5A40] mb-2">
                <span>Mengapa EcoSys</span>
                <span aria-hidden="true">·</span>
                <span>Komitmen Ekologis</span>
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold text-[#1C211D] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Tiga Pilar Pakaian Berkelanjutan Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {FEATURES.map((feature) => (
                <div
                  key={feature.index}
                  className="bg-[#FBFBF9] p-8 rounded-xl border border-black/[0.07] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-medium text-[#3A5A40] tabular-nums block mb-4">
                      {feature.index}. Pilar Utama
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#1C211D] mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#525A54] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-8 border-t border-black/[0.06]">
                    <p className="text-xs text-[#525A54] font-medium">{feature.proof}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Bagian Koleksi Unggulan (Featured Products) */}
        <section id="koleksi" className="py-20 md:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#3A5A40] mb-2">
                  <span>Koleksi Unggulan</span>
                  <span aria-hidden="true">·</span>
                  <span>Edisi Esensial 2026</span>
                </div>
                <h2
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#1C211D] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Dirancang untuk Dipakai Berulang Kali
                </h2>
              </div>
              <p className="text-sm text-[#525A54] max-w-md">
                Setiap produk dilengkapi transparansi komposisi serat dan jejak penghematan sumber daya alam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => {
                const activeSize = selectedSizes[product.id] || product.sizes[0];
                const isAdded = addedFeedback === product.id;

                return (
                  <article
                    key={product.id}
                    className="group flex flex-col bg-[#FBFBF9] rounded-xl border border-black/[0.07] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {/* Product Image Container (3:4 aspect ratio) */}
                    <div className="relative aspect-3/4 w-full bg-[#F3F1EC] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBFBF9]/95 backdrop-blur-sm text-[#1C211D] text-xs font-medium rounded-lg border border-black/10 opacity-95 hover:bg-white transition-opacity cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#3A5A40]" />
                        <span>Detail Bahan</span>
                      </button>
                    </div>

                    {/* Product Info & Interactive Controls */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        {/* Quiet unboxed metadata */}
                        <div className="flex items-center gap-1.5 text-xs text-[#525A54] mb-1.5">
                          <span>{product.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{product.material}</span>
                        </div>

                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="text-base font-semibold text-[#1C211D]">
                            {product.name}
                          </h3>
                          <span className="text-[15px] font-semibold text-[#1C211D] tabular-nums whitespace-nowrap">
                            {formatIDR(product.price)}
                          </span>
                        </div>

                        <p className="text-xs text-[#525A54] mt-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-black/[0.06]">
                        {/* Interactive Size Selector */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#525A54]">Pilih Ukuran:</span>
                          <div className="flex items-center gap-1 bg-[#F3F1EC] p-1 rounded-lg">
                            {product.sizes.map((size) => (
                              <button
                                key={size}
                                type="button"
                                onClick={() =>
                                  setSelectedSizes((prev) => ({
                                    ...prev,
                                    [product.id]: size,
                                  }))
                                }
                                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                                  activeSize === size
                                    ? 'bg-[#FBFBF9] text-[#1C211D] shadow-xs'
                                    : 'text-[#525A54] hover:text-[#1C211D]'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className={`w-full py-2.5 px-4 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                            isAdded
                              ? 'bg-[#1C211D] text-white'
                              : 'bg-[#3A5A40] hover:bg-[#2F4A34] text-white'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Ditambahkan ke Tas ({activeSize})</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Tambah ke Tas — {formatIDR(product.price)}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Bagian Tentang Kami (About Us) */}
        <section
          id="tentang-kami"
          className="py-20 md:py-24 px-6 lg:px-8 bg-[#F3F1EC] border-t border-black/[0.06]"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#3A5A40]">
                <span>Tentang Kami</span>
                <span aria-hidden="true">·</span>
                <span>Misi Sirkular EcoSys</span>
              </div>

              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1C211D] leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Mengurangi Limbah Industri Fashion, Menjaga Keindahan Alam Tetap Utuh
              </h2>

              <p className="text-base sm:text-lg text-[#525A54] leading-relaxed">
                EcoSys lahir dari keresahan terhadap jutaan ton limbah tekstil yang berakhir di tempat pembuangan akhir setiap tahunnya. Kami percaya bahwa tampil keren dan rapi tidak seharusnya mengorbankan ekosistem bumi. Melalui pemanfaatan kapas organik bebas pestisida serta pengolahan kembali perca tekstil menjadi benang baru berkualitas tinggi, kami menghadirkan pakaian yang sejuk di kulit dan ramah bagi lingkungan.
              </p>

              <p className="text-sm text-[#525A54] leading-relaxed">
                Setiap pembelian produk EcoSys turut mendanai program penanaman kembali hutan bakau pesisir di Indonesia serta mendukung kesejahteraan komunitas penenun lokal. Mari melangkah bersama menuju lemari pakaian yang lebih sadar, fungsional, dan bertanggung jawab.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FBFBF9] p-8 rounded-xl border border-black/[0.07] space-y-6">
                <h3 className="font-display text-2xl font-semibold text-[#1C211D]">
                  Laporan Dampak Berkelanjutan 2025–2026
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-black/[0.06] flex items-baseline justify-between gap-4">
                    <span className="text-xs text-[#525A54]">Limbah Tekstil Didaur Ulang</span>
                    <span className="font-display text-2xl font-semibold text-[#1C211D] tabular-nums">
                      14.800 kg
                    </span>
                  </div>
                  <div className="pb-4 border-b border-black/[0.06] flex items-baseline justify-between gap-4">
                    <span className="text-xs text-[#525A54]">Penghematan Air Bersih</span>
                    <span className="font-display text-2xl font-semibold text-[#1C211D] tabular-nums">
                      3,2 Juta Liter
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xs text-[#525A54]">Pengrajin Lokal Bermitra</span>
                    <span className="font-display text-2xl font-semibold text-[#1C211D] tabular-nums">
                      85 Keluarga
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Kontak (Sesuai Menu Navigasi "Kontak") */}
        <section id="kontak" className="py-20 px-6 lg:px-8 border-t border-black/[0.06]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <p className="text-xs font-medium text-[#3A5A40]">Hubungi Kami</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C211D]">
                Mari Berdiskusi Tentang Gaya Berkelanjutan
              </h2>
              <p className="text-sm text-[#525A54]">
                Punya pertanyaan mengenai panduan ukuran, perawatan kain organik, atau pemesanan korporat ramah lingkungan? Tim kami siap membantu.
              </p>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="bg-[#F3F1EC] p-8 rounded-xl border border-black/[0.07] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#1C211D] mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Contoh: Nadia Pratama"
                    className="w-full px-4 py-2.5 text-sm bg-[#FBFBF9] border border-black/15 rounded-lg text-[#1C211D] placeholder:text-[#525A54]/60 focus:outline-none focus:border-[#3A5A40]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#1C211D] mb-2"
                  >
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-[#FBFBF9] border border-black/15 rounded-lg text-[#1C211D] placeholder:text-[#525A54]/60 focus:outline-none focus:border-[#3A5A40]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#1C211D] mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  className="w-full px-4 py-2.5 text-sm bg-[#FBFBF9] border border-black/15 rounded-lg text-[#1C211D] placeholder:text-[#525A54]/60 focus:outline-none focus:border-[#3A5A40]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#525A54]">
                  Studio EcoSys · Jl. Kemang Timur No. 42, Jakarta Selatan
                </p>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#3A5A40] hover:bg-[#2F4A34] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Kirim Pesan
                </button>
              </div>

              {contactSubmitted && (
                <div className="p-4 rounded-lg bg-[#3A5A40]/10 border border-[#3A5A40]/30 flex items-center justify-between text-xs text-[#1C211D]">
                  <span>
                    Terima kasih! Pesan Anda telah diterima oleh tim EcoSys dan akan kami balas dalam 1x24 jam.
                  </span>
                  <button
                    type="button"
                    onClick={() => setContactSubmitted(false)}
                    className="text-[#3A5A40] font-semibold ml-4 cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-black/[0.08] bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="font-display text-xl font-semibold text-[#1C211D]">EcoSys</span>
            <p className="text-xs text-[#525A54]">© 2026 EcoSys. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#525A54]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1C211D] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1C211D] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1C211D] transition-colors"
            >
              Pinterest
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1C211D] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Detail Bahan Produk */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FBFBF9] border border-black/10 rounded-xl max-w-lg w-full overflow-hidden shadow-xl">
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#3A5A40] font-medium">
                    {selectedProductModal.category}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-[#1C211D]">
                    {selectedProductModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="p-1.5 text-[#525A54] hover:text-[#1C211D] rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-[#525A54] leading-relaxed">
                {selectedProductModal.description}
              </p>

              <div className="p-4 rounded-lg bg-[#F3F1EC] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#525A54]">Komposisi Serat:</span>
                  <span className="font-medium text-[#1C211D]">
                    {selectedProductModal.material}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#525A54]">Dampak Lingkungan:</span>
                  <span className="font-medium text-[#3A5A40]">
                    {selectedProductModal.impactMetric}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#525A54]">Petunjuk Perawatan:</span>
                  <span className="font-medium text-[#1C211D]">
                    Cuci air dingin (30°C), jemur teduh
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-[#1C211D] tabular-nums">
                  {formatIDR(selectedProductModal.price)}
                </span>
                <button
                  onClick={() => {
                    handleAddToCart(selectedProductModal);
                    setSelectedProductModal(null);
                    setCartOpen(true);
                  }}
                  className="px-5 py-2.5 bg-[#3A5A40] hover:bg-[#2F4A34] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Tambah ke Tas Belanja
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-Over Shopping Bag Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="bg-[#FBFBF9] w-full max-w-md h-full flex flex-col justify-between border-l border-black/10 shadow-2xl">
            <div className="p-6 border-b border-black/[0.08] flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#1C211D]">
                  Tas Belanja Anda
                </h3>
                <p className="text-xs text-[#525A54]">
                  Pengiriman bebas plastik dengan kemasan kertas singkong biodegradable
                </p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-[#525A54] hover:text-[#1C211D] rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {orderSuccess ? (
                <div className="p-6 rounded-xl bg-[#F3F1EC] border border-[#3A5A40]/30 text-center space-y-3 my-8">
                  <div className="w-10 h-10 rounded-full bg-[#3A5A40] text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-[#1C211D]">
                    Pesanan #ECO-2026 Diterima
                  </h4>
                  <p className="text-xs text-[#525A54] leading-relaxed">
                    Terima kasih telah memilih pakaian berkelanjutan. Ringkasan pesanan telah disiapkan untuk pengiriman bebas plastik.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <p className="text-sm text-[#525A54]">Tas belanja Anda masih kosong.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#3A5A40] border border-[#3A5A40] rounded-lg hover:bg-[#3A5A40] hover:text-white transition-colors cursor-pointer"
                  >
                    Lihat Koleksi Unggulan
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 p-4 rounded-xl bg-[#F3F1EC] border border-black/[0.06]"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-20 object-cover rounded-lg bg-[#FBFBF9]"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#1C211D]">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, -item.quantity)
                            }
                            aria-label="Hapus item"
                            className="text-[#525A54] hover:text-red-700 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#525A54]">Ukuran: {item.size}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 bg-[#FBFBF9] px-2 py-1 rounded-md border border-black/10">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, -1)}
                            className="text-[#525A54] hover:text-[#1C211D] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium tabular-nums px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, 1)}
                            className="text-[#525A54] hover:text-[#1C211D] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-[#1C211D] tabular-nums">
                          {formatIDR(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && !orderSuccess && (
              <div className="p-6 border-t border-black/[0.08] bg-[#F3F1EC] space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#525A54]">Subtotal ({totalItems} produk)</span>
                  <span className="text-base font-semibold text-[#1C211D] tabular-nums">
                    {formatIDR(subtotal)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-[#3A5A40] hover:bg-[#2F4A34] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Konfirmasi Pesanan Ramah Lingkungan
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Kode HTML Tunggal (Single-File HTML + Tailwind CDN) */}
      {codeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FBFBF9] border border-black/15 rounded-xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-black/[0.08] flex flex-wrap items-center justify-between gap-4 bg-[#F3F1EC]">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#1C211D]">
                  Kode Lengkap Single-File HTML (index.html)
                </h3>
                <p className="text-xs text-[#525A54]">
                  Sudah mencakup Tailwind CSS via CDN, Google Fonts, dan JavaScript interaktif dalam 1 file.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySingleHTML}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#3A5A40] hover:bg-[#2F4A34] text-white rounded-lg transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadSingleHTML}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#1C211D] hover:bg-black text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh .html</span>
                </button>

                <button
                  onClick={() => setCodeModalOpen(false)}
                  className="p-2 text-[#525A54] hover:text-[#1C211D] rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 bg-[#161917] text-[#E6E8E6] font-mono text-xs leading-relaxed">
              <pre className="whitespace-pre-wrap break-words">{SINGLE_FILE_HTML_CODE}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

