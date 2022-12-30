// syntex 
function nameoffunction(){
    console.log("Body of function");
}
nameoffunction(); //function call


// function with parameter 

function sum(num1,num2){
    let addition = num1 + num2;
    console.log("addition of given number: " +addition);
}
sum(3,5);

// function with return type 

function multiply(num1,num2){
    return num1*num2;
}
let ans =multiply(5,6);
console.log("multiple of given no. : "+ans);


// function store in variable 

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(9,4));

// IIfE  -> immediately invoked function expression 

(function(){
    console.log("hello from IIFE");
})();

// IIFE with parameter 

(function(num1,num2){
    console.log(num1/num2);
})(10,5);