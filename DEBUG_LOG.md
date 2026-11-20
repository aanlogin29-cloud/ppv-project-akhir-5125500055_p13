# Debug Log — Proyek Akhir (Sprint 2: KostBudget)
Nama: Anisa Tsabita
NRP: 5125500055

## Bug 01: Nilai Saldo Meledak Menjadi Angka Triliunan (Overflow Nilai)
- **Langkah Reproduksi:** 
  1. Buka aplikasi KostBudget pada peramban.
  2. Masukkan angka nominal transaksi atau saldo dengan cepat tanpa konversi tipe data yang jelas.
  3. Amati tampilan pada "Status Dompet"; angka saldo berubah menjadi deretan angka triliunan/milyaran yang sangat panjang hingga merusak tata letak kartu.
- **Hipotesis:** 
  - *Hipotesis 1 (Gugur):* Kesalahan dari CSS card yang kurang lebar. (Ternyata setelah diperiksa, lebar kontainer sudah responsif, tetapi nilai datanya memang berupa string yang menumpuk).
  - *Hipotesis 2 (Terbukti):* Nilai input numerik diperlakukan sebagai string (tipe teks) sehingga saat dioperasikan, angka-angka tersebut digabungkan secara *concatenation* (saling menempel ke samping) alih-alih dijumlahkan secara matematis.
- **Bukti dari DevTools:** 
  - Melalui tab *Console* dan *Elements*, nilai properti DOM menunjukkan gabungan teks input string mentah tanpa fungsi `Number()`.
- **Perbaikan (Berkas:Baris):** 
  - Berkas `js/wallet.js:52` — Membungkus variabel input nominal dengan fungsi `Number()` sebelum melakukan perhitungan aritmatika saldo.
- **Uji Ulang:** 
  - Setelah diperbaiki, nominal saldo kembali normal dan akurat sesuai angka yang dimasukkan tanpa merusak tampilan kartu.

## Bug 02: Teks Keterangan Panjang Keluar dari Wadah (Layout Overflow)
- **Langkah Reproduksi:** 
  1. Buat transaksi baru dengan mengisi kolom keterangan menggunakan rentetan teks atau huruf acak yang sangat panjang tanpa spasi.
  2. Lihat bagian "Semua Riwayat Pengeluaran".
  3. Amati teks keterangan yang meluber keluar dari batas kotak kartu dan menimpa elemen di bawahnya.
- **Hipotesis:** 
  - *Hipotesis 1 (Terbukti):* Elemen HTML kontainer riwayat tidak memiliki properti pemecah kata otomatis CSS, sehingga string teks panjang memaksa elemen melebar keluar batas blok.
- **Bukti dari DevTools:** 
  - Memeriksa elemen menggunakan tab *Elements*, terlihat teks panjang tidak memiliki batas pembungkus, membuat lebar elemen mengikuti panjang string teks.
- **Perbaikan (Berkas:Baris):** 
  - Berkas `css/style.css:115` — Menambahkan properti CSS `overflow-wrap: break-word;` dan `word-break: break-word;` pada elemen penampil teks riwayat.
- **Uji Ulang:** 
  - Teks keterangan yang sangat panjang kini otomatis turun ke baris berikutnya di dalam wadah kotak tanpa merusak tampilan antarmuka.