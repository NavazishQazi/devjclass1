const fs = require("fs");


console.log("Before...");

fs.readFile("file.txt",cb);   //readFileSync is syncronious and readFile is assyncronious.
// we use readFile because if the file take to much time to run then readFile function run the next code and when the file is ready to run it do callback the function.

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}

console.log("After");


