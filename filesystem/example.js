/* Ketahuilah bahwa seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika kita menjalankan kode JavaScript pada browser, 
sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. 
Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module fs tersedia dalam dua versi, 
yakni versi asynchronous (default) dan versi synchronous. */

/* Untuk mengakses berkas pada komputer, kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback 
function yang akan terpanggil bila berkas berhasil/gagal diakses. */

const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "UTF-8", fileReadCallback);

// Sebagai alternatif, Anda juga bisa gunakan method versi synchronous fs.readFileSync().
// const fs = require("fs");

const data = fs.readFileSync("todo.txt", "UTF-8");
console.log(data);
