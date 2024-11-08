// Modularization
/* Pada Node.js, setiap berkas JavaScript adalah module. Anda bisa membagikan nilai variabel, objek, class, 
atau apa pun antar module. Untuk melakukannya, Anda perlu mengekspor nilai pada module tersebut. */

const coffee = {
  name: "Tubruk",
  price: 15000,
};

module.exports = coffee;
