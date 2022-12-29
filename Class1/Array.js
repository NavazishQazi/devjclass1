// empty array 
let arr =[]
console.log(arr);

// array with element 
let eleArr=[1,2,3,4,"hello i am string",false,'c',4.5]
console.log(eleArr);

console.log("Element at 3rd position is : "+[3]);
console.log("Element at 5rd position is : "+[5]);
eleArr[3]="error";
console.log(eleArr);

console.log("**********########");

// Array method 
//1. push 
console.log("Array before push : "+eleArr);
eleArr.push("I am Push");
console.log("Array after push : "+eleArr);
 
//2. pop 
console.log("Array before push : "+eleArr);
eleArr.pop();
console.log("Array after push : "+eleArr);

//3. shift remove from starting
console.log("Array before shift : "+eleArr);
eleArr.shift();
console.log("Array after shift : "+eleArr);

// 4. unshift add item from starting
console.log("Array before unshift : "+eleArr);
eleArr.unshift("I am unshift item");
console.log("Array after unshift : "+eleArr);

//5. length
let len= eleArr.length;
console.log(len);


