// move a file 

let fs = require("fs")
let path = require("path")

let from = path.join(__dirname,'mover.js')
let to = path.join(__dirname,'NewFolder','mover.js')

console.log(from);
console.log(to);

fs.renameSync(from,to);
