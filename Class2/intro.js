// printing in js
console.log("hiii welcome to javascript");

// variable in js and data type 

let num =10 //number
console.log(num);

let char = 'a'; // character
console.log(char);

let str = 'i am string';//string
console.log(str);

let bool = true;//boolean
console.log(bool);

// loops 

for(let i=0; i<5;i++)
{
    console.log(i);  
}

let count = 5;
while(count>0){
    console.log(count);
    count--;
}

//prime no. code in js

let a = 20;
let flag = 0;
for (i=2;i<a;i++)
{
    if(a%2==0)
    {
        flag=flag+1;
    }
}
if(flag ==0)
{
   console.log("no. is prime") 
}
else 
{
    console.log("no. is not prime")
}