// konsep.js — Draf konsep produk KostBudget (sesuaikan detail commit/tag & persona dengan repo kamu)
const KONSEP = {
  nama: 'KostBudget',
  tagline: 'Catat pengeluaran harian anak kos dengan cepat agar uang bulanan tetap aman.',
  persona: {
    nama: 'Raka, 19 tahun',
    siapa: 'Mahasiswa perantauan semester awal yang tinggal di kos dan mengatur uang saku bulanan sendiri.',
    keseharian: 'Kuliah pada pagi hingga sore hari, makan di warung atau memasak sederhana di kos, dan membeli kebutuhan harian.',
    masalah: 'Uang bulanan sering cepat menipis sebelum akhir bulan karena pengeluaran kecil harian lupa tercatat.',
  },
  masalah:
    'Mahasiswa kos sering kesulitan mengontrol pengeluaran harian karena catatan belanja mudah lupa dibuat atau tercecer. Akibatnya, sisa anggaran bulanan baru disadari saat saldo sudah menipis. Kondisi ini membuat perencanaan belanja kebutuhan pokok menjadi terganggu.',
  solusi:
    'KostBudget menyediakan pencatatan pengeluaran harian yang ringkas dan terkelompok agar pengguna cepat melihat sisa anggaran. Antarmukanya dirancang ringan sehingga mudah dibuka dan diperbarui kapan saja dari browser. Dengan begitu, mahasiswa kos dapat mengendalikan pengeluaran sejak awal bulan.',
  fitur: [
    {
      nama: 'Tambah dan hapus catatan pengeluaran harian',
      prioritas: 'wajib',
      alasan: 'Menjawab inti masalah lupa mencatat belanja harian (sudah ada di repo — sesuaikan tag/commit).',
    },
    {
      nama: 'Ringkasan total pengeluaran dan sisa anggaran',
      prioritas: 'wajib',
      alasan: 'Membantu pengguna langsung tahu kondisi uang bulanan tanpa hitung manual (sudah ada di repo — sesuaikan tag/commit).',
    },
    {
      nama: 'Pengelompokan kategori pengeluaran kos',
      prioritas: 'wajib',
      alasan: 'Memudahkan melihat pos pengeluaran mana yang paling banyak menyedot dana (sudah ada di repo — sesuaikan tag/commit).',
    },
    {
      nama: 'Filter atau pencarian riwayat transaksi',
      prioritas: 'sebaiknya',
      alasan: 'Membantu menelusuri pengeluaran tertentu saat jumlah catatan makin banyak.',
    },
    {
      nama: 'Pengingat harian otomatis dan sinkronisasi multi-perangkat',
      prioritas: 'belum',
      alasan: 'Memerlukan layanan notifikasi dan backend database; belum dibutuhkan untuk memvalidasi nilai utama.',
    },
  ],
  pembanding: [
    {
      nama: 'Catatan manual di aplikasi catatan / kertas',
      kelebihan: 'Gratis, fleksibel, dan langsung bisa ditulis kapan saja.',
      kekurangan: 'Total pengeluaran dan sisa saldo harus dihitung sendiri serta rawan tercecer.',
    },
    {
      nama: 'Spreadsheet (Excel / Google Sheets)',
      kelebihan: 'Bisa membuat rumus otomatis dan rekap tabel yang rapi.',
      kekurangan: 'Kurang praktis diisi cepat di layar kecil saat sedang bertransaksi harian.',
    },
  ],
  pembeda:
    'Fokus khusus pada alur catat pengeluaran harian anak kos yang ringan dan langsung menampilkan ringkasan anggaran tanpa setup rumus yang rumit.',
};