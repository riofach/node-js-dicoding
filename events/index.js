// TODO 1
const { EventEmitter } = require("events");

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};
myEmitter.on("birthday", birthdayEventListener);
// TODO 4
myEmitter.emit("birthday", { name: "Dimas" });
// Jaklankan node ./events/index.js
