/* Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian.
program komputer juga harus bekerja dengan pola event-driven. Syukurlah dengan Node.js kita dapat menerapkan pola tersebut dengan mudah. */
// Node.js menyediakan EventEmitter class yang merupakan member dari events core module.
const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// Setiap instance dari EventEmitter akan memiliki fungsi on. Pada fungsi tersebut, kita dapat menentukan aksi berdasarkan sebuah kejadian.
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on("coffee-order", makeCoffee);
myEventEmitter.on("coffee-order", makeBill);
/* dua buah argumen, yang pertama adalah nama event dan yang kedua adalah listener atau fungsi yang akan dieksekusi ketika event terjadi. */

// Anda juga bisa membuat satu fungsi khusus untuk menangani event. Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaannya.
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};
myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// Setiap instance dari EventEmitter juga memiliki fungsi emit() yang berguna untuk membangkitkan event.
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

/* Fungsi emit() menerima nilai argumen sebanyak apa pun yang Anda mau. Namun, nilai yang pertama merupakan nama dari event yang akan dibangkitkan, 
sedangkan argumen kedua dan seterusnya adalah nilai yang akan digunakan untuk menjadi dari parameter fungsi listener. */
/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */
