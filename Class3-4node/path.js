// "C:\Users\Navazish qazi\OneDrive\Desktop\DEV FULL STAKE\Devj\Class3-4node\path.js"

let path = require("path");
// console.log(path);


let extensionname =path.extname("C:\Users\Navazish qazi\OneDrive\Desktop\DEV FULL STAKE\Devj\Class3-4node\path.js");
console.log(extensionname);

let baseName = path.basename("C:\Users\Navazish qazi\OneDrive\Desktop\DEV FULL STAKE\Devj\Class3-4node\path.js");
console.log(baseName);

// path to folder (directory)
console.log(__dirname);

// path to file 
console.log(__filename);

let basename = path.basename(__filename);
console.log(basename);

let dirpath = __dirname;
console.log(dirpath);

let newFilePath = path.join(dirpath,"abc.js");
console.log(newFilePath);