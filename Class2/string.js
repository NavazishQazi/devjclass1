let str = "i am a string";
console.log(str);

//length of string

let len = str.length;
console.log(len);

//sliced method -> extract part of a string

let slicedArr = str.slice(2,9);
console.log(slicedArr);

// replace method -> replace a part with given word  
let replacedStr = str.replace("am","was");
console.log(replacedStr);

//upper case

let upperCase = str.toUpperCase();
console.log(upperCase);

//lower case

let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate 

let firstName = "Navazish Hussain";
let lastName = " Qazi";

let fullName = firstName.concat(lastName);
console.log(fullName);

// split -> return arr 

let splitted = str.split(" ");
console.log(splitted)
