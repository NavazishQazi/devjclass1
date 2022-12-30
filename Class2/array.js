//empty array

let arr =[];
console.log(arr);

// array with elements

let elearr = [1,2,3,4,"Hello string ",false,6.7,'c']
console.log(elearr);

console.log("element at 4th index: "+ elearr[4]);
console.log("element at 0th index: "+ elearr[0]);

// change in Array 

elearr[3] ="Nothing";
console.log(elearr);

console.log("----------------------------");

// Array method 

// 1. push

console.log("Array before push :",elearr);
elearr.push("new item");
console.log("Array after push :",elearr);

//2. pop

console.log("Array before pop :",elearr);
elearr.pop();
console.log("Array after pop :",elearr);

//3. shift

console.log("Array before shift :",elearr);
elearr.shift();
console.log("Array after shift: ",elearr);

//4. unshift

console.log("Array before unshift :",elearr);
elearr.unshift("newly added item");
console.log("Array after unshift: ",elearr);

//5 length

let length = elearr.length;
console.log(length);
