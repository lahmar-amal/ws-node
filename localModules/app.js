const localModules = require(".");
// input : process.argv
// process.argv => [ node,node ,2 ]
// 2 : process.argv[2]
const a = process.argv[2];
const b = process.argv[3];
console.log(parseInt(a, 2));
const res = localModules.sum(parseInt(a, 10), parseInt(b, 10));
console.log(res);
const resMinus = localModules.minus(7, 5);
console.log(resMinus);
