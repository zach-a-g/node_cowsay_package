// 1) Install the cowsay package and call cowsay.say().

// In terminal: $ npm install cowsay ... then ->

const cowsay = require(`cowsay`);

console.log(cowsay.say({ text: "I'm a MOOOOOdule" }));