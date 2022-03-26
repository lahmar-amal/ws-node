const fs = require("fs");
// Sync Part
//step1
// console.log("part 1");
// // step2
// const data = fs.readFileSync("file.txt");
// console.log("part2", data);
// // step3
// console.log("part3");

//Async

console.log("part 1");
// template literals : "hello" + " world" => hello world =>const name = "soumaya" `hello ${name} `
// ternary operator : if(a) {b} else {c} => a ? b : c (ES6)
// if(){ } without else | a? b :(important) c
fs.readFile("file.txt", (err, data) =>
    err ? console.log("err", err) : console.log("part2", data.toString())
);

console.log("part3");
