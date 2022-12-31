// Node - > simple run time enviroment
// Child Process 


let cp = require('child_process');
// console.log(cp);

// open calculator with the help of this file 

// cp.execSync("calc");
// cp.execSync('code');

let output = cp.execSync("node abc.js");
console.log("let's run abc file : " +output);