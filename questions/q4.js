// read content of unorganised folder and make an array which has extension name of each file


let fs = require("fs")
let path = require("path")

let folderKaPath = path.join(__dirname,"organised","audio");
let content = fs.readdirSync(folderKaPath)

let extArr=[];
for(let i=0;i<content.length;i++){
    let name = content[i];
    let extname = path.extname(name);
    extArr.push(extname);
}
console.log(extArr);