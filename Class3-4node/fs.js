let fs = require("fs");
// console.log(fs); 

let path = require("path");

let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);

//it creates file if it does not exists else it override
// C-CREATE 
fs.writeFileSync(filePath,"Hello I am a text file");

// R-READ 
let content = fs.readFileSync(filePath,"utf-8");
console.log(content);

// U-update 
fs.appendFileSync(filePath,"\n Newly added content");
console.log("After update : ")
console.log(fs.readFileSync(filePath,"utf-8"));

// D-delete 
fs.unlinkSync(filePath);


// Create a directory 

if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");

//  Read a directory 

let folderPath = __dirname;
let contentoffolder =fs.readdirSync(folderPath);
console.log(contentoffolder);

// delete a empty directory 
// fs.rmdirSync("hamariDirectory");

// delete a non-empty directory 
// fs.rmdirSync("hamariDirectory",{recursive : true});

// copy a file from one file to another

let sourcePath = path.join(__dirname,"os.js")
let destinationPath =path.join(__dirname,"module","os.js") 
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);