function sayhello()
{
    console.log("hello Function")
}
sayhello();

// function with parameter
function sum(num1,num2)
{
    let add= num1+num2;
    console.log("sum of two no. is "+add)
}
sum(3,4);

// function with return type
function multiply(num1,num2)
{
    return num1*num2;
}
 let ans=multiply(5,6);
 console.log("Answere is "+ans);

//  function are the first class citizen in js 
let a = function sub(num1,num2)
{
    return num1-num2;
}
console.log(a(10,5));

// iife :-Immediately Invoked function Expression 
(function()
{
    console.log("hello IIFE");
})();

// IIFE with parameter 
(function(num1,num2){
    console.log(num1/num2);
})(10,5);

// Arrays 
