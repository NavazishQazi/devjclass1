// make a folder inside same directory of this file and in that folder make a text file with content 
// new file has been made 

let fs = require("fs")
let path = require("path")

if(!fs.existsSync("NewFolder")){
    fs.mkdirSync("NewFolder");
// 
}
let filePath = path.join(__dirname,"NewFolder","answer.txt");
console.log(filePath);

fs.writeFileSync(filePath,"New file has been made");
