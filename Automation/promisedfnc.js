function promisifiedfunc(){
    return new Promise(function(resolve,reject){
        let a=1;
        let b=2;
        if(a==b){
            resolve("Equal");
        }else{
            reject("Unequal");
        }
    })
}

let somePromise = promisifiedfunc();
somePromise.then(function(x){
    console.log(x);
})
somePromise.catch(function(err){
    console.log(err);
})