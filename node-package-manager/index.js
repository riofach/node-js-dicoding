const _ = require("lodash"); // TODO

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
/* install package lodash dahulu : https://lodash.com/ */
// jalankan node ./node-package-manager/index.js
