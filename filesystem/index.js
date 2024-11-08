// TODO: tampilkan teks pada notes.txt pada console.

const fs = require("fs");
const { resolve } = require("path");
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("error membaca berkas");
    return;
  }
  console.log(data);
};
// Tips: Anda bisa gunakan method dari core modules path dalam menetapkan alamat berkas secara lengkap dan dinamis, seperti berikut:
fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);

// jalankan node ./filesystem/index.js
