// copy CSS.html file from class1git to new folder inside class2 having name html. 


let fs = require("fs")
let path = require("path")

let from = path.join(__dirname,"..",'Class1git','css.html');
let to = path.join(__dirname,'..','Class2','css.html');

console.log(from);
console.log(to);

fs.copyFileSync(from,to);