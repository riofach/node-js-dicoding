/* bila Anda menggunakannya untuk mengakses berkas yang besar, proses tersebut akan membutuhkan waktu lama dan memori yang besar 
untuk mendapatkan hasilnya. Hal ini sungguh tidak efektif! 
Teknik stream merupakan salah satu konsep fundamental yang mendukung aplikasi Node.js bekerja. Teknik ini dapat menangani 
kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apa pun agar dapat berjalan dengan lebih efisien.*/

// Kita dapat membuat readable stream dengan menggunakan method createReadStream() dari core module fs.
const fs = require("fs");

const readableStream = fs.createReadStream("./stream/article.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

/* Fungsi createReadStream() menerima dua argumen, yang pertama adalah lokasi berkas yang hendak dibaca dan yang kedua adalah objek konfigurasi. 
Di dalam objek konfigurasi, kita bisa menetapkan ukuran buffer melalui properti highWaterMark. Nilai default dari properti ini adalah 16384 bytes (16kb). 
Anda tidak perlu menetapkan properti ini bila ingin tetap memiliki nilai default. Namun, karena kita hanya menggunakan berkas teks yang ukurannya sangat kecil, 
maka kita buat ukuran buffer menjadi 10 bytes. Itu artinya, berkas akan dibaca setiap 10 karakter (1 karakter = 1 bytes). createReadStream() mengembalikan EventEmitter 
di mana kita dapat menetapkan fungsi listener setiap kali event readable dibangkitkan. Event readable akan dibangkitkan ketika buffer sudah memiliki ukuran sesuai dengan nilai 
yang ditetapkan pada properti highWaterMark, dalam artian buffer sudah siap dibaca. Kemudian, event end akan dibangkitkan setelah proses stream selesai.*/

// bila kode dijalankan akan seperti ini
// jalankan node ./stream/readableStream.js
