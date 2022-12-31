// empty object 

let obj ={}
console.log(obj);

// object 

let objAman = {
    Name : "Navazish Hussain",
    lastName : "Qazi",
    phoneNo : 8963966740,
    Age : 22
};
console.log(objAman);

let capIndore = {
    Name : 'Navazish',
    Age : 9999,
    Friends :['Natasha','Thor','Tony','Salman','Shahrukh'],
    address : {
        city :"Queens",
        state :"Haryana",
    },
    sayHi : function(){
        console.log("cap Indore says hiiiii");
    }
}
// whole object 

// console.log(capIndore); 

// name of capIndore
console.log(capIndore.Name);

// age of capIndore 
console.log(capIndore.Age);

// Friend of capIndore 
console.log(capIndore.Friends);
console.log(capIndore.Friends[0]);

// address Object
console.log(capIndore.address);
console.log(capIndore.address.city);

// call function Sayhii 
capIndore.sayHi();

console.log("object before update : ",capIndore);

// add a new key to object 
capIndore.movies = ['Avengers','Civil War','Endgame'];
console.log("object after update : ",capIndore);

// delete a key 
delete capIndore.movies;
console.log(capIndore);

// update a key 
capIndore.address.state = 'New york'
console.log(capIndore);

// second method to access a key 

console.log(capIndore.Name);
console.log(capIndore['Name']);