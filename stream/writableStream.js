// bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream.
// Untuk membuat writable stream dalam menulis berkas, gunakanlah method createWriteStream() dari core module fs.
const fs = require("fs");

const writableStream = fs.createWriteStream("./stream/output.txt"); //path menyimpan file output
/* Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. Berkas output akan dibuat secara otomatis jika tidak ada. 
Namun, bila berkas tersebut sudah ada, data sebelumnya akan tertimpa! Anda harus hati-hati ya! */
writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");
// Method end() digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writable terakhir.
// jalankan node ./stream/writableStream.js
